export const loggerMiddleware = (req, res, next) => {
  console.log("This is from the logger middleware");
  //   return res.status(403).json({ msg: "Acess Forbidden" });

  return next();
};
