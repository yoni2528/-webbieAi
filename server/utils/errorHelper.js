import CustomerError from "./errorHandler.js";

const errorHelper = (err, req, res, next) => {
  if (err.message === "jwt malformed") {
    next(
      new CustomerError(
        "Token Error",
        "Invalid or expired token. Please login again or contact support for assistance.",
        401
      )
    );
  }

  if (!err.code && !err._message) {
    return next(err);
  }
  if (err.code === 11000) {
    next(
      new CustomerError(
        "Duplicate Details",
        "It appears that the details you have entered already exist in our system. Please check your information and try again or login if you already have an account."
      )
    );
  }
  if (err._message === "User validation failed") {
    next(new CustomerError("Validation Error", err.message));
  }
};

export default errorHelper;
