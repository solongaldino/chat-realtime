import { env } from "process";

class EnvVariables {
  getServerPort() {
    const envVariable = env.APP_SERVER_PORT;
    if (!envVariable)
      throw new Error("Env variable APP_SERVER_PORT not found.");
    return envVariable;
  }

  getUrlAppFrontEnd() {
    const envVariable = env.BASE_URL_FRONT_END;
    if (!envVariable)
      throw new Error("Env variable BASE_URL_FRONT_END not found.");
    return envVariable;
  }
}

export default new EnvVariables();
