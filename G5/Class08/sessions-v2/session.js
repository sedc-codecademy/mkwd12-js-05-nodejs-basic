import session from "express-session";

const authSession = session({
  secret: "auth_secret",
  name: "auth_session_name",
  cookie: {
    maxAge: 5 * 60 * 60 * 1000, //5hrs in miliseconds.
    // maxAge: 10000, // 10 seconds, when expired the session is removed
  },
  saveUninitialized: true,
  resave: true,
});

export default authSession;
