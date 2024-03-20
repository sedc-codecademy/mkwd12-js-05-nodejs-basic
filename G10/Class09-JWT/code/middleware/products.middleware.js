const canDeleteOrUpdateProduct = (req, res, next) => {
  // Extract user role from the request object
  const userRole = req.user && req.user.role;

  // Check if the user is an admin
  if (userRole === "admin") {
    // User is admin, proceed with the next middleware or route handler
    next();
  } else {
    // User is not authorized to delete or update product, send 403 Forbidden
    res.status(403).send({
      message: "Unauthorized. Only admin users can delete or update products.",
    });
  }
};

export default canDeleteOrUpdateProduct;
