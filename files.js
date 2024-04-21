import path from "node:path";
import fs from "fs/promises";
import chalk from "chalk";
import { validateData } from "./helpers/validateData.js";
import { checkExtantion } from "./helpers/checkExtancion.js";

export async function createFile(fileName, content) {
  const file = {
    fileName,
    content,
  };
  const data = validateData(file);

  if (data.error) {
    console.log(
      chalk.red(`Please spacify ${data.error.details[0].path[0]} param!`)
    );
  }
  const checkers = checkExtantion(fileName);
  // console.log(checkers);
  if (checkers.isValid === false) {
    console.log(chalk.red(`EXTENSTION ${checkers.extention} is not support`));
  }
  const filePass = path.resolve("files", fileName);
  await fs.writeFile(filePass, content, "utf-8");
}
