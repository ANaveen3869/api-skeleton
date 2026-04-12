import BaseExceptions from "./baseExceptions.js";
class NotFoundExceptions extends BaseExceptions {
    statusCode = 404;
    message;
    constructor(message) {
        super(404, message);
        this.message = message;
        this.statusCode = 404;
    }
}
export default NotFoundExceptions;
