const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {
    console.log(err);
    next(err);
  });
};

export default catchAsync;
