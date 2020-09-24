import { Logger } from "./logger";

const logger = new Logger("StarterLogger");
class HelloStarter {
  private msg: string;

  constructor(message: string) {
    logger.info(`constructor:`);
    this.msg = message;
  }

  get message(): string {
    logger.info(`starter: getter`);
    return this.msg;
  }

  set message(message: string) {
    logger.info(`starter: setter`);
    this.msg = message;
  }
}

const helloStarter = (input: number | string) => {
  if (typeof input === "number") {
    return Math.pow(input, input).toString().padStart(5, "0");
  }

  return input.concat("-starter");
};

const hello = new HelloStarter("Init message");
const myAwesomeNumber = helloStarter(5);
const myAwesomeText = helloStarter("Billy");

logger.error(hello.message, "ErrorLogger");
hello.message = "hello";
logger.warn(hello.message, "WarnLogger");

logger.log(myAwesomeNumber);
logger.log(myAwesomeText);
