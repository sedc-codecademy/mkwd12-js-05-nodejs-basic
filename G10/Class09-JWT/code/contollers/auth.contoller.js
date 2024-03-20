import AuthModel from "../models/auth.model.js";
import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../services/jwt.service.js";

export default class AuthControler {
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      const registeredUser = await AuthModel.registerUser(userData);
      res.status(201).send(registeredUser);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  static async loginUser(req, res) {
    try {
      const credentials = req.body;

      const user = await AuthModel.loginUser(credentials);
      //Create and send token to client
      const accessToken = createAccessToken(user.id);
      //Create and send refresh token cookie to the client
      res.setHeader("Authorization", accessToken);

      const refreshToken = createRefreshToken(user.id);

      //Saving the refresh token in the database
      await AuthModel.saveRefreshToken(user.id, refreshToken);

      res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/api/refresh-token",
      });

      res.status(200).send({ user, accessToken, refreshToken });
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  }

  static async logoutUser(req, res) {
    try {
      const userId = req.params.id;
      const refreshToken = req.body.refreshToken;

      await AuthModel.deleteRefreshToken(userId, refreshToken);

      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async refreshAccessToken(req, res) {
    try {
      const refreshToken = req.body.refreshToken;
      //If token doesn't exist
      if (!refreshToken) {
        return res.sendStatus(403);
      }
      const { userId } = verifyRefreshToken(refreshToken);

      const foundUser = await AuthModel.getById(userId);

      if (!foundUser) {
        return res.sendStatus(403);
      }

      if (!foundUser.refreshTokens.some((token) => token === refreshToken)) {
        return res.sendStatus(403);
      }
      const accessToken = createAccessToken(foundUser.id);

      //1. Create a new refresh token
      const newRefreshToken = createRefreshToken(foundUser.id);

      //2. Delete old refresh token
      await AuthModel.deleteRefreshToken(foundUser.id, refreshToken);

      //3. Save new refresh token in db
      await AuthModel.saveRefreshToken(foundUser.id, newRefreshToken);

      //4. Send new refresh token to client
      res.status(200).send({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
      res.status(403).send(error);
    }
  }
}
