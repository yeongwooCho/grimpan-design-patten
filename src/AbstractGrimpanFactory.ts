import { ChromeGrimpan, IEGrimpan } from "./AbstractGrimpan";

/**
 * 그림판 팩토리 추상 클래스
 * 그림판 인스턴스를 생성하는 공장 클래스이며 createGrimpan 메서드를 반드시 구현해야 한다.
 * abstract static를 사용하지 못해 구현하지 않으면 예외를 발생하도록 구현했다.
 */
abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
}

class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return ChromeGrimpan.getInstance();
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan() {
    return IEGrimpan.getInstance();
  }
}

export { AbstractGrimpanFactory, ChromeGrimpanFactory, IEGrimpanFactory };
