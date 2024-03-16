import expressSession from "express-session";

/**
 *  When we crete a session:
 *      - It generetes a unique session id for us
 *      - Stores this session id for us in the session cookie
 *      - Creates an empty session object, req.session
 *
 * saveUninitialized => If it is set TRUE, means that during the lifetime of the request
 * we do not modify the req.session object, the req.session object will be saved on the session store/server side
 */

const authSession = expressSession({
  secret: "auth_secret",
  name: "me",
  cookie: {
    maxAge: 5 * 60 * 60 * 1000, // 5 hours
  },
  saveUninitialized: true,
  resave: true,
});

export default authSession;
