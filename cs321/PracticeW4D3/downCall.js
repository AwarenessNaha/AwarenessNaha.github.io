let x = 5;
class T {
    constructor() {
        this.f1 = 1;
        this.f2 = 2;
    }
    p() {
        this.f1 = this.f1 + this.r() + x;
        this.f1 = this.r();
        return this.f1;
    }
    q() { return this.f1; }
    r() { return this.q(); }
}
class S extends T {
    p() { return super.p(); }
    q() { return 3; }
}
class U extends S {
    p() { return super.p(); }
    q() { return this.f2 + x; }
    r() { return this.q() + x; }
}
function main() {
    let sT = new T();
    let sS = new S();
    let sU = new U();
    console.log("1 : " + " " + sT.p());
    console.log("2 : " + " " + sS.p());
    console.log("3 : " + " " + sU.p());
    console.log("4 : " + " " + sT.p());
    console.log("5 : " + " " + sS.p());
    console.log("6 : " + " " + sU.p());
    console.log("7 : " + " " + sT.q());
    console.log("8 : " + " " + sS.q());
    console.log("9 : " + " " + sU.q());
} main();