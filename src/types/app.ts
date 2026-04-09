import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
import UnProcessEntityExceptions from "../exceptions/unProcessEntityExceptions.js";

export type ValidationAction = "users:add"

export type Errors = UnProcessEntityExceptions | InternalServerExceptions;