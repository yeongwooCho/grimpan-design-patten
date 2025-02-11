import { ChromeGrimpan, IEGrimpan } from "./Grimpan.js";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./GrimpanHistory.js";
import { Grimpan } from "./Grimpan.js";

/**
 * 그림판 팩토리 추상 클래스
 * 그림판 인스턴스를 생성하는 공장 클래스이며 createGrimpan 메서드를 반드시 구현해야 한다.
 * abstract static를 사용하지 못해 구현하지 않으면 예외를 발생하도록 구현했다.
 * abstract class patten 은 객체간의 세트가 존재할 때 사용한다.
 */
export abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanMenu(grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanHistory(grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: ChromeGrimpan) {
    return ChromeGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(grimpan: ChromeGrimpan) {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: IEGrimpan) {
    return IEGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(grimpan: ChromeGrimpan) {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
