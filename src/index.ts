interface Obj {
    name: string;
    getName(): string;
};

function main(obj: Obj) {
    console.log(obj.getName());
};

// obj: Obj 설정 시 에러 발생
const obj = {
    name: "John",
    xyz: 1,
    getName() {
        return this.name;
    }
}

main(obj);

abstract class AC {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const ac: AC = {
    name: "John",
}

interface AC2 {
    name: string;
}
const ac2: AC2 = {
    name: "John",
}

function main2(obj: AC) {
    console.log(obj.name);
}

main2(ac);



abstract class A {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
abstract class B {
    constructor(public name: string) {}
}


interface Runnable {
    run(): void;
}

interface Walkable {
    walk(): void;
}

class Person implements Runnable, Walkable {
    run() {
        console.log("run");
    }
    walk() {
        console.log("walk");
    }
}

abstract class Runnable2 {
    abstract run(): void;
}

abstract class Walkable2 {
    abstract walk(): void;
}

class Person2 implements Runnable2, Walkable2 {
    run() {
        console.log("run");
    }
    walk() {
        console.log("walk");
    }
}

