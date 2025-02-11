import { ChromeGrimpanFactory } from "./AbstractGrimpanFactory.js";

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  grimpan.initialize();
  grimpan.initializeMenu();
}

main();
