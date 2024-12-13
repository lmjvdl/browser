const IS_IN_DEVELOPMENT = true;

const local  ='http://192.168.73.87:8000/'

export default class Url {
  protected readonly origin: string;

  protected constructor() {
    this.origin = IS_IN_DEVELOPMENT
      ? local
      : new URL(window.location.href).origin;
  }

  protected baseUrlPath = "";
}
