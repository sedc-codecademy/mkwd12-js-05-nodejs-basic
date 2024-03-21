import session from "express-session";

export const createSession = session({
  //The secret used to sign the cookie
  secret: "verysecretsecretsecret",
  name: "session_id",

  cookie: {
    httpOnly: true,
    maxAge: 5 * 60 * 60 * 1000,
    secure: false,
  },

  //   To save session without it changing
  saveUninitialized: true,
  // To force resave on session objects
  resave: false,
});
