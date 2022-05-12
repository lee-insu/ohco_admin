import fs from "fs";
import { resolve } from "path";

const basePath = resolve();
const filenames = {
  books: resolve(basePath, "src/db/books.json"),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
  } catch (err) {
    console.error(err);
  }
};
