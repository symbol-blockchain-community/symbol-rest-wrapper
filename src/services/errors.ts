export class InvalidValueError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InvalidValueError';
  }
}

export class NodeFetchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NodeFetchError';
  }
}
