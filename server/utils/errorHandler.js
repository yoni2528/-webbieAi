class CustomeError extends Error {
  constructor(title, message, status = 401) {
    super(message);
    this.message = message;
    this.title = title;
    this.status = status;
  }
}

export default CustomeError;
