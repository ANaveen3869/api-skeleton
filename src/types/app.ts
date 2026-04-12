import ConflictException from "../exceptions/conflictExceptions.js";
import InternalServerExceptions from "../exceptions/internalServerExceptions.js";
import NotFoundExceptions from "../exceptions/notFoundExceptions.js";
import UnProcessEntityExceptions from "../exceptions/unProcessEntityExceptions.js";

export type ValidationAction = "users:add"

export type Errors = UnProcessEntityExceptions | InternalServerExceptions | NotFoundExceptions | ConflictException;