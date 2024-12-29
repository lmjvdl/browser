import Url from "./baseurl";

class AllUrls extends Url {
  public constructor() {
    super();
    this.baseUrlPath += "/api";
  }

  public get login() {
    const apiPath = `${this.baseUrlPath}/auth/login`;
    return new URL(apiPath, this.origin);
  }

  public get register() {
    const apiPath = `${this.baseUrlPath}/auth/register`;
    return new URL(apiPath, this.origin);
  }

  public get search() {
    const apiPath = `${this.baseUrlPath}/search`
    return new URL(apiPath, this.origin)
  }

  public get suggestions() {
    const apiPath = `${this.baseUrlPath}/suggestions`
    return new URL(apiPath, this.origin)
  }
}

const allUrls = new AllUrls();

export default allUrls;
