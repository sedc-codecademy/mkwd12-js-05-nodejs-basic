import expressSession from "express-session";

const productSession = expressSession({
  secret: "product_secret",
  name: "product",
  cookie: {
    maxAge: 5 * 60 * 60 * 1000, // 5 hours
  },
  saveUninitialized: true,
  resave: true,
});
export default productSession;
