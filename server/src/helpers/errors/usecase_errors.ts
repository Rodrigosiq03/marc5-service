import { BaseError } from "./base_error";

export class NoItemsFound extends BaseError {
  constructor(message: string) {
    super(`Nenhum item foi encontrado para ${message}`);
  }
}

export class DuplicatedItem extends BaseError {
  constructor(message: string) {
    super(`Item já existente para ${message}`);
  }
}

export class UserAlreadyExists extends BaseError {
  constructor() {
    super('Este usuário já está cadastrado');
  }
}

export class ForbiddenAction extends BaseError {
  constructor(message: string) {
    super(`Essa ação não é permitida para esse ${message}`);
  }
}

export class ConflictItems extends BaseError {
  constructor(message: string) {
    super(`Conflict items for ${message}`);
  }
}

export class FailToSendEmail extends BaseError {
  constructor(message: string) {
    super(`Falha ao enviar o email ${message}`);
  }
}

export class FailToCreateMultipartUpload extends BaseError {
  constructor(message: string) {
    super(`Falha ao iniciar o upload ${message}`);
  }
}

export class UserNotRegistered extends BaseError {
  constructor() {
    super('Usuário não cadastrado ainda');
  }
}