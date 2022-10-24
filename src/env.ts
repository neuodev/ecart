enum Env {
  Dev = "development",
  Prod = "production",
  Test = "test",
}

export default class Environment {
  private env: Env;
  constructor() {
    const nodeEnv = process.env.NODE_ENV;
    let env = Env.Dev;
    if (nodeEnv === Env.Prod) env = Env.Prod;
    else if (nodeEnv === Env.Test) env = Env.Test;
    this.env = env;
  }

  public isDev = () => this.env === Env.Dev;
  public isProd = () => this.env === Env.Prod;
  public isTest = () => this.env === Env.Test;
}
