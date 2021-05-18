let x = 2;

class T {
    constructor() {
        this.f1 = 1;
        this.f2 = 2;
    }
    p() {
        this.f2 = this.f1 + this.r() + x;
        this.f1 = this.r();
        return this.f1;
    }
    q() {
        return this.f2;
    }
    r() {
        return this.q();
    }
}

class S extends T {
    q() {
        return 3;
    }
}

class U extends S {
    p() { return super.p(); }
    q() { return this.f2 + x; }
    r() { return this.q() + x; }
}

function main() {
    let t = new T();
    let s = new S();
    let u = new U();
    console.log(t.p());
    console.log(s.p());
    console.log(u.p());
    console.log(t.p());
    console.log(s.p());
    console.log(u.p());
    console.log(t.q());
    console.log(s.q());
    console.log(u.q());
}

main();