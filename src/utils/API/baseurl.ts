const IS_IN_DEVELOPMENT = import.meta.env.DEV;

const local  ='http://127.0.0.1:8000'

export default class Url {
  protected readonly origin: string;

  protected constructor() {
    this.origin = IS_IN_DEVELOPMENT
      ? local
      : new URL(window.location.href).origin;
  }

  protected baseUrlPath = "factory";
}
