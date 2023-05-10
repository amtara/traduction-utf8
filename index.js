const fs = require("fs");
const jschardet = require("jschardet");
const iconv = require("iconv-lite");

const inputFile =
  "-/Desktop/files/breeder_DE_corrige.js";
const outputFile =
  "-/Desktop/files/breeder_DE_corrige.js";

const buffer = fs.readFileSync(inputFile);
const encoding =
  jschardet.detect(buffer).encoding;
const content = iconv.decode(buffer, encoding);

const correctedContent = content
  .replace(/Ã©/g, "é")
  .replace(/Ã¨/g, "è")
  .replace(/Ãª/g, "ê")
  .replace(/Ã /g, "à")
  .replace(/Ã§/g, "ç")
  .replace(/Ã´/g, "ô")
  .replace(/Ã®/g, "î")
  .replace(/Ã/g, "É")
  .replace(/Ã/g, "À")
  .replace(/Ã/g, "Â")
  .replace(/Ã/g, "Ê")
  .replace(/Ã/g, "Ç")
  .replace(/Ã/g, "Ô")
  .replace(/Ã\x8A/g, "È")
  .replace(/Ã¢/g, "â");

fs.writeFileSync(
  outputFile,
  correctedContent,
  "utf8"
);
