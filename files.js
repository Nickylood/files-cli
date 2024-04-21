import path from "node:path";
import fs from "fs/promises";
import chalk from "chalk";
import { validateData } from "./helpers/validateData.js";

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
}
