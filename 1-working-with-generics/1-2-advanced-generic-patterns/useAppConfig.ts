import { AppConfig } from "./AppConfig";

function getConfigValue<Type, Key extends keyof Type>(config: Type, key: Key) {
  return config[key];
}

// Example usage:
const appConfig: AppConfig = {
  debug: true,
  logLevel: 'info',
  port: 3000
};

const debugStatus = getConfigValue(appConfig, 'debug');
const appPort = getConfigValue(appConfig, 'port');