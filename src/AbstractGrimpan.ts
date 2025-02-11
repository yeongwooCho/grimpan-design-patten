/**
 * 캔버스 엘리먼트를 입력받아 그림판 인스턴스를 생성하는 추상 클래스
 * 캔버스 엘리먼트를 입력하지 않으면 예외를 발생시킨다.
 */
export abstract class Grimpan {
  //자식 클래스에서만 생성자를 사용 가능하도록 protected 생성자를 사용한다.
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }

  // abstract method를 사용해 자식에서 반드시 선언하도록 한다.
  abstract initialize(): void;
  abstract initializeMenu(): void;

  // 싱글톤 패턴을 사용해 인스턴스를 생성한다.
  // 필수로 만들어야하지만 TS에서는 abstract static 를 지원하지 않아 다음과 같이 사용했다.
  static getInstance() {}
}

/**
 * IE 그림판 클래스
 */
export class IEGrimpan extends Grimpan {
  private static instance: IEGrimpan;

  override initialize() {}
  override initializeMenu() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

/**
 * Chrome 그림판 클래스
 */
export class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  override initialize() {}
  override initializeMenu() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}
