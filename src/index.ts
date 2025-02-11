import {
  AbstractGrimpanFactory,
  ChromeGrimpanFactory,
  IEGrimpanFactory,
} from "./AbstractGrimpanFactory.js";

function main(factory: AbstractGrimpanFactory) {
  const grimpan = factory.createGrimpan();
  grimpan.initialize();
  grimpan.initializeMenu();
}

main(ChromeGrimpanFactory);
