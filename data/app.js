function aa() {
    return function() {}
}

function ba(a) {
    return function(b) {
        this[a] = b
    }
}

function ca(a) {
    return function() {
        return this[a]
    }
}

function k(a) {
    return function() {
        return a
    }
}
var l, n = {};

function ea(a, b) {
    this.De = this.yj = this.sh = null;
    a = document.getElementById(a);
    if (a == null) n.zm = false;
    else {
        if (this.sh = a.parentNode) {
            this.Jh = document.createElement("div");
            this.sh.appendChild(this.Jh);
            this.Vp = a = document.createTextNode("Загрузка...");
            this.Jh.appendChild(a)
        }
        b && ga(this)
    }
}

function ga(a) {
    if (a.yj == null) {
    }
}
ea.prototype.print = function(a) {
    n.zm != false && ha(this, a, false)
};

function ia(a, b) {
    if (a.Jh)
        if (b == null) a.Jh.style.display = "none";
        else {
            a.Jh.style.display = "block";
            a.Vp.nodeValue = b
        }
}

function ja(a, b, c) {
    ha(a, b, true, c)
}

function ma(a, b) {
    setTimeout(function() {
        throw new Error(b);
    }, 0)
}

function ha(a, b, c, d) {
    if (!(n.zm == false && c != true)) {
        if (a.De == null) {
            a.De = document.createElement("div");
            a.De.className = "cldebug";
            a.sh.appendChild(a.De)
        }
        if (d) {
            a.De.appendChild(document.createElement("br"));
            c = document.createElement("div");
            a.De.appendChild(c);
            c.innerHTML = b
        } else {
            a.De.appendChild(document.createElement("br"));
            b = document.createTextNode(b);
            a.De.appendChild(b)
        }
    }
}
n.zm = true;
n.pa = null;

function na(a, b) {
    this.Aj = a;
    this.sb = false;
    this.wr = b;
    if (!this.sb && typeof XMLHttpRequest != "undefined") try {
        this.sb = new XMLHttpRequest
    } catch (c) {
        this.sb = false
    }
    if (!this.sb && window.Dq) try {
        this.sb = window.Dq()
    } catch (d) {
        this.sb = false
    }
    this.load = function(e, f) {
        if (this.sb == false) ja(n.pa, "Your browser doesn't support AJAX");
        else {
            var g = this;
            try {
                this.sb.open("GET", this.Aj, true);
                if (this.wr) this.sb.responseType = "arraybuffer"
            } catch (i) {
                if (f) f(i.message);
                else {
                    ja(n.pa, "Could not open file " + this.Aj + ": " + i.message);
                    var j =
                        navigator.appVersion;
                    j != null && j.indexOf("Trident") != -1 && ja(n.pa, "<i>Use a web server to run files in IE. Or start them from CopperCube.</i>", true)
                }
                return
            }
            this.sb.onreadystatechange = function() {
                if (g.sb.readyState == 4) {
                    var o = false;
                    if (g.sb.status != 200 && g.sb.status != 0 && g.sb.status != null)
                        if (f) {
                            f("");
                            o = true
                        } else ja(n.pa, "Could not open file " + g.Aj + " (status:" + g.sb.status + ")");
                    !o && e && e(g.sb.response)
                }
            };
            try {
                this.sb.send(null)
            } catch (m) {
                f ? f("") : ja(n.pa, "Could not open file " + g.Aj)
            }
        }
    };
    this.abort = function() {
        try {
            this.sb.abort()
        } catch (e) {}
    }
};
n.PI = 3.14159265359;
n.Rr = 1 / 3.14159265359;
n.Mr = 1.570796326795;
n.Qr = 3.141592653589793;
n.Bd = 3.14159265359 / 180;
n.we = 57.29577951307855;
n.tq = 1.0E-8;
n.Qi = function(a) {
    return a * n.we
};
n.Bo = function(a) {
    return a * n.Bd
};
n.sa = function(a) {
    return a < 1.0E-8 && a > -1.0E-8
};
n.Ke = function(a) {
    return a + 1.0E-8 >= 1 && a - 1.0E-8 <= 1
};
n.F = function(a, b) {
    return a + 1.0E-8 >= b && a - 1.0E-8 <= b
};
n.sc = function(a, b, c) {
    if (a < b) return b;
    if (a > c) return c;
    return a
};
n.Gq = function(a) {
    return a - Math.floor(a)
};
n.Zq = function(a, b, c) {
    if (a > b) {
        if (a > c) return a;
        return c
    }
    if (b > c) return b;
    return c
};
n.ds = function(a, b, c) {
    if (a < b) {
        if (a < c) return a;
        return c
    }
    if (b < c) return b;
    return c
};
n.Yd = function(a) {
    return (a & 4278190080) >>> 24
};
n.cd = function(a) {
    return (a & 16711680) >> 16
};
n.ad = function(a) {
    return (a & 65280) >> 8
};
n.$c = function(a) {
    return a & 255
};
n.Kf = function(a, b, c, d) {
    a &= 255;
    b &= 255;
    c &= 255;
    d &= 255;
    return a << 24 | b << 16 | c << 8 | d
};
n.Ao = function(a) {
    var b = new oa;
    b.Sf = n.Yd(a) / 255;
    b.pc = n.cd(a) / 255;
    b.kc = n.ad(a) / 255;
    b.fc = n.$c(a) / 255;
    return b
};
n.Ko = function(a, b, c) {
    var d = 1 - c;
    return n.Kf(n.Yd(a) * c + n.Yd(b) * d, n.cd(a) * c + n.cd(b) * d, n.ad(a) * c + n.ad(b) * d, n.$c(a) * c + n.$c(b) * d)
};
n.up = function(a) {
    if (a > 0) return 1;
    if (a < 0) return -1;
    return 0
};

function oa() {
    this.fc = this.kc = this.pc = this.Sf = 1
}
l = oa.prototype;
l.e = function() {
    var a = new oa;
    a.Sf = this.Sf;
    a.pc = this.pc;
    a.kc = this.kc;
    a.fc = this.fc;
    return a
};
l.Sf = 1;
l.pc = 1;
l.kc = 1;
l.fc = 1;
n.tk = true;

function q() {
    return (new Date).getTime()
};

function s(a, b, c) {
    if (a != null) {
        this.c = a;
        this.b = b;
        this.d = c
    }
}
l = s.prototype;
l.c = 0;
l.b = 0;
l.d = 0;
l.set = function(a, b, c) {
    this.c = a;
    this.b = b;
    this.d = c
};
l.e = function() {
    return new s(this.c, this.b, this.d)
};
l.ra = function(a) {
    a.c = this.c;
    a.b = this.b;
    a.d = this.d
};
l.substract = function(a) {
    return new s(this.c - a.c, this.b - a.b, this.d - a.d)
};

function pa(a, b) {
    a.c -= b.c;
    a.b -= b.b;
    a.d -= b.d
}
s.prototype.add = function(a) {
    return new s(this.c + a.c, this.b + a.b, this.d + a.d)
};
s.prototype.oa = function(a) {
    this.c += a.c;
    this.b += a.b;
    this.d += a.d
};

function ua(a, b) {
    a.c += b.c;
    a.b += b.b;
    a.d += b.d;
    return a
}
s.prototype.normalize = function() {
    var a = this.c * this.c + this.b * this.b + this.d * this.d;
    if (!(a > -1.0E-7 && a < 1.0E-7)) {
        a = 1 / Math.sqrt(a);
        this.c *= a;
        this.b *= a;
        this.d *= a
    }
};

function va(a, b) {
    var c = a.c * a.c + a.b * a.b + a.d * a.d;
    if (!(c > -1.0E-7 && c < 1.0E-7)) {
        c = b / Math.sqrt(c);
        a.c *= c;
        a.b *= c;
        a.d *= c
    }
}

function wa(a, b) {
    a.c = b.c;
    a.b = b.b;
    a.d = b.d
}
s.prototype.F = function(a) {
    return n.F(this.c, a.c) && n.F(this.b, a.b) && n.F(this.d, a.d)
};

function xa(a) {
    return n.sa(a.c) && n.sa(a.b) && n.sa(a.d)
}
s.prototype.getLength = function() {
    return Math.sqrt(this.c * this.c + this.b * this.b + this.d * this.d)
};
s.prototype.yb = function(a) {
    var b = a.c - this.c,
        c = a.b - this.b;
    a = a.d - this.d;
    return Math.sqrt(b * b + c * c + a * a)
};

function ya(a, b) {
    var c = b.c - a.c,
        d = b.b - a.b;
    a = b.d - a.d;
    return c * c + d * d + a * a
}

function za(a) {
    return a.c * a.c + a.b * a.b + a.d * a.d
}

function x(a, b) {
    return new s(a.c * b, a.b * b, a.d * b)
}

function A(a, b) {
    a.c *= b;
    a.b *= b;
    a.d *= b
}

function Aa(a, b) {
    a.c *= b;
    a.b *= b;
    a.d *= b;
    return a
}

function Ba(a, b) {
    a.c *= b.c;
    a.b *= b.b;
    a.d *= b.d
}

function Ea(a, b) {
    return new s(a.c * b.c, a.b * b.b, a.d * b.d)
}

function Fa(a, b) {
    return new s(a.c / b.c, a.b / b.b, a.d / b.d)
}

function Ga(a, b) {
    return new s(a.b * b.d - a.d * b.b, a.d * b.c - a.c * b.d, a.c * b.b - a.b * b.c)
}
s.prototype.ja = function(a) {
    return this.c * a.c + this.b * a.b + this.d * a.d
};

function Ha(a) {
    var b = new s;
    b.b = n.Qi(Math.atan2(a.c, a.d));
    if (b.b < 0) b.b += 360;
    if (b.b >= 360) b.b -= 360;
    var c = Math.sqrt(a.c * a.c + a.d * a.d);
    b.c = n.Qi(Math.atan2(c, a.b)) - 90;
    if (b.c < 0) b.c += 360;
    if (b.c >= 360) b.c -= 360;
    return b
}

function Ia(a, b) {
    b *= n.Bd;
    var c = Math.cos(b);
    b = Math.sin(b);
    var d = a.c,
        e = a.d;
    a.c = d * c - e * b;
    a.d = d * b + e * c
}

function Ka(a, b, c) {
    var d = 1 - c;
    return new s(b.c * d + a.c * c, b.b * d + a.b * c, b.d * d + a.d * c)
}
s.prototype.toString = function() {
    return "(x: " + this.c + " y:" + this.b + " z:" + this.d + ")"
};

function La() {
    this.$ = new s;
    this.Q = new s
}
La.prototype.$ = null;
La.prototype.Q = null;

function Ma(a) {
    return a.Q.substract(a.$)
}
La.prototype.getLength = function() {
    return Ma(this).getLength()
};

function Na(a, b) {
    if (a == null) this.b = this.c = 0;
    else {
        this.c = a;
        this.b = b
    }
}
Na.prototype.c = 0;
Na.prototype.b = 0;
Na.prototype.set = function(a, b) {
    this.c = a;
    this.b = b
};
Na.prototype.e = function() {
    return new Na(this.c, this.b)
};

function B() {
    this.D = new s;
    this.N = new s
}
B.prototype.D = null;
B.prototype.N = null;
B.prototype.e = function() {
    var a = new B;
    a.D = this.D.e();
    a.N = this.N.e();
    return a
};

function Oa(a) {
    a = a.D.add(a.N);
    A(a, 0.5);
    return a
}

function Pa(a) {
    return a.N.substract(a.D)
}

function Qa(a) {
    var b = Oa(a);
    a = b.substract(a.N);
    var c = [];
    c.push(new s(b.c + a.c, b.b + a.b, b.d + a.d));
    c.push(new s(b.c + a.c, b.b - a.b, b.d + a.d));
    c.push(new s(b.c + a.c, b.b + a.b, b.d - a.d));
    c.push(new s(b.c + a.c, b.b - a.b, b.d - a.d));
    c.push(new s(b.c - a.c, b.b + a.b, b.d + a.d));
    c.push(new s(b.c - a.c, b.b - a.b, b.d + a.d));
    c.push(new s(b.c - a.c, b.b + a.b, b.d - a.d));
    c.push(new s(b.c - a.c, b.b - a.b, b.d - a.d));
    return c
}

function Ra(a, b, c) {
    var d = c.substract(b),
        e = d.getLength();
    d.normalize();
    b = x(b.add(c), 0.5);
    c = e * 0.5;
    e = x(Pa(a), 0.5);
    a = Oa(a).substract(b);
    if (Math.abs(a.c) > e.c + c * Math.abs(d.c) || Math.abs(a.b) > e.b + c * Math.abs(d.b) || Math.abs(a.d) > e.d + c * Math.abs(d.d)) d = false;
    else {
        b = e.b * Math.abs(d.d) + e.d * Math.abs(d.b);
        if (Math.abs(a.b * d.d - a.d * d.b) > b) d = false;
        else {
            b = e.c * Math.abs(d.d) + e.d * Math.abs(d.c);
            if (Math.abs(a.d * d.c - a.c * d.d) > b) d = false;
            else {
                b = e.c * Math.abs(d.b) + e.b * Math.abs(d.c);
                d = Math.abs(a.c * d.b - a.b * d.c) > b ? false : true
            }
        }
    }
    return d
}

function C(a, b) {
    var c = b.c,
        d = b.b;
    b = b.d;
    if (c > a.N.c) a.N.c = c;
    if (d > a.N.b) a.N.b = d;
    if (b > a.N.d) a.N.d = b;
    if (c < a.D.c) a.D.c = c;
    if (d < a.D.b) a.D.b = d;
    if (b < a.D.d) a.D.d = b
}

function Ua(a, b) {
    return a.D.c <= b.N.c && a.D.b <= b.N.b && a.D.d <= b.N.d && a.N.c >= b.D.c && a.N.b >= b.D.b && a.N.d >= b.D.d
}
B.prototype.Ug = function(a) {
    return a.c >= this.D.c && a.c <= this.N.c && a.b >= this.D.b && a.b <= this.N.b && a.d >= this.D.d && a.d <= this.N.d
};
B.prototype.reset = function(a, b, c) {
    this.N.set(a, b, c);
    this.D.set(a, b, c)
};

function Va() {
    this.j = new s(0, 1, 0);
    Wa(this, new s(0, 0, 0))
}
Va.prototype.$a = 0;
Va.prototype.j = null;
Va.prototype.e = function() {
    var a = new Va(false);
    a.j = this.j.e();
    a.$a = this.$a;
    return a
};

function Wa(a, b) {
    a.$a = -b.ja(a.j)
}
Va.prototype.normalize = function() {
    var a = 1 / this.j.getLength();
    this.j = x(this.j, a);
    this.$a *= a
};

function Xa(a, b, c, d) {
    var e = new s,
        f = new s;
    var g = a.j.getLength(),
        i = a.j.ja(b.j),
        j = b.j.getLength(),
        m = g * j - i * i;
    if (Math.abs(m) < 1.0E-8) b = false;
    else {
        m = 1 / m;
        j = (j * -a.$a + i * b.$a) * m;
        g = (g * -b.$a + i * a.$a) * m;
        Ga(a.j, b.j).ra(f);
        a = x(a.j, j);
        b = x(b.j, g);
        a.add(b).ra(e);
        b = true
    }
    if (b) return c.Cm(e, f, d);
    return false
}
Va.prototype.Cm = function(a, b, c) {
    var d = this.j.ja(b);
    if (d == 0) return false;
    d = -(this.j.ja(a) + this.$a) / d;
    a.add(x(b, d)).ra(c);
    return true
};
Va.prototype.yb = function(a) {
    return a.ja(this.j) + this.$a
};

function Ya(a, b) {
    return a.j.ja(b) <= 0
};

function F(a, b, c) {
    this.V = a ? a : new s;
    this.ca = b ? b : new s;
    this.da = c ? c : new s
}
F.prototype.V = null;
F.prototype.ca = null;
F.prototype.da = null;
F.prototype.e = function() {
    return new F(this.V, this.ca, this.da)
};

function Za(a) {
    var b = new Va(false),
        c = a.V,
        d = a.da;
    b.j = Ga(a.ca.substract(c), d.substract(c));
    b.j.normalize();
    Wa(b, c);
    return b
}
F.prototype.Ug = function(a) {
    return $a(this, a, this.V, this.ca, this.da) && $a(this, a, this.ca, this.V, this.da) && $a(this, a, this.da, this.V, this.ca)
};

function $a(a, b, c, d, e) {
    a = e.substract(d);
    b = Ga(a, b.substract(d));
    c = Ga(a, c.substract(d));
    return b.ja(c) >= 0
}

function ab(a) {
    return Ga(a.ca.substract(a.V), a.da.substract(a.V))
}
F.prototype.Cm = function(a, b) {
    var c = ab(this);
    c.normalize();
    var d = c.ja(b);
    if (n.sa(d)) a = null;
    else {
        var e = this.V.ja(c);
        c = -(c.ja(a) - e) / d;
        a = a.add(x(b, c))
    }
    if (a == null) return null;
    if (this.Ug(a)) return a;
    return null
};
F.prototype.ra = function(a) {
    this.V.ra(a.V);
    this.ca.ra(a.ca);
    this.da.ra(a.da)
};

function I(a) {
    if (a == null) a = true;
    this.L = this.C = this.K = this.J = this.I = this.o = this.B = this.A = this.H = this.t = this.q = this.w = this.G = this.s = this.v = this.p = 0;
    this.La = false;
    if (a) {
        this.L = this.o = this.q = this.p = 1;
        this.La = true
    }
}

function bb(a) {
    if (a.La) return true;
    a.La = n.Ke(a.p) && n.sa(a.v) && n.sa(a.s) && n.sa(a.G) && n.sa(a.w) && n.Ke(a.q) && n.sa(a.t) && n.sa(a.H) && n.sa(a.A) && n.sa(a.B) && n.Ke(a.o) && n.sa(a.I) && n.sa(a.J) && n.sa(a.K) && n.sa(a.C) && n.Ke(a.L);
    return a.La
}

function gb(a) {
    if (a.La) return true;
    return n.Ke(a.p) && n.sa(a.v) && n.sa(a.s) && n.sa(a.G) && n.sa(a.w) && n.Ke(a.q) && n.sa(a.t) && n.sa(a.H) && n.sa(a.A) && n.sa(a.B) && n.Ke(a.o) && n.sa(a.I) && n.Ke(a.L)
}
I.prototype.F = function(a) {
    return n.F(this.p, a.p) && n.F(this.v, a.v) && n.F(this.s, a.s) && n.F(this.G, a.G) && n.F(this.w, a.w) && n.F(this.q, a.q) && n.F(this.t, a.t) && n.F(this.H, a.H) && n.F(this.A, a.A) && n.F(this.B, a.B) && n.F(this.o, a.o) && n.F(this.I, a.I) && n.F(this.J, a.J) && n.F(this.K, a.K) && n.F(this.C, a.C) && n.F(this.L, a.L)
};

function hb(a) {
    return new s(a.p, a.q, a.o)
}

function ib(a, b) {
    var c = b.e();
    b.c = c.c * a.p + c.b * a.w + c.d * a.A;
    b.b = c.c * a.v + c.b * a.q + c.d * a.B;
    b.d = c.c * a.s + c.b * a.t + c.d * a.o
}

function jb(a, b, c) {
    b.c = c.c * a.p + c.b * a.w + c.d * a.A;
    b.b = c.c * a.v + c.b * a.q + c.d * a.B;
    b.d = c.c * a.s + c.b * a.t + c.d * a.o
}

function kb(a, b) {
    return new s(b.c * a.p + b.b * a.w + b.d * a.A + a.J, b.c * a.v + b.b * a.q + b.d * a.B + a.K, b.c * a.s + b.b * a.t + b.d * a.o + a.C)
}

function lb(a, b) {
    var c = b.c * a.v + b.b * a.q + b.d * a.B + a.K,
        d = b.c * a.s + b.b * a.t + b.d * a.o + a.C;
    b.c = b.c * a.p + b.b * a.w + b.d * a.A + a.J;
    b.b = c;
    b.d = d
}

function mb(a, b) {
    return new s(b.c + a.J, b.b + a.K, b.d + a.C)
}

function K(a, b) {
    var c = new I(false);
    if (a.La) {
        b.ra(c);
        return c
    }
    if (b.La) {
        a.ra(c);
        return c
    }
    c.p = a.p * b.p + a.w * b.v + a.A * b.s + a.J * b.G;
    c.v = a.v * b.p + a.q * b.v + a.B * b.s + a.K * b.G;
    c.s = a.s * b.p + a.t * b.v + a.o * b.s + a.C * b.G;
    c.G = a.G * b.p + a.H * b.v + a.I * b.s + a.L * b.G;
    c.w = a.p * b.w + a.w * b.q + a.A * b.t + a.J * b.H;
    c.q = a.v * b.w + a.q * b.q + a.B * b.t + a.K * b.H;
    c.t = a.s * b.w + a.t * b.q + a.o * b.t + a.C * b.H;
    c.H = a.G * b.w + a.H * b.q + a.I * b.t + a.L * b.H;
    c.A = a.p * b.A + a.w * b.B + a.A * b.o + a.J * b.I;
    c.B = a.v * b.A + a.q * b.B + a.B * b.o + a.K * b.I;
    c.o = a.s * b.A + a.t * b.B + a.o * b.o + a.C * b.I;
    c.I = a.G * b.A + a.H * b.B +
        a.I * b.o + a.L * b.I;
    c.J = a.p * b.J + a.w * b.K + a.A * b.C + a.J * b.L;
    c.K = a.v * b.J + a.q * b.K + a.B * b.C + a.K * b.L;
    c.C = a.s * b.J + a.t * b.K + a.o * b.C + a.C * b.L;
    c.L = a.G * b.J + a.H * b.K + a.I * b.C + a.L * b.L;
    return c
}

function nb(a, b) {
    if (a.La) {
        a.ra(b);
        return true
    }
    var c = (a.p * a.q - a.v * a.w) * (a.o * a.L - a.I * a.C) - (a.p * a.t - a.s * a.w) * (a.B * a.L - a.I * a.K) + (a.p * a.H - a.G * a.w) * (a.B * a.C - a.o * a.K) + (a.v * a.t - a.s * a.q) * (a.A * a.L - a.I * a.J) - (a.v * a.H - a.G * a.q) * (a.A * a.C - a.o * a.J) + (a.s * a.H - a.G * a.t) * (a.A * a.K - a.B * a.J);
    if (c > -1.0E-7 && c < 1.0E-7) return false;
    c = 1 / c;
    b.p = c * (a.q * (a.o * a.L - a.I * a.C) + a.t * (a.I * a.K - a.B * a.L) + a.H * (a.B * a.C - a.o * a.K));
    b.v = c * (a.B * (a.s * a.L - a.G * a.C) + a.o * (a.G * a.K - a.v * a.L) + a.I * (a.v * a.C - a.s * a.K));
    b.s = c * (a.K * (a.s * a.H - a.G * a.t) + a.C * (a.G * a.q - a.v *
        a.H) + a.L * (a.v * a.t - a.s * a.q));
    b.G = c * (a.v * (a.H * a.o - a.t * a.I) + a.s * (a.q * a.I - a.H * a.B) + a.G * (a.t * a.B - a.q * a.o));
    b.w = c * (a.t * (a.A * a.L - a.I * a.J) + a.H * (a.o * a.J - a.A * a.C) + a.w * (a.I * a.C - a.o * a.L));
    b.q = c * (a.o * (a.p * a.L - a.G * a.J) + a.I * (a.s * a.J - a.p * a.C) + a.A * (a.G * a.C - a.s * a.L));
    b.t = c * (a.C * (a.p * a.H - a.G * a.w) + a.L * (a.s * a.w - a.p * a.t) + a.J * (a.G * a.t - a.s * a.H));
    b.H = c * (a.s * (a.H * a.A - a.w * a.I) + a.G * (a.w * a.o - a.t * a.A) + a.p * (a.t * a.I - a.H * a.o));
    b.A = c * (a.H * (a.A * a.K - a.B * a.J) + a.w * (a.B * a.L - a.I * a.K) + a.q * (a.I * a.J - a.A * a.L));
    b.B = c * (a.I * (a.p * a.K - a.v * a.J) +
        a.A * (a.v * a.L - a.G * a.K) + a.B * (a.G * a.J - a.p * a.L));
    b.o = c * (a.L * (a.p * a.q - a.v * a.w) + a.J * (a.v * a.H - a.G * a.q) + a.K * (a.G * a.w - a.p * a.H));
    b.I = c * (a.G * (a.q * a.A - a.w * a.B) + a.p * (a.H * a.B - a.q * a.I) + a.v * (a.w * a.I - a.H * a.A));
    b.J = c * (a.w * (a.o * a.K - a.B * a.C) + a.q * (a.A * a.C - a.o * a.J) + a.t * (a.B * a.J - a.A * a.K));
    b.K = c * (a.A * (a.s * a.K - a.v * a.C) + a.B * (a.p * a.C - a.s * a.J) + a.o * (a.v * a.J - a.p * a.K));
    b.C = c * (a.J * (a.s * a.q - a.v * a.t) + a.K * (a.p * a.t - a.s * a.w) + a.C * (a.v * a.w - a.p * a.q));
    b.L = c * (a.p * (a.q * a.o - a.t * a.B) + a.v * (a.t * a.A - a.w * a.o) + a.s * (a.w * a.B - a.q * a.A));
    b.La = a.La;
    return true
}

function ob(a) {
    var b = new I(false);
    if (nb(a, b)) {
        b.ra(a);
        return true
    }
    return false
}

function pb(a) {
    var b = new I(false);
    b.p = a.p;
    b.v = a.w;
    b.s = a.A;
    b.G = a.J;
    b.w = a.v;
    b.q = a.q;
    b.t = a.B;
    b.H = a.K;
    b.A = a.s;
    b.B = a.t;
    b.o = a.o;
    b.I = a.C;
    b.J = a.G;
    b.K = a.H;
    b.C = a.I;
    b.L = a.L;
    b.La = a.La;
    return b
}

function qb(a, b, c) {
    a.La = false;
    switch (b) {
        case 0:
            a.p = c;
            break;
        case 1:
            a.v = c;
            break;
        case 2:
            a.s = c;
            break;
        case 3:
            a.G = c;
            break;
        case 4:
            a.w = c;
            break;
        case 5:
            a.q = c;
            break;
        case 6:
            a.t = c;
            break;
        case 7:
            a.H = c;
            break;
        case 8:
            a.A = c;
            break;
        case 9:
            a.B = c;
            break;
        case 10:
            a.o = c;
            break;
        case 11:
            a.I = c;
            break;
        case 12:
            a.J = c;
            break;
        case 13:
            a.K = c;
            break;
        case 14:
            a.C = c;
            break;
        case 15:
            a.L = c;
            break
    }
}
I.prototype.e = function() {
    var a = new I(false);
    this.ra(a);
    return a
};
I.prototype.ra = function(a) {
    a.p = this.p;
    a.v = this.v;
    a.s = this.s;
    a.G = this.G;
    a.w = this.w;
    a.q = this.q;
    a.t = this.t;
    a.H = this.H;
    a.A = this.A;
    a.B = this.B;
    a.o = this.o;
    a.I = this.I;
    a.J = this.J;
    a.K = this.K;
    a.C = this.C;
    a.L = this.L;
    a.La = this.La
};

function rb(a, b, c, d, e) {
    b = 1 / Math.tan(b / 2);
    a.p = b / c;
    a.v = 0;
    a.s = 0;
    a.G = 0;
    a.w = 0;
    a.q = b;
    a.t = 0;
    a.H = 0;
    a.A = 0;
    a.B = 0;
    a.o = e / (e - d);
    a.I = 1;
    a.J = 0;
    a.K = 0;
    a.C = -d * e / (e - d);
    a.L = 0;
    a.La = false
}

function sb(a, b, c, d, e) {
    a.p = 2 / b;
    a.v = 0;
    a.s = 0;
    a.G = 0;
    a.w = 0;
    a.q = 2 / c;
    a.t = 0;
    a.H = 0;
    a.A = 0;
    a.B = 0;
    a.o = 1 / (e - d);
    a.I = 0;
    a.J = 0;
    a.K = 0;
    a.C = d / (d - e);
    a.L = 1;
    a.La = false
}

function ub(a, b, c, d) {
    c = c.substract(b);
    c.normalize();
    d = Ga(d, c);
    d.normalize();
    var e = Ga(c, d);
    a.p = d.c;
    a.v = e.c;
    a.s = c.c;
    a.G = 0;
    a.w = d.b;
    a.q = e.b;
    a.t = c.b;
    a.H = 0;
    a.A = d.d;
    a.B = e.d;
    a.o = c.d;
    a.I = 0;
    a.J = -d.ja(b);
    a.K = -e.ja(b);
    a.C = -c.ja(b);
    a.L = 1;
    a.La = false
}

function vb(a, b) {
    var c = x(b, n.Bd);
    b = Math.cos(c.c);
    var d = Math.sin(c.c),
        e = Math.cos(c.b),
        f = Math.sin(c.b),
        g = Math.cos(c.d);
    c = Math.sin(c.d);
    a.p = e * g;
    a.v = e * c;
    a.s = -f;
    var i = d * f;
    f = b * f;
    a.w = i * g - b * c;
    a.q = i * c + b * g;
    a.t = d * e;
    a.A = f * g + d * c;
    a.B = f * c - d * g;
    a.o = b * e;
    a.La = false
}

function wb(a) {
    var b = -Math.asin(a.s),
        c = Math.cos(b);
    b *= n.we;
    var d, e;
    if (Math.abs(c) > 1.0E-8) {
        var f = 1 / c;
        d = a.o * f;
        e = a.t * f;
        c = Math.atan2(e, d) * n.we;
        d = a.p * f;
        e = a.v * f
    } else {
        c = 0;
        d = a.q;
        e = -a.w
    }
    a = Math.atan2(e, d) * n.we;
    if (c < 0) c += 360;
    if (b < 0) b += 360;
    if (a < 0) a += 360;
    return new s(c, b, a)
}

function xb(a, b) {
    a.J = b.c;
    a.K = b.b;
    a.C = b.d;
    a.La = false
}

function yb(a, b) {
    a.p = b.c;
    a.q = b.b;
    a.o = b.d;
    a.La = false
}

function zb(a, b) {
    var c = Qa(b),
        d;
    for (d = 0; d < 8; ++d) lb(a, c[d]);
    a = c[0];
    b.D = a.e();
    b.N = a.e();
    for (d = 1; d < 8; ++d) C(b, c[d])
}
I.prototype.toString = function() {
    return this.p + " " + this.v + " " + this.s + " " + this.G + "\n" + this.w + " " + this.q + " " + this.t + " " + this.H + "\n" + this.A + " " + this.B + " " + this.o + " " + this.I + "\n" + this.J + " " + this.K + " " + this.C + " " + this.L
};

function Ab(a, b, c, d) {
    this.d = this.b = this.c = 0;
    this.Ca = 1;
    if (a != null) this.c = a;
    if (b != null) this.b = b;
    if (c != null) this.d = c;
    if (d != null) this.Ca = d
}
l = Ab.prototype;
l.c = 0;
l.b = 0;
l.d = 0;
l.Ca = 0;
l.e = function() {
    var a = new Ab;
    this.ra(a);
    return a
};
l.ra = function(a) {
    a.c = this.c;
    a.b = this.b;
    a.d = this.d;
    a.Ca = this.Ca
};

function Bb(a, b) {
    return new Ab(a.c * b, a.b * b, a.d * b, a.Ca * b)
}
Ab.prototype.oa = function(a) {
    this.c += a.c;
    this.b += a.b;
    this.d += a.d;
    this.Ca += a.Ca;
    return this
};

function Cb(a, b, c, d) {
    var e = b.ja(c);
    if (e < 0) {
        b = Bb(b, -1);
        e *= -1
    }
    if (e + 1 > 0.05)
        if (1 - e >= 0.05) {
            var f = Math.acos(e),
                g = 1 / Math.sin(f);
            e = Math.sin(f * (1 - d)) * g;
            d = Math.sin(f * d) * g
        } else {
            e = 1 - d;
            d = d
        }
    else {
        c = new Ab(-b.b, b.c, -b.Ca, b.d);
        e = Math.sin(n.PI * (0.5 - d));
        d = Math.sin(n.PI * d)
    }
    b = Bb(b, e).oa(Bb(c, d));
    a.c = b.c;
    a.b = b.b;
    a.d = b.d;
    a.Ca = b.Ca
}
Ab.prototype.ja = function(a) {
    return this.c * a.c + this.b * a.b + this.d * a.d + this.Ca * a.Ca
};

function Db(a) {
    var b = new I(false),
        c = a.c,
        d = a.b,
        e = a.d;
    a = a.Ca;
    b.p = 1 - 2 * d * d - 2 * e * e;
    b.w = 2 * c * d + 2 * e * a;
    b.A = 2 * c * e - 2 * d * a;
    b.J = 0;
    b.v = 2 * c * d - 2 * e * a;
    b.q = 1 - 2 * c * c - 2 * e * e;
    b.B = 2 * e * d + 2 * c * a;
    b.K = 0;
    b.s = 2 * c * e + 2 * d * a;
    b.t = 2 * e * d - 2 * c * a;
    b.o = 1 - 2 * c * c - 2 * d * d;
    b.C = 0;
    b.G = 0;
    b.H = 0;
    b.I = 0;
    b.L = 1;
    b.La = false;
    return b
}

function Eb(a, b) {
    var c = a.Ca * a.Ca,
        d = a.c * a.c,
        e = a.b * a.b,
        f = a.d * a.d;
    b.d = Math.atan2(2 * (a.c * a.b + a.d * a.Ca), d - e - f + c);
    b.c = Math.atan2(2 * (a.b * a.d + a.c * a.Ca), -d - e + f + c);
    b.b = Math.asin(n.sc(-2 * (a.c * a.d - a.b * a.Ca), -1, 1))
}

function Fb(a, b, c, d) {
    var e = b * 0.5;
    b = Math.sin(e);
    var f = Math.cos(e);
    e = c * 0.5;
    c = Math.sin(e);
    var g = Math.cos(e);
    e = d * 0.5;
    d = Math.sin(e);
    var i = Math.cos(e);
    e = g * i;
    i = c * i;
    g = g * d;
    c = c * d;
    a.c = b * e - f * c;
    a.b = f * i + b * g;
    a.d = f * g - b * i;
    a.Ca = f * e + b * c;
    a.normalize()
}
Ab.prototype.normalize = function() {
    var a = this.c * this.c + this.b * this.b + this.d * this.d + this.Ca * this.Ca;
    if (a != 1) {
        a = a = 1 / Math.sqrt(a);
        this.c *= a;
        this.b *= a;
        this.d *= a;
        this.Ca *= a
    }
};
Ab.prototype.toString = function() {
    return "(x: " + this.c + " y:" + this.b + " z:" + this.d + " w:" + this.Ca + ")"
};

function Gb() {
    this.Za = [];
    for (var a = 0; a < Hb; ++a) this.Za.push(new Va)
}
Gb.prototype.Za = null;
var Hb = 6;
Gb.prototype.Mk = function(a) {
    var b;
    b = this.Za[2];
    b.j.c = a.G + a.p;
    b.j.b = a.H + a.w;
    b.j.d = a.I + a.A;
    b.$a = a.L + a.J;
    b = this.Za[3];
    b.j.c = a.G - a.p;
    b.j.b = a.H - a.w;
    b.j.d = a.I - a.A;
    b.$a = a.L - a.J;
    b = this.Za[5];
    b.j.c = a.G - a.v;
    b.j.b = a.H - a.q;
    b.j.d = a.I - a.B;
    b.$a = a.L - a.K;
    b = this.Za[4];
    b.j.c = a.G + a.v;
    b.j.b = a.H + a.q;
    b.j.d = a.I + a.B;
    b.$a = a.L + a.K;
    b = this.Za[0];
    b.j.c = a.G - a.s;
    b.j.b = a.H - a.t;
    b.j.d = a.I - a.o;
    b.$a = a.L - a.C;
    b = this.Za[1];
    b.j.c = a.s;
    b.j.b = a.t;
    b.j.d = a.o;
    b.$a = a.C;
    for (a = a = 0; a < Hb; ++a) {
        b = this.Za[a];
        var c = -(1 / b.j.getLength());
        b.j = x(b.j, c);
        b.$a *=
            c
    }
};

function Ib(a) {
    var b = new s;
    Xa(a.Za[0], a.Za[5], a.Za[2], b);
    return b
}

function Jb(a) {
    var b = new s;
    Xa(a.Za[0], a.Za[5], a.Za[3], b);
    return b
}

function Kb(a) {
    var b = new s;
    Xa(a.Za[0], a.Za[4], a.Za[3], b);
    return b
}

function Lb(a) {
    var b = new s;
    Xa(a.Za[0], a.Za[4], a.Za[2], b);
    return b
}
Gb.prototype.lb = function(a) {
    var b = new B;
    b.reset(a.c, a.b, a.d);
    C(b, Ib(this));
    C(b, Jb(this));
    C(b, Lb(this));
    C(b, Kb(this));
    return b
};

function Mb(a, b) {
    b = Qa(b);
    for (var c = 0; c < 6; ++c) {
        for (var d = false, e = 0; e < 8; ++e) {
            var f;
            f = a.Za[c];
            f = f.j.ja(b[e]) + f.$a;
            f = f < -1.0E-6 ? 1 : f > 1.0E-6 ? 0 : 2;
            if (f != 0) {
                d = true;
                break
            }
        }
        if (!d) return false
    }
    return true
};

function Nb(a) {
    if (a) {
        this.f = new s;
        this.j = new s;
        this.la = 4294967295;
        this.wa = new Na;
        this.Ce = new Na
    }
}
l = Nb.prototype;
l.f = null;
l.j = null;
l.la = 0;
l.wa = null;
l.Ce = null;
n.$r = function(a) {
    var b = new Nb;
    b.f = a.f.e();
    b.la = a.la;
    b.j = a.j.e();
    b.wa = a.wa.e();
    b.Ce = a.Ce.e();
    return b
};

function Qb() {
    this.l = "";
    this.mc = false;
    this.pg = this.qg = this.ie = this.je = this.$h = this.Ha = this.md = null
}
Qb.prototype.Jb = function() {
    if (this.md) return this.md.width;
    if (this.je != null) return this.je;
    return 0
};
Qb.prototype.Ib = function() {
    if (this.md) return this.md.height;
    if (this.ie != null) return this.ie;
    return 0
};

function Rb() {
    this.eb = "";
    this.ac = null;
    this.ba = false;
    this.h = "SetOverlayText"
}
Rb.prototype.i = function(a, b) {
    var c = new Rb;
    c.eb = this.eb;
    c.ac = this.ac;
    c.ba = this.ba;
    if (c.ac == a) c.ac = b;
    return c
};
Rb.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.ac != -1) c = Sb(b, this.ac);
        if (c && c.Qm) {
            var d = this.eb.indexOf("$");
            if (d != -1) {
                a = this.eb;
                for (var e = 0, f = true; f;) {
                    f = false;
                    d = a.indexOf("$", e);
                    if (d != -1) {
                        e = d + 1;
                        var g = a.indexOf("$", d + 1);
                        if (g != -1) {
                            f = true;
                            var i = a.substr(d + 1, g - (d + 1));
                            if (i = Tb(i, false, b)) {
                                d = a.substr(0, d);
                                d += Ub(i);
                                e = d.length + 1;
                                d += a.substr(g + 1, a.length - g);
                                a = d
                            }
                        }
                    }
                }
                c.Qm(a)
            } else c.Qm(this.eb)
        }
    }
};

function Vb() {
    this.Gj = 0;
    this.tf = null;
    this.ba = false;
    this.h = "MakeSceneNodeInvisible"
}
Vb.prototype.i = function(a, b) {
    var c = new Vb;
    c.Gj = this.Gj;
    c.tf = this.tf;
    c.ba = this.ba;
    if (c.tf == a) c.tf = b;
    return c
};
Vb.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.tf != -1) c = Sb(b, this.tf);
        if (c) switch (this.Gj) {
            case 0:
                c.X = false;
                break;
            case 1:
                c.X = true;
                break;
            case 2:
                c.X = !c.X;
                break
        }
    }
};

function Wb() {
    this.Uc = this.Ud = false;
    this.h = "ChangeSceneNodePosition"
}
Wb.prototype.i = function(a, b) {
    var c = new Wb;
    c.ve = this.ve;
    c.Pc = this.Pc;
    c.Oc = this.Oc;
    c.ba = this.ba;
    c.pf = this.pf;
    c.ha = this.ha ? this.ha.e() : null;
    c.fj = this.fj ? this.fj.e() : null;
    c.Ud = this.Ud;
    c.Uc = this.Uc;
    if (c.Pc == a) c.Pc = b;
    if (c.Oc == a) c.Oc = b;
    return c
};
Wb.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.Pc != -1) c = Sb(b, this.Pc);
        if (c) {
            var d = null;
            switch (this.ve) {
                case 0:
                    d = this.ha.e();
                    break;
                case 1:
                    d = c.f.add(this.ha);
                    break;
                case 2:
                    var e = null;
                    if (this.pf) e = a;
                    else if (this.Oc != -1) e = Sb(b, this.Oc);
                    if (e) d = e.f.add(this.ha);
                    break;
                case 3:
                    d = this.ha.getLength();
                    a = c.Y;
                    b = new s(1, 0, 0);
                    ib(a, b);
                    if (c.k() == "camera") b = c.ga.substract(c.f);
                    va(b, d);
                    d = c.f.add(b);
                    break;
                case 4:
                    a = new B;
                    a.reset(this.ha.c, this.ha.b, this.ha.d);
                    C(a, this.fj);
                    d = new s;
                    d.c =
                        a.D.c + Math.random() * (a.N.c - a.D.c);
                    d.b = a.D.b + Math.random() * (a.N.b - a.D.b);
                    d.d = a.D.d + Math.random() * (a.N.d - a.D.d);
                    break;
                case 5:
                    d = b.jl.add(this.ha);
                    break
            }
            if (d != null)
                if (this.Ud && this.Uc > 0) {
                    a = new Xb;
                    a.$ = c.f.e();
                    a.Q = d;
                    a.qd = this.Uc;
                    a.th = true;
                    Yb(a);
                    Zb(c, a)
                } else c.f = d
        }
    }
};

function $b() {
    this.h = "ChangeSceneNodeRotation"
}
$b.prototype.i = function(a, b) {
    var c = new $b;
    c.Wl = this.Wl;
    c.yg = this.yg;
    c.ba = this.ba;
    c.ha = this.ha ? this.ha.e() : null;
    c.ek = this.ek;
    c.jm = this.jm;
    if (c.yg == a) c.yg = b;
    return c
};
$b.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.yg != -1) c = Sb(b, this.yg);
        if (c) {
            b = null;
            switch (this.Wl) {
                case 0:
                    b = this.ha.e();
                    break;
                case 1:
                    b = c.T.add(this.ha);
                    break
            }
            if (b)
                if (this.ek) {
                    a = new ac;
                    b = b;
                    var d = c.T,
                        e = this.jm;
                    a.On = true;
                    a.ye = b.e();
                    a.an = d.e();
                    a.Vl = a.Qa + e;
                    Zb(c, a)
                } else c.T = b
        }
    }
};

function bc() {
    this.h = "ChangeSceneNodeScale"
}
bc.prototype.i = function(a, b) {
    var c = new bc;
    c.Yl = this.Yl;
    c.zg = this.zg;
    c.ba = this.ba;
    c.ha = this.ha ? this.ha.e() : null;
    if (c.zg == a) c.zg = b;
    return c
};
bc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.zg != -1) c = Sb(b, this.zg);
        if (c) switch (this.Yl) {
            case 0:
                c.na = this.ha.e();
                break;
            case 1:
                c.na = Ea(c.na, this.ha);
                break
        }
    }
};

function cc() {
    this.h = "ChangeSceneNodeTexture"
}
cc.prototype.i = function(a, b) {
    var c = new cc;
    c.pd = this.pd;
    c.ac = this.ac;
    c.ba = this.ba;
    c.Lg = this.Lg;
    c.dl = this.dl;
    if (c.ac == a) c.ac = b;
    return c
};
cc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.ac != -1) c = Sb(b, this.ac);
        if (c)
            if (c.k() == "2doverlay") c.Ha = this.Lg;
            else {
                a = c.bd();
                if (this.pd == 0)
                    for (b = 0; b < a; ++b) {
                        var d = c.uc(b);
                        d.Ba = this.Lg
                    } else if (this.pd == 1) {
                        d = c.uc(this.dl);
                        if (d != null) d.Ba = this.Lg
                    }
            }
    }
};

function gc() {
    this.h = "ExecuteJavaScript"
}
gc.prototype.i = function() {
    var a = new gc;
    a.gl = this.gl;
    return a
};
gc.prototype.execute = function(a) {
    n.Am = a;
    eval(this.gl);
    n.Am = null
};

function hc() {
    this.h = "OpenWebpage"
}
hc.prototype.i = function() {
    var a = new hc;
    a.mm = this.mm;
    a.ga = this.ga;
    return a
};
hc.prototype.execute = function() {
    window.open(this.mm, this.ga)
};

function ic() {
    this.h = "SetSceneNodeAnimation"
}
ic.prototype.i = function(a, b) {
    var c = new ic;
    c.xg = this.xg;
    c.ba = this.ba;
    c.Xb = this.Xb;
    c.Rk = this.Rk;
    if (c.xg == a) c.xg = b;
    return c
};
ic.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.xg != -1) c = Sb(b, this.xg);
        if (c) {
            a = c;
            a.k() == "animatedmesh" && jc(a, this.Rk, this.Xb)
        }
    }
};

function kc(a) {
    this.Da = a;
    this.h = "SwitchToScene"
}
kc.prototype.i = function() {
    var a = new kc;
    a.sf = this.sf;
    return a
};
kc.prototype.execute = function() {
    this.Da && lc(this.Da, this.sf, true)
};

function mc(a) {
    this.Da = a;
    this.h = "SetActiveCamera"
}
mc.prototype.i = function(a, b) {
    var c = new mc;
    c.Uf = this.Uf;
    if (c.Uf == a) c.Uf = b;
    return c
};
mc.prototype.execute = function(a, b) {
    if (a && b) {
        a = null;
        if (this.Uf != -1) a = Sb(b, this.Uf);
        a != null && a.k() == "camera" && this.Da && nc(this.Da, a)
    }
};

function oc() {
    this.Ud = false;
    this.Uc = 0;
    this.h = "SetCameraTarget"
}
oc.prototype.i = function() {
    var a = new oc;
    a.ve = this.ve;
    a.Pc = this.Pc;
    a.Oc = this.Oc;
    a.ba = this.ba;
    a.pf = this.pf;
    a.ha = this.ha ? this.ha.e() : null;
    a.Ud = this.Ud;
    a.Uc = this.Uc;
    return a
};
oc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.Pc != -1) c = Sb(b, this.Pc);
        var d = c;
        if (d.k() == "camera") {
            var e = d.ga.e();
            switch (this.ve) {
                case 0:
                    e = this.ha.e();
                    break;
                case 1:
                    e = c.f.add(this.ha);
                    break;
                case 2:
                    var f = null;
                    if (this.pf) f = a;
                    else if (this.Oc != -1) f = Sb(b, this.Oc);
                    if (f) e = f.f.add(this.ha);
                    break
            }
            if (e != null)
                if (this.Ud && this.Uc > 0) {
                    a = new Xb;
                    a.$ = d.ga.e();
                    a.Q = e;
                    a.qd = this.Uc;
                    a.th = true;
                    a.hh = true;
                    Yb(a);
                    Zb(c, a)
                } else {
                    pc(d, e);
                    c = N(d, "camerafps");
                    c != null && qc(c, e)
                }
        }
    }
};

function rc() {
    this.kj = this.ke = this.pi = 0;
    this.vf = -1;
    this.Wc = 100;
    this.h = "Shoot";
    this.uf = -1;
    this.mk = false;
    this.dh = this.gh = null;
    this.lk = new s
}
rc.prototype.i = function(a, b) {
    var c = new rc;
    c.pi = this.pi;
    c.ke = this.ke;
    c.kj = this.kj;
    c.vf = this.vf;
    c.Wc = this.Wc;
    c.uf = this.uf;
    c.mk = this.mk;
    c.gh = this.gh;
    c.dh = this.dh ? this.dh.i(a, b) : null;
    c.lk = this.lk.e();
    if (c.vf == a) c.vf = b;
    if (c.uf == a) c.uf = b;
    return c
};
rc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = new La,
            d = false,
            e = null,
            f = null,
            g = sc(b, "gameai");
        if (this.uf != -1) {
            a = Sb(b, this.uf);
            if (a != null) {
                d = true;
                e = a;
                c.$ = Oa(a.lb());
                c.$.oa(this.lk);
                lb(a.Y, c.$);
                f = b.ea;
                if (this.mk && f) {
                    a = new La;
                    a.$ = O(f);
                    a.Q = f.ga;
                    f = Ma(a);
                    va(f, this.Wc);
                    a.Q = a.$.add(f);
                    tc(this, a, g, this.Wc, b);
                    uc(this, a, g, this.Wc, e, b);
                    c.Q = a.Q
                } else {
                    f = a.Y;
                    if (this.gh) {
                        a = new I;
                        vb(a, this.gh);
                        f = K(f, a)
                    }
                    c.Q.set(1, 0, 0);
                    ib(f, c.Q);
                    c.Q.oa(c.$)
                }
            }
        } else if (a != null) {
            e = a;
            if ((f = N(a, "gameai")) && f.Vk) {
                c = f.Wk;
                d = true
            }
        }
        if (!d)
            if (f =
                b.ea) {
                e = f;
                c.$ = O(f);
                c.Q = f.ga;
                d = true
            }
        if (d) {
            d = Ma(c);
            va(d, this.Wc);
            c.Q = c.$.add(d);
            tc(this, c, g, this.Wc, b);
            if (this.pi == 1) {
                g = null;
                if (this.vf != -1) g = Sb(b, this.vf);
                if (g) {
                    g = g.i(b.Pa, -1, -1);
                    vc(b.Pa, g);
                    if (g != null) {
                        g.f = c.$;
                        P(g);
                        g.X = true;
                        g.Ja = -1;
                        g.l = "";
                        b = Ma(c);
                        b = Ha(b);
                        g.T = b;
                        b = this.kj;
                        if (b == 0) b = 1;
                        d = new Xb;
                        d.$ = c.$;
                        d.Q = c.Q;
                        d.qd = c.getLength() / b;
                        d.th = true;
                        Yb(d);
                        d.co = true;
                        d.Wn = e;
                        d.Vn = this.ke;
                        d.uj = true;
                        d.Tf = this.dh;
                        d.xh = this.Wc / b;
                        Zb(g, d)
                    }
                }
            } else if (this.pi == 0) {
                e = uc(this, c, g, this.Wc, e, b);
                if (e != null) {
                    b.jl = c.Q.e();
                    (c = N(e,
                        "gameai")) && wc(c, this.ke, e)
                }
            }
        }
    }
};

function tc(a, b, c, d, e) {
    if (c.length != 0)
        if (a = N(c[0], "gameai"))
            if (a = a.ia) {
                e = xc(yc.prototype, e, b.$, b.Q, a, true);
                if (e < d) {
                    d = Ma(b);
                    va(d, e);
                    b.Q = b.$.add(d)
                }
            }
}

function uc(a, b, c, d, e, f) {
    a = d;
    d = null;
    for (var g = 0; g < c.length; ++g)
        if (c[g] !== e) {
            var i = N(c[g], "gameai");
            if (!(i && !(i.Ub > 0))) {
                i = {};
                i.Na = 0;
                if (zc(yc.prototype, f, c[g], b, false, false, null, i))
                    if (i.Na < a) {
                        a = i.Na;
                        d = c[g]
                    }
            }
        }
    if (d) {
        c = Ma(b);
        va(c, a);
        b.Q = b.$.add(c)
    }
    return d
}

function Bc() {
    this.h = "SetOrChangeAVariable"
}
Bc.prototype.i = function() {
    var a = new Bc;
    a.Ob = this.Ob;
    a.Il = this.Il;
    a.Ff = this.Ff;
    a.Vd = this.Vd;
    return a
};
Bc.prototype.execute = function(a, b) {
    if (a && b)
        if (this.Ob != null) {
            a = Tb(this.Ob, true, b);
            if (a != null) {
                var c = null;
                if (this.Ff == 1) {
                    c = Tb(this.Vd, false, b);
                    if (c == null) return
                }
                if (c == null) {
                    c = new Cc;
                    Dc(c, this.Vd)
                }
                switch (this.Il) {
                    case 0:
                        c = c;
                        if (c != null) {
                            a.ec = c.ec;
                            a.Tc = c.Tc;
                            a.lc = c.lc;
                            a.jc = c.jc
                        }
                        break;
                    case 1:
                        Ec(a, Q(a) + Q(c));
                        break;
                    case 2:
                        Ec(a, Q(a) - Q(c));
                        break;
                    case 3:
                        c = Q(c);
                        Ec(a, c != 0 ? Q(a) / c : 0);
                        break;
                    case 4:
                        c = Q(c);
                        Fc(a, c != 0 ? Math.floor(Q(a) / c) : 0);
                        break;
                    case 5:
                        Ec(a, Q(a) * Q(c));
                        break;
                    case 6:
                        Fc(a, Math.floor(Q(a) * Q(c)));
                        break
                }
                Gc(a,
                    b)
            }
        }
};

function Hc() {
    this.h = "IfVariable"
}
Hc.prototype.i = function(a, b) {
    var c = new Hc;
    c.Ob = this.Ob;
    c.mj = this.mj;
    c.Ff = this.Ff;
    c.Vd = this.Vd;
    c.r = this.r ? this.r.i(a, b) : null;
    c.wi = this.wi ? this.wi.i(a, b) : null;
    return c
};
Hc.prototype.execute = function(a, b) {
    if (a && b)
        if (this.Ob != null) {
            var c = Tb(this.Ob, true, b);
            if (c != null) {
                var d = null;
                if (this.Ff == 1) {
                    d = Tb(this.Vd, false, b);
                    if (d == null) return
                }
                if (d == null) {
                    d = new Cc;
                    Dc(d, this.Vd)
                }
                b = false;
                switch (this.mj) {
                    case 0:
                    case 1:
                        b = c.ec == 0 && d.ec == 0 ? Ub(c) == Ub(d) : n.F(Q(c), Q(d));
                        if (this.mj == 1) b = !b;
                        break;
                    case 2:
                        b = Q(c) > Q(d);
                        break;
                    case 3:
                        b = Q(c) < Q(d);
                        break
                }
                if (b) this.r && this.r.execute(a);
                else this.wi && this.wi.execute(a)
            }
        }
};

function Ic() {
    this.hi = null;
    this.ba = false;
    this.h = "RestartBehaviors"
}
Ic.prototype.i = function(a, b) {
    var c = new Ic;
    c.hi = this.hi;
    c.ba = this.ba;
    if (c.ba == a) c.ba = b;
    return c
};
Ic.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.ba) c = a;
        else if (this.hi != -1) c = Sb(b, this.hi);
        if (c)
            for (a = 0; a < c.ka.length; ++a) {
                b = c.ka[a];
                b != null && b.reset()
            }
    }
};

function Jc() {
    this.h = "PlaySound"
}
Jc.prototype.i = function(a, b) {
    var c = new Jc;
    c.Qc = this.Qc;
    c.tg = this.tg;
    c.Ll = this.Ll ? this.Ll.e() : null;
    c.re = this.re;
    c.Lh = this.Lh;
    c.hf = this.hf;
    c.Og = this.Og;
    c.sg = this.sg;
    c.Nb = this.Nb;
    if (c.Qc == a) c.Qc = b;
    return c
};
Jc.prototype.execute = function(a, b) {
    if (!(b == null || this.Nb == null)) this.Mc = Kc(n.Xd, this.Nb, this.hf, this.Og)
};

function Lc() {
    this.h = "StopSpecificSound"
}
Lc.prototype.i = function() {
    var a = new Lc;
    a.Nb = this.Nb;
    return a
};
Lc.prototype.execute = function(a, b) {
    b == null || this.Nb == null || Mc(n.Xd, this.Nb.l)
};

function Nc() {
    this.h = "StopSound"
}
Nc.prototype.i = function() {
    var a = new Nc;
    a.Zn = this.Zn;
    a.rq = this.rq;
    return a
};
Nc.prototype.execute = function() {
    for (var a = n.Xd, b = 0; b < a.Gb.length; ++b) {
        var c = a.Gb[b];
        c.Ji = true;
        c.src.bc.pause()
    }
    a.Gb = []
};

function Oc() {
    this.h = "StoreLoadVariable"
}
Oc.prototype.i = function() {
    var a = new Oc;
    a.Mj = this.Mj;
    a.Ob = this.Ob;
    return a
};

function Pc(a, b, c, d) {
    a = new Date;
    a.setDate(a.getDate() + d);
    c = escape(c) + ("; expires=" + a.toUTCString());
    document.cookie = b + "=" + c
}

function Qc(a, b) {
    a = document.cookie.split(";");
    for (var c = 0; c < a.length; ++c) {
        var d = a[c],
            e = d.indexOf("="),
            f = d.substr(0, e);
        f = f.replace(/^\s+|\s+$/g, "");
        if (f == b) return unescape(d.substr(e + 1))
    }
    return null
}
Oc.prototype.execute = function(a, b) {
    if (!(this.Ob == null || this.Ob == "")) {
        a = Tb(this.Ob, this.Mj, b);
        if (a != null) try {
            this.Mj ? Dc(a, Qc(this, a.getName())) : Pc(this, a.getName(), Ub(a), 99)
        } catch (c) {}
    }
};

function Rc(a) {
    this.Te = [];
    this.va = a
}
Rc.prototype.execute = function(a) {
    for (var b = 0; b < this.Te.length; ++b) this.Te[b].execute(a, this.va)
};

function Sc(a, b) {
    b != null && a.Te.push(b)
}

function Tc(a, b) {
    for (var c = 0; c < a.Te.length; ++c) {
        var d = a.Te[c];
        if (d.h == b) return d
    }
    return null
}
Rc.prototype.i = function(a, b) {
    for (var c = new Rc(this.va), d = 0; d < this.Te.length; ++d) {
        var e = this.Te[d];
        e.i != null && Sc(c, e.i(a, b))
    }
    return c
};

function Uc(a) {
    this.Da = a;
    this.h = "RestartScene"
}
Uc.prototype.i = function() {
    var a = new Uc;
    a.sf = this.sf;
    return a
};
Uc.prototype.execute = function() {
    this.Da && this.Da.Nm(this.sf)
};

function Vc() {
    this.h = "ActionDeleteSceneNode"
}
Vc.prototype.i = function(a, b) {
    var c = new Vc;
    c.Bg = this.Bg;
    c.Zk = this.Zk;
    c.fm = this.fm;
    if (c.Bg == a) c.Bg = b;
    return c
};
Vc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.Zk) c = a;
        else if (this.Bg != -1) c = Sb(b, this.Bg);
        c != null && Wc(b, c, this.fm)
    }
};

function Xc() {
    this.h = "ActionCloneSceneNode"
}
Xc.prototype.i = function(a, b) {
    var c = new Xc;
    c.Ag = this.Ag;
    c.Uk = this.Uk;
    c.r = this.r ? this.r.i(a, b) : null;
    if (c.Ag == a) c.Ag = b;
    return c
};
Xc.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.Uk) c = a;
        else if (this.Ag != -1) c = Sb(b, this.Ag);
        if (c) {
            a = c.Ja;
            var d = -1;
            d = Yc(b);
            a = c.i(c.vb, a, d);
            if (a != null) {
                a.Ja = d;
                vc(c.vb, a);
                b.Ri(c, a);
                if (c = c.db)
                    if (c = c.i(a)) {
                        a.db = c;
                        b.zd && Zc(b.zd, c)
                    }
                this.r && this.r.execute(a)
            }
        }
    }
};

function $c(a) {
    this.h = "ActionPlayMovie";
    this.Da = a
}
$c.prototype.i = function(a, b) {
    var c = new $c;
    c.hf = this.hf;
    c.lj = this.lj;
    c.km = this.km;
    c.Qc = this.Qc;
    c.tg = this.tg;
    c.pl = this.pl;
    c.dj = this.dj ? this.dj.i(a, b) : null;
    c.cj = this.cj ? this.cj.i(a, b) : null;
    if (c.Qc == a) c.Qc = b;
    return c
};
$c.prototype.execute = function(a, b) {
    if (a && b) {
        var c = null;
        if (this.tg) c = a;
        else if (this.Qc != -1) c = Sb(b, this.Qc);
        a: {
            a = this.Da;
            var d = this.km;b = this.dj;
            for (var e = this.cj, f = 0; f < a.Xg.length; ++f) {
                var g = a.Xg[f];
                if (g.filename == d) {
                    a = g;
                    break a
                }
            }
            if (this.lj == 0) {
                d = new ad(d, a.O);
                d.Ek = b;
                d.Fk = e;
                a.Xg.push(d);
                a = d
            } else a = null
        }
        if (a != null) switch (this.lj) {
            case 0:
                a.play(this.hf);
                if (c)
                    if (c.k() == "2doverlay") c.Ha = a.Xi;
                    else {
                        c = c.uc(this.pl);
                        if (c != null) c.Ba = a.Xi
                    }
                break;
            case 1:
                a.pause();
                break;
            case 2:
                a.stop();
                break
        }
    }
};

function ad(a, b) {
    this.filename = a;
    this.td = null;
    this.Om = b;
    this.Fk = this.Ek = this.Xi = null;
    this.hs = this.Oi = this.np = false;
    this.state = 0;
    this.Em = this.hp = false;
    this.xr = function() {
        this.state = 2;
        this.td.play();
        this.np = true;
        var c = this.Xi,
            d = bd(this.Om, this.td, true);
        c.Ha = d.Ha;
        c.je = d.je;
        c.ie = d.ie;
        c.qg = d.qg;
        c.pg = d.pg
    };
    this.yr = function() {
        this.state = 0;
        this.Oi = true
    };
    this.Eq = function() {
        this.state = 0;
        this.Em = this.Oi = true
    };
    this.play = function(c) {
        if (!(this.state == 2 || this.state == 1)) {
            if (this.td)
                if (this.state == 3) {
                    this.td.play();
                    this.state = 2;
                    this.Oi = false;
                    return
                } else if (this.state == 0) {
                this.td.currentTime = 0;
                this.td.play();
                this.state = 2;
                this.Oi = false;
                return
            }
            var d = document.createElement("video"),
                e = this;
            this.td = d;
            this.hp = c;
            d.addEventListener("canplaythrough", function() {
                e.xr()
            }, true);
            d.addEventListener("ended", function() {
                e.yr()
            }, true);
            d.addEventListener("error", function() {
                e.Eq()
            }, true);
            d.preload = "auto";
            d.src = a;
            d.style.display = "none";
            if (this.hp) d.loop = true;
            this.state = 1;
            c = document.createElement("canvas");
            if (c != null) {
                c.width = 16;
                c.height =
                    16;
                this.Xi = bd(this.Om, c, true)
            }
        }
    };
    this.pause = function() {
        if (this.state == 2) {
            this.td.pause();
            this.state = 3
        }
    };
    this.stop = function() {
        if (this.state == 2) {
            this.td.pause();
            this.state = 0
        }
    };
    this.vr = function() {
        this.np && this.state == 2 && cd(this.Om, this.Xi, this.td)
    };
    this.Tq = function() {
        if (this.state == 0) return true;
        return this.Oi
    }
};

function dd() {
    this.h = 0;
    this.rc = this.Ba = null;
    this.If = true;
    this.Wb = this.Rb = false;
    this.he = true
}
dd.prototype.Mk = function(a) {
    if (a) {
        this.h = a.h;
        this.If = a.If;
        this.Ba = a.Ba;
        this.rc = a.rc;
        this.Rb = a.Rb;
        this.Wb = a.Wb;
        this.he = a.he
    }
};
dd.prototype.e = function() {
    var a = new dd;
    a.h = this.h;
    a.nm = this.nm;
    a.If = this.If;
    a.Ba = this.Ba;
    a.rc = this.rc;
    a.Rb = this.Rb;
    a.Wb = this.Wb;
    a.he = this.he;
    return a
};

function ed(a) {
    return a.h == fd || a.h == gd || a.h == hd || a.h == id || a.h == jd
}
l = dd.prototype;
l.h = 0;
l.Ba = null;
l.rc = null;
l.If = true;
l.nm = true;
l.Rb = false;
l.he = true;
l.Wb = false;
var fd = 12,
    gd = 13,
    jd = 16,
    hd = 14,
    id = 26;

function kd() {
    this.g = new B;
    this.u = new dd;
    this.fa = [];
    this.m = [];
    this.Xa = null;
    this.Zj = this.Yj = false;
    this.yd = this.Sd = null
}
l = kd.prototype;
l.g = null;
l.u = null;
l.fa = null;
l.m = null;
l.Xa = null;
l.Sd = null;
l.yd = null;
l.update = function(a, b) {
    if (a) this.Yj = true;
    else if (b) this.Zj = true;
    else this.Xa = null
};

function ld(a) {
    if (!a.m || a.m.length == 0) a.g.reset(0, 0, 0);
    else {
        var b = a.m[0];
        a.g.D = b.f.e();
        a.g.N = b.f.e();
        for (var c = 1; c < a.m.length; ++c) {
            b = a.m[c];
            C(a.g, b.f)
        }
    }
}
kd.prototype.i = function() {
    var a = new kd;
    a.g = this.g.e();
    a.u = this.u.e();
    if (this.m)
        for (var b = 0; b < this.m.length; ++b) a.m.push(this.m[b]);
    if (this.fa)
        for (b = 0; b < this.fa.length; ++b) a.fa.push(this.fa[b]);
    if (this.Sd)
        for (b = 0; b < this.Sd.length; ++b) a.Sd.push(this.Sd[b].e());
    if (this.yd)
        for (b = 0; b < this.yd.length; ++b) a.yd.push(this.yd[b].e());
    return a
};

function md() {
    this.g = new B;
    this.qa = []
}
md.prototype.vd = function(a) {
    this.qa.push(a)
};

function nd(a) {
    var b = 0;
    if (a.qa)
        for (var c = 0; c < a.qa.length; ++c)
            if (a.qa[c].fa) b += a.qa[c].fa.length;
    return b / 3
}
md.prototype.i = function() {
    var a = new md;
    a.g = this.g.e();
    if (this.qa)
        for (var b = 0; b < this.qa.length; ++b) this.qa[b] && a.qa.push(this.qa[b].i());
    return a
};
n.Wp = function() {
    this.ql = []
};

function od(a, b) {
    for (var c = 0; c < a.ql.length; ++c) {
        var d = a.ql[c];
        if (d.l == b) return d
    }
    return null
}
n.lq = function() {
    this.l = "";
    this.Kh = new I;
    this.Z = [];
    this.jh = [];
    this.nf = [];
    this.ze = [];
    this.rf = [];
    this.Hf = [];
    this.si = new B;
    this.Cj = new I;
    this.af = new I;
    this.hg = new I;
    this.xc = new s(0, 0, 0);
    this.Qb = new s(1, 1, 1);
    this.yc = new Ab;
    this.Ch = new I;
    this.nn = false;
    this.pp = this.qp = this.ip = -1
};
n.pq = function() {
    this.Wi = this.Zi = this.Hi = 0;
    this.ao = new s;
    this.$n = new s
};
n.oq = function() {
    this.frame = 0;
    this.scale = new s
};
n.mq = function() {
    this.frame = 0;
    this.position = new s
};
n.nq = function() {
    this.frame = 0;
    this.rotation = new Ab
};
n.Rh = function() {
    this.l = "";
    this.Bc = this.Q = this.xd = 0
};
n.Rh.prototype.l = "";
n.Rh.prototype.xd = 0;
n.Rh.prototype.Q = 0;
n.Rh.prototype.Bc = 0;
n.bm = function() {
    this.l = "";
    this.wd = [];
    this.gd = 0;
    this.ab = [];
    this.ta = [];
    this.qf = [];
    this.Yk = 0;
    this.Dn = this.Ed = false;
    this.Gr = this.Up = this.il = 0;
    this.tb = new B;
    this.bg = 1;
    this.uk = [];
    this.Um = true;
    this.yl = []
};
n.bm.prototype.vd = function(a) {
    this.ab.push(a)
};
n.bm.prototype.lb = ca("tb");

function pd(a, b, c) {
    if (!(b == null && c != null))
        if (b == null)
            for (b = 0; b < a.qf.length; ++b) pd(a, a.qf[b], null);
        else {
            b.Cj = c == null ? b.Kh.e() : K(c.Cj, b.Kh);
            b.hg = b.Kh.e();
            b.af = b.Cj.e();
            if (bb(b.Ch)) {
                b.Ch = b.Cj.e();
                ob(b.Ch)
            }
            for (c = 0; c < b.Z.length; ++c) pd(a, b.Z[c], b)
        }
}

function qd(a, b, c, d, e, f, g, i) {
    var j = -1;
    e = j = -1;
    var m = c.nf;
    e = c.ze;
    c = c.rf;
    var o;
    if (m.length) {
        j = -1;
        if (j == -1)
            for (g = 0; g < m.length; ++g) {
                o = m[g];
                if (o.frame >= b) {
                    j = g;
                    break
                }
            }
        if (j != -1)
            if (a.bg == 0 || j == 0) {
                o = m[j];
                o.position.e()
            } else if (a.bg == 1) {
            o = m[j];
            m = m[j - 1];
            g = b - o.frame;
            j = m.frame - b;
            wa(d, ua(Aa(Aa(m.position.substract(o.position), 1 / (g + j)), g), o.position))
        }
    }
    if (e.length) {
        j = -1;
        if (j == -1)
            for (g = 0; g < e.length; ++g) {
                d = e[g];
                if (d.frame >= b) {
                    j = g;
                    break
                }
            }
        if (j != -1)
            if (a.bg == 0 || j == 0) {
                d = e[j];
                d.scale.e()
            } else if (a.bg == 1) {
            d = e[j];
            e = e[j - 1];
            g = b - d.frame;
            j = e.frame - b;
            wa(f, ua(Aa(Aa(e.scale.substract(d.scale), 1 / (g + j)), g), d.scale))
        }
    }
    if (c.length) {
        e = -1;
        if (e == -1)
            for (g = 0; g < c.length; ++g) {
                f = c[g];
                if (f.frame >= b) {
                    e = g;
                    break
                }
            }
        if (e != -1)
            if (a.bg == 0 || e == 0) {
                f = c[e];
                f.rotation.e()
            } else if (a.bg == 1) {
            f = c[e];
            a = c[e - 1];
            g = b - f.frame;
            j = a.frame - b;
            Cb(i, f.rotation, a.rotation, g / (g + j))
        }
    }
}

function rd(a, b, c) {
    if (b == null)
        for (b = 0; b < a.qf.length; ++b) rd(a, a.qf[b], null);
    else {
        b.af = c == null || b.nn ? b.hg.e() : K(c.af, b.hg);
        for (c = 0; c < b.Z.length; ++c) rd(a, b.Z[c], b)
    }
}

function sd(a, b, c, d) {
    if (b.Hf.length) {
        c = K(b.af, b.Ch);
        for (var e = new s, f = new s, g = a.ab, i, j = 0; j < b.Hf.length; ++j) {
            var m = b.Hf[j];
            i = m.ao;
            e.c = i.c * c.p + i.b * c.w + i.d * c.A + c.J;
            e.b = i.c * c.v + i.b * c.q + i.d * c.B + c.K;
            e.d = i.c * c.s + i.b * c.t + i.d * c.o + c.C;
            d && jb(c, f, m.$n);
            i = g[m.Hi];
            i = i.m[m.Zi];
            if (a.uk[m.Hi][m.Zi]) {
                i.f.oa(x(e, m.Wi));
                d && i.j.oa(x(f, m.Wi))
            } else {
                a.uk[m.Hi][m.Zi] = true;
                i.f = x(e, m.Wi);
                if (d) i.j = x(f, m.Wi)
            }
        }
    }
    for (c = 0; c < b.Z.length; ++c) sd(a, b.Z[c], b, d)
}

function td(a, b) {
    if (!b) return null;
    var c = a.yl.length;
    b = b.toLowerCase();
    for (var d = 0; d < c; ++d) {
        var e = a.yl[d];
        if (e.l && e.l.toLowerCase() == b) return e
    }
    return null
};

function ud() {
    this.Ya = [];
    this.O = null;
    this.ak = ""
}

function vd(a, b, c) {
    if (b == null || b == "") return null;
    var d = wd(a, b);
    if (d != null) return d;
    if (c) {
        d = new Qb;
        d.l = b;
        xd(a, d);
        d.md = new Image;
        d.md.onload = function() {
            var e = d,
                f = a.O;
            if (f != null) {
                var g = f.U,
                    i = g.createTexture(),
                    j = e.md;
                if ((j.width & j.width - 1) != 0 || (j.height & j.height - 1) != 0) {
                    var m = document.createElement("canvas");
                    if (m != null) {
                        m.width = yd(f, j.width);
                        m.height = yd(f, j.height);
                        m.getContext("2d").drawImage(j, 0, 0, j.width, j.height, 0, 0, m.width, m.height);
                        j = m
                    }
                }
                g.bindTexture(g.TEXTURE_2D, i);
                zd(f, i, j);
                g.generateMipmap(g.TEXTURE_2D);
                g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
                g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_NEAREST);
                g.bindTexture(g.TEXTURE_2D, null);
                f.Wm = true;
                e.Ha = i;
                e.mc = true
            }
        };
        d.md.src = d.l;
        return d
    }
    return null
}

function wd(a, b) {
    for (var c = 0; c < a.Ya.length; ++c) {
        var d = a.Ya[c];
        if (d.l == b) return d
    }
    return null
}

function xd(a, b) {
    if (b != null) {
        wd(a, b.l) != null && n.pa.print(b.l);
        a.Ya.push(b)
    }
};

function Ad(a) {
    this.qo = a;
    this.zq = a.length;
    this.Ra = 0;
    this.Vr = null;
    this.Wr = 8;
    this.uo = false
}

function Bd(a) {
    return a.zq - a.Ra
}

function Cd(a, b) {
    return a.qo.charCodeAt(b) & 255
}

function R(a) {
    return Dd(a, 1) != 0
}

function Ed(a, b) {
    for (var c = 0, d = a.Ra, e = d + b; e > d;) c = c * 256 + Cd(a, --e);
    a.Ra += b;
    return c
}

function Dd(a, b) {
    a = Ed(a, b);
    if (a & 1 << b * 8 - 1) a = (~a + 1) * -1;
    return a
}

function U(a) {
    return Dd(a, 4)
}

function W(a) {
    var b;
    var c = a.qo,
        d = a.Ra;
    b = c.charCodeAt(d + 3) & 255;
    var e = c.charCodeAt(d + 2) & 255,
        f = c.charCodeAt(d + 1) & 255;
    d = c.charCodeAt(d + 0) & 255;
    c = (b << 1 & 255 | e >> 7) - 127;
    e = (e & 127) << 16 | f << 8 | d;
    b = e == 0 && c == -127 ? 0 : (1 - 2 * (b >> 7)) * (1 + e * Math.pow(2, -23)) * Math.pow(2, c);
    a.Ra += 4;
    return b
}
Ad.prototype.ya = function(a, b) {
    this.uo = a || 0;
    this.buffer = [];
    if (b) {
        for (var c = a = b.length, d = this.buffer = new Array(a); c; d[a - c] = b.charCodeAt(--c));
        this.uo && d.reverse()
    }
};
Ad.prototype.reset = function() {
    this.Ra = 0;
    return this
};

function Fd() {
    this.U = this.canvas = null;
    this.height = this.width = 0;
    this.Wm = false;
    this.Fa = new I;
    this.Vc = new I;
    this.ia = new I;
    this.Pb = new oa;
    this.Pb.pc = 0;
    this.Pb.kc = 0;
    this.Pb.fc = 0;
    this.fs = this.gs = null;
    this.bb = [];
    this.nb = [];
    this.jb = [];
    this.ob = [];
    this.pb = [];
    this.se = 30;
    this.nk = this.Sh = this.Ml = this.Fn = this.En = null;
    this.ff = [];
    this.Zc = this.wj = null;
    this.Co = false;
    this.Pi = true;
    this.qh = null;
    this.Cd = this.cg = false;
    this.Tb = new oa;
    this.Ah = 0.01;
    this.Ei = 1;
    this.Fi = 4;
    this.Sc = false;
    this.mi = this.Fg = this.$l = this.Zl = null;
    this.Un =
        false;
    this.li = this.ki = 3.0E-6;
    this.ni = this.Ur = 0.5
}
Fd.prototype.Sh = null;
Fd.prototype.Jb = ca("width");

function Gd(a) {
    var b = a.Wm;
    a.Wm = false;
    return b
}
Fd.prototype.Ib = ca("height");

function Hd(a, b, c) {
    if (b != null) {
        var d = a.U;
        if (d != null) {
            var e = null;
            try {
                e = a.Sc && !c ? a.pb[b.h] : a.Cd ? b.Wb ? a.ob[b.h] : a.jb[b.h] : b.Wb ? a.nb[b.h] : a.bb[b.h]
            } catch (f) {}
            if (e != null) {
                a.Zc = e;
                d.useProgram(e);
                if (a.Sh != null) try {
                    a.Sh(b.h)
                } catch (g) {}
                e.Rm != null && e.Rm();
                if (e.wo) {
                    d.enable(d.BLEND);
                    d.blendFunc(e.xo, e.vo)
                } else d.disable(d.BLEND);
                !b.If || b.h == fd || b.h == gd || b.h == jd ? d.depthMask(false) : d.depthMask(true);
                b.nm ? d.enable(d.DEPTH_TEST) : d.disable(d.DEPTH_TEST);
                d.depthFunc(a.cg ? d.GREATER : d.LEQUAL);
                b.he ? d.enable(d.CULL_FACE) :
                    d.disable(d.CULL_FACE);
                if (b.Ba && b.Ba.mc) {
                    d.activeTexture(d.TEXTURE0);
                    d.bindTexture(d.TEXTURE_2D, b.Ba.Ha);
                    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, b.Rb ? d.CLAMP_TO_EDGE : d.REPEAT);
                    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, b.Rb ? d.CLAMP_TO_EDGE : d.REPEAT)
                } else {
                    d.activeTexture(d.TEXTURE0);
                    d.bindTexture(d.TEXTURE_2D, null)
                }
                d.uniform1i(d.getUniformLocation(e, "texture1"), 0);
                if (b.rc && b.rc.mc) {
                    d.activeTexture(d.TEXTURE1);
                    d.bindTexture(d.TEXTURE_2D, b.rc.Ha)
                } else {
                    d.activeTexture(d.TEXTURE1);
                    d.bindTexture(d.TEXTURE_2D,
                        null)
                }
                d.uniform1i(d.getUniformLocation(e, "texture2"), 1)
            }
        }
    }
}

function Id(a, b, c) {
    if (b != null)
        if (a.U != null) {
            if (b.Xa == null) Jd(a, b);
            else if (b.Zj) {
                if (!(b.m.length == 0 || b.fa.length == 0))
                    if (b.Xa.Ap < b.m.length || b.Xa.Hk < b.fa.length) {
                        b.Xa = null;
                        Jd(a, b)
                    } else if (b.Xa != null) {
                    for (var d = a.U, e = b.m.length, f = b.Xa.jp, g = b.Xa.Cq, i = 0; i < e; ++i) {
                        var j = b.m[i];
                        f[i * 3 + 0] = j.f.c;
                        f[i * 3 + 1] = j.f.b;
                        f[i * 3 + 2] = j.f.d;
                        g[i * 4 + 0] = n.cd(j.la) / 255;
                        g[i * 4 + 1] = n.ad(j.la) / 255;
                        g[i * 4 + 2] = n.$c(j.la) / 255;
                        g[i * 4 + 3] = n.Yd(j.la) / 255
                    }
                    d.bindBuffer(d.ARRAY_BUFFER, b.Xa.Kk);
                    d.bufferSubData(d.ARRAY_BUFFER, 0, f);
                    d.bindBuffer(d.ARRAY_BUFFER,
                        b.Xa.sm);
                    d.bufferSubData(d.ARRAY_BUFFER, 0, g);
                    if (b.Xa.Hk < b.fa.length) {
                        e = b.fa.length;
                        f = new WebGLUnsignedShortArray(e);
                        for (g = 0; g < e; g += 3) {
                            f[g + 0] = b.fa[g + 0];
                            f[g + 1] = b.fa[g + 2];
                            f[g + 2] = b.fa[g + 1]
                        }
                        b.Xa.Gk = d.createBuffer();
                        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.Xa.Gk);
                        d.bufferData(d.ELEMENT_ARRAY_BUFFER, f, d.STATIC_DRAW);
                        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, null)
                    }
                    b.Xa.Hk = b.fa.length;
                    b.Xa.Ap = b.m.length
                }
            } else b.Yj && Kd(a, b);
            b.Yj = false;
            b.Zj = false;
            b = b.Xa;
            c = c;
            d = a.U;
            e = b.Vm && b.rm;
            d.enableVertexAttribArray(0);
            d.enableVertexAttribArray(1);
            d.enableVertexAttribArray(2);
            d.enableVertexAttribArray(3);
            d.enableVertexAttribArray(4);
            d.bindBuffer(d.ARRAY_BUFFER, b.Kk);
            d.vertexAttribPointer(0, 3, d.FLOAT, false, 0, 0);
            d.bindBuffer(d.ARRAY_BUFFER, b.yp);
            d.vertexAttribPointer(1, 2, d.FLOAT, false, 0, 0);
            d.bindBuffer(d.ARRAY_BUFFER, b.zp);
            d.vertexAttribPointer(2, 2, d.FLOAT, false, 0, 0);
            d.bindBuffer(d.ARRAY_BUFFER, b.dp);
            d.vertexAttribPointer(3, 3, d.FLOAT, false, 0, 0);
            d.bindBuffer(d.ARRAY_BUFFER, b.sm);
            d.vertexAttribPointer(4, 4, d.FLOAT, false, 0, 0);
            if (e) {
                d.enableVertexAttribArray(5);
                d.enableVertexAttribArray(6);
                d.bindBuffer(d.ARRAY_BUFFER, b.Vm);
                d.vertexAttribPointer(5, 3, d.FLOAT, false, 0, 0);
                d.bindBuffer(d.ARRAY_BUFFER, b.rm);
                d.vertexAttribPointer(6, 3, d.FLOAT, false, 0, 0)
            }
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.Gk);
            g = new I(false);
            a.Fa.ra(g);
            g = K(g, a.Vc);
            g = K(g, a.ia);
            f = a.Zc;
            f.Yo != null && d.uniformMatrix4fv(f.Yo, false, Ld(a, g));
            if (f.To != null) {
                g = new I(true);
                a.Fa.ra(g);
                g = K(g, a.Vc);
                g = K(g, a.ia);
                ob(g);
                g = pb(g);
                d.uniformMatrix4fv(f.To, false, Ld(a, g))
            }
            if (f.Ro != null) {
                g = new I(true);
                g = K(g, a.Vc);
                g = K(g,
                    a.ia);
                d.uniformMatrix4fv(f.Ro, false, Ld(a, g))
            }
            f.So != null && d.uniformMatrix4fv(f.So, false, Ld(a, pb(a.ia)));
            f.Qo != null && Md(a, f, e, e);
            f.No != null && a.U.uniform4f(f.No, a.Tb.pc, a.Tb.kc, a.Tb.fc, 1);
            f.Oo != null && a.U.uniform1f(f.Oo, a.Ah);
            a.Sc && Nd(a, f);
            if (f.Po != null) {
                g = q() * a.Ei / 500 % 1E3;
                a.U.uniform1f(f.Po, g);
                a.U.uniform1f(f.Yq, a.Fi)
            }
            if (c == null) c = b.Hk;
            d.drawElements(d.TRIANGLES, c, d.UNSIGNED_SHORT, 0);
            if (e) {
                d.disableVertexAttribArray(5);
                d.disableVertexAttribArray(6)
            }
        }
}

function Kd(a, b) {
    if (b.Xa != null) {
        a = a.U;
        for (var c = b.m.length, d = b.Xa.jp, e = 0; e < c; ++e) {
            var f = b.m[e];
            d[e * 3 + 0] = f.f.c;
            d[e * 3 + 1] = f.f.b;
            d[e * 3 + 2] = f.f.d
        }
        a.bindBuffer(a.ARRAY_BUFFER, b.Xa.Kk);
        a.bufferSubData(a.ARRAY_BUFFER, 0, d)
    }
}

function Jd(a, b) {
    if (b.Xa == null) {
        a = a.U;
        var c = {},
            d = b.m.length,
            e = new WebGLFloatArray(d * 3),
            f = new WebGLFloatArray(d * 3),
            g = new WebGLFloatArray(d * 2),
            i = new WebGLFloatArray(d * 2),
            j = new WebGLFloatArray(d * 4),
            m = null,
            o = null;
        if (b.Sd) m = new WebGLFloatArray(d * 3);
        if (b.yd) o = new WebGLFloatArray(d * 3);
        for (var p = 0; p < d; ++p) {
            var h = b.m[p];
            e[p * 3 + 0] = h.f.c;
            e[p * 3 + 1] = h.f.b;
            e[p * 3 + 2] = h.f.d;
            f[p * 3 + 0] = h.j.c;
            f[p * 3 + 1] = h.j.b;
            f[p * 3 + 2] = h.j.d;
            g[p * 2 + 0] = h.wa.c;
            g[p * 2 + 1] = h.wa.b;
            i[p * 2 + 0] = h.Ce.c;
            i[p * 2 + 1] = h.Ce.b;
            j[p * 4 + 0] = n.cd(h.la) / 255;
            j[p * 4 + 1] = n.ad(h.la) /
                255;
            j[p * 4 + 2] = n.$c(h.la) / 255;
            j[p * 4 + 3] = n.Yd(h.la) / 255
        }
        if (m && o)
            for (p = 0; p < d; ++p) {
                h = b.Sd[p];
                m[p * 3 + 0] = h.c;
                m[p * 3 + 1] = h.b;
                m[p * 3 + 2] = h.d;
                h = b.yd[p];
                o[p * 3 + 0] = h.c;
                o[p * 3 + 1] = h.b;
                o[p * 3 + 2] = h.d
            }
        p = b.fa.length;
        h = new WebGLUnsignedShortArray(p);
        for (var v = 0; v < p; v += 3) {
            h[v + 0] = b.fa[v + 0];
            h[v + 1] = b.fa[v + 2];
            h[v + 2] = b.fa[v + 1]
        }
        c.Kk = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c.Kk);
        a.bufferData(a.ARRAY_BUFFER, e, a.DYNAMIC_DRAW);
        c.jp = e;
        c.yp = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c.yp);
        a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
        c.zp = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c.zp);
        a.bufferData(a.ARRAY_BUFFER, i, a.STATIC_DRAW);
        c.dp = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c.dp);
        a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
        if (m && o) {
            c.Vm = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, c.Vm);
            a.bufferData(a.ARRAY_BUFFER, m, a.STATIC_DRAW);
            c.rm = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, c.rm);
            a.bufferData(a.ARRAY_BUFFER, o, a.STATIC_DRAW)
        }
        a.bindBuffer(a.ARRAY_BUFFER, null);
        c.sm = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c.sm);
        a.bufferData(a.ARRAY_BUFFER, j, a.STATIC_DRAW);
        c.Cq = j;
        a.bindBuffer(a.ARRAY_BUFFER, null);
        c.Gk = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, c.Gk);
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, h, a.STATIC_DRAW);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
        c.U = a;
        c.Hk = p;
        c.Ap = d;
        b.Xa = c;
        b.Yj = false;
        b.Zj = false
    }
}

function Nd(a, b) {
    var c = a.U;
    if (a.Fg && b.Zo) {
        var d = new I(true);
        d = K(d, a.Fg);
        d = K(d, a.ia);
        c.uniformMatrix4fv(b.Zo, false, Ld(a, d))
    }
    if (a.mi && b.$o) {
        d = new I(true);
        d = K(d, a.mi);
        d = K(d, a.ia);
        c.uniformMatrix4fv(b.$o, false, Ld(a, d))
    }
    b.Vo && c.uniform1f(b.Vo, a.ki);
    b.Wo && c.uniform1f(b.Wo, a.li);
    b.Uo && c.uniform1f(b.Uo, a.kk);
    b.Xo && c.uniform1f(b.Xo, a.ni);
    if (a.Zl) {
        c.activeTexture(c.TEXTURE2);
        c.bindTexture(c.TEXTURE_2D, a.Zl.Ha)
    } else {
        c.activeTexture(c.TEXTURE2);
        c.bindTexture(c.TEXTURE_2D, null)
    }
    c.uniform1i(c.getUniformLocation(b,
        "shadowmap"), 2);
    if (n.tk) {
        if (a.$l) {
            c.activeTexture(c.TEXTURE3);
            c.bindTexture(c.TEXTURE_2D, a.$l.Ha)
        } else {
            c.activeTexture(c.TEXTURE3);
            c.bindTexture(c.TEXTURE_2D, null)
        }
        c.uniform1i(c.getUniformLocation(b, "shadowmap2"), 3)
    }
}

function Md(a, b, c, d) {
    var e = new ArrayBuffer(16 * Float32Array.BYTES_PER_ELEMENT),
        f = new WebGLFloatArray(e);
    e = new ArrayBuffer(20 * Float32Array.BYTES_PER_ELEMENT);
    var g = new WebGLFloatArray(e);
    e = new I(true);
    if (!c && (a.ff != null && a.ff.length > 0 || a.wj != null)) nb(a.ia, e);
    for (c = 0; c < 4; ++c) {
        var i = c * 4;
        if (a.ff != null && c < a.ff.length) {
            var j = a.ff[c],
                m = kb(e, j.Yh);
            f[i] = m.c;
            f[i + 1] = m.b;
            f[i + 2] = m.d;
            m = 1;
            m = d ? 1 / (j.Ga * j.Ga) : j.lh;
            f[i + 3] = m;
            g[i] = j.la.pc;
            g[i + 1] = j.la.kc;
            g[i + 2] = j.la.fc
        } else {
            f[i] = 1;
            f[i + 1] = 0;
            f[i + 2] = 0;
            f[i + 3] = 1;
            g[i] = 0;
            g[i +
                1] = 0;
            g[i + 2] = 0
        }
        g[i + 3] = 1
    }
    g[16] = a.Pb.pc;
    g[17] = a.Pb.kc;
    g[18] = a.Pb.fc;
    g[19] = 1;
    a.U.uniform4fv(b.Qo, f);
    a.U.uniform4fv(b.Xq, g);
    if (b.Lo != null) {
        d = a.wj;
        f = null;
        f = d && d.Ia ? d.Ia.e() : new s(1, 0, 0);
        A(f, -1);
        ib(e, f);
        f.normalize();
        a.U.uniform3f(b.Lo, f.c, f.b, f.d, 1);
        d ? a.U.uniform4f(b.Mo, d.la.pc, d.la.kc, d.la.fc, 1) : a.U.uniform4f(b.Mo, 0, 0, 0, 1)
    }
}

function Od(a, b, c, d, e, f, g) {
    if (!(d <= 0 || e <= 0 || a.width == 0 || a.height == 0)) {
        var i = true;
        if (g == null || g == false) i = false;
        g = a.U;
        g.enableVertexAttribArray(0);
        g.disableVertexAttribArray(1);
        g.disableVertexAttribArray(2);
        g.disableVertexAttribArray(3);
        g.disableVertexAttribArray(4);
        c = a.height - c;
        var j = 2 / a.width,
            m = 2 / a.height;
        b = b * j - 1;
        c = c * m - 1;
        d *= j;
        e *= m;
        j = new WebGLFloatArray(12);
        j[0] = b;
        j[1] = c;
        j[2] = 0;
        j[3] = b + d;
        j[4] = c;
        j[5] = 0;
        j[6] = b + d;
        j[7] = c - e;
        j[8] = 0;
        j[9] = b;
        j[10] = c - e;
        j[11] = 0;
        b = new WebGLUnsignedShortArray(6);
        b[0] = 0;
        b[1] = 2;
        b[2] =
            1;
        b[3] = 0;
        b[4] = 3;
        b[5] = 2;
        c = g.createBuffer();
        g.bindBuffer(g.ARRAY_BUFFER, c);
        g.bufferData(g.ARRAY_BUFFER, j, g.STATIC_DRAW);
        g.vertexAttribPointer(0, 3, g.FLOAT, false, 0, 0);
        d = g.createBuffer();
        g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, d);
        g.bufferData(g.ELEMENT_ARRAY_BUFFER, b, g.STATIC_DRAW);
        a.Zc = a.En;
        g.useProgram(a.Zc);
        g.uniform4f(g.getUniformLocation(a.Zc, "vColor"), n.cd(f) / 255, n.ad(f) / 255, n.$c(f) / 255, i ? n.Yd(f) / 255 : 1);
        g.depthMask(false);
        g.disable(g.DEPTH_TEST);
        if (i) {
            g.enable(g.BLEND);
            g.blendFunc(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA)
        } else g.disable(g.BLEND);
        g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0);
        g.deleteBuffer(c);
        g.deleteBuffer(d)
    }
}

function Qd(a, b, c, d, e, f, g, i, j, m, o) {
    if (!(f == null || f.mc == false || d <= 0 || e <= 0 || a.width == 0 || a.height == 0)) {
        if (j == null) j = 1;
        if (m == null) m = 1;
        var p = true;
        if (g == null || g == false) p = false;
        g = a.U;
        g.enableVertexAttribArray(0);
        g.enableVertexAttribArray(1);
        g.disableVertexAttribArray(2);
        g.disableVertexAttribArray(3);
        g.disableVertexAttribArray(4);
        c = a.height - c;
        var h = 2 / a.width,
            v = 2 / a.height;
        b = b * h - 1;
        c = c * v - 1;
        d *= h;
        e *= v;
        h = new WebGLFloatArray(12);
        h[0] = b;
        h[1] = c;
        h[2] = 0;
        h[3] = b + d;
        h[4] = c;
        h[5] = 0;
        h[6] = b + d;
        h[7] = c - e;
        h[8] = 0;
        h[9] = b;
        h[10] = c -
            e;
        h[11] = 0;
        b = new WebGLFloatArray(8);
        b[0] = 0;
        b[1] = 0;
        b[2] = j;
        b[3] = 0;
        b[4] = j;
        b[5] = m;
        b[6] = 0;
        b[7] = m;
        j = new WebGLUnsignedShortArray(6);
        j[0] = 0;
        j[1] = 2;
        j[2] = 1;
        j[3] = 0;
        j[4] = 3;
        j[5] = 2;
        m = g.createBuffer();
        g.bindBuffer(g.ARRAY_BUFFER, m);
        g.bufferData(g.ARRAY_BUFFER, h, g.STATIC_DRAW);
        g.vertexAttribPointer(0, 3, g.FLOAT, false, 0, 0);
        c = g.createBuffer();
        g.bindBuffer(g.ARRAY_BUFFER, c);
        g.bufferData(g.ARRAY_BUFFER, b, g.STATIC_DRAW);
        g.vertexAttribPointer(1, 2, g.FLOAT, false, 0, 0);
        b = g.createBuffer();
        g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
            b);
        g.bufferData(g.ELEMENT_ARRAY_BUFFER, j, g.STATIC_DRAW);
        a.Zc = i == null ? a.Fn : i;
        g.useProgram(a.Zc);
        g.depthMask(false);
        g.disable(g.DEPTH_TEST);
        if (p) {
            g.enable(g.BLEND);
            g.blendFunc(g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA)
        } else g.disable(g.BLEND);
        g.activeTexture(g.TEXTURE0);
        g.bindTexture(g.TEXTURE_2D, f.Ha);
        if (o) {
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST)
        } else {
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
            g.texParameteri(g.TEXTURE_2D,
                g.TEXTURE_MIN_FILTER, g.LINEAR)
        }
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
        g.activeTexture(g.TEXTURE1);
        g.bindTexture(g.TEXTURE_2D, null);
        g.drawElements(g.TRIANGLES, 6, g.UNSIGNED_SHORT, 0);
        g.deleteBuffer(c);
        g.deleteBuffer(m);
        g.deleteBuffer(b);
        g.activeTexture(g.TEXTURE0);
        g.bindTexture(g.TEXTURE_2D, f.Ha);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_NEAREST)
    }
}

function Rd(a, b, c, d, e, f, g) {
    if (!(f == null || f.mc == false || d <= 0 || e <= 0 || a.width == 0 || a.height == 0)) {
        var i = a.U;
        a.Zc = a.Ml;
        i.useProgram(a.Zc);
        i.uniform4f(i.getUniformLocation(a.Zc, "vColor"), n.cd(g) / 255, n.ad(g) / 255, n.$c(g) / 255, n.Yd(g) / 255);
        Qd(a, b, c, d, e, f, true, a.Ml, f.qg / f.je, f.pg / f.ie)
    }
}

function Sd(a) {
    a.ff = [];
    a.wj = null
}

function Td(a, b) {
    a.ff.push(b)
}

function Ud(a, b) {
    a.wj = b
}

function Vd(a) {
    if (!(a.canvas == null || a.U == null))
        if (!(a.width == a.canvas.width && a.height == a.canvas.height)) {
            a.width = a.canvas.width;
            a.height = a.canvas.height;
            var b = a.U;
            b.viewport && b.viewport(0, 0, a.width, a.height)
        }
}
Fd.prototype.gb = function(a) {
    this.canvas = a;
    this.U = null;
    try {
        a = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d", "3d"];
        for (var b = 0; b < a.length; b++) try {
            this.U = this.canvas.getContext(a[b], {
                alpha: false
            });
            if (this.U != null) break
        } catch (c) {}
    } catch (d) {}
    if (this.U == null) return false;
    else {
        if (typeof WebGLFloatArray == "undefined" && typeof Float32Array != "undefined") try {
            WebGLFloatArray = Float32Array;
            WebGLUnsignedShortArray = Uint16Array
        } catch (e) {
            ja(n.pa, "Ошибка.")
        }
        if (typeof WebGLFloatArray ==
            "undefined" && typeof CanvasFloatArray != "undefined") try {
            WebGLFloatArray = CanvasFloatArray;
            WebGLUnsignedShortArray = CanvasUnsignedShortArray
        } catch (f) {
            ja(n.pa, "Ошибка.")
        }
        a = this.U;
        a.getProgramParameter || (a.getProgramParameter = a.getProgrami);
        a.getShaderParameter || (a.getShaderParameter = a.getShaderi);
        a = this.U;
        this.Pi = true;
        var g = b = X(this, this.dc, this.Mf),
            i = X(this, this.dc, this.um),
            j = X(this, this.dc, this.Kq),
            m = X(this, this.dc, this.Mf, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA),
            o = X(this, this.dc, this.zk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA),
            p = X(this, this.Ep, this.zk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA),
            h = X(this, this.dc, this.Mf, true, a.ONE, a.ONE_MINUS_SRC_COLOR),
            v = X(this, this.Pk, this.um),
            r = X(this, this.Pk, this.um, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA),
            E = X(this, this.Dp, this.Mf),
            z = X(this, this.Cp, this.Fo),
            u = X(this, this.dc, this.Ho);
        this.En = X(this, this.zr, this.Pq);
        this.Fn = X(this, this.Bp, this.Mq);
        this.Ml = X(this, this.Bp, this.Hq);
        this.bb[0] = g;
        this.bb[1] = g;
        this.bb[2] = i;
        this.bb[3] =
            i;
        this.bb[4] = i;
        this.bb[5] = j;
        this.bb[fd] = h;
        this.bb[gd] = m;
        this.bb[hd] = o;
        this.bb[11] = v;
        this.bb[jd] = r;
        this.bb[17] = z;
        this.bb[25] = u;
        this.bb[id] = p;
        this.bb[23] = E;
        g = X(this, this.ud, this.Mf);
        m = X(this, this.ud, this.Mf, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        o = X(this, this.ud, this.zk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        p = X(this, this.Fp, this.zk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        h = X(this, this.ud, this.Mf, true, a.ONE, a.ONE_MINUS_SRC_COLOR);
        v = X(this, this.Yg, this.Eo);
        r = X(this, this.Yg, this.Eo, true, a.SRC_ALPHA,
            a.ONE_MINUS_SRC_ALPHA);
        u = X(this, this.ud, this.Ho);
        this.nb[0] = g;
        this.nb[1] = g;
        this.nb[2] = i;
        this.nb[3] = i;
        this.nb[4] = i;
        this.nb[5] = j;
        this.nb[fd] = h;
        this.nb[gd] = m;
        this.nb[hd] = o;
        this.nb[11] = v;
        this.nb[jd] = r;
        this.nb[17] = z;
        this.nb[25] = u;
        this.nb[id] = p;
        i = X(this, this.dc, this.Nf);
        j = X(this, this.dc, this.vm);
        m = X(this, this.dc, this.Lq);
        o = X(this, this.dc, this.Nf, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        p = X(this, this.dc, this.Ak, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        h = X(this, this.Ep, this.Ak, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        r = X(this, this.dc, this.Nf, true, a.ONE, a.ONE_MINUS_SRC_COLOR);
        E = X(this, this.Pk, this.vm);
        z = X(this, this.Pk, this.vm, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        u = X(this, this.Dp, this.Nf);
        v = X(this, this.Cp, this.Fo);
        var y = X(this, this.dc, this.Io);
        this.jb[0] = i;
        this.jb[1] = i;
        this.jb[2] = j;
        this.jb[3] = j;
        this.jb[4] = j;
        this.jb[5] = m;
        this.jb[fd] = r;
        this.jb[gd] = o;
        this.jb[hd] = p;
        this.jb[11] = E;
        this.jb[jd] = z;
        this.jb[17] = v;
        this.jb[25] = y;
        this.jb[id] = h;
        this.jb[23] = u;
        i = X(this, this.ud, this.Nf);
        o = X(this, this.ud, this.Nf, true, a.SRC_ALPHA,
            a.ONE_MINUS_SRC_ALPHA);
        p = X(this, this.ud, this.Ak, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        h = X(this, this.Fp, this.Ak, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        r = X(this, this.ud, this.Nf, true, a.ONE, a.ONE_MINUS_SRC_COLOR);
        E = X(this, this.Yg, this.yk);
        z = X(this, this.Yg, this.yk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        y = X(this, this.ud, this.Io);
        this.ob[0] = i;
        this.ob[1] = i;
        this.ob[2] = j;
        this.ob[3] = j;
        this.ob[4] = j;
        this.ob[5] = m;
        this.ob[fd] = r;
        this.ob[gd] = o;
        this.ob[hd] = p;
        this.ob[11] = E;
        this.ob[jd] = z;
        this.ob[17] = v;
        this.ob[25] =
            y;
        this.ob[id] = h;
        r = this.Un ? this.Oq : this.Nq;
        i = X(this, this.aj, r);
        o = X(this, this.aj, r, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        p = X(this, this.aj, this.Go, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        h = X(this, this.Dr, this.Go, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        r = X(this, this.aj, r, true, a.ONE, a.ONE_MINUS_SRC_COLOR);
        E = X(this, this.Yg, this.yk);
        z = X(this, this.Yg, this.yk, true, a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        y = X(this, this.aj, this.Qq);
        this.pb[0] = i;
        this.pb[1] = i;
        this.pb[2] = j;
        this.pb[3] = j;
        this.pb[4] = j;
        this.pb[5] = m;
        this.pb[fd] =
            r;
        this.pb[gd] = o;
        this.pb[hd] = p;
        this.pb[11] = E;
        this.pb[jd] = z;
        this.pb[17] = v;
        this.pb[25] = y;
        this.pb[id] = h;
        this.Pi = true;
        for (i = 0; i < this.se; ++i) {
            if (this.bb[i] == null) this.bb[i] = b;
            if (this.nb[i] == null) this.nb[i] = b;
            if (this.jb[i] == null) this.jb[i] = b;
            if (this.ob[i] == null) this.ob[i] = b;
            if (this.pb[i] == null) this.pb[i] = b
        }
        a.useProgram(g);
        this.Zc = g;
        a.clearColor(0, 0, 1, 1);
        a.clearDepth(1);
        a.depthMask(true);
        a.enable(a.DEPTH_TEST);
        a.disable(a.BLEND);
        a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        a.enable(a.CULL_FACE);
        a.cullFace(a.BACK);
        Vd(this)
    }
    return true
};

function Wd(a, b, c) {
    var d = a.U,
        e = d.createShader(b);
    if (e == null) return null;
    d.shaderSource(e, c);
    d.compileShader(e);
    if (!d.getShaderParameter(e, d.COMPILE_STATUS)) {
        if (a.Pi) {
            a = "Ошибка";
            n.pa && ja(n.pa, a)
        }
        return null
    }
    return e
}

function Xd(a, b, c, d, e, f, g) {
    b = X(a, b, c, d, e, f);
    if (!b) return -1;
    b.Rm = g;
    a.se += 1;
    a.bb[a.se] = b;
    a.nb[a.se] = b;
    a.jb[a.se] = b;
    a.ob[a.se] = b;
    a.pb[a.se] = b;
    return a.se
}

function Yd(a, b) {
    var c = null;
    try {
        c = a.bb[b]
    } catch (d) {}
    return c
}

function X(a, b, c, d, e, f, g) {
    if (g == null) g = false;
    g = g;
    var i = a.U,
        j = b,
        m = c;
    if (j.indexOf("precision ") == -1) j = "#ifdef GL_ES\t\t\t\t\t\t\t\t\t\t\t\t\n\tprecision mediump float;\t\t\t\t\t\t\t\t\t\n\t#endif\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" + b;
    if (m.indexOf("precision ") == -1) m = "#ifdef GL_ES\t\t\t\t\t\t\t\t\t\t\t\t\n\tprecision mediump float;\t\t\t\t\t\t\t\t\t\n\t#endif\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" + c;
    b = Wd(a, i.VERTEX_SHADER, j);
    c = Wd(a, i.FRAGMENT_SHADER, m);
    if (!b || !c) {
        a.Pi && n.pa.print("Could not create shader program");
        g = null
    } else {
        m = i.createProgram();
        i.attachShader(m, b);
        i.attachShader(m, c);
        i.bindAttribLocation(m, 0, "vPosition");
        i.bindAttribLocation(m, 1, "vTexCoord1");
        i.bindAttribLocation(m, 2, "vTexCoord2");
        i.bindAttribLocation(m, 3, "vNormal");
        i.bindAttribLocation(m, 4, "vColor");
        if (g) {
            i.bindAttribLocation(m, 5, "vBinormal");
            i.bindAttribLocation(m, 6, "vTangent")
        }
        i.linkProgram(m);
        if (i.getProgramParameter(m, i.LINK_STATUS)) {
            i.useProgram(m);
            i.uniform1i(i.getUniformLocation(m, "texture1"), 0);
            i.uniform1i(i.getUniformLocation(m,
                "texture2"), 1)
        } else a.Pi && n.pa.print("Could not link program:" + i.getProgramInfoLog(m));
        g = m
    }
    if (g) {
        g.wo = d ? d : false;
        g.xo = e;
        g.vo = f;
        a = a.U;
        g.Yo = a.getUniformLocation(g, "worldviewproj");
        g.To = a.getUniformLocation(g, "normaltransform");
        g.Ro = a.getUniformLocation(g, "modelviewtransform");
        g.So = a.getUniformLocation(g, "worldtransform");
        g.Qo = a.getUniformLocation(g, "arrLightPositions");
        g.Xq = a.getUniformLocation(g, "arrLightColors");
        g.Lo = a.getUniformLocation(g, "vecDirLight");
        g.Mo = a.getUniformLocation(g, "colorDirLight");
        g.No = a.getUniformLocation(g, "fogColor");
        g.Oo = a.getUniformLocation(g, "fogDensity");
        g.Po = a.getUniformLocation(g, "grassMovement");
        g.Yq = a.getUniformLocation(g, "windStrength");
        g.Zo = a.getUniformLocation(g, "worldviewprojLight");
        g.$o = a.getUniformLocation(g, "worldviewprojLight2");
        g.Vo = a.getUniformLocation(g, "shadowMapBias1");
        g.Wo = a.getUniformLocation(g, "shadowMapBias2");
        g.Uo = a.getUniformLocation(g, "shadowMapBackFaceBias");
        g.Xo = a.getUniformLocation(g, "shadowOpacity");
        g.Rm = null
    }
    return g
}
Fd.prototype.Hc = function(a) {
    a && a.ra(this.ia)
};

function Ld(a, b) {
    return new WebGLFloatArray([b.p, b.v, b.s, b.G, b.w, b.q, b.t, b.H, b.A, b.B, b.o, b.I, b.J, b.K, b.C, b.L])
}
Fd.prototype.deleteTexture = function(a) {
    if (a != null) {
        var b = this.U;
        b.deleteTexture(a.Ha);
        a.Ha = null;
        a.mc = false;
        a.$h && b.deleteFramebuffer(a.$h);
        a.$h = null
    }
};

function Zd(a, b, c, d, e) {
    var f = a.U;
    if (d) {
        var g = f.getExtension("OES_texture_float");
        if (!g) return null;
        a.Kr = g;
        if (!f.getExtension("OES_texture_float_linear")) return null;
        a.Lr = g
    }
    if (e) {
        g = f.getExtension("WEBGL_depth_texture");
        if (!g) return null;
        a.Jr = g
    }
    a = f.createTexture();
    f.bindTexture(f.TEXTURE_2D, a);
    f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.LINEAR);
    f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.LINEAR);
    if (e) f.texImage2D(f.TEXTURE_2D, 0, f.DEPTH_COMPONENT, b, c, 0, f.DEPTH_COMPONENT, f.UNSIGNED_SHORT,
        null);
    else d ? f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, b, c, 0, f.RGBA, f.FLOAT, null) : f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, b, c, 0, f.RGBA, f.UNSIGNED_BYTE, null);
    g = f.createFramebuffer();
    f.bindFramebuffer(f.FRAMEBUFFER, g);
    g.width = b;
    g.height = c;
    if (e) f.framebufferTexture2D(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.TEXTURE_2D, a, 0);
    else {
        e = f.createRenderbuffer();
        f.bindRenderbuffer(f.RENDERBUFFER, e);
        f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_COMPONENT16, b, c);
        f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_2D,
            a, 0);
        f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, e)
    }
    if (d && f.checkFramebufferStatus(f.FRAMEBUFFER) != f.FRAMEBUFFER_COMPLETE) return null;
    f.bindTexture(f.TEXTURE_2D, null);
    f.bindRenderbuffer(f.RENDERBUFFER, null);
    f.bindFramebuffer(f.FRAMEBUFFER, null);
    f = new Qb;
    f.l = "";
    f.Ha = a;
    f.md = null;
    f.mc = true;
    f.je = b;
    f.ie = c;
    f.qg = b;
    f.pg = c;
    f.$h = g;
    f.Or = d;
    return f
}

function $d(a, b, c, d, e) {
    var f = a.U;
    if (b != null) {
        f.bindFramebuffer(f.FRAMEBUFFER, b.$h);
        f.viewport(0, 0, b.je, b.ie)
    } else {
        f.bindFramebuffer(f.FRAMEBUFFER, null);
        f.viewport(0, 0, a.width, a.height)
    }
    if (a.qh != null) {
        f.bindTexture(f.TEXTURE_2D, a.qh.Ha);
        f.generateMipmap(f.TEXTURE_2D)
    }
    a.qh = b;
    if (c || d) {
        b = 0;
        if (c) {
            b |= f.COLOR_BUFFER_BIT;
            f.clearColor(n.cd(e) / 255, n.ad(e) / 255, n.$c(e) / 255, 1)
        }
        if (d) {
            f.clearDepth(a.cg ? 0 : 1);
            b |= f.DEPTH_BUFFER_BIT
        }
        f.clear(b)
    }
    return true
}

function cd(a, b, c, d) {
    var e = a.U;
    b = b.Ha;
    e.bindTexture(e.TEXTURE_2D, b);
    var f = c.width,
        g = c.height;
    if (c.videoWidth) f = c.videoWidth;
    if (c.videoHeight) g = c.videoHeight;
    if ((f & f - 1) != 0 || (g & g - 1) != 0) {
        var i = document.createElement("canvas");
        i.width = yd(a, f);
        i.height = yd(a, g);
        var j = i.getContext("2d");
        j.fillStyle = "rgba(0, 255, 255, 1)";
        j.fillRect(0, 0, i.width, i.height);
        d ? j.drawImage(c, 0, 0, f, g, 0, 0, f, g) : j.drawImage(c, 0, 0, f, g, 0, 0, i.width, i.height);
        c = i
    }
    zd(a, b, c);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
    e.generateMipmap(e.TEXTURE_2D);
    e.bindTexture(e.TEXTURE_2D, null)
}

function bd(a, b, c) {
    var d = a.U,
        e = d.createTexture();
    d.bindTexture(d.TEXTURE_2D, e);
    var f = b.width,
        g = b.height;
    if (b.videoWidth) f = b.videoWidth;
    if (b.videoHeight) g = b.videoHeight;
    var i = f,
        j = g;
    if ((f & f - 1) != 0 || (g & g - 1) != 0) {
        j = document.createElement("canvas");
        j.width = yd(a, f);
        j.height = yd(a, g);
        i = j.getContext("2d");
        c ? i.drawImage(b, 0, 0, f, g, 0, 0, f, g) : i.drawImage(b, 0, 0, f, g, 0, 0, j.width, j.height);
        b = j;
        i = j.width;
        j = j.height
    }
    zd(a, e, b);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER,
        d.NEAREST);
    d.generateMipmap(d.TEXTURE_2D);
    d.bindTexture(d.TEXTURE_2D, null);
    a = new Qb;
    a.l = "";
    a.Ha = e;
    a.md = null;
    a.mc = true;
    a.je = i;
    a.ie = j;
    a.qg = f;
    a.pg = g;
    return a
}

function yd(a, b) {
    --b;
    for (a = 1; a < 32; a <<= 1) b |= b >> a;
    return b + 1
}

function zd(a, b, c) {
    b = a.U;
    try {
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c)
    } catch (d) {
        if (d.code != null && DOMException != null && DOMException.SECURITY_ERR != null && d.code == DOMException.SECURITY_ERR) {
            a.Co == false && ja(n.pa, "<i>Ошибка</i>", true);
            a.Co = true
        } else try {
            b.texImage2D(b.TEXTURE_2D, 0, c)
        } catch (e) {}
    }
}

function ae(a) {
    if (a.nk == null) {
        var b = null;
        b = new kd;
        var c = new Nb(true),
            d = new Nb(true),
            e = new Nb(true),
            f = new Nb(true),
            g = b.fa;
        g.push(0);
        g.push(2);
        g.push(1);
        g.push(0);
        g.push(3);
        g.push(2);
        g = b.m;
        g.push(c);
        g.push(d);
        g.push(e);
        g.push(f);
        c.wa.c = 1;
        c.wa.b = 1;
        c.f.set(1, -1, 0);
        d.wa.c = 1;
        d.wa.b = 0;
        d.f.set(1, 1, 0);
        e.wa.c = 0;
        e.wa.b = 0;
        e.f.set(-1, 1, 0);
        f.wa.c = 0;
        f.wa.b = 1;
        f.f.set(-1, -1, 0);
        a.nk = b
    }
}

function be(a, b) {
    a.Sc = b
}

function ce(a, b, c, d, e, f) {
    a.Sc = b;
    a.Zl = c;
    a.$l = e;
    a.Fg = d != null ? d.e() : null;
    a.mi = f != null ? f.e() : null
}
l = Fd.prototype;
l.zr = "\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = vPosition;\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Bp = "\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\tattribute vec4 vTexCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = vPosition;\t\t\t\t\t\t\t\t\t\tv_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Pq = "\t\t\t\t\t\tuniform vec4 vColor;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t         gl_FragColor = vColor;\t\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Hq = "\t\t\t\tuniform vec4 vColor;\t\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t        float alpha = texture2D(texture1, texCoord).r;\t\t        gl_FragColor = vec4(vColor.rgb, alpha);\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.dc = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tv_color = vColor;\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Ep = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\tuniform float grassMovement;\t\t\t\t\t\t\t\t\n\tuniform float windStrength;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tv_color = vColor;\t\t\t\t\t\t\t\t\t\t\t\tvec4 grasspos = vPosition;\t\t\t\t\t\t\t\t\tgrasspos.x += sin(grassMovement + ((worldtransform[3].x + vPosition.x) / 10.0)) * (1.0 - vTexCoord1.y) * windStrength;\t        gl_Position = worldviewproj * grasspos;\t\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.$i = "\t\t\t\t\t\tvec3 n = normalize(vec3(vNormal.xyz));\t\t\t\t\t\t\tvec4 currentLight = vec4(0, 0, 0, 1.0);\t\t\t\t\t\t\tfor(int i=0; i<4; ++i)\t\t\t\t\t\t\t\t\t\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec3 lPos = vec3(arrLightPositions[i].xyz);\t\t\t\t\t\tvec3 vertexToLight = lPos - vec3(vPosition.xyz);\t\t\t\tfloat distance = length( vertexToLight );\t\t\t\t\t\tfloat distanceFact = 1.0 / (arrLightPositions[i].w * distance); \t\t\tvertexToLight = normalize(vertexToLight); \t\t\t\t\t\tfloat angle = max(0.0, dot(n, vertexToLight));\t\t\t\t\tfloat intensity = angle * distanceFact;\t\t\t\t\t\t\tcurrentLight = currentLight + vec4(arrLightColors[i].x*intensity, arrLightColors[i].y*intensity, arrLightColors[i].z*intensity, 1.0);\t\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// directional light\t\t\t\t\t\t\t\t\t\n\t\tfloat dirlight = max(0.0, dot(n, vecDirLight));\t\t\t\t\tcurrentLight = currentLight + vec4(colorDirLight.x*dirlight, colorDirLight.y*dirlight, colorDirLight.z*dirlight, 1.0);\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// ambient light\t\t\t\t\t\t\t\t\t\t\n\t\tcurrentLight = currentLight + arrLightColors[4];\t\t\t\tcurrentLight = max(currentLight, vec4(0.0,0.0,0.0,0.0));\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// backface value for shadow map back culling\t\t\t\n\t\tv_backfaceValue = dirlight;\t\t\t\t\t\t\t\n\t\t";
l.ud = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\tuniform vec3 vecDirLight; \t\t\t\t\t\t\t\t\t\n\tuniform vec4 colorDirLight; \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
    Fd.prototype.$i + "\tcurrentLight = currentLight * vec4(vColor.x, vColor.y, vColor.z, 1.0);\t\t\tv_color = min(currentLight, vec4(1.0,1.0,1.0,1.0));\t\t\t\tv_color.a = vColor.a;\t// preserve vertex alpha \n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Dp = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\tattribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t\t\tv_color = vColor;\t\t\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Pk = "\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 normaltransform;\t\t\t\t\t\t\t\t\n\tuniform mat4 modelviewtransform;\t\t\t\t\t\t\t\n\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec3 vNormal;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tgl_Position = worldviewproj * vPosition;\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t//\tuse reflection\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec3 pos = normalize((modelviewtransform * vPosition).xyz);\t\t\t\t\t\n\t\tvec3 n = normalize((normaltransform * vec4(vNormal, 1)).xyz);\t\t\n\t\tvec3 r = reflect( pos.xyz, n.xyz );\t\t\t\t\t\t\t\n\t\tfloat m = sqrt( r.x*r.x + r.y*r.y + (r.z+1.0)*(r.z+1.0) ); \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t//\ttexture coordinates\t\t\t\t\t\t\t\t\n\t\tv_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\n\t\tv_texCoord2.x = (r.x / (2.0 * m)  + 0.5);\t\t\t\t\t\t\n\t\tv_texCoord2.y = (r.y / (2.0 * m)  + 0.5);\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t";
l.Yg = "\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 normaltransform;\t\t\t\t\t\t\t\t\n\tuniform mat4 modelviewtransform;\t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\tuniform vec3 vecDirLight; \t\t\t\t\t\t\t\t\t\n\tuniform vec4 colorDirLight; \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec3 vNormal;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t//\tuse reflection\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec3 pos = normalize((modelviewtransform * vPosition).xyz);\t\t\t\t\t\n\t\tvec3 nt = normalize((normaltransform * vec4(vNormal, 1)).xyz);\t\t\n\t\tvec3 r = reflect( pos.xyz, nt.xyz );\t\t\t\t\t\t\t\n\t\tfloat m = sqrt( r.x*r.x + r.y*r.y + (r.z+1.0)*(r.z+1.0) ); \n\t\t//\ttexture coordinates\t\t\t\t\t\t\t\t\n\t\tv_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\n\t\tv_texCoord2.x = r.x / (2.0 * m)  + 0.5;\t\t\t\t\t\t\n\t\tv_texCoord2.y = r.y / (2.0 * m)  + 0.5;\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n" +
    Fd.prototype.$i + "\t\tv_color = min(currentLight, vec4(1.0,1.0,1.0,1.0));\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t";
l.Fp = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\tuniform vec3 vecDirLight; \t\t\t\t\t\t\t\t\t\n\tuniform vec4 colorDirLight; \t\t\t\t\t\t\t\t\n\tuniform float grassMovement;\t\t\t\t\t\t\t\t\n\tuniform float windStrength;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 grasspos = vPosition;\t\t\t\t\t\t\t\t\tgrasspos.x += sin(grassMovement + ((worldtransform[3].x + vPosition.x) / 10.0)) * (1.0 - vTexCoord1.y) * windStrength;\t        gl_Position = worldviewproj * grasspos;\t\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" + Fd.prototype.$i +
    "\tcurrentLight = currentLight * vec4(vColor.x, vColor.y, vColor.z, 1.0);\t\t\tv_color = min(currentLight, vec4(1.0,1.0,1.0,1.0));\t\t\t\tv_color.a = vColor.a;\t// preserve vertex alpha \n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Cp = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 normaltransform;\t\t\t\t\t\t\t\t\n\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\n    attribute vec3 vNormal;\t\t\t\t\t\t\t\t\t\t\n\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t\n    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\n\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\n\tattribute vec3 vBinormal;\t\t\t\t\t\t\t\t\t\n\tattribute vec3 vTangent;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t// Output:\t\t\t\t\t\t\t\t\t\t\t\t\t\n    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\n\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\n\tvarying vec3 v_lightVector[4];\t\t\t\t\t\t\t\t\n\tvarying vec3 v_lightColor[4];\t\t\t\t\t\t\t\t\n\tvarying vec3 ambientLight;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t\n    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n        gl_Position = worldviewproj * vPosition;\t\t\t\t\n        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\n\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec4 pos = vec4(dot(vPosition, worldtransform[0]), dot(vPosition, worldtransform[1]), dot(vPosition, worldtransform[2]), dot(vPosition, worldtransform[3]));\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t// transform normal, binormal and tangent\t\t\t\t\t\n\t\tvec3 normal = vec3(dot(vNormal.xyz, worldtransform[0].xyz), dot(vNormal.xyz, worldtransform[1].xyz), dot(vNormal.xyz, worldtransform[2].xyz));\t\t\n\t\tvec3 tangent = vec3(dot(vTangent.xyz, worldtransform[0].xyz), dot(vTangent.xyz, worldtransform[1].xyz), dot(vTangent.xyz, worldtransform[2].xyz));     \n\t\tvec3 binormal = vec3(dot(vBinormal.xyz, worldtransform[0].xyz), dot(vBinormal.xyz, worldtransform[1].xyz), dot(vBinormal.xyz, worldtransform[2].xyz));     \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec3 temp = vec3(0.0, 0.0, 0.0);\t\t\t\t\t\t\n\t\tfor(int i=0; i<4; ++i) \t\t\t\t\t\t\t\t\t\n\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tvec3 lightPos = vec3(arrLightPositions[i].xyz);\t\t\n\t\t\tvec3 vertexToLight = lightPos - vec3(pos.xyz); \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// transform the light vector 1 with U, V, W\t\t\n\t\t\ttemp.x = dot(tangent.xyz, vertexToLight);\t\t\t\t\n\t\t\ttemp.y = dot(binormal.xyz, vertexToLight);\t\t\t\t\n\t\t\ttemp.z = dot(normal.xyz, vertexToLight);\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// normalize light vector\t\t\t\t\t\n\t\t\ttemp = normalize(temp); \t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// move from -1..1 to 0..1 and put into output\t\t\n\t\t\ttemp = temp * 0.5;\t\t\t\t\t\t\t\n\t\t\ttemp = temp + vec3(0.5,0.5,0.5);\t\t\t\n\t\t\tv_lightVector[i] = temp;\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// calculate attenuation\t\t\t\t\t\n\t\t\tfloat distanceFact = 1.0 / sqrt(dot(vertexToLight, vertexToLight) * arrLightPositions[i].w); \n\t\t\tv_lightColor[i] = min(vec3(arrLightColors[i].x*distanceFact, arrLightColors[i].y*distanceFact, arrLightColors[i].z*distanceFact), vec3(1,1,1));\t\t\n\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t// ambient light\n\t\tambientLight = arrLightColors[4].xyz;\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t";
l.Mq = "\t\t\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t        gl_FragColor = texture2D(texture1, texCoord);\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Mf = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t        gl_FragColor = texture2D(texture1, texCoord) * v_color;\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.zk = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t        gl_FragColor = texture2D(texture1, texCoord) * v_color;\t\t\tif(gl_FragColor.a < 0.5)\t\t\t\t\t\t\t\t\t\t\tdiscard;\t\t\t\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.um = "\t\t\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tgl_FragColor = col1 * col2;\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Kq = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tgl_FragColor = col1 * col2 * 3.0;\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Eo = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tvec4 final = col1 * col2 * v_color;\t\t\t\t\t\t\t\tgl_FragColor = vec4(final.x, final.y, final.z, col1.w);\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Fo = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying vec3 v_lightVector[4];\t\t\t\t\t\t\t\t\tvarying vec3 v_lightColor[4];\t\t\t\t\t\t\t\t\tvarying vec3 ambientLight;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 colorMapSample = texture2D(texture1, v_texCoord1);\t\t\tvec3 normalMapVector = texture2D(texture2, v_texCoord1).xyz;\t\t//normalMapVector -= vec3(0.5, 0.5, 0.5);\t\t\t\t\t\n\t\t//normalMapVector = normalize(normalMapVector); \t\t\t\n\t\tnormalMapVector *= vec3(2.0, 2.0, 2.0);\t\t\t\t\t\n\t\tnormalMapVector -= vec3(1.0, 1.0, 1.0);\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec3 totallight = vec3(0.0, 0.0, 0.0);\t\t\t\t\t\t\n\t\tfor(int i=0; i<4; ++i) \t\t\t\t\t\t\t\t\t\n\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// process light\t\t\t\t\t\t\t\t\t\n\t\t\t//vec3 lightvect = v_lightVector[i] + vec3(-0.5, -0.5, -0.5); \n\t\t\tvec3 lightvect = (v_lightVector[i] * vec3(2.0, 2.0, 2.0)) - vec3(1.0, 1.0, 1.0); \n\t\t\tlightvect = normalize(lightvect);\t\t\t\t\t\n\t\t\tfloat luminance = dot(lightvect, normalMapVector); // normal DOT light\t\t\n\t\t\tluminance = clamp(luminance, 0.0, 1.0);\t// clamp result to positive numbers\t\t\n\t\t\tlightvect = luminance * v_lightColor[i];\t// luminance * light color \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// add to previously calculated lights\t\t\t\t\n\t\t\ttotallight = totallight + lightvect;\t\t\t\t\n\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\ttotallight = totallight + ambientLight;\t\t\t\t\t\n\t\tgl_FragColor = colorMapSample * vec4(totallight.x, totallight.y, totallight.z, 0.0);\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t";
l.Ho = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 color1 = texture2D(texture1, texCoord);\t\t\t\t\tvec4 color2 = texture2D(texture2, texCoord);\t\t\t\t\tcolor1 = ((1.0 - v_color.w) * color1) + (v_color.w * color2);\t// interpolate texture colors based on vertex alpha\t \n\t\tgl_FragColor = color1 * v_color;\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Nf = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 tmpFragColor = texture2D(texture1, texCoord) * v_color;\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.vm = "\t\t\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tvec4 tmpFragColor = col1 * col2;\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Ak = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 tmpFragColor = texture2D(texture1, texCoord) * v_color;\t\t\t\t\t\t\t\t\tif(tmpFragColor.a < 0.5)\t\t\t\t\t\t\t\t\t\t\tdiscard;\t\t\t\t\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Lq = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tvec4 tmpFragColor = col1 * col2 * 3.0;\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Io = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 color1 = texture2D(texture1, texCoord);\t\t\t\t\tvec4 color2 = texture2D(texture2, texCoord);\t\t\t\t\tcolor1 = ((1.0 - v_color.w) * color1) + (v_color.w * color2);\t// interpolate texture colors based on vertex alpha\t \n\t\tvec4 tmpFragColor = color1 * v_color;\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.yk = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord1 = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\tvec2 texCoord2 = vec2(v_texCoord2.s, v_texCoord2.t);\t        vec4 col1 = texture2D(texture1, texCoord1);\t\t\t\t\t\tvec4 col2 = texture2D(texture2, texCoord2);\t\t\t\t\t\tvec4 final = col1 * col2 * v_color;\t\t\t\t\t\t\t\tvec4 tmpFragColor = vec4(final.x, final.y, final.z, col1.w);\t\t\t\t\t\t\t\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tgl_FragColor = mix(fogColor, tmpFragColor, fogFactor);\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = tmpFragColor.a;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Cr = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Iq = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgl_FragColor = vec4(gl_FragCoord.z);\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Ar = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tv_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Br = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tuniform float grassMovement;\t\t\t\t\t\t\t\t\n\tuniform float windStrength;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 grasspos = vPosition;\t\t\t\t\t\t\t\t\tgrasspos.x += sin(grassMovement + ((worldtransform[3].x + vPosition.x) / 10.0)) * (1.0 - vTexCoord1.y) * windStrength;\t        gl_Position = worldviewproj * grasspos;\t\t\t\t\t\t\tv_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Do = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\tvarying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 diffuseColor = texture2D(texture1, texCoord);\t\t\t\tif (diffuseColor.a < 0.5) discard;\t\t\t\t\t\t\t\tgl_FragColor = vec4(gl_FragCoord.z);\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Jq = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t const vec4 bitShift = vec4(1.0, 256.0, 256.0*256.0, 256.0*256.0*256.0); \n\t\t const vec4 bitMask = vec4(1.0/256.0, 1.0/256.0, 1.0/256.0, 0.0); \n\t\t vec4 rgbavalue = fract(gl_FragCoord.z * bitShift);\t\n\t\t rgbavalue -= rgbavalue.gbaa * bitMask;\t\t\t\t\n\t\t gl_FragColor = rgbavalue;\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.aj = "\t\t\tprecision highp float;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewprojLight; \t\t\t\t\t\t\t\n\tuniform mat4 worldviewprojLight2; \t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\tuniform vec3 vecDirLight; \t\t\t\t\t\t\t\t\t\n\tuniform vec4 colorDirLight; \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t // position on shadow map\t\n\tvarying vec4 v_posFromLight2;\t // position on 2nd shadow map\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        gl_Position = worldviewproj * vPosition;\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t// Calculate position on shadow map\t\t\t\t\t\t\n\t\tv_posFromLight = worldviewprojLight * vPosition;\t\t\t\tv_posFromLight2 = worldviewprojLight2 * vPosition;\t\t" +
    Fd.prototype.$i + "\tcurrentLight = currentLight * vec4(vColor.x, vColor.y, vColor.z, 1.0);\t\t\tv_color = min(currentLight, vec4(1.0,1.0,1.0,1.0));\t\t\t\tv_color.a = vColor.a;\t// preserve vertex alpha \t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.Oq = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap;\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap2;\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\tuniform float shadowMapBias1;\t \t\t\t\t\t\t\t\tuniform float shadowMapBias2;\t \t\t\t\t\t\t\t\tuniform float shadowMapBackFaceBias;\t\t\t\t\t\t\tuniform float shadowOpacity;\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfloat unpackFromRGBA(const in vec4 valuein) {\t\t\t\t\t\tconst vec4 bitShift = vec4(1.0, 1.0/256.0, 1.0/(256.0*256.0), 1.0/(256.0*256.0*256.0)); \t\treturn dot(valuein, bitShift);\t\t\t\t\t\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// diffuse texture\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tvec4 diffuseColor = texture2D(texture1, v_texCoord1) * v_color;\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t// shadow map lookup\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat perpDiv = v_posFromLight.w;\t\t\t\t\t\t\t\t\t\t\n\t\tvec3 shadowCoord = (v_posFromLight.xyz / perpDiv) * 0.5 + 0.5;\t\t\t\n\t\tshadowCoord = clamp(shadowCoord, vec3(0.0,0.0,0.0), vec3(1.0,1.0,1.0)); \n\t\tvec4 shadowMapColor = texture2D(shadowmap, shadowCoord.xy);\t\t\t\t\n\t\tfloat shadowDepth = unpackFromRGBA(shadowMapColor);\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat distanceFromLight = shadowCoord.z; \t\t\t\t\t \t\t\t\n\t\tfloat visibility = 1.0 - (shadowOpacity * step(shadowMapBias1, shadowCoord.z - shadowDepth));\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor = diffuseColor * visibility;\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = diffuseColor.a;\t\t\t\t\t\t\t\t\t\t\n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
l.xm = "\t\t\t\t";
l.ym = n.tk ? "\t\t\t\t\t\t\t\t\t// shadow map 1 lookup\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tvec3 shadowCoord = (v_posFromLight.xyz / v_posFromLight.w) * 0.5 + 0.5;\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tfloat visibility = 0.0;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// now decide which map to use\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tif (v_backfaceValue < shadowMapBackFaceBias)\t\t\t\t\t\t\t\t\n\t\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t// backface, no shadow needed there\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tvisibility = 1.0;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\telse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// if (shadowCoord.x < 0.0 || shadowCoord.x > 1.0 || shadowCoord.y < 0.0 || shadowCoord.y > 1.0)\t\n\t\t\t// same as:\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tif ( ((1.0 - step(1.0, shadowCoord.x)) * (step(0.0, shadowCoord.x)) *\t\t\n\t\t\t\t  (1.0 - step(1.0, shadowCoord.y)) * (step(0.0, shadowCoord.y))) < 0.5)\t\n\t\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t// use shadowmap 2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tvec3 shadowCoord2 = (v_posFromLight2.xyz / v_posFromLight2.w) * 0.5 + 0.5;\n\t\t\t\tvec4 shadowMapColor = texture2D(shadowmap2, shadowCoord2.xy);\t\t\t\t\n\t\t\t\tfloat shadowDepth = shadowMapColor.r;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tvisibility = 1.0 - (shadowOpacity * step(shadowMapBias2, shadowCoord2.z - shadowDepth));\t\n\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\telse\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t// use shadowmap 1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tvec4 shadowMapColor = texture2D(shadowmap, shadowCoord.xy);\t\t\t\t\n\t\t\t\tfloat shadowDepth = shadowMapColor.r;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tvisibility = 1.0 - (shadowOpacity * step(shadowMapBias1, shadowCoord.z - shadowDepth));\t\n\t\t\t}\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tvec4 colorWithShadow = diffuseColor * visibility;\t\t\t\t\t\t\t\n\t\t\t" : "\t\t\t\t\t\t\t\t\t// shadow map lookup\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tvec3 shadowCoord = (v_posFromLight.xyz / v_posFromLight.w) * 0.5 + 0.5;\t\t\t\n\t\t\tvec4 shadowMapColor = texture2D(shadowmap, shadowCoord.xy);\t\t\t\t\n\t\t\tfloat shadowDepth = shadowMapColor.r;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tfloat distanceFromLight = shadowCoord.z; \t\t\t\t\t\t\t\t\n\t\t\tfloat visibility = 1.0 - (shadowOpacity * step(shadowMapBias1, shadowCoord.z - shadowDepth));\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t// no shadows outside of shadowmap\t\t\t\t\t\t\t\t\t\t\n\t\t\t// if (shadowCoord.x < 0.0 || shadowCoord.x > 1.0 || shadowCoord.y < 0.0 || shadowCoord.y > 1.0)\t\n\t\t\t// same as:\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tif ( ((1.0 - step(1.0, shadowCoord.x)) * (step(0.0, shadowCoord.x)) *\t\n\t\t\t\t  (1.0 - step(1.0, shadowCoord.y)) * (step(0.0, shadowCoord.y))) < 0.5)\t\n\t\t\t\tvisibility = 1.0;\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\tvec4 colorWithShadow = diffuseColor * visibility;\t\t\t\t\t\t\n\t\t\t";
l.wm = "\t\t\t\t\t\t// fog\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tfloat z = gl_FragCoord.z / gl_FragCoord.w; \t\t\t\t\t\t\t\t\n\t\tfloat fogFactor = clamp(exp2( -fogDensity * z * 1.442695), 0.0, 1.0); \t\n\t\tcolorWithShadow = mix(fogColor, colorWithShadow, fogFactor);\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor = colorWithShadow;\t\t\t\t\t\t\t\t\t\t\t\n\t\tgl_FragColor.a = diffuseColor.a;\t\t\t\t\t\t\t\t\t\t\n\t\t";
l.Nq = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap;\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap2;\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\tuniform float shadowMapBias1;\t\t\t\t\t\t\t\t\tuniform float shadowMapBias2;\t\t\t\t\t\t\t\t\tuniform float shadowMapBackFaceBias;\t\t\t\t\t\t\tuniform float shadowOpacity;\t \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight2;\t\t\t\t\t\t\t\t" + Fd.prototype.xm +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// diffuse texture\t\t\t\t\t\t\t\t\t\t\n\t\tvec4 diffuseColor = texture2D(texture1, v_texCoord1) * v_color;\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" + Fd.prototype.ym + Fd.prototype.wm + " } ";
l.Qq = "\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap;\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap2;\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\tuniform float shadowMapBias1;\t \t\t\t\t\t\t\t\tuniform float shadowMapBias2;\t \t\t\t\t\t\t\t\tuniform float shadowMapBackFaceBias;\t\t\t\t\t\t\tuniform float shadowOpacity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight2;\t\t\t\t\t\t\t\t" + Fd.prototype.xm +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 color1 = texture2D(texture1, texCoord);\t\t\t\t\tvec4 color2 = texture2D(texture2, texCoord);\t\t\t\t\tcolor1 = ((1.0 - v_color.w) * color1) + (v_color.w * color2);\t// interpolate texture colors based on vertex alpha\t \n\t\tvec4 diffuseColor = color1 * v_color;\t\t\t\t\t\t\t\t\t\n" + Fd.prototype.ym +
    Fd.prototype.wm + " } ";
l.Go = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap;\t\t\t\t\t\t\t\t\tuniform sampler2D shadowmap2;\t\t\t\t\t\t\t\t\tuniform vec4 fogColor;\t\t\t\t\t\t\t\t\t\t\tuniform float fogDensity;\t\t\t\t\t\t\t\t\t\tuniform float shadowMapBias1;\t \t\t\t\t\t\t\t\tuniform float shadowMapBias2;\t \t\t\t\t\t\t\t\tuniform float shadowMapBackFaceBias;\t\t\t\t\t\t\tuniform float shadowOpacity;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight2;\t\t\t\t\t\t\t\t" + Fd.prototype.xm +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        vec2 texCoord = vec2(v_texCoord1.s, v_texCoord1.t);\t\t\t\tvec4 diffuseColor = texture2D(texture1, texCoord) * vec4(v_color.r, v_color.g, v_color.b, 1.0);\t\t\t\tif (diffuseColor.a < 0.5) discard;\t\t\t" + Fd.prototype.ym + Fd.prototype.wm + " } ";
l.Dr = "\t\t\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\n\tuniform mat4 worldtransform;\t\t\t\t\t\t\t\t\n\tuniform mat4 worldviewprojLight; \t\t\t\t\t\t\t\n\tuniform mat4 worldviewprojLight2; \t\t\t\t\t\t\t\n\tuniform vec4 arrLightPositions[4];\t\t\t\t\t\t\t\n\tuniform vec4 arrLightColors[5]; \t\t\t\t\t\t\t\n\tuniform vec3 vecDirLight; \t\t\t\t\t\t\t\t\t\n\tuniform vec4 colorDirLight; \t\t\t\t\t\t\t\t\n\tuniform float grassMovement;\t\t\t\t\t\t\t\t\n\tuniform float windStrength;\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec4 v_color;\t\t\t\t\t\t\t\t\t\t    varying vec2 v_texCoord1;\t\t\t\t\t\t\t\t\t\tvarying vec2 v_texCoord2;\t\t\t\t\t\t\t\t\t\tvarying float v_backfaceValue;\t\t\t\t\t\t\t\t\tvarying vec4 v_posFromLight;\t // position on shadow map\t\n\tvarying vec4 v_posFromLight2;\t // position on 2nd shadow map\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 grasspos = vPosition;\t\t\t\t\t\t\t\t\tgrasspos.x += sin(grassMovement + ((worldtransform[3].x + vPosition.x) / 10.0)) * (1.0 - vTexCoord1.y) * windStrength;\t        gl_Position = worldviewproj * grasspos;\t\t\t\t\t        v_texCoord1 = vTexCoord1.st;\t\t\t\t\t\t\t\t\tv_texCoord2 = vTexCoord2.st;\t\t\t\t\t\t\t\t\t// Calculate position on shadow map\t\t\t\t\t\t\n\t\tv_posFromLight = worldviewprojLight * vPosition;\t\t\t\tv_posFromLight2 = worldviewprojLight2 * vPosition;\t\t" + Fd.prototype.$i +
    "\tcurrentLight = currentLight * vec4(vColor.x, vColor.y, vColor.z, 1.0);\t\t\tv_color = min(currentLight, vec4(1.0,1.0,1.0,1.0));\t\t\t\tv_color.a = vColor.a;\t// preserve vertex alpha \n    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";

function de() {
    this.cm = [];
    this.Gb = [];
    this.ne = 1
}

function ee(a, b) {
    for (var c = 0; c < a.cm.length; ++c) {
        var d = a.cm[c];
        if (d.l == b) return d
    }
    return null
}

function Kc(a, b, c, d) {
    if (b == null) return null;
    var e = null;
    e = typeof b == "string" ? fe(a, b, true) : b;
    if (e == null || e.bc == null) return null;
    he(a);
    for (b = 0; b < a.Gb.length;)
        if (a.Gb[b].src === e) {
            a.Gb[b].src.bc.pause();
            a.Gb.splice(b, 1)
        } else ++b;
    try {
        e.bc.currentTime = 0
    } catch (f) {}
    if (typeof d === "undefined") d = 1;
    e.bc.volume = d * a.ne;
    e.bc.play();
    var g = new ie(e);
    g.gp = d;
    a.Gb.push(g);
    e.Fm && e.bc.removeEventListener("ended", e.Fm, false);
    e.bc.Fm = null;
    if (c) {
        g.ap = true;
        a = function() {
            if (!g.Ji) {
                try {
                    this.currentTime = 0
                } catch (i) {}
                this.play()
            }
        };
        e.bc.addEventListener("ended", a, false);
        e.bc.Fm = a
    }
    return g
}
de.prototype.stop = function(a) {
    if (a) {
        a.src.bc.pause();
        a.Ji = true;
        he(this)
    }
};

function je(a, b) {
    a.ne = b;
    if (a.ne < 0) a.ne = 0;
    if (a.ne > 1) a.ne = 1;
    try {
        for (b = 0; b < a.Gb.length; ++b) {
            var c = a.Gb[b];
            c.src.bc.volume = c.gp * a.ne
        }
    } catch (d) {}
}

function he(a) {
    for (var b = 0; b < a.Gb.length;)
        if (ke(a.Gb[b])) a.Gb.splice(b, 1);
        else ++b
}

function Mc(a, b) {
    for (var c = 0; c < a.Gb.length; ++c) {
        var d = a.Gb[c];
        if (d && d.src && d.src.l == b) {
            a.Gb.splice(c, 1);
            d.Ji = true;
            d.src.bc.pause();
            return
        }
    }
}
n.Xd = new de;

function ge(a) {
    this.l = a;
    var b = null;
    try {
        b = new Audio;
        b.src = a
    } catch (c) {}
    this.loaded = true;
    this.bc = b
}

function ie(a) {
    this.src = a;
    this.ap = this.Ji = false;
    this.gp = 1;
    this.startTime = (new Date).getTime()
}

function ke(a) {
    if (a.Ji) return true;
    if (a.ap) return false;
    var b = (new Date).getTime(),
        c = a.src.duration;
    return c > 0 && b > a.startTime + c
};

function le(a, b, c, d, e, f, g) {
    if ((b == null || b == true) && n.pa == null) n.pa = new ea(a, d);
    this.Op = a;
    this.Zb = document.getElementById(this.Op);
    this.ma = new me;
    this.O = null;
    this.Rp = false;
    this.og = null;
    this.fb = new ud;
    this.Fe = new n.Wp;
    this.Ci = this.Ih = false;
    this.vn = 0;
    this.Bc = 60;
    this.Hl = this.El = this.Fl = this.Lb = null;
    this.Qf = this.op = false;
    this.Xg = [];
    (this.Jo = g ? true : false) && ne(this);
    this.Yp = f == null ? 'Ваш браузер не поддерживает WebGL (или он отключне)' :
        f;
    this.ei = [];
    this.di = [];
    this.Ph = false;
    this.ul = this.tl = this.wl = this.vl = this.Ec = this.Dc = 0;
    this.Qh = true;
    this.Hj = false;
    this.kl = this.em = 0;
    this.Nj = null;
    e != null && oe(this, true, e);
    pe(this);
    if (c) this.Bc = c;
    var i = this;
    setInterval(function() {
        i.Nj != null && qe(i);
        if (n.pa) {
            ++i.vn;
            var j = 0,
                m = 0;
            if (i.fb) {
                j = i.fb;
                for (var o = m = 0; o < j.Ya.length; ++o) j.Ya[o].mc == false && ++m;
                j = m;
                m = i.fb.Ya.length
            }
            if (i.Ci && j == 0) {
                i.Ci = false;
                re(i)
            }
            if (i.Ih || j) {
                o = "Загрузка";
                if (j > 0) o = "Текстур загружено: " + (m - j) + "/" + m;
                switch (i.vn % 4) {
                    case 0:
                        o += "   ";
                        break;
                    case 1:
                        o += ".  ";
                        break;
                    case 2:
                        o += ".. ";
                        break;
                    case 3:
                        o += "...";
                        break
                }
                ia(n.pa, o)
            } else ia(n.pa, null)
        }
    }, 500);
    se(Z(), this)
}

function te(a) {
    if (a.ma == null) return null;
    return a.ma.Sg()
}

function ue(a) {
    document.onkeydown = function(f) {
        ve(a, f)
    };
    document.onkeyup = function(f) {
        we(a, f)
    };
    var b = a.Zb;
    if (b != null) {
        b.onmousemove = function(f) {
            xe(a, f)
        };
        b.onmousedown = function(f) {
            ye(a, f)
        };
        b.onmouseup = function(f) {
            Be(a, f)
        };
        b.onmouseover = function() {
            a.Qh = true
        };
        b.onmouseout = function() {
            a.Qh = false
        };
        Ce(a);
        try {
            var c = function(f) {
                (f = f) || (f = event);
                if (f) De(a, f.detail < 0 || f.wheelDelta > 0 ? 1 : -1)
            };
            b.addEventListener("mousewheel", c, false);
            b.addEventListener("DOMMouseScroll", c, false)
        } catch (d) {}
        try {
            c = function(f) {
                a.Hj = false;
                Be(a, f.changedTouches[0]) && Ee(a, f, true)
            };
            b.addEventListener("touchstart", function(f) {
                if (f.touches != null) {
                    a.Hj = f.touches.length == 2;
                    if (a.Hj) a.em = Fe(a, f)
                }
                ye(a, f.changedTouches[0]) && Ee(a, f, true)
            }, false);
            b.addEventListener("touchend", c, false);
            b.addEventListener("touchcancel", c, false);
            b.addEventListener("touchleave", c, false);
            b.addEventListener("touchmove", function(f) {
                if (a.Hj && f.touches != null && f.touches.length >= 2) {
                    f = Fe(a, f);
                    var g = f - a.em;
                    a.em = f;
                    De(a, g)
                } else xe(a, f.changedTouches[0]) && Ee(a, f, true)
            }, false)
        } catch (e) {}
    }
}

function Fe(a, b) {
    a = b.touches;
    if (a[0].pageX == null) return 0;
    return Math.sqrt((a[0].pageX - a[1].pageX) * (a[0].pageX - a[1].pageX) + (a[0].pageY - a[1].pageY) * (a[0].pageY - a[1].pageY))
}
le.prototype.load = function(a, b, c) {
    if (!Ge(this)) {
        oe(this, false, this.Yp);
        return false
    }
    var d = this;
    this.Ih = true;
    (new na(a, a.indexOf(".ccbz") != -1)).load(function(e) {
        d.Km(e, a, b);
        c && c()
    });
    return true
};

function Ge(a) {
    if (a.O != null) return true;
    var b = a.Zb;
    if (b == null) return false;
    var c = n.Ul != null && n.Ul.bs;
    a.O = new Fd;
    if (c || a.O.gb(b) == false)
        if (n.Ul != null) {
            a.O = new n.Ul;
            if (a.O.gb(b) == false) return false
        } else return false;
    if (a.fb) a.fb.O = a.O;
    ue(a);
    var d = 1E3 / a.Bc,
        e = q();

    function f() {
        var g = q(),
            i = g - e;
        if (i > d) {
            e = g - i % d;
            a.Jo && He(a);
            Ie(a);
            if (n.pa != null) {
                a.ma.Sg();
                g = n.pa;
                if (g.kn != null) {
                    g.frames += 1;
                    i = (new Date).getTime();
                    if (i - g.Hm > 1E3) {
                        var j = "FPS: " + (g.frames / (i - g.Hm) * 1E3).toFixed(2);
                        g.kn.nodeValue = j;
                        g.Hm = i;
                        g.frames =
                            0
                    }
                }
            }
        }
        window.requestAnimationFrame(f)
    }
    window.requestAnimationFrame(f);
    return true
}

function ne() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden"
}

function He(a) {
    var b = window.innerHeight || window.clientHeight;
    a.Zb.setAttribute("width", (window.innerWidth || window.clientWidth) + "px");
    a.Zb.setAttribute("height", b + "px")
}
le.prototype.Km = function(a, b, c) {
    this.Ih = false;
    var d = new Je;
    a = d.Vq(a, b, this.fb, this.Fe, this);
    if (a != null)
        if (!c || this.ma == null || this.ma != null && this.ma.Mb.length == 0) {
            this.ma = a;
            if (d.un) {
                this.qn = d.bo;
                this.Tp = b
            }
            if (a.ko) this.Ci = true;
            else re(this)
        } else
            for (b = 0; b < a.Mb.length; ++b) this.ma.om(a.Mb[b])
};

function re(a) {
    a.Dk(a.ma.Sg());
    Ie(a);
    a.Hl != null && a.Hl()
}

function Ie(a) {
    if (!(a.ma == null || a.O == null))
        if (!(a.Ih || a.Ci)) {
            pe(a);
            Ke(a);
            var b = a.ma.Sg();
            if (!a.Rp && b) {
                for (var c = false, d = 0; d < a.Xg.length; ++d) {
                    var e = a.Xg[d];
                    e.vr();
                    if (e.Tq()) {
                        if (e.Ek != null && !e.Em) {
                            var f = te(a);
                            e.Ek.execute(f.Pa, f);
                            e.Ek = null
                        }
                        if (e.Fk != null && e.Em) {
                            f = te(a);
                            e.Fk.execute(f.Pa, f);
                            e.Fk = null
                        }
                        a.Xg.splice(d, 1);
                        --d
                    } else c = true
                }
                c && Le(b);
                a.Lb && a.Lb();
                d = a.O;
                b.Hh = d;
                if (b.Qa == 0) b.Qa = q();
                b.uq = null;
                c = false;
                if (b.uh.length == 0) e = false;
                else {
                    e = q();
                    f = false;
                    for (var g = 0; g < b.uh.length;) {
                        var i = b.uh[g];
                        if (i.tr < e) {
                            i.Me.vb &&
                                i.Me.vb.removeChild(i.Me);
                            b.uh.splice(g, 1);
                            f = true;
                            b.zd && i.Me.db && Me(b.zd, i.Me.db)
                        } else ++g
                    }
                    e = f
                }
                if (e) c = true;
                if (b.Pa.Lb(b, q())) c = true;
                if (b.ea) {
                    e = new I(false);
                    b.ea.Fa.ra(e);
                    e = K(e, b.ea.xb);
                    e = !e.F(b.Lj)
                } else e = true;
                d = d ? Gd(d) : false;
                if (b.bl || b.ck == 0 && (e || d) || b.ck == 1 && (e || c || d) || b.ck == 2 || Ne(Z())) {
                    b.bl = false;
                    c = true
                } else c = false;
                if (c) {
                    c = a.O;
                    d = b.mh;
                    if (c.U != null) {
                        Vd(c);
                        e = c.U;
                        e.clearDepth(c.cg ? 0 : 1);
                        e.depthMask(true);
                        e.clearColor(n.cd(d) / 255, n.ad(d) / 255, n.$c(d) / 255, 1);
                        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
                    }
                    a.Fl &&
                        a.Fl();
                    c = a.O;
                    b.Ae = [];
                    b.Dg = [];
                    b.Id = [];
                    b.dk = [];
                    b.$j = [];
                    b.Pa.Oa(b);
                    b.nj = null;
                    b.qq = 0;
                    if (b.oi && Oe(b, c)) {
                        ce(c, true, b.Be, b.Fg, b.ii, b.mi);
                        c.ki = b.ki;
                        c.li = b.li;
                        c.ni = b.ni;
                        c.kk = b.kk
                    }
                    for (d = d = 0; d < b.dk.length; ++d) {
                        b.Bb = Pe;
                        b.dk[d].rb(c)
                    }
                    Qe(b, c);
                    b.Bb = Re;
                    for (d = 0; d < b.$j.length; ++d) b.$j[d].rb(c);
                    if (b.ea) {
                        b.ea.Fa.ra(b.Lj);
                        b.Lj = K(b.Lj, b.ea.xb)
                    }
                    b.oi && ce(c, false, null, null);
                    a.El && a.El();
                    b = n.xa;
                    b != null && Se(b, a.O);
                    b = a.O;
                    b.U != null && b.U.flush()
                }
            }
            Ke(a)
        }
}
le.prototype.om = function(a) {
    if (this.ma) {
        this.ma.Mb.push(a);
        this.ma.Mb.length == 1 && this.ma.rp(a)
    }
};

function lc(a, b, c) {
    if (!a.ma) return false;
    var d = a.ma.Mb;
    b = b;
    if (c) b = b.toLowerCase();
    for (var e = 0; e < d.length; ++e) {
        var f = d[e].l;
        if (c) f = f.toLowerCase();
        if (b == f) {
            a.Dk(d[e]);
            return true
        }
    }
    return false
}
le.prototype.Dk = function(a) {
    if (!a) return false;
    var b = a.Ck() == "panorama",
        c = a.Ck() == "free",
        d = null;
    this.ma.rp(a);
    if (!a.lo) {
        a.lo = true;
        var e = false,
            f = Te(a, "camera");
        if (f)
            for (var g = 0; g < f.length; ++g) {
                var i = f[g];
                if (i && i.Ym) {
                    d = i;
                    e = true;
                    Ue(d, this.O.width, this.O.height);
                    break
                }
            }
        if (!e) {
            e = 4 / 3;
            if (this.O.width && this.O.height) e = this.O.width / this.O.height;
            d = new Ve;
            We(d, e);
            vc(a.Pa, d);
            e = null;
            if (!b) {
                e = new Xe(d, this);
                Zb(d, e)
            }
            if (c) {
                if (a.Xk != null) d.f = a.Xk.e();
                if (a.tj != null) e != null ? qc(e, a.tj) : pc(d, a.tj)
            }
            e && Ye(e, !b)
        }
        a.ea = d;
        a.zd = Ze(a, true);
        $e(this, a.Pa, a.zd)
    }
    Z().ib = a;
    a.ck = this.ma.wq;
    Le(a);
    return true
};

function Ke(a) {
    if (a.og != null) {
        var b = a.ma.Sg();
        if (b != null)
            if (a.og.n === b) {
                a.O && Ue(a.og, a.O.Jb(), a.O.Ib());
                b.ea = a.og;
                a.og = null
            }
    }
}

function ve(a, b) {
    var c = te(a);
    if (c == null) return false;
    if (b == null) b = window.event;
    var d = false;
    c = c.ea;
    if (c != null) d = c.Ne(b);
    for (c = 0; c < a.di.length; ++c)
        if (a.di[c].Ne(b)) d = true;
    return Ee(a, b, d)
}

function we(a, b) {
    var c = te(a);
    if (c == null) return false;
    if (b == null) b = window.event;
    var d = false;
    c = c.ea;
    if (c != null) d = c.Oe(b);
    for (c = 0; c < a.ei.length; ++c)
        if (a.ei[c].Oe(b)) d = true;
    return Ee(a, b, d)
}

function Ee(a, b, c) {
    if (c) {
        try {
            b.preventDefault()
        } catch (d) {}
        return true
    }
    return false
}

function pe(a) {
    for (var b = 0, c = 0, d = a.Zb; d != null;) {
        b += d.offsetLeft;
        c += d.offsetTop;
        d = d.offsetParent
    }
    a.bn = b;
    a.cn = c
}

function af(a, b) {
    if (a.Qf) return a.O.Jb() / 2;
    return b.pageX ? b.pageX - a.bn : b.clientX - a.Zb.offsetLeft + document.body.scrollLeft
}

function bf(a, b) {
    if (a.Qf) return a.O.Ib() / 2;
    return b.pageY ? b.pageY - a.cn : b.clientY - a.Zb.offsetTop + document.body.scrollTop
}

function ye(a, b) {
    if (b == null) b = window.event;
    a.Ph = true;
    a.Qh = true;
    if (b) {
        a.tl = af(a, b);
        a.ul = bf(a, b);
        a.Dc = a.tl;
        a.Ec = a.ul
    }
    var c = te(a);
    if (c == null) return false;
    var d = false;
    if (a.zn) d = a.zn();
    if (!d) {
        d = c.ea;
        d != null && d.$d(b);
        d = b;
        for (var e = 0; e < c.Nc.length; ++e) c.Nc[e].$d(d)
    }
    return Ee(a, b, true)
}

function cf(a) {
    if (a.Qf) {
        a.vl = 0;
        a.wl = 0
    } else {
        a.tl = a.Dc;
        a.ul = a.Ec
    }
}

function Be(a, b) {
    if (b == null) b = window.event;
    a.Ph = false;
    var c = te(a);
    if (c == null) return false;
    if (b) {
        a.Dc = af(a, b);
        a.Ec = bf(a, b)
    }
    var d = false;
    if (a.An) d = a.An();
    if (!d) {
        d = c.ea;
        d != null && d.sd(b);
        d = b;
        for (var e = 0; e < c.Nc.length; ++e) c.Nc[e].sd(d)
    }
    return Ee(a, b, true)
}

function De(a, b) {
    a = te(a);
    if (a != null) {
        var c = a.ea;
        c != null && c.Pf(b);
        for (c = 0; c < a.Nc.length; ++c) a.Nc[c].Pf(b)
    }
}

function xe(a, b) {
    if (b == null) b = window.event;
    if (a.Qf) {
        a.vl = b.movementX || b.mozMovementX || b.webkitMovementX || 0;
        a.wl = b.movementY || b.mozMovementY || b.webkitMovementY || 0
    }
    if (b) {
        a.Dc = af(a, b);
        a.Ec = bf(a, b)
    }
    var c = te(a);
    if (c == null) return false;
    var d = c.ea;
    d != null && d.Pe(b);
    d = b;
    for (var e = 0; e < c.Nc.length; ++e) c.Nc[e].Pe(d);
    return Ee(a, b, true)
}
l = le.prototype;
l.Lb = null;
l.An = null;
l.zn = null;
l.El = null;
l.Fl = null;
l.Hl = null;

function df(a, b, c) {
    a = a.O;
    if (a == null) return null;
    var d = a.Fa,
        e = a.Vc;
    if (d == null || e == null) return null;
    d = K(d, e);
    var f = new Gb;
    f.Mk(d);
    d = Ib(f);
    e = Jb(f).substract(d);
    f = Lb(f).substract(d);
    var g = a.Jb();
    a = a.Ib();
    c = c / a;
    return d.add(x(e, b / g)).add(x(f, c))
}

function ef(a, b) {
    var c = new I(false),
        d = a.O;
    if (!d.Fa) return null;
    d.Fa.ra(c);
    c = K(c, d.Vc);
    a = d.Jb() / 2;
    d = d.Ib() / 2;
    if (d == 0 || a == 0) return null;
    b = new s(b.c, b.b, b.d);
    b.W = 1;
    c = c;
    var e = b.e();
    e.Ca = b.W;
    b.c = e.c * c.p + e.b * c.w + e.d * c.A + e.Ca * c.J;
    b.b = e.c * c.v + e.b * c.q + e.d * c.B + e.Ca * c.K;
    b.d = e.c * c.s + e.b * c.t + e.d * c.o + e.Ca * c.C;
    b.W = e.c * c.G + e.b * c.H + e.d * c.I + e.Ca * c.L;
    c = b.W == 0 ? 1 : 1 / b.W;
    if (b.d < 0) return null;
    e = new Na;
    e.c = a * b.c * c + a;
    e.b = d - d * b.b * c;
    return e
}

function nc(a, b) {
    if (b != null) a.og = b
}

function $e(a, b, c) {
    if (b) {
        for (var d = 0; d < b.ka.length; ++d) {
            var e = b.ka[d];
            if (e)
                if (e.k() == "collisionresponse") e.Hc(c);
                else if (e.k() == "onclick" || e.k() == "onmove") e.ia = c;
            else if (e.k() == "gameai") e.ia = c;
            else if (e.k() == "3rdpersoncamera") e.ia = c
        }
        for (d = 0; d < b.Z.length; ++d)(e = b.Z[d]) && $e(a, e, c)
    }
}
le.prototype.Nm = function(a) {
    if (!a || !this.ma) return false;
    if (this.qn == null) return false;
    for (var b = null, c = -1, d = 0; d < this.ma.Mb.length; ++d)
        if (a == this.ma.Mb[d].l) {
            c = d;
            b = this.ma.Mb[d];
            break
        }
    if (c == -1) return false;
    a = (new Je).Nm(this.qn, b, c, this.Tp, this.fb, this.Fe, this);
    if (a != null) {
        b = this.ma.Sg() == b;
        this.ma.Mb[c] = a;
        b && this.Dk(a)
    }
    return true
};

function qe(a) {
    if (!a.Ih && !a.Ci) {
        a.Nj.style.display = "none";
        a.Nj = null
    }
}

function oe(a, b, c) {
    if (a.Zb != null) {
        var d = document.createElement("div");
        a.Zb.parentNode.appendChild(d);
        var e = document.createElement("div");
        pe(a);
        var f = b ? 23 : 100,
            g = b ? 30 : 0,
            i = a.bn + (a.Zb.width - 200) / 2,
            j = a.cn + a.Zb.height / 2;
        b || (j += 30);
        c = c.replace("$PROGRESS$", "");
        e.style.cssText = "";
        c = '<p style="margin:0; padding-left:' + g +
            'px; padding-bottom:5px;">' + c + "</p> ";
        if (b) c += '<img style="position:absolute; left:5px; top:3px;" src="copperlichtdata/loading.gif" />';
        if (b) a.Nj = d
    }
}

function Ce(a) {
    function b() {
        var d = a.Zb;
        if (a.op) {
            d.qr = d.requestPointerLock || d.mozRequestPointerLock || d.webkitRequestPointerLock;
            d.qr()
        }
    }

    function c() {
        var d = a.Zb;
        a.Qf = document.PointerLockElement === d || document.pointerLockElement === d || document.mozPointerLockElement === d || document.webkitPointerLockElement === d ? true : false
    }
    document.addEventListener("fullscreenchange", b, false);
    document.addEventListener("mozfullscreenchange", b, false);
    document.addEventListener("webkitfullscreenchange", b, false);
    document.addEventListener("pointerlockchange",
        c, false);
    document.addEventListener("mozpointerlockchange", c, false);
    document.addEventListener("webkitpointerlockchange", c, false)
}

function ff(a, b, c) {
    if (c == null) c = a.Zb;
    a.op = b;
    c.requestFullscreen = c.requestFullscreen || c.es || c.mozRequestFullScreen || c.msRequestFullscreen || c.webkitRequestFullscreen;
    c.requestFullscreen()
};

function $() {
    this.h = -1;
    this.f = new s;
    this.T = new s;
    this.na = new s(1, 1, 1);
    this.X = true;
    this.l = "";
    this.mb = 0;
    this.Ja = -1;
    this.vb = null;
    this.Z = [];
    this.ka = [];
    this.Y = new I;
    this.db = this.n = null
}
l = $.prototype;
l.gb = function() {
    this.f = new s;
    this.T = new s;
    this.na = new s(1, 1, 1);
    this.Z = [];
    this.ka = [];
    this.Y = new I
};
l.f = null;
l.T = null;
l.na = null;
l.X = true;
l.l = "";
l.Ja = -1;
l.db = null;
l.vb = null;
l.k = k("none");
l.lb = function() {
    return new B
};

function N(a, b) {
    for (var c = 0; c < a.ka.length; ++c) {
        var d = a.ka[c];
        if (d.k() == b) return d
    }
    return null
}

function gf(a, b) {
    for (var c = 0; c < a.ka.length; ++c) {
        var d = a.ka[c].Lf(b);
        if (d != null) return d
    }
    return null
}

function hf(a) {
    var b = a.lb().e();
    zb(a.Y, b);
    return b
}

function jf(a, b, c, d, e) {
    b.l = new String(a.l);
    b.X = a.X;
    b.mb = a.mb;
    b.f = a.f.e();
    b.T = a.T.e();
    b.na = a.na.e();
    b.h = a.h;
    b.n = a.n;
    c && vc(c, b);
    for (var f = 0; f < a.Z.length; ++f) {
        var g = a.Z[f];
        if (g) {
            var i = -1;
            if (c && c.n) i = Yc(c.n);
            g = g.i(b, g.Ja, i);
            if (g != null) {
                g.Ja = i;
                vc(b, g)
            }
        }
    }
    for (f = 0; f < a.ka.length; ++f) Zb(b, a.ka[f].i(a, a.n, d, e));
    if (a.Y) b.Y = a.Y.e()
}
$.prototype.i = k(null);

function Zb(a, b) {
    b != null && a.ka.push(b)
}

function kf(a, b) {
    if (b != null) {
        var c;
        for (c = 0; c < a.ka.length; ++c)
            if (a.ka[c] === b) {
                a.ka.splice(c, 1);
                return
            }
    }
}

function vc(a, b) {
    if (b) {
        b.n = a.n;
        b.vb && b.vb.removeChild(b);
        b.vb = a;
        a.Z.push(b)
    }
}
$.prototype.removeChild = function(a) {
    for (var b = 0; b < this.Z.length; ++b)
        if (this.Z[b] === a) {
            a.vb = null;
            this.Z.splice(b, 1);
            return
        }
};
$.prototype.Oa = function(a) {
    if (this.X)
        for (var b = 0; b < this.Z.length; ++b) this.Z[b].Oa(a)
};
$.prototype.Lb = function(a, b) {
    var c = false;
    if (this.X) {
        var d, e = this.ka.length;
        for (d = 0; d < e;) {
            c = this.ka[d].hb(this, b) || c;
            var f = e;
            e = this.ka.length;
            f >= e && ++d
        }
        P(this);
        for (d = 0; d < this.Z.length; ++d) c = this.Z[d].Lb(a, b) || c
    }
    return c
};
$.prototype.Dm = function() {
    var a = new I;
    vb(a, this.T);
    xb(a, this.f);
    if (this.na.c != 1 || this.na.b != 1 || this.na.d != 1) {
        var b = new I;
        yb(b, this.na);
        a = K(a, b)
    }
    return a
};

function P(a) {
    a.Y = a.vb != null ? K(a.vb.Y, a.Dm()) : a.Dm()
}
$.prototype.rb = aa();

function O(a) {
    return new s(a.Y.J, a.Y.K, a.Y.C)
}
$.prototype.bd = k(0);
$.prototype.uc = k(null);

function lf(a) {
    for (a = a; a;) {
        if (!a.X) return false;
        a = a.vb
    }
    return true
}
$.prototype.fp = aa();
$.prototype.Ri = aa();

function Ve() {
    this.gb();
    this.g = new B;
    this.Ym = this.ic = false;
    this.ga = new s(0, 0, 10);
    this.wb = new s(0, 1, 0);
    this.Fa = new I;
    this.xb = new I;
    this.ld = n.PI / 2.5;
    this.Ic = 4 / 3;
    this.Qg = 0.1;
    this.Pg = 3E3;
    this.hj = this.Af = true;
    this.Ie = false;
    rb(this.Fa, this.ld, this.Ic, this.Qg, this.Pg)
}
Ve.prototype = new $;

function mf(a) {
    rb(a.Fa, a.ld, a.Ic, a.Qg, a.Pg)
}
Ve.prototype.k = k("camera");

function We(a, b) {
    if (!n.F(a.Ic, b)) {
        a.hj = false;
        a.Ic = b;
        mf(a)
    }
}

function nf(a, b) {
    if (!n.F(a.ld, b))
        if (!isNaN(b)) {
            a.ld = b;
            mf(a)
        }
}

function pc(a, b) {
    if (b) {
        a.ga = b.e();
        if (a.Af) {
            P(a);
            a.T = Ha(b.substract(O(a)))
        }
    }
}
Ve.prototype.Lb = function(a, b) {
    a = $.prototype.Lb.call(this, a, b);
    this.Ie || of (this);
    return a
};

function of (a) {
    var b = O(a),
        c = a.ga.e();
    if (b.F(c)) c.c += 1;
    ub(a.xb, b, c, a.wb)
}
l = Ve.prototype;
l.Oa = function(a) {
    if (a.ea === this) {
        pf(a, this, 2);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    this.Ie || of (this);
    if (this.Ic == 0 || this.hj) {
        Ue(this, a.width, a.height);
        this.Ic == 0 && We(this, 0.75)
    }
    this.Fa.ra(a.Fa);
    this.xb.ra(a.Vc)
};
l.$d = function(a) {
    for (var b = 0; b < this.ka.length; ++b) this.ka[b].$d(a)
};
l.Pf = function(a) {
    for (var b = 0; b < this.ka.length; ++b) this.ka[b].Pf(a)
};
l.sd = function(a) {
    for (var b = 0; b < this.ka.length; ++b) this.ka[b].sd(a)
};
l.Pe = function(a) {
    for (var b = 0; b < this.ka.length; ++b) this.ka[b].Pe(a)
};
l.Ne = function(a) {
    for (var b = false, c = 0; c < this.ka.length; ++c)
        if (this.ka[c].Ne(a)) b = true;
    return b
};
l.Oe = function(a) {
    for (var b = false, c = 0; c < this.ka.length; ++c)
        if (this.ka[c].Oe(a)) b = true;
    return b
};
l.i = function(a, b, c) {
    var d = new Ve;
    jf(this, d, a, b, c);
    if (this.ga) d.ga = this.ga.e();
    if (this.wb) d.wb = this.wb.e();
    if (this.Fa) d.Fa = this.Fa.e();
    if (this.xb) d.xb = this.xb.e();
    d.ld = this.ld;
    d.Ic = this.Ic;
    d.Qg = this.Qg;
    d.Pg = this.Pg;
    if (this.g) d.g = this.g.e();
    return d
};

function Ue(a, b, c) {
    if (!(b == 0 || c == 0))
        if (n.F(a.Ic, 0) || a.hj) {
            We(a, b / c);
            a.hj = true
        }
};

function qf() {
    this.gb();
    this.g = new B;
    this.ic = false;
    this.P = null;
    this.Tr = true;
    this.db = null;
    this.yn = true;
    this.Nn = false
}
qf.prototype = new $;
l = qf.prototype;
l.lb = function() {
    if (this.P) return this.P.g;
    return this.g
};
l.Sq = ca("P");
l.sp = ba("P");
l.k = k("mesh");
l.Oa = function(a) {
    var b = this.P;
    if (this.X && b) {
        for (var c = false, d = false, e = 0; e < b.qa.length; ++e)
            if (ed(b.qa[e].u)) c = true;
            else d = true;
        c && pf(a, this, rf);
        d && pf(a, this, sf);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    a.Hc(this.Y);
    for (var b = a.Sc, c = 0; c < this.P.qa.length; ++c) {
        var d = this.P.qa[c];
        if (ed(d.u) == (this.n.Bb == rf)) {
            if (this.Nn || !d.u.Wb) a.Sc = false;
            Hd(a, d.u);
            Id(a, d)
        }
    }
    b && be(a, true)
};
l.bd = function() {
    if (this.P) return this.P.qa.length;
    return 0
};
l.uc = function(a) {
    if (this.P != null)
        if (a >= 0 && a < this.P.qa.length) return this.P.qa[a].u;
    return null
};
l.i = function(a, b, c) {
    var d = new qf;
    jf(this, d, a, b, c);
    if (this.P) d.P = this.P.i();
    d.ci = this.ci;
    d.ic = this.ic;
    if (this.g) d.g = this.g.e();
    return d
};

function tf() {
    this.P = new md;
    var a = [0, 1, 2, 0, 2, 3],
        b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(-1, -1, -1, 0, 0, 1, 1, 1));
    b.m.push(this.Sa(1, -1, -1, 0, 0, 1, 0, 1));
    b.m.push(this.Sa(1, 1, -1, 0, 0, 1, 0, 0));
    b.m.push(this.Sa(-1, 1, -1, 0, 0, 1, 1, 0));
    b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(1, -1, -1, -1, 0, 0, 1, 1));
    b.m.push(this.Sa(1, -1, 1, -1, 0, 0, 0, 1));
    b.m.push(this.Sa(1, 1, 1, -1, 0, 0, 0, 0));
    b.m.push(this.Sa(1, 1, -1, -1, 0, 0, 1, 0));
    b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(-1, -1, 1, 1, 0, 0, 1, 1));
    b.m.push(this.Sa(-1, -1, -1, 1, 0, 0, 0, 1));
    b.m.push(this.Sa(-1, 1, -1, 1, 0, 0, 0, 0));
    b.m.push(this.Sa(-1, 1, 1, 1, 0, 0, 1, 0));
    b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(1, -1, 1, 0, 0, -1, 1, 1));
    b.m.push(this.Sa(-1, -1, 1, 0, 0, -1, 0, 1));
    b.m.push(this.Sa(-1, 1, 1, 0, 0, -1, 0, 0));
    b.m.push(this.Sa(1, 1, 1, 0, 0, -1, 1, 0));
    b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(1, 1, -1, 0, -1, 0, 1, 1));
    b.m.push(this.Sa(1, 1, 1, 0, -1, 0, 0, 1));
    b.m.push(this.Sa(-1, 1, 1, 0, -1, 0, 0, 0));
    b.m.push(this.Sa(-1, 1, -1, 0, -1, 0, 1, 0));
    b = new kd;
    this.P.vd(b);
    b.u.Rb = true;
    b.fa = a;
    b.m.push(this.Sa(1, -1, 1, 0, 1, 0, 1, 1));
    b.m.push(this.Sa(1, -1, -1, 0, 1, 0, 0, 1));
    b.m.push(this.Sa(-1, -1, -1, 0, 1, 0, 0, 0));
    b.m.push(this.Sa(-1, -1, 1, 0, 1, 0, 1, 0))
}
tf.prototype = new qf;
l = tf.prototype;
l.k = k("sky");
l.Sa = function(a, b, c, d, e, f, g, i) {
    d = new Nb(true);
    d.f.c = a;
    d.f.b = b;
    d.f.d = c;
    d.wa.c = g;
    d.wa.b = i;
    return d
};
l.Oa = function(a) {
    if (this.X) {
        pf(a, this, 1);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    var b = this.n.ea;
    if (b && this.P) {
        var c = new I(false);
        this.Y.ra(c);
        xb(c, O(b));
        b = (b.Qg + b.Pg) * 0.5;
        var d = new I;
        yb(d, new s(b, b, b));
        a.Hc(K(c, d));
        c = this.P;
        if (c != null)
            for (b = 0; b < c.qa.length; ++b) {
                d = c.qa[b];
                Hd(a, d.u, true);
                Id(a, d)
            }
    }
};
l.i = function(a, b, c) {
    var d = new tf;
    jf(this, d, a, b, c);
    if (this.P) d.P = this.P.e();
    d.ci = this.ci;
    d.ic = this.ic;
    if (this.g) d.g = this.g.e();
    return d
};
new qf;

function uf() {
    this.gb();
    this.g = new B;
    this.Hg = this.qi = 10;
    this.Fh = false;
    this.Cc = new kd;
    this.Zg = new Nb(true);
    this.$g = new Nb(true);
    this.ah = new Nb(true);
    this.bh = new Nb(true);
    var a = this.Cc.fa;
    a.push(0);
    a.push(2);
    a.push(1);
    a.push(0);
    a.push(3);
    a.push(2);
    a = this.Cc.m;
    a.push(this.Zg);
    a.push(this.$g);
    a.push(this.ah);
    a.push(this.bh);
    this.Zg.wa.c = 1;
    this.Zg.wa.b = 1;
    this.$g.wa.c = 1;
    this.$g.wa.b = 0;
    this.ah.wa.c = 0;
    this.ah.wa.b = 0;
    this.bh.wa.c = 0;
    this.bh.wa.b = 1;
    for (var b = 0; b < 4; ++b) C(this.g, a[b].f)
}
uf.prototype = new $;
l = uf.prototype;
l.lb = ca("g");
l.k = k("billboard");
l.Oa = function(a) {
    if (this.X) {
        pf(a, this, ed(this.Cc.u) ? rf : sf);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    var b = this.n.ea;
    if (b) {
        var c = a.Sc;
        a.Sc = false;
        if (this.Fh) {
            f = O(this);
            var d = O(b),
                e = b.wb;
            b = b.ga.substract(d);
            b.normalize();
            d = Ga(e, b);
            za(d) == 0 && d.set(e.b, e.c, e.d);
            d.normalize();
            A(d, 0.5 * this.qi);
            e = Ga(d, b);
            e.normalize();
            A(e, 0.5 * this.Hg);
            this.Fh && e.set(0, -0.5 * this.Hg, 0);
            A(b, 1);
            wa(this.Zg.f, f);
            this.Zg.f.oa(d);
            this.Zg.f.oa(e);
            wa(this.$g.f, f);
            this.$g.f.oa(d);
            pa(this.$g.f, e);
            wa(this.ah.f, f);
            pa(this.ah.f, d);
            pa(this.ah.f, e);
            wa(this.bh.f, f);
            pa(this.bh.f, d);
            this.bh.f.oa(e);
            this.Cc.update(true);
            f =
                new I(true);
            a.Hc(f);
            Hd(a, this.Cc.u);
            Id(a, this.Cc)
        } else {
            var f = O(this);
            a.nk == null && ae(a);
            e = a.nk;
            b = new I(true);
            yb(b, new s(this.qi * 0.5, this.Hg * 0.5, 0));
            d = a.Vc.e();
            xb(d, new s(0, 0, 0));
            var g = new I(true);
            nb(d, g);
            xb(g, f);
            b = K(g, b);
            a.Hc(b);
            Hd(a, this.Cc.u);
            Id(a, e)
        }
        c && be(a, true)
    }
};
l.bd = k(1);
l.uc = function() {
    return this.Cc.u
};
l.i = function(a, b, c) {
    var d = new uf;
    jf(this, d, a, b, c);
    if (this.g) d.g = this.g.e();
    d.qi = this.qi;
    d.Hg = this.Hg;
    d.Fh = this.Fh;
    d.Cc.u = this.Cc.u.e();
    return d
};

function vf() {
    this.gb();
    this.g = new B;
    this.ya = new kd;
    this.Ia = new s(0, -0.03, 0);
    this.Sb = new s(0, 0, 0);
    this.rk = this.Jj = 0;
    this.cb = []
}
vf.prototype = new $;
l = vf.prototype;
l.Ia = null;
l.nd = 10;
l.Sb = null;
l.gf = 1E3;
l.Mh = 2E3;
l.Nh = 200;
l.kg = 10;
l.Pj = 20;
l.Sj = 4278190080;
l.Qj = 4294967295;
l.lg = 5;
l.mg = 5;
l.ig = 7;
l.Oh = 7;
l.yh = false;
l.zh = 500;
l.zj = 0;
l.ag = false;
l.Dj = 500;
l.Dd = null;
l.wg = false;
l.hk = 20;
l.ik = 20;
l.jn = false;
l.i = function(a, b, c) {
    var d = new vf;
    jf(this, d, a, b, c);
    if (this.g) d.g = this.g.e();
    d.Ia = this.Ia.e();
    d.nd = this.nd;
    d.Sb = this.Sb.e();
    d.gf = this.gf;
    d.Mh = this.Mh;
    d.Nh = this.Nh;
    d.kg = this.kg;
    d.Pj = this.Pj;
    d.Sj = this.Sj;
    d.Qj = this.Qj;
    d.lg = this.lg;
    d.mg = this.mg;
    d.ig = this.ig;
    d.Oh = this.Oh;
    d.yh = true;
    d.zh = this.zh;
    d.zj = this.zj;
    d.ag = this.ag;
    d.Dj = this.Dj;
    d.Dd = this.Dd;
    d.wg = this.wg;
    d.hk = this.hk;
    d.ik = this.ik;
    d.ya.u = this.ya.u.e();
    return d
};
l.lb = ca("g");
l.k = k("particlesystem");
l.Oa = function(a) {
    if (this.X) {
        pf(a, this, ed(this.ya.u) ? rf : sf);
        $.prototype.Oa.call(this, a)
    }
};
l.bd = k(1);
l.uc = function() {
    return this.ya.u
};
l.Lb = function(a, b) {
    var c = false;
    if (this.X)
        if (this.Jj == 0) {
            this.Jj = b;
            c = false
        } else {
            c = b - this.Jj;
            this.Jj = b;
            if (this.X) {
                var d = false;
                d = this.Pj - this.kg;
                var e = 1E3 / (d ? this.kg + Math.random() * d : this.kg);
                d = this.cb.length;
                this.rk += c;
                if (this.rk <= e) d = false;
                else {
                    e = this.rk / e + 0.5;
                    this.rk = 0;
                    if (d + e > this.Nh) e -= d + e - this.Nh;
                    if (e <= 0) d = false;
                    else {
                        var f = this.Ia.e();
                        ib(this.Y, f);
                        for (var g = hb(this.Y).getLength(), i = xa(this.Sb), j = d; j < d + e; ++j) {
                            var m = new wf;
                            m.dd = new s(0, 0, 0);
                            if (!i) {
                                if (this.Sb.c != 0) m.dd.c = Math.random() * this.Sb.c - this.Sb.c *
                                    0.5;
                                if (this.Sb.b != 0) m.dd.b = Math.random() * this.Sb.b - this.Sb.b * 0.5;
                                if (this.Sb.d != 0) m.dd.d = Math.random() * this.Sb.d - this.Sb.d * 0.5
                            }
                            m.startTime = b;
                            m.Yi = f.e();
                            if (this.nd) {
                                var o = f.e(),
                                    p = Math.random() * this.nd * 2 - this.nd;
                                p *= n.Bd;
                                var h = Math.cos(p);
                                p = Math.sin(p);
                                var v = o.c,
                                    r = o.b;
                                o.c = v * h - r * p;
                                o.b = v * p + r * h;
                                p = Math.random() * this.nd * 2 - this.nd;
                                p *= n.Bd;
                                h = Math.cos(p);
                                p = Math.sin(p);
                                v = o.b;
                                r = o.d;
                                o.b = v * h - r * p;
                                o.d = v * p + r * h;
                                Ia(o, Math.random() * this.nd * 2 - this.nd);
                                m.Yi = o
                            }
                            m.Ii = this.Mh - this.gf == 0 ? b + this.gf : b + this.gf + Math.random() * (this.Mh -
                                this.gf);
                            m.color = n.Ko(this.Sj, this.Qj, Math.random() * 100 / 100);
                            m.vp = m.color;
                            m.wp = m.Yi.e();
                            if (this.lg == this.ig && this.mg == this.Oh) {
                                m.Ui = this.lg;
                                m.Vi = this.mg
                            } else {
                                o = Math.random() * 100 / 100;
                                h = 1 - o;
                                m.Ui = this.lg * o + this.ig * h;
                                m.Vi = this.mg * o + this.Oh * h
                            }
                            m.Ui *= g;
                            m.Vi *= g;
                            m.Sm = m.Ui;
                            m.Tm = m.Vi;
                            lb(this.Y, m.dd);
                            this.cb.unshift(m)
                        }
                        d = true
                    }
                }
                if (!this.yh && !this.ag && !this.wg) e = false;
                else {
                    e = 0;
                    f = null;
                    if (this.yh)
                        for (e = 0; e < this.cb.length; ++e) {
                            f = this.cb[e];
                            if (f.Ii - b < this.zh) f.color = n.Ko(f.vp, this.zj, (f.Ii - b) / this.zh)
                        }
                    if (this.ag) {
                        g =
                            Ea(this.Dd, hb(this.Y));
                        for (e = 0; e < this.cb.length; ++e) {
                            f = this.cb[e];
                            i = (b - f.startTime) / this.Dj;
                            i = n.sc(i, 0, 1);
                            i = 1 - i;
                            f.Yi = Ka(f.wp, g, i)
                        }
                    }
                    if (this.wg) {
                        g = hb(this.Y).c;
                        for (e = 0; e < this.cb.length; ++e) {
                            f = this.cb[e];
                            i = (b - f.startTime) / (f.Ii - f.startTime);
                            f.Sm = f.Ui + this.hk * i * g;
                            f.Tm = f.Vi + this.ik * i * g
                        }
                    }
                    e = true
                }
                d = e || d;
                e = new s(this.Y.J, this.Y.K, this.Y.C);
                this.ya.g.reset(e.c, e.b, e.d);
                if (this.cb.length != 0) d = true;
                for (e = 0; e < this.cb.length;) {
                    f = this.cb[e];
                    if (b > f.Ii) this.cb.splice(e, 1);
                    else {
                        f.dd.oa(x(f.Yi, c));
                        C(this.ya.g, f.dd);
                        ++e
                    }
                }
                c = this.ig * 0.5;
                this.ya.g.N.c += c;
                this.ya.g.N.b += c;
                this.ya.g.N.d += c;
                this.ya.g.D.c -= c;
                this.ya.g.D.b -= c;
                this.ya.g.D.d -= c;
                c = new I(false);
                nb(this.Y, c);
                zb(c, this.ya.g);
                c = d
            } else c = false
        }
    return $.prototype.Lb.call(this, a, b) || c
};
l.Oa = function(a) {
    if (this.X) {
        if (this.cb.length != 0) pf(a, this, ed(this.ya.u) ? rf : sf);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    if (this.n.ea)
        if (this.cb.length != 0) {
            var b = a.Cd;
            if (this.jn) a.Cd = false;
            var c = a.Sc;
            a.Sc = false;
            if (this.cb.length * 4 > this.ya.m.length || this.cb.length * 6 > this.ya.fa.length) {
                for (var d = this.ya.m.length, e = this.ya.m; this.ya.m.length < this.cb.length * 4;) {
                    var f = null;
                    f = new Nb(true);
                    f.wa.set(0, 0);
                    e.push(f);
                    f = new Nb(true);
                    f.wa.set(0, 1);
                    e.push(f);
                    f = new Nb(true);
                    f.wa.set(1, 1);
                    e.push(f);
                    f = new Nb(true);
                    f.wa.set(1, 0);
                    e.push(f)
                }
                d = d;
                e = this.cb.length * 6;
                f = this.ya.fa;
                for (var g = this.ya.fa.length; g < e; g += 6) {
                    f.push(0 +
                        d);
                    f.push(2 + d);
                    f.push(1 + d);
                    f.push(0 + d);
                    f.push(3 + d);
                    f.push(2 + d);
                    d += 4
                }
            }
            d = a.Vc;
            e = new s(-d.s, -d.t, -d.o);
            f = 0;
            var i = null;
            for (g = 0; g < this.cb.length; ++g) {
                var j = this.cb[g];
                i = 0.5 * j.Sm;
                var m = new s(d.p * i, d.w * i, d.A * i);
                i = -0.5 * j.Tm;
                var o = new s(d.v * i, d.q * i, d.B * i);
                i = this.ya.m[0 + f];
                i.f = j.dd.add(m).add(o);
                i.la = j.color;
                i.j = e;
                i = this.ya.m[1 + f];
                i.f = j.dd.add(m).substract(o);
                i.la = j.color;
                i.j = e;
                i = this.ya.m[2 + f];
                i.f = j.dd.substract(m).substract(o);
                i.la = j.color;
                i.j = e;
                i = this.ya.m[3 + f];
                i.f = j.dd.substract(m).add(o);
                i.la = j.color;
                i.j = e;
                f += 4
            }
            d = new I(true);
            a.Hc(d);
            this.ya.update(false, true);
            Hd(a, this.ya.u);
            Id(a, this.ya, this.cb.length * 2 * 3);
            if (this.jn) a.Cd = b;
            c && be(a, true)
        }
};

function wf() {
    this.Yi = this.dd = null;
    this.vp = this.color = this.Ii = this.startTime = 0;
    this.wp = null;
    this.Vi = this.Ui = this.Tm = this.Sm = 0
};

function xf() {
    this.Yh = new s(0, 0, 0);
    this.la = new oa;
    this.Ga = 100;
    this.lh = 0.01;
    this.Ia = null;
    this.dg = false
}
l = xf.prototype;
l.e = function() {
    var a = new xf;
    a.Yh = this.Yh.e();
    a.la = this.la.e();
    a.Ga = this.Ga;
    a.lh = this.lh;
    a.dg = this.dg;
    a.Ia = this.Ia != null ? this.Ia.e() : null;
    return a
};
l.Yh = null;
l.la = null;
l.lh = null;
l.Ga = null;
l.Ia = null;
l.dg = false;

function yf() {
    this.Ma = new xf;
    this.g = new B;
    this.gb()
}
yf.prototype = new $;
l = yf.prototype;
l.k = k("light");
l.Ma = null;
l.i = function(a, b, c) {
    var d = new yf;
    jf(this, d, a, b, c);
    d.Ma = this.Ma.e();
    d.g = this.g.e();
    return d
};
l.Oa = function(a) {
    this.X && pf(a, this, zf);
    $.prototype.Oa.call(this, a);
    this.Ma.Yh = O(this)
};
l.lb = ca("g");
l.rb = function(a) {
    this.Ma.dg ? Ud(a, this.Ma) : Td(a, this.Ma)
};

function Af() {
    this.gb();
    this.g = new B;
    this.Ng = 0;
    this.cf = false;
    this.Fb = []
}
Af.prototype = new $;
l = Af.prototype;
l.Ng = 0;
l.cf = false;
l.Fb = [];
l.lb = ca("g");
l.k = k("path");
l.i = function(a, b, c) {
    var d = new Af;
    jf(this, d, a, b, c);
    if (this.g) d.g = this.g.e();
    d.Ng = this.Ng;
    d.cf = this.cf;
    d.Fb = [];
    for (a = 0; a < this.Fb.length; ++a) d.Fb.push(this.Fb[a].e());
    return d
};

function Bf(a, b) {
    if (b < 0 || b >= a.Fb.length) return new s(0, 0, 0);
    a.Y || P(a);
    b = a.Fb[b];
    b = b.e();
    lb(a.Y, b);
    return b
}

function Cf(a, b, c) {
    if (a.cf) return b < 0 ? c + b : b >= c ? b - c : b;
    return b < 0 ? 0 : b >= c ? c - 1 : b
}

function Df(a, b, c) {
    var d = a.Fb.length;
    if (a.cf) b *= d;
    else {
        b = n.sc(b, 0, 1);
        b *= d - 1
    }
    var e = new s;
    if (d == 0) return e;
    if (d == 1) return e;
    b = b;
    var f = n.Gq(b),
        g = Math.floor(b) % d,
        i = a.Fb[Cf(a, g - 1, d)];
    e = a.Fb[Cf(a, g + 0, d)];
    b = a.Fb[Cf(a, g + 1, d)];
    var j = a.Fb[Cf(a, g + 2, d)],
        m = 2 * f * f * f - 3 * f * f + 1;
    d = -2 * f * f * f + 3 * f * f;
    g = f * f * f - 2 * f * f + f;
    f = f * f * f - f * f;
    i = b.substract(i);
    A(i, a.Ng);
    j = j.substract(e);
    A(j, a.Ng);
    e = x(e, m);
    e.oa(x(b, d));
    e.oa(x(i, g));
    e.oa(x(j, f));
    if (!c) {
        a.Y || P(a);
        lb(a.Y, e)
    }
    return e
};

function Ef() {
    this.gb();
    this.g = new B;
    this.Bn = this.Lh = this.re = 0;
    this.Np = false;
    this.Og = this.rl = this.wn = 0;
    this.sg = false;
    this.Mc = null;
    this.sq = false;
    this.Cn = this.im = 0
}
Ef.prototype = new $;
Ef.prototype.lb = ca("g");
Ef.prototype.k = k("sound");
Ef.prototype.Oa = function(a) {
    if (this.X) {
        pf(a, this, sf);
        $.prototype.Oa.call(this, a)
    }
};

function Ff(a, b, c, d) {
    var e = a.Og;
    if (d)
        if (b)
            if (d = d.ea) {
                var f = O(d);
                d.ga.substract(f);
                c = f.yb(c);
                if (!(c < a.re)) {
                    c -= a.re;
                    d = a.Lh - a.re;
                    if (d > 0) {
                        if (c > d) c = d;
                        d = 10;
                        if (c != 0) d = a.re / c;
                        e *= d;
                        if (e > 10) e = 10
                    } else e = 10
                }
                if (e > 1) e = 1;
                if (b) try {
                    b.src.bc.volume = e
                } catch (g) {}
            }
}

function Gf(a, b) {
    if (!a.Mc && a.Nb) {
        a.sq = false;
        a.Mc = Kc(n.Xd, a.Nb, b);
        if (!a.sg) {
            b = O(a);
            Ff(a, a.Mc, b, a.n)
        }
    }
}
Ef.prototype.Lb = function(a, b) {
    try {
        var c = O(this);
        this.Mc && !this.sg && Ff(this, this.Mc, c, a);
        switch (this.Bn) {
            case 0:
                break;
            case 1:
                if (this.Mc && ke(this.Mc)) {
                    this.Mc = null;
                    var d = this.wn - this.rl;
                    if (d < 2) d = 2;
                    this.im = b + Math.random() * d + this.rl
                } else if (!this.Mc && (!this.im || b > this.im)) this.Nb && Gf(this, false);
                break;
            case 2:
                this.Mc || this.Nb && Gf(this, true);
                break;
            case 3:
                if (!this.Cn)
                    if (this.Nb) {
                        Gf(this, false);
                        ++this.Cn
                    }
                break
        }
    } catch (e) {}
    return false
};
Ef.prototype.i = function(a, b, c) {
    var d = new Ef;
    jf(this, d, a, b, c);
    if (this.g) d.g = this.g.e();
    return d
};

function Hf(a) {
    this.gb();
    this.Ta = a;
    this.g = new B;
    this.kf = this.jf = 100;
    this.wf = this.xf = 50;
    this.mf = this.lf = 0.5;
    this.zf = 1 / 6;
    this.yf = 1 / 6;
    this.Gg = this.Od = true;
    this.Jc = 0;
    this.Ee = this.Ha = null;
    this.vg = true;
    this.$e = this.Tk = false;
    this.Jg = 1;
    this.kd = this.eb = "";
    this.Bf = 0;
    this.Th = this.Dh = this.Uh = this.Ej = this.Gl = this.ih = false;
    this.ti = this.ui = null;
    this.en = this.fn = "";
    this.oj = 0
}
Hf.prototype = new $;
l = Hf.prototype;
l.kd = "";
l.Bf = 0;
l.Jg = 1;
l.yo = k(false);
l.lb = ca("g");
l.k = k("2doverlay");
l.Qm = function(a) {
    this.eb = a;
    this.$e = this.eb != null && this.eb != "";
    if (this.kd == "") this.kd = "12;default;arial;normal;bold;true"
};
l.Oa = function(a) {
    if (this.X) {
        pf(a, this, Re);
        $.prototype.Oa.call(this, a)
    }
};
l.rb = function(a) {
    var b = If(this, true, a),
        c = false;
    if (this.Ta != null && this.ih) {
        c = this.Ta.Dc;
        var d = this.Ta.Ec;
        c = b.x <= c && b.y <= d && b.x + b.Wa >= c && b.y + b.Ua >= d
    }
    if (c && this.Uh) Od(a, b.x, b.y, b.Wa, b.Ua, this.Dh, true);
    else this.Gg && Od(a, b.x, b.y, b.Wa, b.Ua, this.Jc, true);
    d = this.Ha;
    if (c && this.Ee && this.Th) d = this.Ee;
    if (d != null && d.mc) {
        var e = d.Jb(),
            f = d.Ib();
        if (this.vg) {
            if (e && f && b.Ua && b.Wa) {
                var g = b.Wa;
                e = g * (f / e);
                if (e > b.Ua) {
                    f = b.Ua / e;
                    g *= f;
                    e *= f
                }
                b.Wa = g;
                b.Ua = e;
                Qd(a, b.x, b.y, b.Wa, b.Ua, d, true, null, null, null, !this.Tk)
            }
        } else Qd(a, b.x, b.y,
            b.Wa, b.Ua, d, true, null, null, null, !this.Tk)
    }
    if (this.$e && this.kd && this.eb != "") {
        a: {
            e = b.Wa;
            (d = this.ui == null || false) || (d = this.fn != this.eb || this.en != this.kd);
            if (d) {
                Jf(this, a);
                d = document.createElement("canvas");
                if (d != null) {
                    d.width = 1;
                    d.height = 1;
                    g = null;
                    try {
                        g = d.getContext("2d");
                        if (g == null) break a
                    } catch (i) {
                        break a
                    }
                    var j = this.kd;
                    f = 12;
                    var m = "Arial",
                        o = false,
                        p = false;
                    if (j.indexOf("#fnt_") == 0) j = j.substr(5);
                    j = j.split(";");
                    for (var h = 0; h < j.length; ++h) {
                        var v = j[h],
                            r = v.toLowerCase();
                        if (h == 0) f = parseInt(r);
                        else if (h == 2) m =
                            v;
                        else if (h == 3) {
                            if (r.indexOf("italic") != -1) o = true
                        } else if (h == 4)
                            if (r.indexOf("bold") != -1) p = true
                    }
                    j = "";
                    if (o) j += "italic ";
                    if (p) j += "bold ";
                    this.oj = f * 96 / 72;
                    j += this.oj + "px ";
                    j += m;
                    f = j;
                    g.font = f;
                    if (this.Jg == 2) {
                        m = [];
                        o = this.eb;
                        p = g;
                        v = h = j = "";
                        r = o.length;
                        for (var E = 0, z = e - 6, u = "c", y = 0; y < r; ++y) {
                            u = o.charAt(y);
                            var D = false;
                            if (u == "\r") {
                                D = true;
                                u = " ";
                                if (o.charAt(y + 1) == "\n") {
                                    o = o.substr(0, y).concat(o.substr(y + 2));
                                    --r
                                }
                            } else if (u == "\n") {
                                D = true;
                                u = " "
                            }
                            if (u == " " || u == 0 || y == r - 1) {
                                if (h.length) {
                                    var H = p.measureText(v).width,
                                        Y = p.measureText(h).width;
                                    if (E + Y + H > z) {
                                        E = Y;
                                        m.push(j);
                                        j = h
                                    } else {
                                        j = j.concat(v);
                                        j = j.concat(h);
                                        E += H + Y
                                    }
                                    v = h = ""
                                }
                                v = v.concat(u);
                                if (D) {
                                    j = j.concat(v);
                                    j = j.concat(h);
                                    m.push(j);
                                    v = h = j = "";
                                    E = 0
                                }
                            } else h = h.concat(u)
                        }
                        j = j.concat(v);
                        j = j.concat(h);
                        m.push(j);
                        o = this.oj * 1.2;
                        j = m.length;
                        p = 0;
                        d.width = e;
                        d.height = Math.max(1, j * o);
                        g.fillStyle = "rgba(0, 0, 0, 1)";
                        g.fillRect(0, 0, d.width, d.height);
                        g.fillStyle = "rgba(255, 255, 255, 1)";
                        g.textBaseline = "top";
                        g.font = f;
                        for (e = 0; e < m.length; ++e) {
                            g.fillText(m[e], 0, p);
                            p += o
                        }
                    } else {
                        e = g.measureText(this.eb);
                        d.width = e.width;
                        d.height =
                            this.oj * 1.2;
                        g.fillStyle = "rgba(0, 0, 0, 1)";
                        g.fillRect(0, 0, d.width, d.height);
                        g.fillStyle = "rgba(255, 255, 255, 1)";
                        g.textBaseline = "top";
                        g.font = f;
                        g.fillText(this.eb, 0, 0)
                    }
                    this.ti = this.ui = d = bd(a, d, true);
                    this.fn = this.eb;
                    this.en = this.kd
                }
            }
        }
        d = this.ui;g = this.Bf;
        if (c) {
            if (this.ti) d = this.ti;
            g = this.Ej
        }
        if (d) {
            c = d.qg;
            e = d.pg;
            this.Jg == 1 ? Rd(a, b.x + (b.Wa - c) / 2, b.y + (b.Ua - e) / 2, c, e, d, g) : Rd(a, b.x, b.y, c, e, d, g)
        }
    }
    else Jf(this, a)
};

function Jf(a, b) {
    b.deleteTexture(a.ui);
    b.deleteTexture(a.ti);
    a.ui = null;
    a.ti = null
}
Hf.prototype.bd = k(0);

function If(a, b, c) {
    b = c.Jb();
    c = c.Ib();
    var d = {};
    if (a.Od) {
        d.x = a.jf;
        d.y = a.kf;
        d.Wa = a.xf;
        d.Ua = a.wf
    } else {
        d.x = a.lf * b;
        d.y = a.mf * c;
        d.Wa = a.zf * b;
        d.Ua = a.yf * c
    }
    return d
}
Hf.prototype.i = function(a, b, c) {
    var d = new Hf;
    jf(this, d, a, b, c);
    d.jf = this.jf;
    d.kf = this.kf;
    d.xf = this.xf;
    d.wf = this.wf;
    d.lf = this.lf;
    d.mf = this.mf;
    d.zf = this.zf;
    d.yf = this.yf;
    d.Od = this.Od;
    d.Gg = this.Gg;
    d.Jc = this.Jc;
    d.Ha = this.Ha;
    d.Ee = this.Ee;
    d.vg = this.vg;
    d.$e = this.$e;
    d.Jg = this.Jg;
    d.eb = this.eb;
    d.kd = this.kd;
    d.Bf = this.Bf;
    d.ih = this.ih;
    d.Gl = this.Gl;
    d.Ej = this.Ej;
    d.Uh = this.Uh;
    d.Dh = this.Dh;
    d.Th = this.Th;
    return d
};

function Kf(a, b) {
    Hf.call(this, a);
    this.Yf = null;
    this.hc = this.gc = 0;
    this.Tj = false;
    this.Lc = this.Fj = this.Mn = this.Ln = this.Sl = this.Tl = 0;
    Zb(this, new Lf(a, b, this))
}
Kf.prototype = new Hf;
Kf.prototype.k = k("mobile2dinput");
Kf.prototype.yo = k(true);
Kf.prototype.rb = function(a) {
    var b = If(this, true, a),
        c = false;
    if (this.Ta != null) {
        var d = this.Ta.Dc,
            e = this.Ta.Ec;
        this.Tj = b.x <= d && b.y <= e && b.x + b.Wa >= d && b.y + b.Ua >= e;
        if (this.ih) c = this.Tj
    }
    if (c && this.Uh) Od(a, b.x, b.y, b.Wa, b.Ua, this.Dh, true);
    else this.Gg && Od(a, b.x, b.y, b.Wa, b.Ua, this.Jc, true);
    d = this.Ha;
    if (c && this.Ee && this.Th) d = this.Ee;
    e = c = 0;
    if (d != null && d.mc) {
        var f = d.Jb(),
            g = d.Ib();
        if (this.vg) {
            if (f && g && b.Ua && b.Wa) {
                c = b.Wa;
                e = c * (g / f);
                if (e > b.Ua) {
                    f = b.Ua / e;
                    c *= f;
                    e *= f
                }
                b.Wa = c;
                b.Ua = e;
                Qd(a, b.x, b.y, b.Wa, b.Ua, d, true);
                c = b.Wa;
                e =
                    b.Ua
            }
        } else {
            Qd(a, b.x, b.y, b.Wa, b.Ua, d, true);
            c = b.Wa;
            e = b.Ua
        }
    }
    this.Tl = c;
    this.Sl = e;
    this.Ln = b.x;
    this.Mn = b.y;
    if (this.Fj == 0 && this.Yf != null && this.Yf.mc && d != null && d.mc) {
        f = this.gc * Math.sqrt(1 - 0.5 * this.hc * this.hc);
        g = this.hc * Math.sqrt(1 - 0.5 * this.gc * this.gc);
        f = (f + 1) * 0.5;
        g = (g + 1) * 0.5;
        var i = 1 / (d.Jb() / Number(this.Yf.Jb()));
        d = 1 / (d.Ib() / Number(this.Yf.Ib()));
        i = i * c;
        d = d * e;
        Qd(a, b.x + f * c - i * 0.5, b.y + g * e - d * 0.5, i, d, this.Yf, true)
    }
};

function Mf() {
    this.gb();
    this.g = new B;
    this.ic = false;
    this.db = this.Ka = null;
    this.Gh = 0;
    this.Db = [];
    this.Cb = 0.25;
    this.Xe = q();
    this.ub = this.Va = this.cl = 0;
    this.Yb = false;
    this.Ac = 0;
    this.hd = 250;
    this.ge = true;
    this.qj = false;
    this.fg = [];
    this.ij = 0;
    this.mo = false;
    this.sl = 20;
    this.Ab = []
}
Mf.prototype = new $;
n.Qn = function() {
    this.za = null;
    this.Wj = this.eg = -1
};
Mf.prototype.lb = ca("g");
Mf.prototype.cc = function(a) {
    if (!this.Ka) return false;
    a = td(this.Ka, a);
    if (!a) return false;
    Nf(this, a.xd, a.Q);
    this.Cb = a.Bc;
    return true
};

function jc(a, b, c) {
    if (!a.Ka) return false;
    var d = a.Ka;
    if (!d) return false;
    var e = td(d, b);
    if (e) {
        Nf(a, e.xd, e.Q);
        e.Bc != 0 && Of(a, e.Bc);
        a.Yb = c
    } else if (b) {
        b = b.toLowerCase();
        if (b == "all") {
            Nf(a, 0, Math.floor(d.gd));
            d.Yk != 0 && Of(a, d.Yk);
            a.Yb = c
        } else if (b == "none") {
            Nf(a, 0, 0);
            a.Yb = c
        }
    }
    return true
}
l = Mf.prototype;
l.sp = function(a) {
    if (a) {
        this.Ka = a;
        this.g = a.lb();
        Nf(this, 0, Math.floor(a.gd))
    }
};
l.k = k("animatedmesh");
l.Oa = function(a) {
    if (this.X && this.Ka) {
        var b = this.Db,
            c = false,
            d = false;
        if (b != null)
            for (var e = 0; e < b.length; ++e)
                if (ed(b[e])) c = true;
                else d = true;
        c && pf(a, this, rf);
        d && pf(a, this, sf);
        $.prototype.Oa.call(this, a)
    }
};
l.bd = function() {
    if (this.Db != null) return this.Db.length;
    if (this.P) return this.P.qa.length;
    return 0
};
l.uc = function(a) {
    if (this.Db)
        if (a >= 0 && a < this.Db.length) return this.Db[a];
        else if (this.Ka && this.Ka.wd && a >= 0 && this.Db.length == a && a < 256) {
        a = new dd;
        this.Db.push(a);
        return a
    }
    return null
};
l.i = function(a, b, c) {
    var d = new Mf;
    jf(this, d, a, b, c);
    d.Ka = this.Ka;
    if (this.g) d.g = this.g.e();
    d.ic = this.ic;
    d.db = this.db;
    d.Gh = this.Gh;
    d.Db = [];
    for (a = 0; a < this.Db.length; ++a) d.Db.push(this.Db[a].e());
    d.Cb = this.Cb;
    d.Xe = this.Xe;
    d.cl = this.cl;
    d.Va = this.Va;
    d.ub = this.ub;
    d.Yb = this.Yb;
    d.Ac = this.Ac;
    d.sl = this.sl;
    d.hd = this.hd;
    d.ge = this.ge;
    d.qj = false;
    d.fg = [];
    for (a = d.ij = 0; a < this.Ab.length; ++a) {
        b = new n.Qn;
        b.za = this.Ab[a].za;
        b.eg = this.Ab[a].eg;
        b.Wj = this.Ab[a].Wj;
        d.Ab.push(b)
    }
    return d
};

function Of(a, b) {
    a.Cb = b
}

function Pf(a, b) {
    a.Yb = b
}

function Nf(a, b, c) {
    if (!a.Ka) return false;
    var d = Math.floor(a.Ka.gd) - 1,
        e = a.Va,
        f = a.ub;
    if (c < b) {
        a.Va = n.sc(c, 0, d);
        a.ub = n.sc(b, a.Va, d)
    } else {
        a.Va = n.sc(b, 0, d);
        a.ub = n.sc(c, a.Va, d)
    }
    if (e != a.Va || f != a.ub) {
        b = a.Ac;
        a.Ac = n.sc(a.Va, a.Va, a.ub);
        a.Xe = q() - Math.floor((a.Ac - a.Va) / a.Cb);
        a.ge && a.hd && Qf(a, b)
    }
    return true
}

function Rf(a) {
    var b = a.Ka;
    if (b) {
        var c = false;
        if ((c = Sf(a, a.Ac)) || b.Um) {
            a: {
                for (c = 0; c < a.Db.length; ++c)
                    if (a.Db[c].Wb) {
                        c = true;
                        break a
                    }
                c = false
            }
            if (b.Ed) {
                b.Um = false;
                rd(b, null, null);
                var d = 0,
                    e = 0,
                    f;
                for (d = 0; d < b.ta.length; ++d) {
                    var g = b.ta[d];
                    for (e = 0; e < g.jh.length; ++e) {
                        f = b.ab[g.jh[e]];
                        f.Ge = g.af.e()
                    }
                }
                for (d = 0; d < b.ab.length; ++d) {
                    f = b.uk[d];
                    for (e = 0; e < f.length; ++e) f[e] = false
                }
                for (d = 0; d < b.qf.length; ++d) sd(b, b.qf[d], null, c)
            }
            b.tb.D.set(0, 0, 0);b.tb.N.set(0, 0, 0);
            if (b.ab.length) {
                c = b.ab[0];
                ld(c);
                b.tb.D = c.g.D.e();
                b.tb.N = c.g.N.e();
                for (d = 1; d < b.ab.length; ++d) {
                    c = b.ab[d];
                    ld(c);
                    if (c.Ge == null) {
                        C(b.tb, c.g.D);
                        C(b.tb, c.g.N)
                    } else {
                        e = c.g.e();
                        zb(c.Ge, e);
                        C(b.tb, e.D);
                        C(b.tb, e.N)
                    }
                }
            }
            a.g = b.lb().e();
            for (c = 0; c < b.ab.length; ++c) b.ab[c].update(true)
        }
        a.cl = a.Ac
    }
}
Mf.prototype.Lb = function(a, b) {
    var c = q();
    if (this.Gh == 0 || c - this.Gh > this.sl) {
        var d;
        d = 0;
        if (this.Va == this.ub) d = this.Va;
        else if (this.Cb == 0) d = this.Va;
        else {
            d = 0;
            if (this.Yb) {
                var e = false;
                d = Math.abs(Math.floor((this.ub - this.Va) / this.Cb));
                if (this.Cb > 0) {
                    d = this.Va + (b - this.Xe) % d * this.Cb;
                    e = d < this.Ac
                } else {
                    d = this.ub - (b - this.Xe) % d * -this.Cb;
                    e = d > this.Ac
                }
                e && this.ge && Qf(this, this.Ac)
            } else if (this.Cb > 0) {
                d = (b - this.Xe) * this.Cb;
                d = this.Va + d;
                if (d > this.ub) d = this.ub
            } else {
                d = (b - this.Xe) * -this.Cb;
                d = this.ub - d;
                if (d < this.Va) d = this.Va
            }
            d =
                d
        }
        this.Ac = d;
        this.Gh = c
    }
    a = $.prototype.Lb.call(this, a, b);
    this.Ab.length != 0 && Tf(this);
    return a
};
Mf.prototype.rb = function(a) {
    var b = this.n.nj;
    if (b)
        if (!Mb(b, hf(this))) return;
    if (b = this.Ka) {
        a.Hc(this.Y);
        !b.Ed || Rf(this);
        this.mo = true;
        for (var c = this.n.Bb == Uf, d = a.Sc, e = 0; e < b.ab.length; ++e) {
            var f = b.ab[e];
            if (e < this.Db.length) f.u = this.Db[e];
            if (c || ed(f.u) == (this.n.Bb == rf)) {
                f.Ge != null && a.Hc(K(this.Y, f.Ge));
                if (c) {
                    var g = f.u.h;
                    if (g == id) {
                        this.n.ji.Ba = f.u.Ba;
                        Hd(a, this.n.ji)
                    } else if (g == hd) {
                        this.n.Eg.Ba = f.u.Ba;
                        Hd(a, this.n.Eg)
                    } else Hd(a, this.n.jk)
                } else {
                    !f.u.Wb && d && be(a, false);
                    Hd(a, f.u)
                }
                Id(a, f);
                f.Ge != null && a.Hc(this.Y)
            }
        }
        d &&
            be(a, true)
    }
};

function Vf(a, b) {
    b = b.length;
    if (b > a.fg.length)
        for (; a.fg.length < b;) {
            var c = {};
            c.xc = new s(0, 0, 0);
            c.Qb = new s(1, 1, 1);
            c.yc = new Ab;
            a.fg.push(c)
        }
}

function Qf(a, b) {
    if (a.mo) {
        var c = a.Ka;
        if (c) {
            Sf(a, b);
            a.ij = q();
            a.qj = true;
            Vf(a, c.ta);
            for (b = 0; b < c.ta.length; ++b) {
                var d = a.fg[b],
                    e = c.ta[b];
                d.xc = e.xc.e();
                d.Qb = e.Qb.e();
                d.yc = e.yc.e()
            }
        }
    }
}

function Sf(a, b) {
    var c = a.Ka;
    if (c) {
        var d = 1;
        if (a.qj) {
            var e = q();
            if (e - a.ij > a.hd) a.qj = false;
            else {
                d = (e - a.ij) / a.hd;
                Vf(a, c.ta);
                for (e = 0; e < c.ta.length; ++e) {
                    var f = a.fg[e],
                        g = c.ta[e];
                    g.xc = f.xc.e();
                    g.Qb = f.Qb.e();
                    g.yc = f.yc.e()
                }
            }
        }
        a = d;
        if (!c.Ed || n.F(c.il, b) && a == 1) c = false;
        else {
            c.il = b;
            if (a < 0) c = false;
            else {
                if (n.F(a, 1))
                    for (d = 0; d < c.ta.length; ++d) {
                        e = c.ta[d];
                        f = e.xc.e();
                        g = e.Qb.e();
                        var i = e.yc.e();
                        qd(c, b, e, f, e.ip, g, e.qp, i, e.pp);
                        e.xc = f.e();
                        e.Qb = g.e();
                        e.yc = i.e()
                    } else
                        for (d = 0; d < c.ta.length; ++d) {
                            e = c.ta[d];
                            var j = e.xc.e(),
                                m = e.Qb.e(),
                                o = e.yc.e();
                            f = j.e();
                            g = m.e();
                            i = o.e();
                            qd(c, b, e, f, e.ip, g, e.qp, i, e.pp);
                            e.xc = Ka(j, f, a);
                            e.Qb = Ka(m, g, a);
                            Cb(e.yc, o, i, a)
                        }
                for (b = 0; b < c.ta.length; ++b) {
                    a = c.ta[b];
                    if (a.nf.length || a.ze.length || a.rf.length) {
                        if (!a.yc) a.yc = new Ab;
                        if (!a.xc) a.xc = new s;
                        a.hg = Db(a.yc);
                        d = a.hg;
                        e = a.xc;
                        d.p += e.c * d.G;
                        d.v += e.b * d.G;
                        d.s += e.d * d.G;
                        d.w += e.c * d.H;
                        d.q += e.b * d.H;
                        d.t += e.d * d.H;
                        d.A += e.c * d.I;
                        d.B += e.b * d.I;
                        d.o += e.d * d.I;
                        d.J += e.c * d.L;
                        d.K += e.b * d.L;
                        d.C += e.d * d.L;
                        d.La = false;
                        a.nn = false;
                        if (a.ze.length && a.Qb && !(n.F(a.Qb.c, 1) && n.F(a.Qb.b, 1) && n.F(a.Qb.d,
                                1))) {
                            e = a.Qb;
                            d.p *= e.c;
                            d.v *= e.c;
                            d.s *= e.c;
                            d.G *= e.c;
                            d.w *= e.b;
                            d.q *= e.b;
                            d.t *= e.b;
                            d.H *= e.b;
                            d.A *= e.d;
                            d.B *= e.d;
                            d.o *= e.d;
                            d.I *= e.d
                        }
                    } else a.hg = a.Kh.e()
                }
                c = c.Um = true
            }
        }
        return c
    }
}
Mf.prototype.fp = function() {
    if (this.n != null)
        for (var a = 0; a < this.Ab.length;) {
            var b = 0,
                c = this.Ab[a].Wj;
            if (c != -1) b = Wf(this.n, this, c);
            if (b && b.k() == "dummytrans") {
                this.Ab[a].za = b;
                ++a
            } else this.Ab.splice(a, 1)
        }
};

function Tf(a) {
    var b = a.Ka;
    if (b && b.Ed) {
        Sf(a, a.Ac);
        rd(b, null, null);
        b = b.ta;
        for (var c = 0; c < a.Ab.length; ++c) {
            var d = a.Ab[c];
            if (d.eg >= 0 && d.eg < b.length && d.za != null) {
                var e = b[d.eg];
                if (e) d.za.ug = e.af.e()
            }
        }
    }
}
Mf.prototype.Ri = function(a, b) {
    for (var c = 0; c < this.Ab.length; ++c)
        if (this.Ab[c].za == a) this.Ab[c].za = b && b.k() == "dummytrans" ? b : null
};

function Xf() {
    this.g = new B;
    this.Qp = this.yq = 0
}
Xf.prototype = new $;

function Yf() {
    this.gb();
    this.g = new B;
    this.ug = new I
}
Yf.prototype = new $;
Yf.prototype.i = function(a, b, c) {
    var d = new Yf;
    jf(this, d, a, b, c);
    if (this.g) d.g = this.g.e();
    if (this.ug) d.ug = this.ug;
    return d
};
Yf.prototype.Dm = ca("ug");
Yf.prototype.k = k("dummytrans");

function Zf() {
    this.gb();
    this.g = new B
}
Zf.prototype = new $;
Zf.prototype.k = k("terrain");

function $f() {
    this.hn = 0;
    this.vk = new Na(1, 1);
    this.oo = this.po = 0.5;
    this.Di = n.Kf(190, 255, 255, 255);
    this.dn = true;
    this.io = n.Kf(190, 0, 100, 0);
    this.$k = false;
    this.ml = 0;
    this.sn = new I;
    this.rj = false;
    this.u = new dd;
    this.u.Wb = false;
    this.u.h = -1;
    this.u.he = false;
    this.mn = this.of = null
}
$f.prototype = new qf;
l = $f.prototype;
l.k = k("water");
l.Oa = function(a) {
    if (this.X) {
        pf(a, this, rf);
        $.prototype.Oa.call(this, a);
        var b = a.ea,
            c = q(),
            d = false;
        if (this.ml) {
            d = 100;
            if (b) {
                var e = O(b),
                    f = Pa(this.lb()).getLength();
                e = O(this).yb(e);
                if (e > f) d *= e / f;
                if (d > 1E3) d = 1E3;
                b.xb.F(this.sn) || (d = 10);
                this.sn = b.xb.e()
            }
            d = this.ml + d < c
        } else d = true;
        if (d) {
            this.ml = c;
            pf(a, this, Pe)
        }
        if (this.$k) pf(a, this, Re);
        else if (b) {
            b = O(b);
            c = O(this);
            if (b.b < c.b) {
                c = hf(this);
                b.c >= c.D.c && b.c <= c.N.c && b.d >= c.D.d && b.d <= c.N.d && pf(a, this, Re)
            }
        }
    }
};
l.Lb = function(a, b) {
    qf.prototype.Lb.call(this, a, b);
    return true
};
l.rb = function(a) {
    var b = this.n.ea;
    if (b && this.P) {
        if ((b = this.n.nj) && this.n.Bb != Re)
            if (!Mb(b, hf(this))) return;
        if (this.n.Bb == rf) {
            if (!(this.u.h == -1 || this.of == null))
                if (!this.rj) {
                    a.Hc(this.Y);
                    if (b = this.P) {
                        this.g = b.g;
                        this.u.Ba = this.of;
                        if (b && b.qa && b.qa.length > 0) this.u.rc = b.qa[0].u.Ba;
                        for (var c = 0; c < b.qa.length; ++c) {
                            var d = b.qa[c];
                            if (d) {
                                Hd(a, this.u);
                                Id(a, d)
                            }
                        }
                    }
                }
        } else if (this.n.Bb == Pe) {
            if (ag(this, a)) {
                c = a.qh;
                a.cg = true;
                if ($d(a, this.of, true, true, this.n.mh)) {
                    this.rj = true;
                    b = this.n.ea;
                    d = b.Fa;
                    var e = b.xb,
                        f = b.wb,
                        g = b.ga,
                        i =
                        b.f,
                        j = b.Af,
                        m = b.Ie;
                    b.Ie = true;
                    b.Af = false;
                    var o = O(this).b,
                        p = g.e(),
                        h = i.e();
                    h.b = -i.b + 2 * o;
                    b.f = h;
                    p.b = -g.b + 2 * o;
                    b.ga = p;
                    var v = new I;
                    ub(v, h, p, new s(0, 1, 0));
                    b.xb = v;
                    p = new Va;
                    o = new s(0, o, 0);
                    h = new s(0, 1, 0);
                    p.j = h.e();
                    Wa(p, o);
                    o = p.e();
                    p = x(o.j, -o.$a);
                    lb(v, p);
                    h = o.j.e();
                    h.normalize();
                    var r = hb(v);
                    if (!n.F(r.c, 0) && !n.F(r.b, 0) && !n.F(r.d, 0) && (!n.F(r.c, 1) || !n.F(r.b, 1) || !n.F(r.d, 1))) {
                        h.c *= 1 / (r.c * r.c);
                        h.b *= 1 / (r.b * r.b);
                        h.d *= 1 / (r.d * r.d)
                    }
                    ib(v, h);
                    h.normalize();
                    o.j = h.e();
                    Wa(o, p);
                    v = new I;
                    p = v = d.e();
                    h = n.up(o.j.c + p.A) / p.p;
                    r = n.up(o.j.b +
                        p.B) / p.q;
                    h = -2 / (h * o.j.c + r * o.j.b + -1 * o.j.d + (1 + p.o) / p.C * o.$a);
                    p.s = o.j.c * h;
                    p.t = o.j.b * h;
                    p.o = o.j.d * h + 1;
                    p.C = o.$a * h;
                    this.mn = v;
                    Qe(this.n, a, this);
                    b.Ie = m;
                    b.Fa = d;
                    b.xb = e;
                    b.ga = g;
                    b.f = i;
                    b.wb = f;
                    b.Af = j;
                    a.cg = false;
                    $d(a, c, false, true);
                    this.rj = false
                }
                a.cg = false
            }
        } else if (this.n.Bb == Re && !this.rj) {
            this.dn && !this.$k && Od(a, 0, 0, a.Jb(), a.Ib(), this.io, true);
            this.$k && Qd(a, 10, 10, 250, 200, this.of, false)
        }
    }
};
l.i = function(a, b, c) {
    var d = new $f;
    jf(this, d, a, b, c);
    if (this.P) d.P = this.P.e();
    d.ci = this.ci;
    d.ic = this.ic;
    if (this.g) d.g = this.g.e();
    return d
};

function ag(a, b) {
    if (a.$p) return a.of != null;
    a.$p = true;
    bg(a, b);
    if (!a.of) return false;
    var c = b.U;
    a.u.h = Xd(b, a.Er, a.Rq, true, c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA, function() {
        var d = b.U,
            e = Yd(b, a.u.h);
        if (e) {
            var f = d.getUniformLocation(e, "mWaterColor");
            d.uniform4f(f, n.cd(a.Di) / 255, n.ad(a.Di) / 255, n.$c(a.Di) / 255, n.Yd(a.Di) / 255);
            f = q() / 1E3 % 1E3;
            var g = d.getUniformLocation(e, "mWaveMovement");
            d.uniform2f(g, a.vk.c * f, a.vk.b * f);
            f = d.getUniformLocation(e, "mWaveLength");
            d.uniform1f(f, a.po * 100);
            e = d.getUniformLocation(e, "mWaveHeight");
            d.uniform1f(e, a.oo)
        }
    });
    return true
}
$f.prototype.Er = "\t\t\tuniform mat4 worldviewproj;\t\t\t\t\t\t\t\t\t\tuniform float mWaveLength;\t\t\t\t\t\t\t\t\t\tuniform vec2 mWaveMovement;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vPosition;\t\t\t\t\t\t\t\t\t    attribute vec4 vNormal;\t\t\t\t\t\t\t\t\t\t\tattribute vec4 vColor;\t\t\t\t\t\t\t\t\t\t    attribute vec2 vTexCoord1;\t\t\t\t\t\t\t\t\t\tattribute vec2 vTexCoord2;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvarying vec2 WavesTexCoord;\t\t\t\t\t\t\t\t\t\tvarying vec3 TexCoord;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 pos = worldviewproj * vPosition;\t\t\t\t\t        gl_Position = pos;\t\t\t\t\t\t\t\t\t\t\t\tWavesTexCoord = (vPosition.xz / mWaveLength) + mWaveMovement;\t\t\tTexCoord.x = 0.5 * (pos.w + pos.x);\t\t\t\t\t\t\t\tTexCoord.y = 0.5 * (pos.w + pos.y);\t\t\t\t\t\t\t\tTexCoord.z = pos.w;\t\t\t\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
$f.prototype.Rq = "\t\t\tuniform sampler2D texture1;\t\t\t\t\t\t\t\t\t\tuniform sampler2D texture2;\t\t\t\t\t\t\t\t\t\tuniform float\t\tmWaveHeight;\t\t\t\t\t\t\t\tuniform vec4\t\tmWaterColor;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    varying vec2 WavesTexCoord;\t\t\t\t\t\t\t\t\t\tvarying vec3 TexCoord;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    void main()\t\t\t\t\t\t\t\t\t\t\t\t\t    {\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec4 normalClr = texture2D(texture2, WavesTexCoord.xy);\t\t\tvec2 waveMovement = mWaveHeight * (normalClr.xy - 0.5);\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvec2 projTexCoord = clamp((TexCoord.xy / TexCoord.z) + waveMovement, 0.0, 1.0);\t\t\t\tvec4 reflectiveColor = texture2D(texture1, vec2(projTexCoord.x, -projTexCoord.y) );\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgl_FragColor = mWaterColor * reflectiveColor;\t\t\t\t\tgl_FragColor.a = mWaterColor.a;\t\t\t\t\t\t\t    }\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";

function bg(a, b) {
    if (b != null) {
        var c = b.Jb(),
            d = b.Ib(),
            e = 512,
            f = 512;
        switch (a.hn) {
            case 0:
                e = c / 2;
                f = d / 2;
                break;
            case 1:
                e = c / 3;
                f = d / 3;
                break;
            case 2:
                e = c / 4;
                f = d / 4;
                break
        }
        e = yd(b, e);
        f = yd(b, f);
        e = Math.min(e, f);
        f = Math.min(e, f);
        if (e < 64) e = 64;
        if (f < 64) f = 64;
        a.of = Zd(b, e, f)
    }
}

function cg(a, b) {
    a.mn.ra(b.Fa)
};

function dg() {
    this.gb()
}
l = dg.prototype;
l.gb = function() {
    this.Pa = new $;
    this.Pa.n = this;
    this.l = "";
    this.mh = 0;
    this.zd = null;
    this.Pb = new oa;
    this.Pb.pc = 0;
    this.Pb.kc = 0;
    this.Pb.fc = 0;
    this.Dd = 1;
    this.Cd = false;
    this.Tb = n.Kf(255, 200, 200, 200);
    this.Ah = 0.001;
    this.Ei = 1;
    this.Fi = 4;
    this.Hh = null;
    this.Qa = 0;
    this.ea = null;
    this.bl = false;
    this.Lj = new I;
    this.uq = null;
    this.ck = 2;
    this.Bb = 0;
    this.Ae = [];
    this.Dg = [];
    this.Id = [];
    this.dk = [];
    this.$j = [];
    this.Nc = [];
    this.qq = this.Zp = 0;
    this.xq = false;
    this.nj = null;
    this.lo = false;
    this.uh = [];
    this.jl = new s
};
l.Ck = k("unknown");
l.eo = false;
l.Be = null;
l.ii = null;
l.jk = null;
l.Eg = null;
l.Fg = null;
l.oi = false;
l.ki = 0.001;
l.li = 1.0E-4;
l.ni = 0.5;
l.kk = 0.5;
l.jq = true;
l.Tn = 0.2;
l.kq = 1024;

function eg(a, b) {
    if (a.Be) return true;
    if (a.eo) return false;
    a.eo = true;
    if (!a.Be) {
        var c = a.kq,
            d = !b.Un;
        a.Be = Zd(b, c, c, d);
        if (!a.Be) return false;
        if (n.tk) {
            c = c;
            if (c > 1E3) c /= 2;
            a.ii = Zd(b, c, c, d);
            if (!a.ii) {
                a.Be = null;
                return false
            }
        }
        a.jk = new dd;
        a.Eg = new dd;
        a.ji = new dd;
        d = Xd(b, b.Cr, d ? b.Iq : b.Jq);
        c = Xd(b, b.Ar, b.Do);
        b = Xd(b, b.Br, b.Do);
        if (d == -1 || c == -1 || b == -1) {
            a.Be = null;
            a.ii = null;
            return false
        }
        a.jk.h = d;
        a.Eg.h = c;
        a.ji.h = b
    }
    return true
}

function Oe(a, b) {
    if (!eg(dg.prototype, b)) return false;
    for (var c = null, d = 0; d < a.Id.length; ++d) {
        var e = a.Id[d];
        if (e.Ma && e.Ma.dg) {
            c = e.Ma.Ia.e();
            break
        }
    }
    if (!c) return false;
    e = a.ea;
    var f = e.Fa.e(),
        g = e.xb.e(),
        i = e.wb.e(),
        j = e.ga.e(),
        m = e.f.e(),
        o = e.Af,
        p = e.Ie;
    e.Ie = true;
    e.Af = false;
    var h = new B,
        v = 0;
    for (d = 0; d < a.Ae.length; ++d) {
        var r = a.Ae[d],
            E = hf(r);
        if (v == 0) h = E;
        else {
            r = h;
            C(r, E.D);
            C(r, E.N)
        }++v
    }
    v = b.qh;
    for (E = 0; E < (n.tk ? 2 : 1); ++E) {
        if (!$d(b, E == 0 ? a.Be : a.ii, true, true)) break;
        d = new s(40, 100, 40);
        var z = new s(0, 0, 0);
        r = 120;
        var u = Pa(h).getLength();
        z = Oa(h);
        if (E == 0) {
            d = j.substract(m);
            va(d, r);
            z = m.add(d);
            r = u * a.Tn
        } else r = u * 0.9;
        var y = c.e();
        va(y, u * 1);
        d = z.substract(y);
        va(y, u * -1);
        z = z.substract(y);
        y = new s(0, 1, 0);
        var D;
        D = z.substract(d);
        var H = D.c * D.c + D.b * D.b + D.d * D.d;
        if (H > -1.0E-7 && H < 1.0E-7) D = new s(0, 0, 0);
        else {
            H = 1 / Math.sqrt(H);
            D = new s(D.c * H, D.b * H, D.d * H)
        }
        if (D.ja(y) == -1) y.c += 0.01;
        ub(e.xb, d, z, y);
        u = Math.max(100, u) * 2;
        a.jq ? sb(e.Fa, r, r, 1, u) : rb(e.Fa, n.PI / 3.5, 4 / 3, 1, u);
        r = new I;
        r = K(r, e.Fa);
        r = K(r, e.xb);
        if (E == 0) a.Fg = r;
        else a.mi = r;
        a.Bb = fg;
        if (a.ea) {
            e.Fa.ra(b.Fa);
            e.xb.ra(b.Vc)
        }
        u =
            gg(a, b, b.Fa, b.Vc, d);
        a.Bb = Uf;
        for (d = 0; d < a.Ae.length; ++d) {
            r = a.Ae[d];
            y = r.k();
            z = y == "mesh";
            y = y == "animatedmesh";
            if (z || y)
                if (u == null || Ua(u, hf(r)))
                    if (z) {
                        if (r.yn) {
                            b.Hc(r.Y);
                            for (z = 0; z < r.P.qa.length; ++z) {
                                y = r.P.qa[z];
                                D = y.u.h;
                                if (D == hd) {
                                    a.Eg.Ba = y.u.Ba;
                                    Hd(b, a.Eg);
                                    Id(b, y)
                                } else if (D == id) {
                                    a.ji.Ba = y.u.Ba;
                                    Hd(b, a.ji);
                                    Id(b, y)
                                } else if (!ed(y.u)) {
                                    Hd(b, a.jk);
                                    Id(b, y)
                                }
                            }
                        }
                    } else y && r.rb(b)
        }
    }
    $d(b, v, false, true);
    e.Ie = p;
    e.Fa = f;
    e.xb = g;
    e.ga = j;
    e.f = m;
    e.wb = i;
    e.Af = o;
    return true
}

function gg(a, b, c, d, e, f) {
    var g = b = null;
    if (c != null && d != null && e != null) {
        g = new Gb;
        g.Mk(K(c, d));
        if (a.xq || f) b = g.lb(e)
    }
    a.nj = g;
    return b
}

function Qe(a, b, c) {
    a.Bb = fg;
    var d = null;
    if (a.ea) {
        d = O(a.ea);
        a.ea.rb(b)
    }
    a.Bb = hg;
    a.Xn && a.Xn.rb(b);
    Sd(b);
    b.Pb = a.Pb.e();
    b.Cd = a.Cd;
    b.Tb.Sf = 1;
    b.Tb.pc = n.cd(a.Tb) / 255;
    b.Tb.kc = n.ad(a.Tb) / 255;
    b.Tb.fc = n.$c(a.Tb) / 255;
    b.Ah = a.Cd ? a.Ah : 0;
    b.Ei = a.Ei;
    b.Fi = a.Fi;
    var e, f = 0;
    d != null && a.Id.length > 0 && a.Id.sort(function(i, j) {
        i = ya(d, O(i));
        j = ya(d, O(j));
        if (i > j) return 1;
        if (i < j) return -1;
        return 0
    });
    a.Bb = zf;
    for (e = 0; e < a.Id.length; ++e) a.Id[e].rb(b);
    f += a.Id.length;
    c && cg(c, b);
    c = gg(a, b, b.Fa, b.Vc, d);
    a.Bb = sf;
    for (e = 0; e < a.Ae.length; ++e) {
        var g =
            a.Ae[e];
        if (c == null || Ua(c, hf(g))) {
            g.rb(b);
            f += 1
        }
    }
    a.Bb = rf;
    d != null && a.Dg.length > 0 && a.Dg.sort(function(i, j) {
        i = ya(d, O(i));
        j = ya(d, O(j));
        if (i < j) return 1;
        if (i > j) return -1;
        return 0
    });
    for (e = 0; e < a.Dg.length; ++e) {
        g = a.Dg[e];
        if (c == null || Ua(c, hf(g))) {
            g.rb(b);
            f += 1
        }
    }
    a.Zp = f
}
dg.prototype.getName = ca("l");
dg.prototype.Pm = ba("l");

function ig(a, b) {
    a.ea = b
}

function Le(a) {
    a.bl = true
}

function pf(a, b, c) {
    if (c == null) c = sf;
    switch (c) {
        case hg:
            a.Xn = b;
            break;
        case sf:
            a.Ae.push(b);
            break;
        case zf:
            a.Id.push(b);
            break;
        case fg:
            break;
        case rf:
            a.Dg.push(b);
            break;
        case Re:
            a.$j.push(b);
            break;
        case Pe:
            a.dk.push(b);
            break
    }
}

function Te(a, b) {
    if (a.Pa == null) return null;
    var c = [];
    jg(a, a.Pa, b, c);
    return c
}

function jg(a, b, c, d) {
    b.k() == c && d.push(b);
    for (var e = 0; e < b.Z.length; ++e) jg(a, b.Z[e], c, d)
}

function sc(a, b) {
    if (a.Pa == null) return null;
    var c = [];
    kg(a, a.Pa, b, c);
    return c
}

function kg(a, b, c, d) {
    N(b, c) != null && d.push(b);
    for (var e = 0; e < b.Z.length; ++e) kg(a, b.Z[e], c, d)
}

function lg(a, b) {
    if (a.Pa == null) return null;
    return sg(a, a.Pa, b)
}

function sg(a, b, c) {
    if (b.l == c) return b;
    for (var d = 0; d < b.Z.length; ++d) {
        var e = sg(a, b.Z[d], c);
        if (e) return e
    }
    return null
}

function Sb(a, b) {
    if (a.Pa == null) return null;
    return Wf(a, a.Pa, b)
}

function Wf(a, b, c) {
    if (b.Ja == c) return b;
    for (var d = 0; d < b.Z.length; ++d) {
        var e = Wf(a, b.Z[d], c);
        if (e) return e
    }
    return null
}

function tg(a, b) {
    if (b != null) {
        for (var c = 0; c < a.Nc.length; ++c)
            if (a.Nc[c] === b) return;
        a.Nc.push(b)
    }
}

function Ze(a, b, c) {
    var d = Te(a, "mesh");
    if (d == null) return null;
    var e = null;
    if (c) {
        c.clear();
        e = c
    } else e = new ug;
    for (c = 0; c < d.length; ++c) {
        var f = d[c];
        if (f && f.ic) {
            var g = null;
            if (f.db) g = f.db;
            else {
                var i = g = null;
                if (f.vb && f.vb.k() == "terrain") {
                    g = hd;
                    i = id
                }
                g = f.P && nd(f.P) > 100 ? new vg(f.P, f, 64, g, i) : new wg(f.P, f, g, i)
            }
            if (b && f.db == null) f.db = g;
            Zc(e, g)
        }
    }
    d = Te(a, "animatedmesh");
    for (c = 0; c < d.length; ++c)
        if ((a = d[c]) && a.Ka && !a.Ka.Ed && a.Ka.si && !a.Ka.si.N.F(a.Ka.si.D)) {
            g = a.db ? a.db : new xg(a.Ka.si, a);
            if (b && a.db == null) a.db = g;
            Zc(e, g)
        }
    return e
}

function Wc(a, b, c) {
    var d = {};
    d.Me = b;
    d.tr = c + q();
    a.uh.push(d)
}

function yg(a, b, c, d, e) {
    if (b && b.X && (b.k() == "2doverlay" || b.k() == "mobile2dinput"))
        if (!e || e && b.yo()) {
            var f = If(b, true, a.Hh);
            if (f.x <= c && f.y <= d && f.x + f.Wa >= c && f.y + f.Ua >= d) return b
        }
    for (f = 0; f < b.Z.length; ++f) {
        var g = yg(a, b.Z[f], c, d, e);
        if (g) return g
    }
    return null
}

function Yc(a) {
    for (var b = 0; b < 1E3; ++b) {
        var c = Math.round(Math.random() * 1E4 + 10);
        if (Sb(a, c) == null) return c
    }
    return -1
}
dg.prototype.Ri = function(a, b) {
    if (a && b) {
        for (var c = 0; c < a.Z.length && c < b.Z.length; ++c) {
            var d = a.Z[c],
                e = b.Z[c];
            d && e && d.k() == e.k() && b.Ri(d, e)
        }
        return -1
    }
};
var hg = 1,
    sf = 0,
    zf = 2,
    fg = 3,
    rf = 4,
    Re = 5,
    Pe = 6,
    Uf = 8;

function zg() {
    this.gb()
}
zg.prototype = new dg;
zg.prototype.Ck = k("panorama");

function Ag() {
    this.gb();
    this.Xk = new s;
    this.tj = new s
}
Ag.prototype = new dg;
Ag.prototype.Ck = k("free");

function Je() {
    this.a = this.ma = null;
    this.al = "";
    this.Eb = 0;
    this.aa = this.fb = null;
    this.ak = "";
    this.bo = this.Fe = null;
    this.un = false;
    this.Ip = function(a) {
        var b = "";
        a = new Uint8Array(a);
        for (var c = 0; c < a.byteLength; c++) b += String.fromCharCode(a[c]);
        return b
    };
    this.Vq = function(a, b, c, d, e) {
        this.al = b;
        this.fb = c;
        this.aa = e;
        this.Fe = d;
        if (this.fb != null) Z().fb = c;
        if (a != null && b.indexOf(".ccbz") != -1) a = this.Ip(a);
        if (a == null || a.length == 0) {
            ja(n.pa, "Ошибка: Не могу загрузить файл '" + b + "'");
            a = navigator.appVersion;
            a != null && a.indexOf("Chrome") !=
                -1 && ja(n.pa, "<i>Невозможно воспроизвети локально</i>", true);
            return null
        }
        if (b.indexOf(".ccbz") != -1) a = JSInflate.Uq(a);
        else if (b.indexOf(".ccbjs") != -1) a = n.Bq(a);
        this.ma = b = new me;
        this.tp();
        this.a = new Ad(a);
        if (!this.Km()) return null;
        this.bo = a;
        return b
    };
    this.tp = function() {
        var a = this.al,
            b = a.lastIndexOf("/");
        if (b != -1) a = a.substring(0, b + 1);
        this.ak = a
    };
    this.Km = function() {
        if (U(this.a) != 1701014630) return false;
        U(this.a);
        Ed(this.a,
            4);
        for (var a = 0; Bd(this.a) > 0;) {
            var b = this.qb();
            ++a;
            if (a == 1 && b != 1) return false;
            switch (b) {
                case 1:
                    this.$q();
                    break;
                case 12:
                    this.ar();
                    break;
                default:
                    this.Aa()
            }
        }
        return true
    };
    this.Aa = function() {
        this.a.Ra = 0 + this.Eb
    };
    this.qb = function() {
        var a = 0;
        a = Ed(this.a, 2);
        var b = 0;
        this.pj = b = Ed(this.a, 4);
        this.Eb = this.a.Ra + b;
        return a
    };
    this.In = function() {
        var a = new I(false);
        this.eq(a);
        return a
    };
    this.eq = function(a) {
        for (var b = 0; b < 16; ++b) qb(a, b, W(this.a))
    };
    this.gq = function() {
        var a = new Ab;
        a.Ca = W(this.a);
        a.c = W(this.a);
        a.b = W(this.a);
        a.d = W(this.a);
        return a
    };
    this.mp = function(a) {
        for (var b = 0, c = [], d = [0, 12416, 925824, 63447168, 4194836608, 2181570688], e = [], f = 0; f < a; ++f) e.push(Ed(this.a, 1));
        for (; b < a;) {
            f = 0;
            var g = this.ur[e[b]];
            if (b + g >= a) return c.join("");
            for (var i = g; i >= 0; --i) {
                f += e[b];
                ++b;
                if (i != 0) f <<= 6
            }
            if (b > a) break;
            f -= d[g];
            if (f < 1114111) c.push(this.Fq(f));
            else return c.join("")
        }
        return c.join("")
    };
    this.S = function() {
        var a = Ed(this.a, 4);
        if (a > 104857600) return "";
        if (a <= 0) return "";
        return this.mp(a)
    };
    this.ur = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5
    ];
    this.Fq = function(a) {
        if (a > 65535) {
            a -=
                65536;
            return String.fromCharCode(55296 + (a >> 10), 56320 + (a & 1023))
        } else return String.fromCharCode(a)
    };
    this.$q = function() {
        for (var a = this.Eb; Bd(this.a) > 0 && this.a.Ra < a;) switch (this.qb()) {
            case 1004:
                this.ma.rh = U(this.a);
                break;
            case 20:
                this.mr();
                break;
            case 2:
                var b = null;
                switch (U(this.a)) {
                    case 0:
                        b = new Ag;
                        this.kp(b);
                        break;
                    case 1:
                        b = new zg;
                        this.lp(b);
                        break;
                    default:
                        this.Aa()
                }
                this.ma.om(b);
                break;
            default:
                this.Aa()
        }
    };
    this.Nm = function(a, b, c, d, e, f, g) {
        this.al = d;
        this.fb = e;
        this.aa = g;
        this.Fe = f;
        this.a = new Ad(a);
        this.tp();
        U(this.a);
        U(this.a);
        Ed(this.a, 4);
        a = -1;
        d = this.qb();
        if (d != 1) return null;
        for (b = this.Eb; Bd(this.a) > 0 && this.a.Ra < b;) {
            d = this.qb();
            switch (d) {
                case 2:
                    d = U(this.a);
                    ++a;
                    if (a == c) {
                        c = null;
                        switch (d) {
                            case 0:
                                c = new Ag;
                                this.kp(c);
                                break;
                            case 1:
                                c = new zg;
                                this.lp(c);
                                break;
                            default:
                                this.Aa()
                        }
                        return c
                    } else this.Aa();
                default:
                    this.Aa()
            }
        }
        return null
    };
    this.mr = function() {
        U(this.a);
        this.ma.Hp = this.S();
        for (var a = this.Eb; Bd(this.a) > 0 && this.a.Ra < a;) switch (this.qb()) {
            case 35:
                U(this.a);
                U(this.a);
                U(this.a);
                U(this.a);
                var b = U(this.a);
                if ((b &
                        1) != 0) this.ma.ko = true;
                this.Aa();
                break;
            case 37:
                b = U(this.a);
                U(this.a);
                if ((b & 1) != 0)
                    if (n.pa == null) n.pa = new ea(elementIdOfCanvas, showFPSCounter);
                    else ga(n.pa);
                if ((b & 2) != 0) {
                    U(this.a);
                    this.S()
                }
                break;
            default:
                this.Aa()
        }
    };
    this.kp = function(a) {
        var b = this.Eb;
        for (this.nr(a); Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 1007:
                a.Xk = this.R();
                a.tj = this.R();
                break;
            case 8:
                this.hq(a);
                break;
            case 1008:
                a.Dd = W(this.a);
                break;
            case 1009:
                a.Cd = R(this.a);
                a.Ah = W(this.a);
                a.Tb = U(this.a);
                break;
            case 1010:
                R(this.a);
                a.Ei = W(this.a);
                a.Fi = W(this.a);
                break;
            case 1011:
                a.oi = R(this.a);
                a.ki = W(this.a);
                a.li = W(this.a);
                a.kk = W(this.a);
                a.ni = W(this.a);
                a.Tn = W(this.a);
                break;
            default:
                this.Aa()
        }
    };
    this.lp = function() {
        this.Aa()
    };
    this.R = function() {
        var a = new s;
        a.c = W(this.a);
        a.b = W(this.a);
        a.d = W(this.a);
        return a
    };
    this.Pl = function() {
        var a = new oa;
        a.pc = W(this.a);
        a.kc = W(this.a);
        a.fc = W(this.a);
        a.Sf = W(this.a);
        return a
    };
    this.Sr = function() {
        var a = W(this.a),
            b = W(this.a),
            c = W(this.a),
            d = W(this.a);
        if (a > 1) a = 1;
        if (b > 1) b = 1;
        if (c > 1) c = 1;
        if (d > 1) d = 1;
        return n.Kf(d * 255, a * 255, b *
            255, c * 255)
    };
    this.bi = function() {
        var a = new Na;
        a.c = W(this.a);
        a.b = W(this.a);
        return a
    };
    this.qc = function() {
        var a = new B;
        a.D = this.R();
        a.N = this.R();
        return a
    };
    this.nr = function(a) {
        if (this.qb() == 26) {
            a.l = this.S();
            a.mh = U(this.a)
        } else this.Sp()
    };
    this.Sp = function() {
        this.a.position -= 10
    };
    this.hq = function(a) {
        for (var b = this.Eb; Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 9:
                this.Kn(a, a.Pa, 0);
                break;
            default:
                this.Aa()
        }
    };
    this.Kn = function(a, b, c) {
        if (b != null) {
            var d = this.Eb,
                e = U(this.a),
                f = U(this.a),
                g = this.S(),
                i = this.R(),
                j = this.R(),
                m = this.R(),
                o = R(this.a),
                p = U(this.a),
                h = null,
                v = 0;
            if (c == 0) {
                b.X = o;
                b.l = g;
                b.mb = p
            }
            for (; Bd(this.a) > 0 && this.a.Ra < d;) switch (this.qb()) {
                case 9:
                    this.Kn(a, h ? h : b, c + 1);
                    break;
                case 10:
                    switch (e) {
                        case 2037085030:
                            h = new tf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.Lm(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1752395110:
                            h = new qf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.Lm(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1835950438:
                            h = new Mf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.er(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1953526632:
                            h = new Xf(this.aa, null);
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.hr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1819042406:
                            h = new uf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.fr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1835098982:
                            h = new Ve;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.n = a;
                            h.Ja = f;
                            this.gr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1751608422:
                            h = new yf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.ir(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1935946598:
                            h = new Ef;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.dr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1752461414:
                            h = new Af;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.jr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1954112614:
                            h = new Yf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            h.g = this.qc();
                            for (var r = 0; r < 16; ++r) qb(h.ug, r, W(this.a));
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1868837478:
                            h = new Hf(this.aa);
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.cr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1668575334:
                            h = new vf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.lr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1835283046:
                            h = new Kf(this.aa, a);
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.br(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        case 1920103526:
                            h = new Zf;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            h.g = this.qc();
                            vc(b, h);
                            h = h;
                            P(h);
                            this.Aa();
                            break;
                        case 1920235366:
                            h = new $f;
                            h.h = e;
                            h.f = i;
                            h.T = j;
                            h.na = m;
                            h.X = o;
                            h.l = g;
                            h.mb = p;
                            h.Ja = f;
                            h.n = a;
                            this.pr(h);
                            vc(b, h);
                            h = h;
                            P(h);
                            break;
                        default:
                            if (c == 0) a.Pb = this.Pl();
                            this.Aa();
                            break
                    }
                    break;
                case 11:
                    r = this.Hn();
                    h && h.uc(v) && h.uc(v).Mk(r);
                    ++v;
                    break;
                case 25:
                    r = h;
                    if (r == null && c == 0) r = a.Pa;
                    this.dq(r, a);
                    break;
                default:
                    this.Aa()
            }
            h && h.fp()
        }
    };
    this.Lm = function(a) {
        var b = this.Eb;
        a.g = this.qc();
        R(this.a);
        a.Nn = R(this.a);
        a.ic = R(this.a);
        for (a.yn = R(this.a); Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 14:
                var c = this.fq();
                a.P = c;
                break;
            default:
                this.Aa()
        }
    };
    this.fq = function() {
        var a = new md;
        a.g = this.qc();
        for (var b = this.Eb; Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 15:
                var c =
                    this.Jn();
                c != null && a.vd(c);
                break;
            default:
                this.Aa()
        }
        return a
    };
    this.Jn = function() {
        var a = new kd;
        a.g = this.qc();
        for (var b = this.Eb; Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 11:
                a.u = this.Hn();
                break;
            case 16:
                for (var c = Math.floor(this.pj / 2), d = 0; d < c; ++d) a.fa.push(Ed(this.a, 2));
                break;
            case 17:
                c = Math.floor(this.pj / 36);
                for (d = 0; d < c; ++d) {
                    var e = new Nb;
                    e.f = this.R();
                    e.j = this.R();
                    e.la = U(this.a);
                    e.wa = this.bi();
                    e.Ce = new Na;
                    a.m.push(e)
                }
                break;
            case 18:
                c = Math.floor(this.pj / 44);
                for (d = 0; d < c; ++d) {
                    e = new Nb;
                    e.f = this.R();
                    e.j = this.R();
                    e.la = U(this.a);
                    e.wa = this.bi();
                    e.Ce = this.bi();
                    a.m.push(e)
                }
                break;
            case 19:
                c = this.pj / 60;
                a.Sd = [];
                a.yd = [];
                for (d = 0; d < c; ++d) {
                    e = new Nb;
                    e.f = this.R();
                    e.j = this.R();
                    e.la = U(this.a);
                    e.wa = this.bi();
                    e.Ce = new Na;
                    a.Sd.push(this.R());
                    a.yd.push(this.R());
                    a.m.push(e)
                }
                break;
            default:
                this.Aa()
        }
        return a
    };
    this.Hn = function() {
        var a = new dd;
        a.h = U(this.a);
        U(this.a);
        U(this.a);
        U(this.a);
        U(this.a);
        W(this.a);
        U(this.a);
        U(this.a);
        R(this.a);
        R(this.a);
        a.Wb = R(this.a);
        a.If = R(this.a);
        Dd(this.a, 1);
        a.he = R(this.a);
        R(this.a);
        R(this.a);
        R(this.a);
        for (var b = 0; b < 4; ++b) {
            var c = this.od();
            switch (b) {
                case 0:
                    a.Ba = c;
                    break;
                case 1:
                    a.rc = c;
                    break
            }
            R(this.a);
            R(this.a);
            R(this.a);
            if (Ed(this.a, 2) != 0) switch (b) {
                case 0:
                    a.Rb = true;
                    break;
                case 1:
                    break
            }
        }
        return a
    };
    this.Ql = function() {
        return this.S()
    };
    this.Rl = function() {
        var a = this.ak + this.Ql();
        return fe(n.Xd, a, true)
    };
    this.od = function() {
        var a = this.Ql(),
            b = this.ak + a;
        if (this.fb != null && a != "") return vd(this.fb, b, true);
        return null
    };
    this.hr = function(a) {
        var b = this.Eb;
        a.g = this.qc();
        a.yq = U(this.a);
        for (a.Qp = U(this.a); Bd(this.a) >
            0 && this.a.Ra < b;) switch (this.qb()) {
            case 3:
                this.kr(a);
                break;
            default:
                this.Aa()
        }
    };
    this.kr = function(a) {
        var b = this.Eb;
        a.caption = this.S();
        a.Lg = this.od();
        this.bi();
        U(this.a);
        a.as = this.S();
        for (a.is = R(this.a); Bd(this.a) > 0 && this.a.Ra < b;) switch (this.qb()) {
            case 6:
                a.Xr = true;
                a.cs = this.S();
                break;
            case 4:
                a.Yr = true;
                a.Dk = this.S();
                break;
            case 5:
                a.Zr = true;
                a.js = this.S();
                a.ks = this.S();
                break;
            default:
                this.Aa()
        }
    };
    this.gr = function(a) {
        a.g = this.qc();
        a.ga = this.R();
        a.wb = this.R();
        a.ld = W(this.a);
        a.Ic = W(this.a);
        a.Qg = W(this.a);
        a.Pg =
            W(this.a);
        a.Ym = R(this.a);
        mf(a)
    };
    this.pr = function(a) {
        U(this.a);
        a.hn = U(this.a);
        a.vk.c = W(this.a);
        a.vk.b = W(this.a);
        a.po = W(this.a);
        a.oo = W(this.a);
        a.Di = U(this.a);
        a.dn = R(this.a);
        a.io = U(this.a);
        this.Lm(a)
    };
    this.ir = function(a) {
        a.g = this.qc();
        if (U(this.a) == 2) a.Ma.dg = true;
        a.Ma.la = this.Pl();
        this.Pl();
        R(this.a);
        a.Ma.Ia = this.R();
        var b = W(this.a);
        a.Ma.Ga = b;
        if (b != 0) a.Ma.lh = 1 / b
    };
    this.fr = function(a) {
        a.Cc.g = this.qc();
        a.g = a.Cc.g;
        a.qi = W(this.a);
        a.Hg = W(this.a);
        var b = Dd(this.a, 1);
        a.Fh = (b & 2) != 0
    };
    this.dr = function(a) {
        a.g = this.qc();
        a.Nb = this.Rl();
        a.re = W(this.a);
        a.Lh = W(this.a);
        a.Bn = U(this.a);
        a.Np = R(this.a);
        a.wn = U(this.a);
        a.rl = U(this.a);
        a.Og = W(this.a);
        a.sg = R(this.a);
        U(this.a)
    };
    this.jr = function(a) {
        a.g = this.qc();
        a.Ng = W(this.a);
        a.cf = R(this.a);
        U(this.a);
        for (var b = U(this.a), c = 0; c < b; ++c) a.Fb.push(this.R())
    };
    this.lr = function(a) {
        a.Ia = this.R();
        a.nd = U(this.a);
        a.Sb = this.R();
        a.gf = U(this.a);
        a.Mh = U(this.a);
        a.Nh = U(this.a);
        a.kg = U(this.a);
        a.Pj = U(this.a);
        a.Sj = U(this.a);
        a.Qj = U(this.a);
        a.lg = W(this.a);
        a.mg = W(this.a);
        a.ig = W(this.a);
        a.Oh = W(this.a);
        var b = U(this.a);
        if (b & 1) {
            a.yh = true;
            a.zh = U(this.a);
            a.zj = U(this.a)
        } else a.yh = false;
        if (b & 2) {
            a.ag = true;
            a.Dj = U(this.a);
            a.Dd = this.R()
        } else a.ag = false;
        if (b & 4) {
            a.wg = true;
            a.hk = W(this.a);
            a.ik = W(this.a)
        } else a.wg = false
    };
    this.br = function(a) {
        U(this.a);
        a.Od = R(this.a);
        if (a.Od) {
            a.jf = U(this.a);
            a.kf = U(this.a);
            a.xf = U(this.a);
            a.wf = U(this.a)
        } else {
            a.lf = W(this.a);
            a.mf = W(this.a);
            a.zf = W(this.a);
            a.yf = W(this.a)
        }
        a.Gg = R(this.a);
        a.Jc = U(this.a);
        a.Ha = this.od();
        a.Ee = this.od();
        a.vg = R(this.a);
        a.Yf = this.od();
        a.Fj = U(this.a);
        if (a.Fj ==
            1) a.Lc = U(this.a)
    };
    this.cr = function(a) {
        if (U(this.a) & 1) a.Tk = true;
        a.Od = R(this.a);
        if (a.Od) {
            a.jf = U(this.a);
            a.kf = U(this.a);
            a.xf = U(this.a);
            a.wf = U(this.a)
        } else {
            a.lf = W(this.a);
            a.mf = W(this.a);
            a.zf = W(this.a);
            a.yf = W(this.a)
        }
        a.Gg = R(this.a);
        a.Jc = U(this.a);
        a.Ha = this.od();
        a.Ee = this.od();
        a.vg = R(this.a);
        a.$e = R(this.a);
        a.Jg = Dd(this.a, 1);
        a.eb = this.S();
        a.kd = this.S();
        a.Bf = U(this.a);
        a.ih = R(this.a);
        a.Gl = R(this.a);
        a.Ej = U(this.a);
        a.Uh = R(this.a);
        a.Dh = U(this.a);
        a.Th = R(this.a)
    };
    this.dq = function(a, b) {
        if (a) {
            var c = null;
            switch (U(this.a)) {
                case 100:
                    b =
                        new ac;
                    b.ye = this.R();
                    c = b;
                    break;
                case 101:
                    b = new Xb;
                    b.$ = this.R();
                    b.Q = this.R();
                    b.qd = U(this.a);
                    b.Xb = R(this.a);
                    Yb(b);
                    c = b;
                    break;
                case 102:
                    b = new Bg;
                    b.oh = this.R();
                    b.Ia = this.R();
                    b.Ga = W(this.a);
                    b.ri = W(this.a);
                    b.gb();
                    c = b;
                    break;
                case 103:
                    b = new Cg;
                    b.Ga = this.R();
                    W(this.a);
                    b.ej = !n.F(W(this.a), 0);
                    W(this.a);
                    b.Ef = this.R();
                    c = U(this.a);
                    U(this.a);
                    U(this.a);
                    if (c & 1) b.sk = true;
                    b.Hb = W(this.a);
                    c = b;
                    break;
                case 104:
                    b = new Xe(a, this.aa);
                    b.jg = W(this.a);
                    b.Kb = W(this.a);
                    b.$b = W(this.a);
                    b.oe = W(this.a);
                    b.ue = R(this.a);
                    c = U(this.a);
                    if (c & 1) {
                        b.Jk =
                            false;
                        b.Wg = true
                    } else {
                        b.Jk = true;
                        b.Wg = false
                    }
                    if (c & 2) b.Uj = U(this.a);
                    if (a) {
                        b.xp = n.Qi(a.ld);
                        b.Im = b.xp + 10;
                        b.Fr = (b.Im - b.bp) / 50
                    }
                    c = b;
                    break;
                case 105:
                    b = new Dg(a, this.aa);
                    b.Ga = W(this.a);
                    b.$b = W(this.a);
                    b.ue = R(this.a);
                    c = U(this.a);
                    if (c & 2) {
                        b.Yn = true;
                        b.Hb = W(this.a)
                    }
                    if (c & 4) {
                        b.Zm = true;
                        b.te = W(this.a);
                        b.qe = W(this.a);
                        b.Gi = W(this.a)
                    }
                    c = b;
                    break;
                case 106:
                    var d = new Eg(b);
                    d.zi = U(this.a);
                    d.Oj = R(this.a);
                    d.Wh = this.S();
                    d.Xj = R(this.a);
                    d.Ue = this.R();
                    d.$f = Dd(this.a, 1);
                    d.nh = this.S();
                    c = U(this.a);
                    if (c & 1) d.xi = U(this.a);
                    if (d.$f == 3 || d.$f ==
                        4) d.r = this.kb(b);
                    c = d;
                    break;
                case 107:
                    c = new yc(b, this.aa);
                    c.Ye = R(this.a);
                    c.zc = R(this.a);
                    U(this.a);
                    c.r = this.kb(b);
                    c = c;
                    break;
                case 108:
                    d = new Fg(b);
                    d.wh = U(this.a);
                    d.bk = U(this.a);
                    d.ai = W(this.a);
                    d.Cg = U(this.a);
                    c = U(this.a);
                    if (c & 1) {
                        d.$m = 1;
                        d.Ol = this.R()
                    }
                    d.r = this.kb(b);
                    c = d;
                    break;
                case 109:
                    b = new Gg;
                    b.pd = U(this.a);
                    b.Df = U(this.a);
                    b.Kg = U(this.a);
                    b.Xb = R(this.a);
                    c = U(this.a);
                    b.Ya = [];
                    for (d = 0; d < c; ++d) b.Ya.push(this.od());
                    c = b;
                    break;
                case 110:
                    c = new Hg(b, this.aa);
                    c.Ye = R(this.a);
                    c.zc = R(this.a);
                    U(this.a);
                    c.fe = this.kb(b);
                    c.de =
                        this.kb(b);
                    c = c;
                    break;
                case 111:
                    c = new Ig(b);
                    c.Mg = U(this.a);
                    U(this.a);
                    c.r = this.kb(b);
                    c = c;
                    break;
                case 112:
                    c = new Jg(b, this.aa);
                    c.gg = U(this.a);
                    c.Lc = U(this.a);
                    c.Nr = R(this.a);
                    U(this.a);
                    c.r = this.kb(b);
                    c = c;
                    break;
                case 113:
                    d = new Kg(b);
                    d.ed = U(this.a);
                    d.Kd = W(this.a);
                    d.fh = W(this.a);
                    d.Vf = R(this.a);
                    d.Ub = U(this.a);
                    d.pk = this.S();
                    d.kh = this.S();
                    d.Xh = W(this.a);
                    d.fi = U(this.a);
                    d.zb = this.R();
                    d.Rd = this.S();
                    d.Wd = this.S();
                    d.vj = this.S();
                    d.gj = this.S();
                    if (d.ed == 3) d.Vh = U(this.a);
                    c = U(this.a);
                    if (c & 1) d.rg = U(this.a);
                    else {
                        d.rg = 1E4;
                        if (d.Kd !=
                            0) d.rg = d.Xh / (d.Kd / 1E3)
                    }
                    d.fd = this.kb(b);
                    d.be = this.kb(b);
                    d.ee = this.kb(b);
                    d.ce = this.kb(b);
                    c = d;
                    break;
                case 114:
                    b = new Lg;
                    b.gi = U(this.a);
                    b.zb = this.R();
                    b.Bj = U(this.a);
                    b.me = W(this.a);
                    b.qk = W(this.a);
                    c = U(this.a);
                    b.zc = c & 1 ? true : false;
                    c = b;
                    break;
                case 115:
                    b = new Mg(b, this.aa);
                    U(this.a);
                    b.gk = W(this.a);
                    b.Kb = W(this.a);
                    b.$b = W(this.a);
                    b.oe = W(this.a);
                    b.zb = this.R();
                    b.Rd = this.S();
                    b.Wd = this.S();
                    b.Ij = this.S();
                    b.fk = this.S();
                    c = U(this.a);
                    if (c & 1) b.xj = true;
                    if (c & 2) {
                        b.Ai = true;
                        b.bj = W(this.a);
                        b.Zf = W(this.a)
                    }
                    if (c & 4) b.Kl = true;
                    c = b;
                    break;
                case 116:
                    c = new Ng(b);
                    c.Gp = R(this.a);
                    U(this.a);
                    c.r = this.kb(b);
                    c = c;
                    break;
                case 117:
                    c = new n.Ve(b);
                    c.Vb = this.S();
                    U(this.a);
                    this.Gn(c.oc, b);
                    c = c;
                    break;
                default:
                    this.Aa();
                    return
            }
            c && Zb(a, c)
        } else this.Aa()
    };
    this.Gn = function(a, b) {
        for (var c = U(this.a), d = 0; d < c; ++d) {
            var e = new Og;
            e.h = U(this.a);
            e.l = this.S();
            switch (e.h) {
                case 1:
                    e.jc = W(this.a);
                    break;
                case 2:
                    e.Tc = this.S();
                    break;
                case 6:
                    e.Gf = this.R();
                    break;
                case 7:
                    e.vi = this.od();
                    break;
                case 9:
                    e.eh = this.kb(b);
                    break;
                case 0:
                case 4:
                case 5:
                case 8:
                case 3:
                default:
                    e.lc = U(this.a);
                    break
            }
            a.push(e)
        }
    };
    this.kb = function(a) {
        if (U(this.a)) {
            var b = new Rc(a);
            this.bq(b, a);
            return b
        }
        return null
    };
    this.bq = function(a, b) {
        var c = this.qb();
        if (c != 29) this.Aa();
        else
            for (var d = this.Eb; Bd(this.a) > 0 && this.a.Ra < d;) {
                c = this.qb();
                if (c == 30)(c = this.aq(U(this.a), b)) && Sc(a, c);
                else this.Aa()
            }
    };
    this.ar = function() {
        for (var a = this.Eb; Bd(this.a) > 0 && this.a.Ra < a;) switch (this.qb()) {
            case 13:
                var b = U(this.a),
                    c = this.S(),
                    d = U(this.a);
                if (b & 4) {
                    if (b = od(this.Fe, c)) b.ta.length > 0 || b.ab.length > 0 ? this.Aa() : this.or(b, d)
                } else if (b & 8) {
                    b = null;
                    try {
                        b = this.mp(d)
                    } catch (e) {
                        ja(n.pa,
                            "ошибка чтения скрипта: " + e)
                    }
                    if (b != null) {
                        d = Z();
                        Pg(d, b)
                    }
                }
                this.Aa();
                break;
            default:
                this.Aa()
        }
    };
    this.er = function(a) {
        a.g = this.qc();
        R(this.a);
        U(this.a);
        var b = U(this.a),
            c = U(this.a);
        a.Cb = W(this.a);
        Dd(this.a, 1);
        a.Yb = R(this.a);
        var d = U(this.a);
        if (d == 0) {
            a.hd = 250;
            a.ge = true
        } else if (d & 1) {
            a.hd = U(this.a);
            a.ge = a.hd > 0
        }
        a.sp(this.cq(a));
        a.Va = b;
        a.ub = c;
        if (d & 2) {
            b = U(this.a);
            for (c = 0; c < b; ++c) {
                d = new n.Qn;
                d.Wj = U(this.a);
                d.eg = U(this.a);
                a.Ab.push(d)
            }
        }
    };
    this.cq = function(a) {
        var b = this.Ql(),
            c = od(this.Fe, b);
        if (c == null) {
            c = new n.bm;
            c.l =
                b;
            c != null && this.Fe.ql.push(c);
            c = c
        }
        if (a != null && c != null) {
            if (c.wd == null) c.wd = [];
            c.wd.push(a)
        }
        return c
    };
    this.or = function(a, b) {
        if (a != null) {
            var c = U(this.a);
            a.Yk = W(this.a);
            if (c & 1) a.si = this.qc();
            c = this.Eb;
            b = this.a.Ra + b;
            for (var d = [], e = 0; Bd(this.a) > 0 && this.a.Ra < c && this.a.Ra < b;) {
                var f = this.qb();
                if (f == 33) {
                    f = new n.lq;
                    f.l = this.S();
                    f.Kh = this.In();
                    f.Ch = this.In();
                    a.ta.push(f);
                    e = U(this.a);
                    d.push(f);
                    e >= 0 && e < d.length && d[e].Z.push(f);
                    e = U(this.a);
                    for (var g = 0; g < e; ++g) f.jh.push(U(this.a));
                    g = U(this.a);
                    for (e = 0; e < g; ++e) {
                        var i =
                            new n.mq;
                        i.frame = W(this.a);
                        i.position = this.R();
                        f.nf.push(i)
                    }
                    g = U(this.a);
                    for (e = 0; e < g; ++e) {
                        i = new n.oq;
                        i.frame = W(this.a);
                        i.scale = this.R();
                        f.ze.push(i)
                    }
                    g = U(this.a);
                    for (e = 0; e < g; ++e) {
                        i = new n.nq;
                        i.frame = W(this.a);
                        i.rotation = this.gq();
                        f.rf.push(i)
                    }
                    g = U(this.a);
                    for (e = 0; e < g; ++e) {
                        i = new n.pq;
                        i.Hi = Ed(this.a, 2);
                        i.Zi = U(this.a);
                        i.Wi = W(this.a);
                        f.Hf.push(i)
                    }
                } else if (f == 15) {
                    f = this.Jn();
                    f != null && a.vd(f)
                } else if (f == 34) {
                    f = new n.Rh;
                    f.l = this.S();
                    f.xd = W(this.a);
                    f.Q = W(this.a);
                    f.Bc = W(this.a);
                    a.yl.push(f)
                } else this.Aa()
            }
            try {
                a.il = -1;
                a.Up = -1;
                b = c = 0;
                var j, m;
                for (d = 0; d < a.ta.length; ++d) {
                    f = false;
                    for (c = 0; c < a.ta.length; ++c) {
                        m = a.ta[c];
                        for (e = 0; e < m.Z.length; ++e)
                            if (m.Z[e] === a.ta[d]) f = true
                    }
                    f || a.qf.push(a.ta[d])
                }
                for (c = 0; c < a.ab.length; ++c) {
                    d = [];
                    a.uk.push(d);
                    j = a.ab[c];
                    var o = j.m.length;
                    for (f = 0; f < o; ++f) d.push(false)
                }
                a.Ed = false;
                d = o = 0;
                var p, h;
                for (o = 0; o < a.ta.length; ++o) {
                    h = a.ta[o];
                    if (h.nf.length || h.ze.length || h.rf.length || h.Hf.length) {
                        a.Ed = true;
                        break
                    }
                }
                if (a.Ed)
                    for (o = a.gd = 0; o < a.ta.length; ++o) {
                        h = a.ta[o];
                        if (h.nf.length) {
                            var v = h.nf[h.nf.length - 1];
                            if (v.frame >
                                a.gd) a.gd = v.frame
                        }
                        if (h.ze.length) {
                            var r = h.ze[h.ze.length - 1];
                            if (r.frame > a.gd) a.gd = r.frame
                        }
                        if (h.rf.length) {
                            var E = h.rf[h.rf.length - 1];
                            if (E.frame > a.gd) a.gd = E.frame
                        }
                    }
                if (a.Ed && !a.Dn) {
                    a.Dn = true;
                    for (o = 0; o < a.ta.length; ++o) {
                        h = a.ta[o];
                        for (d = 0; d < h.Hf.length; ++d) {
                            var z = h.Hf[d],
                                u = z.Zi;
                            p = a.ab[z.Hi];
                            var y = p.m[u];
                            z.ao = y.f.e();
                            z.$n = y.j.e()
                        }
                    }
                }
                pd(a, null, null);
                for (c = 0; c < a.ta.length; ++c) {
                    m = a.ta[c];
                    for (b = 0; b < m.jh.length; ++b) {
                        j = a.ab[m.jh[b]];
                        j.Ge = m.af.e()
                    }
                }
                if (a.ab.length == 0) {
                    a.tb.D.set(0, 0, 0);
                    a.tb.N.set(0, 0, 0)
                } else {
                    j = a.ab[0];
                    a.tb.D = j.g.D.e();
                    a.tb.N = j.g.N.e();
                    for (c = 1; c < a.ab.length; ++c) {
                        j = a.ab[c];
                        if (j.Ge == null) {
                            C(a.tb, j.g.D);
                            C(a.tb, j.g.N)
                        } else {
                            var D = j.g.e();
                            zb(j.Ge, D);
                            C(a.tb, D.D);
                            C(a.tb, D.N)
                        }
                    }
                }
            } catch (H) {
                ja(n.pa, "Ошибка" + H)
            }
            if (a.wd && a.wd.length) {
                for (e = 0; e < a.wd.length; ++e)(j = a.wd[e]) && Nf(j, j.Va, j.ub);
                a.wd = null
            }
        }
    };
    this.aq = function(a, b) {
        var c = 0;
        switch (a) {
            case 0:
                c = new Vb;
                c.Gj = U(this.a);
                c.tf = U(this.a);
                c.ba = R(this.a);
                U(this.a);
                return c;
            case 1:
                b = new Wb;
                b.ve = U(this.a);
                b.Pc = U(this.a);
                b.ba = R(this.a);
                b.ha =
                    this.R();
                if (b.ve == 4) b.fj = this.R();
                b.pf = R(this.a);
                b.Oc = U(this.a);
                c = U(this.a);
                if (c & 1) {
                    b.Ud = true;
                    b.Uc = U(this.a)
                }
                return b;
            case 2:
                b = new $b;
                b.Wl = U(this.a);
                b.yg = U(this.a);
                b.ba = R(this.a);
                b.ha = this.R();
                b.ek = false;
                c = U(this.a);
                if (c & 1) {
                    b.ek = true;
                    b.jm = U(this.a)
                }
                return b;
            case 3:
                c = new bc;
                c.Yl = U(this.a);
                c.zg = U(this.a);
                c.ba = R(this.a);
                c.ha = this.R();
                U(this.a);
                return c;
            case 4:
                c = new cc;
                c.pd = U(this.a);
                c.ac = U(this.a);
                c.ba = R(this.a);
                c.Lg = this.od();
                if (c.pd == 1) c.dl = U(this.a);
                U(this.a);
                return c;
            case 5:
                b = new Jc;
                c = U(this.a);
                b.hf = (c & 1) != 0;
                b.Nb = this.Rl();
                b.re = W(this.a);
                b.Lh = W(this.a);
                b.Og = W(this.a);
                b.sg = R(this.a);
                b.Qc = U(this.a);
                b.tg = R(this.a);
                b.Ll = this.R();
                return b;
            case 6:
                c = new Nc;
                c.Zn = U(this.a);
                return c;
            case 7:
                c = new gc;
                U(this.a);
                c.gl = this.S();
                return c;
            case 8:
                c = new hc;
                U(this.a);
                c.mm = this.S();
                c.ga = this.S();
                return c;
            case 9:
                c = new ic;
                c.xg = U(this.a);
                c.ba = R(this.a);
                c.Xb = R(this.a);
                c.Rk = this.S();
                U(this.a);
                return c;
            case 10:
                c = new kc(this.aa);
                c.sf = this.S();
                U(this.a);
                return c;
            case 11:
                c = new mc(this.aa);
                c.Uf = U(this.a);
                U(this.a);
                return c;
            case 12:
                b = new oc;
                b.ve = U(this.a);
                b.Pc = U(this.a);
                b.ba = R(this.a);
                b.ha = this.R();
                b.pf = R(this.a);
                b.Oc = U(this.a);
                c = U(this.a);
                if (c & 1) {
                    b.Ud = true;
                    b.Uc = U(this.a)
                }
                return b;
            case 13:
                a = new rc;
                a.pi = U(this.a);
                a.ke = U(this.a);
                a.kj = W(this.a);
                a.vf = U(this.a);
                a.Wc = W(this.a);
                c = U(this.a);
                if (c & 1) {
                    a.uf = U(this.a);
                    a.mk = R(this.a);
                    a.gh = this.R()
                }
                if (c & 2) a.dh = this.kb(b);
                if (c & 4) a.lk = this.R();
                return a;
            case 14:
                this.Aa();
                return null;
            case 15:
                c = new Rb;
                U(this.a);
                c.ac = U(this.a);
                c.ba = R(this.a);
                c.eb = this.S();
                return c;
            case 16:
                c = new Bc;
                U(this.a);
                c.Ob = this.S();
                c.Il = U(this.a);
                c.Ff = U(this.a);
                c.Vd = this.S();
                return c;
            case 17:
                a = new Hc;
                c = U(this.a);
                a.Ob = this.S();
                a.mj = U(this.a);
                a.Ff = U(this.a);
                a.Vd = this.S();
                a.r = this.kb(b);
                if (c & 1) a.wi = this.kb(b);
                return a;
            case 18:
                c = new Ic;
                c.hi = U(this.a);
                c.ba = R(this.a);
                U(this.a);
                return c;
            case 19:
                c = new Oc;
                U(this.a);
                c.Ob = this.S();
                c.Mj = R(this.a);
                return c;
            case 20:
                c = new Uc(this.aa);
                U(this.a);
                c.sf = this.S();
                this.un = true;
                return c;
            case 22:
                c = new Xc;
                c.Ag = U(this.a);
                c.Uk = R(this.a);
                U(this.a);
                c.r = this.kb(b);
                return c;
            case 23:
                c = new Vc;
                c.Bg = U(this.a);
                c.Zk = R(this.a);
                c.fm = U(this.a);
                U(this.a);
                return c;
            case 24:
                c = new Qg;
                c.Vb = this.S();
                U(this.a);
                this.Gn(c.oc, b);
                return c;
            case 25:
                a = new $c(this.aa);
                c = U(this.a);
                a.hf = (c & 1) != 0;
                a.lj = U(this.a);
                a.km = this.S();
                U(this.a);
                a.Qc = U(this.a);
                a.tg = R(this.a);
                a.pl = U(this.a);
                a.dj = this.kb(b);
                a.cj = this.kb(b);
                return a;
            case 26:
                c = new Lc;
                U(this.a);
                c.Nb = this.Rl();
                return c;
            default:
                this.Aa()
        }
        return null
    }
};

function Rg() {
    this.h = -1
}
l = Rg.prototype;
l.k = k("none");
l.hb = k(false);
l.$d = aa();
l.Pf = aa();
l.sd = aa();
l.Pe = aa();
l.Ne = k(false);
l.Oe = k(false);
l.reset = aa();
l.Lf = k(null);
l.i = k(null);

function Xe(a, b) {
    this.h = -1;
    this.vc = 0;
    this.ue = false;
    this.Wg = true;
    this.Mi = this.Je = this.Se = this.Qe = this.Le = this.Jm = this.Jk = false;
    this.Uj = 0;
    this.Vg = new s(0, 0, 0);
    this.Mm = this.ae = this.Gm = 0;
    this.bp = 20;
    this.Im = 100;
    this.Fr = (this.Im - this.bp) / 50;
    this.xp = 90;
    this.vc = q();
    this.Ea = a;
    this.aa = b;
    this.Hd = this.Gd = -1;
    this.ol = true;
    a && qc(this, a.ga)
}
Xe.prototype = new Rg;
l = Xe.prototype;
l.k = k("camerafps");
l.jg = 88;
l.Kb = 0.06;
l.$b = 200;
l.oe = 0;
l.ue = false;
l.Rj = true;

function Ye(a, b) {
    a.Rj = b
}

function qc(a, b) {
    if (a.Ea != null) {
        b = b.substract(a.Ea.f);
        b = Ha(b);
        a.ae = b.c;
        a.Mm = b.b;
        if (a.ae > a.jg) a.ae -= 360
    }
}
l = Xe.prototype;
l.hb = function(a) {
    if (this.Ea == null) return false;
    if (this.Ea.n.ea !== this.Ea) return false;
    var b = q(),
        c = b - this.vc;
    if (c == 0) return false;
    if (c > 250) c = 250;
    this.vc = b;
    var d = new s(0, 0, 0);
    if (this.Rj && (this.Se || this.Je)) {
        var e = this.Ea.f.substract(this.Ea.ga);
        if (this.ue) e.b = 0;
        e.normalize();
        this.Se && d.oa(x(e, this.Kb * -c));
        this.Je && d.oa(x(e, this.Kb * c))
    }
    if (this.Rj && (this.Le || this.Qe)) {
        e = Ga(this.Ea.f.substract(this.Ea.ga), this.Ea.wb);
        e.normalize();
        if (this.Le) {
            e = x(e, this.Kb * -c);
            d.oa(e)
        }
        if (this.Qe) {
            e = x(e, this.Kb * c);
            d.oa(e)
        }
    }
    if (this.Uj !=
        0) {
        e = d.e();
        if (xa(e)) {
            if (this.Gm != 0 && !xa(this.Vg)) {
                e = b - this.Gm;
                if (e > 0 && e < this.Uj) {
                    e = this.Vg.getLength() * (1 - e / this.Uj) * c;
                    var f = this.Vg.e();
                    f.normalize();
                    A(f, e * 0.5);
                    d.oa(f)
                } else this.Vg.set(0, 0, 0)
            }
        } else {
            this.Vg = e;
            A(this.Vg, 1 / c);
            this.Gm = b
        }
    }
    d.normalize();
    A(d, c * this.Kb);
    this.Ea.f.oa(d);
    pc(this.Ea, this.Ea.ga.add(d));
    d = new s(0, 0, 1);
    e = new I;
    vb(e, new s(this.ae, this.Mm, 0));
    lb(e, d);
    e = false;
    if (this.aa != null) e = this.aa.Qf;
    var g = 0;
    var i = f = 2.0E-5,
        j = false;
    if (this.aa != null && a.n != null && !e) {
        j = a.n;
        j = j.Pa == null || j.Hh ==
            null ? null : yg(j, j.Pa, this.aa.Dc, this.aa.Ec, true);
        j = j != null
    }
    if (this.Wg) {
        f *= 3;
        i *= 3
    }
    if (!j)
        if (e) g = this.aa.wl;
        else if (this.Jk) {
        var m = this.aa.O.Ib(),
            o = this.aa.Ec;
        if (m > 0 && o > 0 && this.aa.Qh) g = Math.sin((o - m / 2) / m) * 100 * 0.5
    } else if (this.Wg || this.Jm)
        if (this.aa.Ph) {
            m = this.aa.Ec;
            g = this.Hd == -1 ? 0 : m - this.Hd;
            if (g != 0) this.aa.kl = b;
            this.Hd = m
        } else this.Hd = -1;
    g += 0;
    c = c;
    if (c > 100) c = 100;
    if (g > 300) g = 300;
    if (g < -300) g = -300;
    this.ae += g * c * this.$b * i;
    if (this.ae < -this.jg) this.ae = -this.jg;
    if (this.ae > this.jg) this.ae = this.jg;
    g = 0;
    if (!j)
        if (e) g =
            this.aa.vl;
        else if (this.Jk) {
        b = this.aa.O.Jb();
        i = this.aa.Dc;
        if (b > 0 && i > 0 && this.aa.Qh) g = Math.sin((i - b / 2) / b) * 100 * 0.5
    } else if (this.Wg || this.Jm)
        if (this.aa.Ph) {
            i = this.aa.Dc;
            g = this.Gd == -1 ? 0 : i - this.Gd;
            if (g != 0) this.aa.kl = b;
            this.Gd = i
        } else this.Gd = -1;
    g += 0;
    if (g > 300) g = 300;
    if (g < -300) g = -300;
    this.Mm += g * c * this.$b * f;
    if (e || this.Wg || this.Jm) cf(this.aa);
    if (this.Rj)
        if (this.Mi) {
            if (this.ol)
                if ((a = N(a, "collisionresponse")) && !a.le) {
                    this.ol = false;
                    if (a.Fd == 0) a.Fd = this.oe * 100
                }
        } else this.ol = true;
    pc(this.Ea, this.Ea.f.add(d));
    return false
};
l.$d = function(a) {
    Rg.prototype.$d.call(this, a)
};
l.Pf = aa();
l.sd = function(a) {
    Rg.prototype.sd.call(this, a)
};
l.Pe = function(a) {
    Rg.prototype.Pe.call(this, a)
};
l.Si = function(a, b) {
    if (b == 37 || b == 65) {
        if (this.Le = a) this.Qe = false;
        return true
    }
    if (b == 39 || b == 68) {
        if (this.Qe = a) this.Le = false;
        return true
    }
    if (b == 38 || b == 87) {
        if (this.Se = a) this.Je = false;
        return true
    }
    if (b == 40 || b == 83) {
        if (this.Je = a) this.Se = false;
        return true
    }
    if (b == 32) {
        this.Mi = a;
        return true
    }
    return false
};
l.Ne = function(a) {
    return this.Si(true, a.keyCode)
};
l.Oe = function(a) {
    return this.Si(false, a.keyCode)
};

function Dg(a, b) {
    this.h = -1;
    this.$b = 1E4;
    this.Ga = 100;
    this.ue = false;
    this.vc = q();
    this.Ea = a;
    this.aa = b;
    this.Yn = false;
    this.Qd = this.Pd = this.Hb = 0;
    this.Zm = false;
    this.Gi = this.qe = this.te = 0;
    this.Fc = 90;
    this.Cl = -66666;
    this.Hd = this.Gd = -1
}
Dg.prototype = new Rg;
l = Dg.prototype;
l.k = k("cameramodelviewer");
l.$b = 0.06;
l.Ga = 100;
l.ue = false;
l.hb = function() {
    if (this.Ea == null) return false;
    if (this.Ea.n.ea !== this.Ea) return false;
    var a = q(),
        b = a - this.vc;
    if (b > 250) b = 250;
    this.vc = a;
    a = this.Ea.f.e();
    var c = this.Ea.ga.e(),
        d = c.substract(O(this.Ea)),
        e = 0,
        f = 0;
    if (this.aa.Ph) {
        var g = this.aa.Dc,
            i = this.aa.Ec;
        e = (this.Gd == -1 ? 0 : g - this.Gd) * this.$b / 5E4;
        f = (this.Hd == -1 ? 0 : i - this.Hd) * this.$b / 5E4;
        this.Gd = g;
        this.Hd = i
    } else this.Hd = this.Gd = -1;
    if (this.Yn && this.Hb != 0) {
        if (n.sa(e)) {
            e = this.Pd;
            this.Pd *= 0.9;
            if (this.Pd > 0) this.Pd = Math.max(0, this.Pd - b / this.Hb);
            else if (this.Pd < 0) this.Pd =
                Math.min(0, this.Pd + b / this.Hb)
        } else this.Pd = e * (this.Hb / 1E3);
        if (n.sa(f)) {
            f = this.Qd;
            this.Qd *= 0.9;
            if (this.Qd > 0) this.Qd = Math.max(0, this.Qd - b / this.Hb);
            else if (this.Qd < 0) this.Qd = Math.min(0, this.Qd + b / this.Hb)
        } else this.Qd = f * (this.Hb / 1E3)
    }
    d = Ga(d, this.Ea.wb);
    d.b = 0;
    d.normalize();
    if (!n.sa(e)) {
        A(d, b * e);
        a.oa(d)
    }
    if (!this.ue && !n.sa(f)) {
        e = this.Ea.wb.e();
        e.normalize();
        b = a.add(x(e, b * f));
        f = b.e();
        f.b = c.b;
        e = this.Ga / 10;
        if (f.yb(c) > e) a = b
    }
    if (this.ue) {
        if (n.F(this.Cl, -66666)) this.Cl = a.b;
        a.b = this.Cl
    }
    cf(this.aa);
    if (this.Zm) {
        b =
            n.Qi(this.Ea.ld);
        if (this.Fc < this.te) this.Fc = this.te;
        if (this.Fc > this.qe) this.Fc = this.qe;
        f = this.Gi;
        f = Math.abs(this.Fc - b) / 8;
        if (f < this.Gi) f = this.Gi;
        if (b < this.qe - f && b < this.Fc) {
            b += f;
            if (b > this.qe) b = this.qe
        }
        if (b > this.te + f && b > this.Fc) {
            b -= f;
            if (b < this.te) b = this.te
        }
        nf(this.Ea, n.Bo(b))
    }
    d = a.substract(c);
    va(d, this.Ga);
    a = c.add(d);
    this.Ea.f = a;
    return false
};
l.Pf = function(a) {
    this.Fc += a * this.Gi;
    if (this.Fc < this.te) this.Fc = this.te;
    if (this.Fc > this.qe) this.Fc = this.qe
};

function Eg(a) {
    this.zi = 5E3;
    this.Oj = this.el = this.ho = false;
    this.Xj = true;
    this.xi = 0;
    this.nl = true;
    this.$f = Sg;
    this.ok = false;
    this.Jd = a;
    this.Qa = 0;
    this.ho = false;
    this.Md = this.Kj = null;
    this.ok = false;
    this.Wh = null;
    this.xi = 0;
    this.nh = this.Ue = null;
    this.rn = 0;
    this.so = false
}
Eg.prototype = new Rg;
var Sg = 0;
Eg.prototype.k = k("followpath");
Eg.prototype.i = function(a, b, c, d) {
    a = new Eg;
    a.zi = this.zi;
    a.Oj = this.Oj;
    a.Xj = this.Xj;
    a.Wh = this.Wh;
    a.xi = this.xi;
    a.Ue = this.Ue ? this.Ue.e() : null;
    a.$f = this.$f;
    a.nh = this.nh;
    a.r = this.r ? this.r.i(c, d) : null;
    return a
};
Eg.prototype.hb = function(a, b) {
    if (a == null || !this.Jd || !this.zi) return false;
    if (a !== this.Kj) {
        if (this.Kj = a) this.el = this.Kj.k() == "camera";
        return false
    }
    if (!this.Md)
        if (!this.ho)
            if (this.Wh.length)
                if (this.Jd) {
                    var c = lg(this.Jd, this.Wh);
                    c && c.k() == "path" && Tg(this, c)
                }
    if (this.Md == null) return false;
    c = false;
    var d = null;
    if (this.el && this.Xj) {
        c = !this.nl;
        d = a;
        if (this.Jd.ea !== d) {
            if (this.Md.Fb.length) d.f = Bf(this.Md, 0);
            this.nl = true;
            return false
        } else this.nl = false;
        if (!this.Qa || !c) this.Qa = b
    }
    if (!this.Qa) this.Qa = this.Jd.Qa;
    d =
        (b - this.Qa + this.xi) / this.zi;
    if (d > 1 && !this.Md.cf) switch (this.$f) {
        case Sg:
            d %= 1;
            break;
        case 1:
            d = 1;
            break;
        case 2:
            d = 1;
            if (!this.ok) {
                if (this.Jd)
                    if (this.nh.length)
                        if ((c = lg(this.Jd, this.nh)) && c.k() == "camera") {
                            (b = this.Jd.Hh) && Ue(c, b.Jb(), b.Ib());
                            this.Jd.ea = c
                        }
                this.ok = true
            }
            break;
        case 3:
            if (d > this.rn + 1 && this.r != null) {
                this.r.execute(a);
                this.rn = d
            }
            d %= 1;
            break;
        case 4:
            d = 1;
            if (!this.so && this.r != null) {
                this.r.execute(a);
                this.so = true
            }
            break
    } else this.ok = false;
    b = Df(this.Md, d);
    c = !b.F(a.f);
    a.f = b;
    if (this.Oj && this.Md.Fb.length) {
        d =
            Df(this.Md, d + 0.001);
        if (!n.sa(d.yb(b))) {
            var e = d.substract(b);
            va(e, 100);
            if (this.el) {
                d = a;
                a = b.add(e);
                c = c || !a.F(d.ga);
                pc(d, a)
            } else {
                if (!this.Ue || xa(this.Ue)) d = Ha(e);
                else {
                    d = new I;
                    vb(d, Ha(e));
                    b = new I;
                    vb(b, this.Ue);
                    d = K(d, b);
                    d = wb(d)
                }
                c = c || !d.F(a.T);
                a.T = d
            }
        }
    }
    return c
};

function Tg(a, b) {
    a.Md = b
}
Eg.prototype.Lf = function(a) {
    if (this.r) return Tc(this.r, a);
    return null
};

function Xb(a, b, c, d, e, f) {
    this.$ = new s(0, 0, 0);
    this.Q = new s(40, 40, 40);
    this.Qa = q();
    this.qd = 3E3;
    this.co = this.hh = this.th = this.Xb = false;
    this.Wn = null;
    this.Vn = 0;
    this.Tf = this.uj = false;
    this.xh = 0;
    if (a) this.$ = a.e();
    if (b) this.Q = b.e();
    if (c) this.qd = c;
    if (d) this.Xb = d;
    Yb(this);
    if (e) this.th = e;
    if (f) this.hh = f
}
Xb.prototype = new Rg;
Xb.prototype.k = k("flystraight");
Xb.prototype.i = function(a, b, c, d) {
    a = new Xb;
    a.$ = this.$.e();
    a.Q = this.Q.e();
    a.ha = this.ha.e();
    a.lm = this.lm;
    a.gm = this.gm;
    a.qd = this.qd;
    a.Xb = this.Xb;
    a.hh = this.hh;
    a.uj = this.uj;
    a.Tf = this.Tf ? this.Tf.i(c, d) : null;
    a.xh = this.xh;
    return a
};
Xb.prototype.hb = function(a, b) {
    var c = b - this.Qa,
        d = false;
    if (c != 0) {
        var e = this.$.e();
        if (!this.Xb && c >= this.qd) {
            e = this.Q.e();
            d = true
        } else e.oa(x(this.ha, c % this.qd * this.gm));
        if (this.hh) {
            if (a.k() == "camera") {
                pc(a, e);
                var f = N(a, "camerafps");
                f != null && qc(f, e)
            }
        } else a.f = e;
        if (this.co && this.Qa != b) {
            if (a) {
                P(a);
                b = hf(a);
                e = false;
                f = sc(a.n, "gameai");
                for (var g = 0; g < f.length; ++g)
                    if (f[g] !== this.Wn) {
                        var i = N(f[g], "gameai");
                        if (!(i && !(i.Ub > 0)))
                            if (Ua(b, hf(f[g]))) {
                                wc(i, this.Vn, f[g]);
                                e = true;
                                break
                            }
                    }
                b = e
            } else b = false;
            d = b || d
        }
        if (d) {
            if (a.n) a.n.jl =
                a.f.e();
            if (this.Tf) {
                d = true;
                if (this.xh > 0 && c > this.xh) d = false;
                d && this.Tf.execute(a)
            }
            this.th && kf(a, this);
            this.uj && a.n && Wc(a.n, a, 0)
        }
        return true
    }
    return false
};

function Yb(a) {
    a.ha = a.Q.substract(a.$);
    a.lm = a.ha.getLength();
    a.ha.normalize();
    a.gm = a.lm / a.qd
};

function Bg(a, b, c, d) {
    this.oh = new s;
    this.Ia = new s(0, 1, 0);
    this.Bi = new s;
    this.He = new s;
    this.Qa = q();
    this.ri = 0.01;
    this.Ga = 100;
    if (a) this.oh = a.e();
    if (b) this.Ga = b;
    if (c) this.Ia = c.e();
    if (d) this.ri = d;
    this.gb()
}
Bg.prototype = new Rg;
Bg.prototype.k = k("flycircle");
Bg.prototype.i = function() {
    var a = new Bg;
    a.oh = this.oh.e();
    a.Ia = this.Ia.e();
    a.Bi = this.Bi.e();
    a.He = this.He.e();
    a.ri = this.ri;
    a.Ga = this.Ga;
    return a
};
Bg.prototype.hb = function(a, b) {
    b = b - this.Qa;
    if (b != 0) {
        b = b * this.ri;
        b = x(this.Bi, Math.cos(b)).add(x(this.He, Math.sin(b)));
        A(b, this.Ga);
        a.f = this.oh.add(b);
        return true
    }
    return false
};
Bg.prototype.gb = function() {
    this.Ia.normalize();
    this.He = this.Ia.b != 0 ? new s(50, 0, 0) : new s(0, 50, 0);
    this.He = Ga(this.He, this.Ia);
    this.He.normalize();
    this.Bi = Ga(this.He, this.Ia);
    this.Bi.normalize()
};

function ac(a) {
    this.ye = new s;
    if (a) this.ye = a.e();
    this.Qa = q();
    this.On = false;
    this.Vl = 0;
    this.an = null
}
ac.prototype = new Rg;
ac.prototype.k = k("rotation");
ac.prototype.i = function() {
    var a = new ac(this.va, this.Ta);
    a.ye = this.ye.e();
    a.Qa = this.Qa;
    return a
};
ac.prototype.hb = function(a, b) {
    var c = b - this.Qa;
    if (this.On) {
        if (this.Vl - this.Qa == 0) return false;
        b = (b - this.Qa) / (this.Vl - this.Qa);
        if (b > 1) {
            a.T = this.ye.e();
            kf(a, this)
        } else {
            c = new Ab;
            var d = x(this.ye, n.Bd);
            Fb(c, d.c, d.b, d.d);
            var e = new Ab;
            d = x(this.an, n.Bd);
            Fb(e, d.c, d.b, d.d);
            Cb(e, e, c, b);
            d = new s;
            Eb(e, d);
            A(d, n.we);
            a.T = d;
            return true
        }
    } else if (c != 0) {
        a.T.oa(x(this.ye, c / 10));
        this.Qa = b;
        return true
    }
    return false
};

function Gg(a, b, c) {
    this.Ya = [];
    this.Xb = true;
    this.Df = 20;
    this.xl = this.Kg = this.pd = 0;
    if (a) this.Ya = a;
    if (b) this.Df = b;
    if (c == true) this.loop = false
}
Gg.prototype = new Rg;
Gg.prototype.k = k("animatetexture");
Gg.prototype.i = function() {
    var a = new Gg;
    a.Ya = this.Ya;
    a.Xb = this.Xb;
    a.Df = this.Df;
    a.pd = this.pd;
    a.Kg = this.Kg;
    return a
};
Gg.prototype.hb = function(a, b) {
    if (a == null || this.Ya == null) return false;
    var c = false,
        d = null;
    if (this.Ya.length) {
        var e = this.xl == 0 ? a.n.Qa : this.xl;
        d = b - e;
        var f = e + this.Df * this.Ya.length;
        e = 0;
        e = !this.Xb && b >= f ? this.Ya.length - 1 : this.Df > 0 ? Math.floor(d / this.Df % this.Ya.length) : 0;
        if (e < this.Ya.length)
            if (this.pd == 1) {
                if (this.Kg >= 0 && this.Kg < a.bd())
                    if ((d = a.uc(this.Kg)) && d.Ba !== this.Ya[e]) {
                        d.Ba = this.Ya[e];
                        c = true
                    }
            } else {
                b = a.bd();
                for (f = 0; f < b; ++f)
                    if ((d = a.uc(f)) && d.Ba !== this.Ya[e]) {
                        d.Ba = this.Ya[e];
                        c = true
                    }
            }
    }
    return c
};
Gg.prototype.reset = function() {
    this.xl = q()
};

function yc(a, b, c, d) {
    this.Ta = b;
    this.vq = 0;
    this.iq = false;
    this.Pr = null;
    this.va = a;
    this.Bh = c;
    this.ef = false;
    this.Ye = true;
    this.zc = false;
    this.Td = this.ia = this.r = null;
    d != true && tg(a, this)
}
yc.prototype = new Rg;
l = yc.prototype;
l.k = k("onclick");
l.i = function(a, b, c, d) {
    a = new yc(this.va, this.Ta);
    a.Ye = this.Ye;
    a.zc = this.zc;
    a.r = this.r ? this.r.i(c, d) : null;
    a.ia = this.ia;
    return a
};
l.hb = function(a) {
    this.Td = a;
    a = this.ef;
    this.ef = false;
    return a
};
l.sd = function(a) {
    var b = this.Td;
    if (!b) return false;
    if (b.n !== this.va) return false;
    if (q() - this.Ta.kl < 250) return false;
    var c = af(this.Ta, a);
    a = bf(this.Ta, a);
    if (this.Ta.Qf) {
        a = this.va.Hh;
        if (!a) return false;
        c = a.Jb() / 2;
        a = a.Ib() / 2
    }
    if (this.Td.vb == null) {
        this.Td = null;
        return false
    }
    if (lf(b) && Ug(this, b, c, a)) {
        this.ef = true;
        this.Bh && this.Bh();
        this.Ik(b);
        Le(this.va);
        return true
    }
};
l.Ik = function(a) {
    this.r && this.r.execute(a)
};

function Ug(a, b, c, d) {
    if (b == null) return false;
    if (b.k() == "2doverlay") {
        var e = If(b, false, a.Ta.O);
        if (e.x <= c && e.y <= d && e.x + e.Wa >= c && e.y + e.Ua >= d) return true
    }
    c = df(a.Ta, c, d);
    if (c == null) return false;
    d = a.va.ea;
    if (d == null) return false;
    d = O(d);
    e = new La;
    e.$ = d;
    e.Q = c;
    return zc(a, a.va, b, e, a.Ye, a.zc, a.ia, null)
}

function xc(a, b, c, d, e, f) {
    if (!e || !b) return 999999999999;
    if (a = e.Rg(c, d, true, null, f)) return c.yb(a);
    return 999999999999
}

function zc(a, b, c, d, e, f, g, i) {
    var j = c.lb(),
        m = 0;
    m = new I(false);
    if (nb(c.Y, m))
        if (Ra(j, kb(m, d.$), kb(m, d.Q))) {
            m = null;
            if (c.Sq && c.P) m = c;
            e = m == null || e;
            if (!e) {
                j = m.db;
                if (j == null) {
                    j = m.P && nd(m.P) > 100 ? new vg(m.P, m, 0) : new wg(m.P, m);
                    m.db = j
                }
                if (j) {
                    j = j.Rg(d.$, d.Q, true, null, true);
                    if (j != null)
                        if (f) {
                            m = xc(a, b, d.$, j, g, true);
                            a = j.yb(d.$);
                            if (m + n.tq < a) return false;
                            else {
                                if (i != null) i.Na = j.yb(d.$);
                                return true
                            }
                        } else {
                            if (i != null) i.Na = d.$.yb(Oa(hf(c)));
                            return true
                        }
                } else e = true
            }
            if (e)
                if (f) {
                    d = d.$.e();
                    j = hf(c);
                    m = Pa(j);
                    A(m, 0.5);
                    f = n.Zq(m.c,
                        m.b, m.d);
                    f = Math.sqrt(f * f + f * f);
                    c = Oa(hf(c));
                    m = xc(a, b, d, c, g, true);
                    a = c.yb(d) - f;
                    if (m < a) return false;
                    else {
                        if (i != null) i.Na = a;
                        return true
                    }
                } else {
                    if (i != null) i.Na = d.$.yb(Oa(hf(c)));
                    return true
                }
        }
    return false
}
yc.prototype.Lf = function(a) {
    if (this.r) return Tc(this.r, a);
    return null
};

function Hg(a, b) {
    this.Ta = b;
    this.va = a;
    this.fe = this.de = null;
    this.qm = this.hm = 0
}
Hg.prototype = new yc(null, null, null, true);
Hg.prototype.k = k("onmove");
Hg.prototype.i = function(a, b, c, d) {
    a = new Hg(this.va, this.Ta);
    a.Ye = this.Ye;
    a.zc = this.zc;
    a.r = this.r ? this.r.i(c, d) : null;
    a.ia = this.ia;
    a.de = this.de ? this.de.i(c, d) : null;
    a.fe = this.fe ? this.fe.i(c, d) : null;
    return a
};
Hg.prototype.hb = function(a) {
    var b = this.hm == 0,
        c = q();
    if (b || c - this.hm > 100) {
        this.hm = c;
        c = Ug(this, a, this.Ta.Dc, this.Ta.Ec);
        if (b) this.qm = c;
        else if (c != this.qm) {
            if ((this.qm = c) && this.de) this.de.execute(a);
            else !c && this.fe && this.fe.execute(a);
            return true
        }
    }
    return false
};
Hg.prototype.Lf = function(a) {
    var b = null;
    if (this.fe)
        if (b = Tc(this.fe, a)) return b;
    if (this.de)
        if (b = Tc(this.de, a)) return b;
    return null
};

function Fg(a, b, c, d, e) {
    this.vq = 0;
    this.Lk = a;
    this.ai = this.$m = this.bk = this.wh = 0;
    this.Ol = null;
    this.Cg = 0;
    this.r = null;
    this.Bh = d;
    if (b) this.ai = b;
    if (c) this.Cg = c;
    if (e) this.wh = 1;
    this.fl = false
}
Fg.prototype = new Rg;
l = Fg.prototype;
l.k = k("oncollide");
l.i = function(a, b, c, d) {
    a = new Fg(this.Lk);
    a.wh = this.wh;
    a.bk = this.bk;
    a.ai = this.ai;
    a.Cg = this.Cg;
    a.r = this.r ? this.r.i(c, d) : null;
    return a
};
l.hb = function(a) {
    if (a == null || this.Lk == null) return false;
    var b = false,
        c = null;
    if (this.bk == 0) c = this.Lk.ea;
    else if (this.Cg != -1) c = Sb(this.Lk, this.Cg);
    if (c) {
        if (a === c) return false;
        var d = O(c),
            e = O(a),
            f = false;
        switch (this.$m) {
            case 0:
                f = d.yb(e) < this.ai;
                break;
            case 1:
                e = new I(false);
                if (nb(a.Y, e)) {
                    d = d.e();
                    lb(e, d);
                    f = new B;
                    f.D = x(this.Ol, -0.5);
                    f.N = x(this.Ol, 0.5);
                    f = f.Ug(d)
                }
        }
        switch (this.wh) {
            case 0:
                if (f && !this.fl) {
                    this.Ik(c, a);
                    b = true
                }
                break;
            case 1:
                if (!f && this.fl) {
                    this.Ik(c, a);
                    b = true
                }
                break
        }
        this.fl = f
    }
    return b
};
l.Ik = function(a, b) {
    this.Bh && this.Bh.call(a, b);
    this.r && this.r.execute(a)
};
l.Lf = function(a) {
    if (this.r) return Tc(this.r, a);
    return null
};

function Cg(a, b, c, d) {
    this.Ga = a;
    this.ej = true;
    this.Ef = b;
    this.ia = c;
    this.Hb = d;
    this.jo = false;
    this.df = this.za = null;
    this.pe = new s(0, 0, 0);
    this.le = false;
    this.Fd = this.ln = 0;
    this.sk = false;
    if (this.Ga == null) this.Ga = new s(30, 50, 30);
    if (this.Ef == null) this.Ef = new s(0, 0, 0);
    if (this.Hb == null) this.Hb = 5.0E-4;
    this.reset()
}
Cg.prototype = new Rg;
l = Cg.prototype;
l.k = k("collisionresponse");
l.i = function() {
    var a = new Cg;
    a.Ga = this.Ga.e();
    a.ej = this.ej;
    a.Ef = this.Ef.e();
    a.pe = this.pe.e();
    a.sk = this.sk;
    a.ia = this.ia;
    return a
};
l.reset = function() {
    this.za = null;
    this.df = q()
};
l.Hc = ba("ia");
l.hb = function(a, b) {
    var c = b - this.df;
    if (!this.ia) return false;
    if (c > 150) c = 150;
    if (c == 0) return false;
    this.df = b;
    if (this.za !== a) {
        this.za = a;
        this.pe = a.f.e();
        return false
    }
    var d = a.f.e(),
        e = a.f.substract(this.pe),
        f = new s(0, -0.1 * a.n.Dd, 0);
    if (!this.ej) f.b = 0;
    d = x(f, c);
    if (this.le) {
        f = (b - this.ln) / 1E3;
        if (f > 5) f = 5;
        A(d, f)
    } else A(d, 0.001);
    if (this.Fd > 0) {
        e.b += this.Fd * 0.001 * c;
        this.Fd -= c;
        if (this.Fd < 0) this.Fd = 0
    }
    c = e.add(d);
    if (!xa(c)) {
        if (!this.jo) this.Hb = this.Ga.getLength() * 0.001;
        c = null;
        if (a && a.k() == "camera") c = a;
        var g;
        if (c) g = c.ga.substract(c.f);
        f = new F;
        var i = {};
        i.Na = 0;
        this.ia.Ti(a);
        var j = this.ia,
            m = this.pe.substract(this.Ef),
            o = this.Ga,
            p = this.Hb;
        if (!j || o.c == 0 || o.b == 0 || o.d == 0) d = m;
        else {
            var h = {};
            h.Zh = m.e();
            h.Nl = e.e();
            h.tc = o.e();
            h.Ni = 9.99999999E7;
            h.rr = j;
            h.sr = p;
            h.Nk = 0;
            h.Ki = new s;
            j = Fa(h.Zh, h.tc);
            e = Fa(h.Nl, h.tc);
            j = Vg(this, 0, h, j, e);
            i.Na = 0;
            if (!xa(d)) {
                h.Zh = Ea(j, h.tc);
                h.Nl = d.e();
                h.Nk = 0;
                e = Fa(d, h.tc);
                j = Vg(this, 0, h, j, e);
                i.Na = h.Nk == 0 ? 1 : 0;
                if (i.Na < 0.5 && h.Li) {
                    d = ab(h.Li);
                    d.normalize();
                    if (!(Math.abs(d.b) > Math.abs(d.c) && Math.abs(d.b) > Math.abs(d.d))) i.Na = 1
                }
            }
            if (h.Nk &&
                f != null) {
                f.V = h.Li.V.e();
                f.ca = h.Li.ca.e();
                f.da = h.Li.da.e();
                Ba(f.V, h.tc);
                Ba(f.ca, h.tc);
                Ba(f.da, h.tc)
            }
            Ba(j, h.tc);
            d = j
        }
        this.ia.Ti(null);
        d.oa(this.Ef);
        if (i.Na < 0.5) this.le = false;
        else {
            if (!this.le) this.ln = b;
            this.le = true
        }
        if (a.f.F(d)) {
            this.pe = a.f.e();
            return false
        }
        a.f = d.e();
        if (this.sk)
            if (!this.le)
                if (!(xa(f.V) && xa(f.ca) && xa(f.da))) {
                    b = a.T.b;
                    d = f.V.add(f.ca).add(f.da);
                    A(d, 1 / 3);
                    f.V.c -= d.c;
                    f.V.d -= d.d;
                    f.ca.c -= d.c;
                    f.ca.d -= d.d;
                    f.da.c -= d.c;
                    f.da.d -= d.d;
                    Ia(f.V, b);
                    Ia(f.ca, b);
                    Ia(f.da, b);
                    f.V.c += d.c;
                    f.V.d += d.d;
                    f.ca.c += d.c;
                    f.ca.d +=
                        d.d;
                    f.da.c += d.c;
                    f.da.d += d.d;
                    b = ab(f);
                    f = new s;
                    f.c = Math.atan2(b.d, b.b) * n.we;
                    f.b = a.T.b;
                    f.d = -Math.atan2(b.c, b.b) * n.we;
                    a.T = f
                }
        if (c && g) {
            b = true;
            for (f = 0; f < a.ka.length; ++f)
                if ((d = a.ka[f]) && d.k() == "cameramodelviewer") {
                    b = false;
                    break
                }
            if (b) c.ga = a.f.add(g)
        }
    }
    this.pe.F(a.f);
    this.pe = a.f.e();
    return false
};

function Vg(a, b, c, d, e) {
    var f = c.sr;
    if (b > 5) {
        a = e.e();
        va(a, f);
        return d.add(a)
    }
    c.Ok = e.e();
    c.ep = e.e();
    c.ep.normalize();
    c.wk = d.e();
    c.tm = false;
    c.Ni = 9.99999999E7;
    var g = new B;
    c.Zh.ra(g.D);
    c.Zh.ra(g.N);
    C(g, c.Zh.add(c.Nl));
    pa(g.D, c.tc);
    g.N.oa(c.tc);
    var i = [],
        j = new I,
        m = 1 / c.tc.b,
        o = 1 / c.tc.d;
    j.p = 1 / c.tc.c;
    j.q = m;
    j.o = o;
    j.La = false;
    c.rr.Tg(g, j, i);
    for (g = 0; g < i.length; ++g) a: {
        j = i[g];
        var p = Za(j);
        if (Ya(p, c.ep)) {
            var h = m = 0,
                v = false,
                r = 0;
            m = p.yb(c.wk);
            o = p.j.ja(c.Ok);
            if (n.sa(o))
                if (Math.abs(m) >= 1) break a;
                else {
                    v = true;
                    h = 0
                }
            else {
                o = 1 / o;
                h = (-1 - m) * o;
                m = (1 - m) * o;
                if (h > m) {
                    o = m;
                    m = h;
                    h = o
                }
                if (h > 1 || m < 0) break a;
                h = n.sc(h, 0, 1);
                n.sc(m, 0, 1)
            }
            m = new s;
            o = false;
            var E = 1;
            if (!v) {
                p = c.wk.substract(p.j).add(x(c.Ok, h));
                r = j.ca.substract(j.V);
                var z = j.da.substract(j.V);
                v = r.ja(r);
                var u = r.ja(z),
                    y = z.ja(z),
                    D = p.substract(j.V);
                r = D.ja(r);
                D = D.ja(z);
                z = r * y - D * u;
                r = D * v - r * u;
                if (z + r - (v * y - u * u) < 0 && !(z < 0 || r < 0)) {
                    o = true;
                    E = h;
                    m = p.e()
                }
            }
            if (!o) {
                h = c.Ok.e();
                p = c.wk.e();
                v = za(h);
                var H = z = r = 0;
                u = {};
                u.Na = 0;
                r = v;
                z = 2 * h.ja(p.substract(j.V));
                H = za(j.V.substract(p)) - 1;
                if (Wg(a, r, z, H, E, u)) {
                    E = u.Na;
                    o = true;
                    m =
                        j.V.e()
                }
                if (!o) {
                    z = 2 * h.ja(p.substract(j.ca));
                    H = za(j.ca.substract(p)) - 1;
                    if (Wg(a, r, z, H, E, u)) {
                        E = u.Na;
                        o = true;
                        m = j.ca.e()
                    }
                }
                if (!o) {
                    z = 2 * h.ja(p.substract(j.da));
                    H = za(j.da.substract(p)) - 1;
                    if (Wg(a, r, z, H, E, u)) {
                        E = u.Na;
                        o = true;
                        m = j.da.e()
                    }
                }
                y = j.ca.substract(j.V);
                H = j.V.substract(p);
                D = za(y);
                var Y = y.ja(h),
                    fa = y.ja(H);
                r = D * -v + Y * Y;
                z = D * 2 * h.ja(H) - 2 * Y * fa;
                H = D * (1 - za(H)) + fa * fa;
                if (Wg(a, r, z, H, E, u)) {
                    r = (Y * u.Na - fa) / D;
                    if (r >= 0 && r <= 1) {
                        E = u.Na;
                        o = true;
                        m = j.V.add(x(y, r))
                    }
                }
                y = j.da.substract(j.ca);
                H = j.ca.substract(p);
                D = za(y);
                Y = y.ja(h);
                fa = y.ja(H);
                r = D * -v + Y * Y;
                z = D * 2 * h.ja(H) - 2 * Y * fa;
                H = D * (1 - za(H)) + fa * fa;
                if (Wg(a, r, z, H, E, u)) {
                    r = (Y * u.Na - fa) / D;
                    if (r >= 0 && r <= 1) {
                        E = u.Na;
                        o = true;
                        m = j.ca.add(x(y, r))
                    }
                }
                y = j.V.substract(j.da);
                H = j.da.substract(p);
                D = za(y);
                Y = y.ja(h);
                fa = y.ja(H);
                r = D * -v + Y * Y;
                z = D * 2 * h.ja(H) - 2 * Y * fa;
                H = D * (1 - za(H)) + fa * fa;
                if (Wg(a, r, z, H, E, u)) {
                    r = (Y * u.Na - fa) / D;
                    if (r >= 0 && r <= 1) {
                        E = u.Na;
                        o = true;
                        m = j.da.add(x(y, r))
                    }
                }
            }
            if (o) {
                o = E * c.Ok.getLength();
                if (!c.tm || o < c.Ni) {
                    c.Ni = o;
                    c.Ki = m.e();
                    c.tm = true;
                    c.Li = j;
                    ++c.Nk
                }
            }
        }
    }
    if (!c.tm) return d.add(e);
    i = d.add(e);
    d = d.e();
    if (c.Ni >= f) {
        e = e.e();
        va(e,
            c.Ni - f);
        d = c.wk.add(e);
        e.normalize();
        pa(c.Ki, x(e, f))
    }
    e = c.Ki.e();
    g = d.substract(c.Ki);
    g.normalize();
    j = new Va;
    j.j = g.e();
    Wa(j, e);
    e = i.substract(x(g, j.yb(i))).substract(c.Ki);
    if (e.getLength() < f) return d;
    return Vg(a, b + 1, c, d, e)
}

function Wg(a, b, c, d, e, f) {
    a = c * c - 4 * b * d;
    if (a < 0) return false;
    d = Math.sqrt(a);
    a = (-c - d) / (2 * b);
    b = (-c + d) / (2 * b);
    if (a > b) {
        c = b;
        b = a;
        a = c
    }
    if (a > 0 && a < e) {
        f.Na = a;
        return true
    }
    if (b > 0 && b < e) {
        f.Na = b;
        return true
    }
    return false
};

function Ig(a) {
    this.yi = 0;
    this.va = a;
    this.r = null;
    this.Mg = 0;
    this.yi = q()
}
Ig.prototype = new Rg;
Ig.prototype.k = k("timer");
Ig.prototype.i = function(a, b, c, d) {
    a = new Ig(this.va);
    a.r = this.r ? this.r.i(c, d) : null;
    a.yi = this.yi;
    a.Mg = this.Mg;
    return a
};
Ig.prototype.hb = function(a) {
    if (a == null) return false;
    if (this.Mg > 0) {
        var b = q();
        if (b - this.yi > this.Mg) {
            this.yi = b;
            this.r && this.r.execute(a);
            return true
        }
    }
    return false
};

function Jg(a, b) {
    this.va = a;
    this.Da = b;
    this.r = null;
    this.Mg = 0;
    this.Ld = null;
    this.ef = false;
    this != null && b.ei.push(this);
    this != null && b.di.push(this);
    tg(a, this)
}
Jg.prototype = new Rg;
l = Jg.prototype;
l.k = k("keypress");
l.i = function(a, b, c, d) {
    a = new Jg(this.va, this.Da);
    a.gg = this.gg;
    a.Lc = this.Lc;
    a.r = this.r ? this.r.i(c, d) : null;
    return a
};
l.hb = function(a) {
    this.Ld = a;
    a = this.ef;
    this.ef = false;
    return a
};
l.Ne = function(a) {
    if (this.gg == 0 && a.keyCode == this.Lc) {
        Xg(this);
        return true
    }
    return false
};
l.Oe = function(a) {
    if (this.gg == 1 && a.keyCode == this.Lc) {
        Xg(this);
        return true
    }
    return false
};
l.sd = function(a) {
    if (this.gg == 1)
        if (a.button > 1 && this.Lc == 2) Xg(this);
        else a.button <= 1 && this.Lc == 1 && Xg(this)
};
l.$d = function(a) {
    if (this.gg == 0)
        if (a.button > 1 && this.Lc == 2) Xg(this);
        else a.button <= 1 && this.Lc == 1 && Xg(this)
};
l.Lf = function(a) {
    if (this.r) return Tc(this.r, a);
    return null
};

function Xg(a) {
    if (a.Ld && a.Ld.n === a.va && lf(a.Ld) && te(a.Da) === a.Ld.n) {
        if (a.Ld.vb == null && a.Ld.h != -1) {
            a.Ld = null;
            return
        }
        a.ef = true;
        a.r && a.r.execute(a.Ld);
        Le(a.va);
        return true
    }
    return null
}

function Kg(a) {
    this.fh = this.Kd = this.ed = 0;
    this.Vf = false;
    this.Ub = 100;
    this.rg = 3E3;
    this.Vh = -1;
    this.kh = this.pk = "";
    this.Xh = 100;
    this.fi = 0;
    this.zb = new s;
    this.gj = this.vj = this.Wd = this.Rd = "";
    this.ce = this.ee = this.be = this.fd = null;
    this.ll = this.Bl = this.Kc = 0;
    this.Xf = null;
    this.jj = this.Ze = this.Ad = this.ph = 0;
    this.Pp = null;
    this.Vk = this.Xm = this.Sk = false;
    this.Wk = new La;
    this.Vj = 0;
    this.Td = this.ia = null;
    this.Cf = a;
    this.tn = 0;
    this.dm = new s;
    this.zl = null;
    this.Al = 0
}
Kg.prototype = new Rg;
Kg.prototype.k = k("gameai");
Kg.prototype.i = function(a, b, c, d) {
    a = new Kg(this.Cf);
    a.ed = this.ed;
    a.Kd = this.Kd;
    a.fh = this.fh;
    a.Vf = this.Vf;
    a.Ub = this.Ub;
    a.pk = this.pk;
    a.kh = this.kh;
    a.Xh = this.Xh;
    a.fi = this.fi;
    a.Vh = this.Vh;
    a.rg = this.rg;
    a.zb = this.zb ? this.zb.e() : null;
    a.Rd = this.Rd;
    a.Wd = this.Wd;
    a.vj = this.vj;
    a.gj = this.gj;
    a.fd = this.fd ? this.fd.i(c, d) : null;
    a.be = this.be ? this.be.i(c, d) : null;
    a.ee = this.ee ? this.ee.i(c, d) : null;
    a.ce = this.ce ? this.ce.i(c, d) : null;
    return a
};
Kg.prototype.hb = function(a, b) {
    if (a == null || this.Cf == null) return false;
    var c = b - this.tn;
    if (c > 150) c = 150;
    this.tn = b;
    var d = 0,
        e = false;
    if (this.Td !== a) {
        this.Td = a;
        P(a);
        this.dm = O(a)
    }
    var f = O(a);
    if (this.Kc != 3)
        if (this.Kc == 1) {
            d = Yg(this, a);
            if (this.Xf.substract(f).getLength() < d) {
                this.Kc = 0;
                this.cc(a, 0);
                e = true
            } else {
                e = false;
                if (this.Ad > 2) {
                    d = this.Ad * (this.Kd / 1E3);
                    if (this.jj.substract(f).getLength() * 1.2 < d) {
                        this.Kc = 0;
                        this.cc(a, 0);
                        e = true
                    }
                }
                if (!e) {
                    this.Ad += c;
                    e = this.Xf.substract(f);
                    va(e, this.Kd / 1E3 * c);
                    if (!this.Vf) e.b = 0;
                    a.f.oa(e)
                }
                e =
                    Zg(this, a, b - this.ph, this.Xf.substract(f), this.fi)
            }
        } else if (this.Kc == 2) {
        this.Ad += c;
        if (!this.Sk && this.Ad > this.Ze / 2) {
            this.Vk = true;
            this.fd && this.fd.execute(a);
            this.Vk = false;
            e = this.Sk = true
        }
        if (this.Ad > this.Ze) this.Kc = 0;
        else e = Zg(this, a, b - this.ph, this.Xf.substract(f), Math.min(this.fi, this.Ze))
    } else if (this.Kc == 0)
        if (this.ed == 1 || this.ed == 2 || this.ed == 3) {
            if (this.fh <= 0 || !this.Td || this.kh.length == 0 || !this.Cf) c = null;
            else if (!this.Bl || b > this.Bl) {
                this.Al = this.fh;
                this.zl = null;
                $g(this, this.Cf.Pa, f, this.kh);
                this.Bl =
                    b + 500 + Math.random() * 1E3;
                c = this.zl
            } else c = null;
            if (c != null) {
                e = 1E3;
                if (this.fd)
                    if (d = Tc(this.fd, "Shoot")) e = d.Wc;
                d = e;
                !this.Xm && this.be && this.be.execute(a);
                e = this.Xm = true;
                if (O(c).yb(f) < d) {
                    if (!c || !a) d = false;
                    else {
                        d = Oa(hf(c));
                        var g = Oa(hf(a));
                        if (this.Td == a)
                            if (a.k() == "mesh")
                                if (a.ic) {
                                    var i = Pa(a.lb()).getLength() * 0.5,
                                        j = g.substract(d);
                                    j.normalize();
                                    A(j, i + i * 0.02);
                                    d.oa(j)
                                }
                        d = !this.ia || !this.Cf ? true : this.ia.Rg(d, g, true, null, true) != null ? false : true
                    }
                    if (d) {
                        this.Wk.$ = Oa(hf(a));
                        this.Wk.Q = Oa(hf(c));
                        ah(this, a, c, O(c), f, b)
                    } else bh(this,
                        a, O(c), f, b)
                } else bh(this, a, O(c), f, b)
            } else if (this.ed == 2 || this.ed == 3)
                if (!this.ll || b > this.ll + this.rg) {
                    d = Yg(this, a);
                    c = null;
                    if (this.ed == 3) {
                        g = null;
                        if (this.Vh != -1 && this.Cf != null) g = Sb(this.Cf, this.Vh);
                        if (g != null && g.k() == "path") {
                            if (this.Vj >= g.Fb.length) this.Vj = 0;
                            c = Bf(g, this.Vj)
                        }++this.Vj
                    } else {
                        c = this.Xh;
                        this.ll = b;
                        c = new s((Math.random() - 0.5) * c, (Math.random() - 0.5) * c, (Math.random() - 0.5) * c);
                        c.oa(this.dm);
                        if (!this.Vf) c.b = this.dm.b
                    }
                    if (!(c.substract(f).getLength() < d)) {
                        bh(this, a, c, f, b);
                        e = true
                    }
                }
        }
    return e
};

function Zg(a, b, c, d, e) {
    if (!b) return false;
    if (b.k() == "camera") return false;
    if (!a.Vf) d.b = 0;
    var f = new I;
    vb(f, Ha(d));
    d = new I;
    vb(d, a.zb);
    f = K(f, d);
    a = wb(f);
    f = b.T.e();
    c = Math.min(c, e) / e;
    c = n.sc(c, 0, 1);
    A(a, n.Bd);
    A(f, n.Bd);
    e = new Ab;
    Fb(e, a.c, a.b, a.d);
    d = new Ab;
    Fb(d, f.c, f.b, f.d);
    Cb(d, d, e, c);
    Eb(d, a);
    A(a, n.we);
    if (b.T.F(a)) return false;
    b.T = a;
    return true
}

function bh(a, b, c, d, e) {
    a.Kc = 1;
    a.Xf = c;
    a.ph = e;
    a.jj = d;
    a.Ad = 0;
    a.Ze = 0;
    a.cc(b, 1)
}

function ah(a, b, c, d, e, f) {
    a.Kc = 2;
    a.Xf = d;
    a.ph = f;
    a.Pp = c;
    a.jj = e;
    a.Ad = 0;
    a.Ze = 500;
    a.Sk = false;
    b = a.cc(b, 2);
    if (b != 0) a.Ze = b
}

function $g(a, b, c, d) {
    if (b && b.X) {
        var e = false,
            f = c.yb(O(b));
        if (f < a.Al) {
            var g = N(b, "gameai");
            if (g && d != "" && g !== a && g.Ub > 0) e = g.pk.indexOf(d) != -1
        }
        if (e) {
            a.Al = f;
            a.zl = b
        }
        for (e = 0; e < b.Z.length; ++e) $g(a, b.Z[e], c, d)
    }
}

function Yg(a, b) {
    if (b != null) return 10;
    a = Pa(hf(b));
    a.b = 0;
    return a.getLength()
}
Kg.prototype.Bm = function(a) {
    switch (a) {
        case 0:
            return this.Rd;
        case 1:
            return this.Wd;
        case 2:
            return this.gj;
        case 3:
            return this.vj
    }
    return ""
};
Kg.prototype.cc = function(a, b) {
    if (!a || a.k() != "animatedmesh") return 0;
    var c = a.Ka;
    if (!c) return 0;
    if (c = td(c, this.Bm(b))) {
        Nf(a, c.xd, c.Q);
        c.Bc != 0 && Of(a, c.Bc);
        a.Yb = b == 1 || b == 0;
        return (c.Q - c.xd) * c.Bc * 1E3
    } else {
        Nf(a, 1, 1);
        a.Yb = false
    }
    return 0
};

function wc(a, b, c) {
    if (c)
        if (a.Ub != 0) {
            a.Ub -= b;
            if (a.Ub < 0) a.Ub = 0;
            if (a.Ub == 0) {
                a.ce != null && a.ce.execute(c);
                b = O(c);
                a.Kc = 3;
                a.ph = 0;
                a.jj = b;
                a.Ad = 0;
                a.Ze = 500;
                a.cc(c, 3)
            } else a.ee != null && a.ee.execute(c)
        }
}
Kg.prototype.Lf = function(a) {
    var b = null;
    if (this.fd)
        if (b = Tc(this.fd, a)) return b;
    if (this.be)
        if (b = Tc(this.be, a)) return b;
    if (this.ee)
        if (b = Tc(this.ee, a)) return b;
    if (this.ce)
        if (b = Tc(this.ce, a)) return b;
    return null
};
n.Kp = [];

function Cc() {
    this.Tc = this.l = "";
    this.jc = this.lc = this.ec = 0
}

function Tb(a, b, c) {
    if (a == null) return null;
    for (var d = a.toLowerCase(), e = n.Kp, f = 0; f < e.length; ++f) {
        var g = e[f];
        if (g != null && g.getName().toLowerCase() == d) return g
    }
    f = ch(a, c);
    if (f == null) c = null;
    else {
        c = new Cc;
        c.Pm(a);
        Fc(c, 0);
        d = f.Me;
        if (f.Xc == "health" && d != null) {
            d = N(d, "gameai");
            d != null && Fc(c, d.Ub)
        } else if (f.Xc == "movementspeed" && d != null) {
            f = N(d, "gameai");
            g = N(d, "keyboardcontrolled");
            if (d = N(d, "camerafps")) Ec(c, d.Kb);
            else if (g) Ec(c, g.Kb);
            else f && Ec(c, f.Kd)
        } else if (f.Xc == "damage" && d != null)(d = gf(d, "Shoot")) && Fc(c, d.ke);
        else if (f.Xc == "colsmalldistance" && d != null) {
            d = N(d, "collisionresponse");
            d != null && Ec(c, d.Hb)
        } else f.Xc == "soundvolume" && Ec(c, n.Xd.ne * 100);
        c = c
    }
    if (c) return c;
    if (b == true) {
        b = new Cc;
        b.Pm(a);
        e.push(b);
        return b
    }
    return null
}

function Gc(a, b) {
    var c = ch(a.l, b);
    if (c != null) {
        b = c.Me;
        if (c.Xc == "health" && b != null) {
            c = N(b, "gameai");
            if (c != null) {
                var d = c.Ub;
                a = dh(a);
                d = d - a;
                if (d > 0) wc(c, d, b);
                else c.Ub = a
            }
        } else if (c.Xc == "movementspeed" && b != null) {
            c = N(b, "gameai");
            d = N(b, "keyboardcontrolled");
            if (b = N(b, "camerafps")) b.Kb = Q(a);
            else if (d) d.Kb = Q(a);
            else if (c) c.Kd = Q(a)
        } else if (c.Xc == "damage" && b != null) {
            if (b = gf(b, "Shoot")) b.ke = dh(a)
        } else if (c.Xc == "damage" && b != null) {
            if (b = gf(b, "Shoot")) b.ke = dh(a)
        } else if (c.Xc == "colsmalldistance" && b != null) {
            b = N(b, "collisionresponse");
            if (b != null) {
                b.Hb = dh(a);
                b.jo = true
            }
        } else c.Xc == "soundvolume" && je(n.Xd, Q(a) / 100)
    }
}

function ch(a, b) {
    if (a.length == 0 || b == null) return null;
    if (a[0] != "#") return null;
    var c = a.indexOf(".");
    if (c == -1) return null;
    var d = a.substr(c + 1, a.length - c);
    if (d.length == 0) return null;
    c = a.substr(1, c - 1);
    a = null;
    if (c != "system") {
        a = lg(b, c);
        if (a == null) return null
    }
    b = {};
    b.Me = a;
    b.Xc = d;
    return b
}
Cc.prototype.getName = ca("l");
Cc.prototype.Pm = ba("l");

function Ub(a) {
    switch (a.ec) {
        case 1:
            return String(a.lc);
        case 2:
            return a.jc % 1 == 0 ? String(a.jc) : a.jc.toFixed(6)
    }
    return a.Tc
}

function dh(a) {
    switch (a.ec) {
        case 0:
            return Math.floor(a.Tc);
        case 1:
            return a.lc;
        case 2:
            return a.jc
    }
    return 0
}

function Q(a) {
    switch (a.ec) {
        case 0:
            return Number(a.Tc);
        case 1:
            return a.lc;
        case 2:
            return a.jc
    }
    return 0
}

function Dc(a, b) {
    a.ec = 0;
    a.Tc = b
}

function Fc(a, b) {
    a.ec = 1;
    a.lc = b
}

function Ec(a, b) {
    a.ec = 2;
    a.jc = b
}

function Mg(a, b) {
    this.vc = 0;
    this.va = a;
    this.oe = this.$b = this.gk = this.Kb = 0;
    this.Ai = this.Kl = false;
    this.Zf = this.bj = 0;
    this.me = 15;
    this.zb = new s;
    this.fk = this.Ij = this.Wd = this.Rd = "";
    this.pn = this.df = q();
    this.Mi = this.Je = this.Se = this.Qe = this.Le = this.iq = this.am = this.no = false;
    this.wc = 0;
    this.Qk = false;
    this.xk = true;
    this.xj = false;
    this.Da = b;
    this != null && b.ei.push(this);
    this != null && b.di.push(this)
}
Mg.prototype = new Rg;
l = Mg.prototype;
l.k = k("keyboardcontrolled");
l.i = function() {
    var a = new Mg(this.va, this.Da);
    a.Kb = this.Kb;
    a.gk = this.gk;
    a.$b = this.$b;
    a.oe = this.oe;
    a.me = this.me;
    a.zb = this.zb ? this.zb.e() : null;
    a.Rd = this.Rd;
    a.Wd = this.Wd;
    a.Ij = this.Ij;
    a.fk = this.fk;
    a.Ai = this.Ai;
    a.bj = this.bj;
    a.Zf = this.Zf;
    a.xj = this.xj;
    return a
};
l.Si = function(a, b) {
    if (b == 37 || b == 65) {
        if (this.Le = a) this.Qe = false;
        return true
    }
    if (b == 39 || b == 68) {
        if (this.Qe = a) this.Le = false;
        return true
    }
    if (b == 38 || b == 87) {
        if (this.Se = a) this.Je = false;
        return true
    }
    if (b == 40 || b == 83) {
        if (this.Je = a) this.Se = false;
        return true
    }
    if (b == 32) {
        this.Mi = a;
        return true
    }
    return false
};
l.Ne = function(a) {
    this.am = a.shiftKey == 1;
    return this.Si(true, a.keyCode)
};
l.Oe = function(a) {
    this.am = a.shiftKey == 1;
    return this.Si(false, a.keyCode)
};
l.hb = function(a, b) {
    var c = b - this.vc;
    if (c > 250) c = 250;
    this.vc = b;
    var d = false;
    this.df = b;
    if (this.xj) {
        var e = a.n.ea;
        if (e != null) {
            e = N(e, "3rdpersoncamera");
            if (e != null) {
                if (e.nc !== a) return false
            } else return false
        }
    }
    e = a.T;
    if (this.Le) {
        e.b -= c * this.$b * 0.001;
        d = true
    }
    if (this.Qe) {
        e.b += c * this.$b * 0.001;
        d = true
    }
    var f = new I;
    vb(f, e);
    e = new s(0, 0, 1);
    var g = new I;
    vb(g, this.zb);
    f = K(f, g);
    ib(f, e);
    f = this.am;
    var i = (f ? this.gk : this.Kb) * c,
        j = 0;
    g = this.Je;
    var m = this.Se;
    if (this.Ai && c)
        if (m || g) {
            if (this.Qk != m)
                if (this.Zf == 0) this.wc *= -1;
                else this.wc =
                    0;
            this.Qk = !g;
            j = i / c;
            this.wc += this.bj * j * (c / 1E3);
            if (this.wc > j) this.wc = j;
            i = this.wc * c
        } else if (this.Zf == 0) this.wc = 0;
    else {
        j = i / Number(c);
        this.wc -= this.Zf * j * (c / 1E3);
        if (this.wc < 0) this.wc = 0;
        i = this.wc * c
    }
    va(e, i);
    if (m || g || this.Ai && this.wc != 0) {
        d = e.e();
        if (g || !(m || g) && !this.Qk) A(d, -1);
        a.f.oa(d);
        this.no = d = true
    }
    if (m || g) {
        this.cc(a, f ? 3 : 1, g);
        d = this.no = true
    } else {
        c = false;
        if (e = N(a, "collisionresponse")) c = e.le;
        if (!c && (this.cc(a, 1, false, true) || this.cc(a, 3, false, true) || this.cc(a, 2, false, true))) this.cc(a, 0, false)
    }
    if (this.Mi)
        if ((c =
                N(a, "collisionresponse")) && !c.le) {
            e = 0;
            if (this.va && this.va.Dd != 0) e = Math.floor(this.oe * (1 / this.va.Dd) * 2E3);
            if (!this.Kl || this.Kl && b - this.pn > e) {
                if (c.Fd == 0) c.Fd = this.oe * 100;
                this.cc(a, 2, false);
                this.pn = b;
                d = true
            }
        }
    return d
};
l.Bm = function(a) {
    switch (a) {
        case 0:
            return this.Rd;
        case 1:
            return this.Wd;
        case 2:
            return this.Ij;
        case 3:
            return this.fk
    }
    return ""
};
l.cc = function(a, b, c, d) {
    if (!a || a.k() != "animatedmesh") return false;
    var e = a.Ka;
    if (!e) return false;
    if (e = td(e, this.Bm(b))) {
        var f = 1 * e.Bc;
        if (c) f *= -1;
        if (d) return a.ub == e.Q && a.Va == e.xd;
        if (!(a.ub == e.Q && a.Va == e.xd && n.F(a.Cb, f))) {
            Nf(a, e.xd, e.Q);
            f && Of(a, f);
            a.Yb = b == 0 || b == 1 || b == 3
        }
        return false
    } else if (!d) {
        Nf(a, 1, 1);
        a.Yb = false
    }
    return false
};

function Lg(a) {
    this.vc = 0;
    this.va = a;
    this.gi = -1;
    this.me = 15;
    this.zb = new s;
    this.qk = this.Bj = 0;
    this.zc = false;
    this.df = this.ia = 0;
    this.bf = new s;
    this.vh = new s;
    this.nc = null;
    this.fo = false;
    this.xk = true
}
Lg.prototype = new Rg;
Lg.prototype.k = k("3rdpersoncamera");
Lg.prototype.i = function() {
    var a = new Lg(this.va);
    a.gi = this.gi;
    a.me = this.me;
    a.zb = this.zb.e();
    a.Bj = this.Bj;
    a.qk = this.qk;
    a.zc = this.zc;
    a.ia = this.ia;
    return a
};
Lg.prototype.hb = function(a, b) {
    var c = b - this.vc;
    if (c > 250) c = 250;
    this.vc = b;
    var d = false;
    if (a == null) return false;
    d = a.n;
    if (!this.fo)
        if (this.gi != -1)
            if (d != null) {
                if ((d = Sb(d, this.gi)) && d !== this.nc) {
                    this.nc = d;
                    this.xk = true
                }
                this.fo = true
            }
    if (!this.nc) return false;
    d = false;
    var e = a.ga.e();
    a.ga = O(this.nc);
    a.ga.oa(this.vh);
    a.ga.b += this.qk;
    a.ga.F(e) || (d = true);
    if (this.xk) {
        P(this.nc);
        P(a);
        this.vh = Pa(this.nc.lb());
        this.vh.b /= 2;
        this.vh.c = 0;
        this.vh.d = 0;
        this.vc = b;
        this.xk = false
    }
    if (a.n.ea !== a) return false;
    if (xa(this.bf)) {
        this.bf =
            O(this.nc).substract(O(a));
        b = new I;
        vb(b, this.nc.T);
        e = this.bf;
        var f = e.e();
        e.c = f.c * b.p + f.b * b.v + f.d * b.s;
        e.b = f.c * b.w + f.b * b.q + f.d * b.t;
        e.d = f.c * b.A + f.b * b.B + f.d * b.o
    }
    b = this.nc.T;
    e = new I;
    vb(e, b);
    b = new I;
    vb(b, this.zb);
    e = K(e, b);
    b = a.f.e();
    switch (this.Bj) {
        case 0:
            break;
        case 2:
            b = O(this.nc).substract(this.bf);
            break;
        case 1:
            b = this.bf.e();
            ib(e, b);
            b = O(this.nc).substract(b);
            e = O(a).yb(b);
            f = this.bf.getLength();
            f = e > f * 2.2;
            if (n.F(this.me, 0) || f) b = b;
            else {
                c = Math.sqrt(e) * (c / 1E3) * this.me;
                if (c > e) c = e;
                b = b.substract(a.f);
                va(b, c);
                b.oa(a.f);
                b = b
            }
            break
    }
    if (this.zc && this.ia != null && !a.f.F(b)) {
        this.ia.Ti(this.nc);
        c = new La;
        c.$ = a.ga.e();
        c.Q = b.e();
        var g = Ma(c);
        e = g.getLength();
        f = this.bf.getLength() / 10;
        va(g, f);
        c.Q.oa(g);
        g = new F;
        g = this.ia.Rg(c.$, c.Q, true, g, true);
        if (g != null) {
            b = g.substract(c.$);
            g = b.getLength();
            if (g < f) g = f;
            g -= f;
            if (g > e) g = e;
            va(b, g);
            b = c.$.add(b)
        }
        this.ia.Ti(null)
    }
    if (!a.f.F(b)) {
        d = true;
        a.f = b
    }
    return d
};

function Ng(a) {
    this.Gp = this.Pn = false;
    this.va = a;
    this.r = null
}
Ng.prototype = new Rg;
Ng.prototype.k = k("onfirstframe");
Ng.prototype.hb = function(a) {
    if (this.Pn) return false;
    this.Pn = true;
    if (this.r) {
        this.r.execute(a);
        return true
    }
    return false
};

function Lf(a, b, c) {
    this.va = b;
    this.ua = c;
    this.Ta = a;
    this.ng = false;
    tg(b, this);
    this.hl = [];
    for (a = 0; a < 255; ++a) this.hl.push(false);
    this.Wf = [];
    this.Wf.push(new Na(-1, 0));
    this.Wf.push(new Na(0, -1));
    this.Wf.push(new Na(1, 0));
    this.Wf.push(new Na(0, 1))
}
Lf.prototype = new Rg;
Lf.prototype.k = k("mobileinput");
Lf.prototype.hb = function() {
    var a = false;
    if (this.ua.Fj == 1) eh(this, this.ng && this.ua.Tj, this.ua.Lc);
    else if (Math.sqrt(this.ua.gc * this.ua.gc + this.ua.hc * this.ua.hc) < 0.3 || !this.ng) {
        if (!this.ng) {
            a = this.ua.gc != 0 && this.ua.hc != 0;
            this.ua.gc = 0;
            this.ua.hc = 0
        }
        eh(this, false, 37);
        eh(this, false, 38);
        eh(this, false, 39);
        eh(this, false, 40)
    } else
        for (var b = 0; b < 4; ++b) {
            var c = this.Wf[b].c - this.ua.gc,
                d = this.Wf[b].b - this.ua.hc;
            c = Math.sqrt(c * c + d * d) < 1;
            eh(this, c, 37 + b)
        }
    return a
};

function eh(a, b, c) {
    if (a.hl[c] != b) {
        a.hl[c] = b;
        var d = {};
        d.keyCode = c;
        b ? ve(a.Ta, d) : we(a.Ta, d)
    }
}
Lf.prototype.sd = function() {
    this.ng = false
};
Lf.prototype.$d = function() {
    this.ng = true
};
Lf.prototype.Pe = function(a) {
    if (this.ng && this.ua.Tj && this.ua.Tl != 0 && this.ua.Sl != 0) {
        var b = af(this.Ta, a) - this.ua.Ln;
        a = bf(this.Ta, a) - this.ua.Mn;
        this.ua.gc = b / this.ua.Tl;
        this.ua.hc = a / this.ua.Sl;
        this.ua.gc = n.sc(this.ua.gc, 0, 1);
        this.ua.hc = n.sc(this.ua.hc, 0, 1);
        this.ua.gc = this.ua.gc * 2 - 1;
        this.ua.hc = this.ua.hc * 2 - 1
    }
};

function vector3d(a, b, c) {
    if (a !== null) {
        this.x = a;
        this.y = b;
        this.z = c
    } else this.z = this.y = this.x = 0
}
l = vector3d.prototype;
l.add = function(a) {
    return new vector3d(this.x + a.x, this.y + a.y, this.z + a.z)
};
l.substract = function(a) {
    return new vector3d(this.x - a.x, this.y - a.y, this.z - a.z)
};
l.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
};
l.normalize = function() {
    var a = this.getLength();
    if (a != 0) {
        a = 1 / a;
        this.x *= a;
        this.y *= a;
        this.z *= a
    }
};
l.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")"
};
l.x = 0;
l.y = 0;
l.z = 0;

function fh() {
    this.cp = -1;
    this.Ig = [];
    this.Eh = false;
    this.Da = this.O = this.fb = this.sj = this.ib = null;
    this.Jf = [];
    this.zo = [];
    this.on = 0;
    this.Rn = false;
    this.Jl = null;
    this.Sn = {};
    this.gn = 0
}
n.xa = null;

function Z() {
    if (n.xa == null) n.xa = new fh;
    return n.xa
}

function se(a, b) {
    a.Da = b
}

function Ne(a) {
    return a.Jf.length != 0
}

function Pg(a, b) {
    try {
        eval(b)
    } catch (c) {
        ma(n.pa, c)
    }
}

function gh(a) {
    ++a.cp;
    return a.cp
}

function Se(a, b) {
    a.Eh = true;
    if (a.Jf.length != null) {
        a.O = b;
        for (b = 0; b < a.Jf.length; ++b) a.Jf[b]();
        a.O = null
    }
    a.Eh = false
}

function hh(a, b, c, d, e) {
    switch (c) {
        case "Position Mode":
            b.Od = d == "absolute (pixels)";
            break;
        case "Pos X (percent)":
            b.lf = d / 100;
            break;
        case "Pos Y (percent)":
            b.mf = d / 100;
            break;
        case "Width (percent)":
            b.xf = d;
            break;
        case "Height (percent)":
            b.wf = d;
            break;
        case "Pos X (pixels)":
            b.jf = d;
            break;
        case "Pos Y (pixels)":
            b.kf = d;
            break;
        case "Width (pixels)":
            b.zf = d / 100;
            break;
        case "Height (pixels)":
            b.yf = d / 100;
            break;
        case "Alpha":
            b.Jc = (d & 255) << 24 | b.Jc & 16777215;
            break;
        case "Image":
            a = wd(a.fb, d);
            b.Ha = a;
            break;
        case "Background Color":
            b.Jc =
                e;
            break;
        case "Draw Text":
            b.$e = d ? true : false;
            break;
        case "TextColor":
            b.Bf = e;
            break;
        case "Text":
            b.eb = d;
            break
    }
}

function ih(a, b, c) {
    switch (c) {
        case "Position Mode":
            return b.Od;
        case "Pos X (percent)":
            return b.lf * 100;
        case "Pos Y (percent)":
            return b.mf * 100;
        case "Width (percent)":
            return b.xf;
        case "Height (percent)":
            return b.wf;
        case "Pos X (pixels)":
            return b.jf;
        case "Pos Y (pixels)":
            return b.kf;
        case "Width (pixels)":
            return b.zf * 100;
        case "Height (pixels)":
            return b.yf * 100;
        case "Alpha":
            return n.Yd(b.Jc);
        case "Image":
            return b.Ha ? b.Ha.l : null;
        case "Background Color":
            return b.Jc;
        case "Draw Text":
            return b.$e;
        case "TextColor":
            return b.Bf;
        case "Text":
            return b.eb
    }
    return null
}
n.Ve = function(a) {
    this.Vb = null;
    this.oc = [];
    this.pm = this.ro = false;
    this.Nd = -1;
    this.to = false;
    this.va = a
};
n.Ve.prototype = new Rg;

function jh(a, b, c) {
    a.ro = b;
    a.pm = c;
    if (!a.to && a.va) {
        b = Z().Da;
        if (c) {
            a != null && b.ei.push(a);
            a != null && b.di.push(a)
        }
        tg(a.va, a)
    }
}
n.Ve.prototype.k = k("extensionscript");
n.Ve.prototype.i = function(a, b, c, d) {
    a = new n.Ve(b);
    a.Vb = this.Vb;
    for (b = 0; b < this.oc.length; ++b) {
        var e = this.oc[b];
        e != null ? a.oc.push(e.i(c, d)) : a.oc.push(null)
    }
    return a
};
n.Ve.prototype.hb = function(a, b) {
    if (a == null) return false;
    if (this.Vb == null || this.Vb.length == 0) return false;
    var c = Z();
    c.sj = this;
    this.Nd == -1 && kh(this, a, c);
    if (this.Nd != -1) try {
        _ccbScriptCache[this.Nd].onAnimate(a, b)
    } catch (d) {
        ma(n.pa, this.Vb + ": " + d)
    }
    c.sj = null;
    return true
};

function kh(a, b, c) {
    var d = "";
    a.Nd = gh(c);
    d += "if (typeof _ccbScriptCache == 'undefined') _ccbScriptCache = new Array(); ";
    d += "_ccbScriptCache[";
    d += a.Nd;
    d += "] = new ";
    d += a.Vb;
    d += "();";
    Pg(c, d);
    var e = "_ccbScriptCache[";
    e += a.Nd;
    e += "].";
    d = "try {";
    d += lh(e, a.oc);
    d += "} catch(e) { }";
    Pg(c, d);
    d = false;
    if (b.k() == "camera") d = true;
    a.to = d;
    d = "try { ccbRegisterBehaviorEventReceiver(typeof ";
    d += e;
    d += "onMouseEvent != 'undefined', typeof ";
    d += e;
    d += "onKeyEvent != 'undefined'); } catch(e) { }";
    Pg(c, d)
}

function mh(a, b, c) {
    a.ro && _ccbScriptCache[a.Nd].onMouseEvent(b, c)
}
l = n.Ve.prototype;
l.sd = function(a) {
    var b = false;
    if (a && a.button == 2) b = true;
    mh(this, b ? 4 : 2, 0)
};
l.Pf = function(a) {
    mh(this, 1, a)
};
l.$d = function(a) {
    var b = false;
    if (a && a.button == 2) b = true;
    mh(this, b ? 5 : 3, 0)
};
l.Pe = function() {
    mh(this, 0, 0)
};
l.Ne = function(a) {
    this.pm && _ccbScriptCache[this.Nd].onKeyEvent(a.keyCode, true)
};
l.Oe = function(a) {
    this.pm && _ccbScriptCache[this.Nd].onKeyEvent(a.keyCode, false)
};

function Og() {
    this.h = -1;
    this.Gf = this.Tc = this.l = null;
    this.lc = this.jc = 0;
    this.vi = this.eh = null
}
Og.prototype.i = function(a, b) {
    var c = new Og;
    c.h = this.h;
    c.l = this.l;
    c.Tc = this.Tc;
    c.Gf = this.Gf ? this.Gf.e() : null;
    c.jc = this.jc;
    c.lc = this.lc;
    if (this.eh) c.eh = this.eh.i(a, b);
    c.vi = this.vi;
    return c
};

function lh(a, b) {
    for (var c = "", d = 0; d < b.length; ++d) {
        var e = b[d];
        if (e != null) {
            c += a;
            c += e.l;
            c += " = ";
            switch (e.h) {
                case 1:
                    c += e.jc;
                    c += "; ";
                    break;
                case 2:
                    c += '"';
                    var f = e.Tc.split('"').join('\\"');
                    c += f;
                    c += '"; ';
                    break;
                case 3:
                    c += e.lc ? "true" : "false";
                    c += "; ";
                    break;
                case 6:
                    c += "new vector3d(";
                    c += e.Gf.c;
                    c += ", ";
                    c += e.Gf.b;
                    c += ", ";
                    c += e.Gf.d;
                    c += "); ";
                    break;
                case 7:
                    c += '"';
                    c += e.vi ? e.vi.l : "";
                    c += '"; ';
                    break;
                case 8:
                    c += "ccbGetSceneNodeFromId(";
                    c += e.lc;
                    c += "); ";
                    break;
                case 9:
                    a: {
                        f = Z();e = e.eh;
                        for (var g = 0; g < f.Ig.length; ++g)
                            if (f.Ig[g] ===
                                e) {
                                f = g;
                                break a
                            }
                        f.Ig.push(e);f = f.Ig.length - 1
                    }
                    c += f;
                    c += "; ";
                    break;
                case 0:
                case 5:
                case 4:
                default:
                    c += e.lc;
                    c += "; ";
                    break
            }
        }
    }
    return c
}

function Qg() {
    this.h = "ExtensionScript";
    this.oc = [];
    this.Vb = null
}
Qg.prototype.i = function(a, b) {
    var c = new Qg;
    c.Vb = this.Vb;
    for (var d = 0; d < this.oc.length; ++d) {
        var e = this.oc[d];
        e != null ? c.oc.push(e.i(a, b)) : c.oc.push(null)
    }
    return c
};
Qg.prototype.execute = function(a) {
    if (!(this.Vb == null || this.Vb.length == 0 || a == null)) {
        var b = Z(),
            c = "";
        c = "_ccbScriptTmp = new ";
        c += this.Vb;
        c += "();";
        Pg(b, c);
        c = "try { ";
        c += lh("_ccbScriptTmp.", this.oc);
        c += "} catch(e) { }";
        Pg(b, c);
        c = "try { _ccbScriptTmp.execute(ccbGetSceneNodeFromId(";
        c += a.Ja;
        c += ")); } catch(e) { }";
        Pg(b, c)
    }
};

function nh(a) {
    var b = n.xa.ib;
    if (b == null) return null;
    return Sb(b, a)
}

function oh(a) {
    var b = n.xa.ib;
    if (a == null) return null;
    var c = a.Ja,
        d = Yc(b);
    c = a.i(a.vb, c, d);
    if (c != null) {
        c.Ja = d;
        b.Ri(a, c)
    }
    if ((a = a.db) && b)
        if (a = a.i(c)) {
            c.db = a;
            b.zd && Zc(b.zd, a)
        }
    return c
}

function ph() {
    var a = n.xa.ib;
    if (a == null) return null;
    return a.ea
}

function qh(a) {
    var b = n.xa.ib;
    b != null && a != null && a.k() == "camera" && ig(b, a)
}

function rh(a, b) {
    if (a == null) return -1;
    if (b < 0 || b >= a.Z.length) return null;
    return a.Z[b]
}

function sh() {
    var a = n.xa.ib;
    if (a == null) return null;
    return a.Pa
}

function th(a) {
    if (a == null) return 0;
    return a.Z.length
}

function uh(a) {
    var b = n.xa.ib;
    if (b == null) return null;
    return lg(b, a)
}

function vh(a) {
    var b = n.xa.ib;
    b != null && Wc(b, a, 0)
}

function wh(a, b) {
    a && b && vc(b, a)
}

function xh(a) {
    if (a == null) return 0;
    return a.bd()
}

function yh(a, b, c) {
    if (a == null) return null;
    if (b < 0 || b >= a.bd()) return null;
    a = a.uc(b);
    if (a == null) return null;
    if (c == "Type") switch (a.h) {
            case 0:
                return "solid";
            case 2:
                return "lightmap";
            case 3:
                return "lightmap_add";
            case 4:
                return "lightmap_m2";
            case 5:
                return "lightmap_m4";
            case 11:
                return "reflection_2layer";
            case 12:
                return "trans_add";
            case 13:
                return "trans_alphach";
            case 16:
                return "trans_reflection_2layer"
        } else if (c == "Texture1") return a.Ba == null ? "" : a.Ba.l;
        else if (c == "Texture2") return a.rc == null ? "" : a.rc.l;
    else if (c == "Lighting") return a.Wb;
    else if (c == "Backfaceculling") return a.Jp;
    return null
}

function zh() {}

function Ah(a, b, c, d) {
    if (a != null)
        if (!(b < 0 || b >= a.bd())) {
            a = a.uc(b);
            if (a != null) {
                b = typeof d == "string" ? d : null;
                var e = null;
                e = Z();
                if (c == "Type")
                    if (b) switch (b) {
                        case "solid":
                            a.h = 0;
                            break;
                        case "lightmap":
                        case "lightmap_add":
                        case "lightmap_m2":
                        case "lightmap_m4":
                            a.h = 2;
                            break;
                        case "reflection_2layer":
                            a.h = 11;
                            break;
                        case "trans_add":
                            a.h = 12;
                            break;
                        case "trans_alphach":
                            a.h = 13;
                            break;
                        case "trans_reflection_2layer":
                            a.h = 16;
                            break
                    } else {
                        c = parseInt(d);
                        if (c != NaN) a.h = c
                    } else if (c == "Texture1") {
                        if (b != null && e.fb != null) {
                            e = wd(e.fb, b);
                            if (e != null) a.Ba = e
                        }
                    } else if (c == "Texture2") {
                    if (b != null && e.fb != null) {
                        e = wd(e.fb, b);
                        if (e != null) a.rc = e
                    }
                } else if (c == "Lighting") a.Wb = d;
                else if (c == "Backfaceculling") a.Jp = d
            }
        }
}

function Bh(a, b, c, d, e) {
    if (a != null) {
        var f = 0,
            g = 0,
            i = 0,
            j = 0;
        if (c != null) j = c;
        if (d == null && c != null && typeof c.x != "undefined") {
            f = c.x;
            g = c.y;
            i = c.z
        }
        if (d != null && e != null) {
            f = c;
            g = d;
            i = e;
            j = n.Kf(255, Math.floor(c), Math.floor(d), Math.floor(e))
        }
        var m = e = d = null,
            o = null,
            p = a.k();
        if (p == "camera") d = a;
        else if (p == "animatedmesh") e = a;
        else if (p == "light") m = a;
        else if (p == "2doverlay") o = a;
        if (b == "Visible") a.X = c;
        else if (b == "Position") {
            a.f.c = f;
            a.f.b = g;
            a.f.d = i
        } else if (b == "Rotation") {
            a.T.c = f;
            a.T.b = g;
            a.T.d = i
        } else if (b == "Scale") {
            a.na.c = f;
            a.na.b =
                g;
            a.na.d = i
        } else if (b == "Target") d != null && pc(d, new s(f, g, i));
        else if (b == "UpVector") {
            if (d != null) d.wb = new s(f, g, i)
        } else if (b == "FieldOfView_Degrees") d != null && nf(d, n.Bo(c));
        else if (b == "AspectRatio") d != null && We(d, c);
        else if (b == "Animation") e != null && jc(e, c, e.Yb);
        else if (b == "Looping") e != null && Pf(e, c);
        else if (b == "FramesPerSecond") e != null && Of(e, c * 0.001);
        else if (b == "AnimationBlending") {
            if (e != null) e.ge = c
        } else if (b == "BlendTimeMs") {
            if (e != null) e.hd = c
        } else if (b == "Radius") {
            if (m != null) m.Ma.Ga = c
        } else if (b == "Color") {
            if (m !=
                null) m.Ma.la = n.Ao(j)
        } else if (b == "Direction") {
            if (m != null) {
                m.Ma.Ia = new s(f, g, i);
                m.Ma.Ia.normalize()
            }
        } else if (b == "FogColor") n.xa.ib.Tb = j;
        else if (b == "Realtime Shadows" && a === sh()) n.xa.ib.oi = c == true;
        else if (b == "BackgroundColor" && a === sh()) n.xa.ib.mh = j;
        else if (b == "AmbientLight") n.xa.ib.Pb = n.Ao(j);
        else if (b == "Name") a.l = c;
        else o != null && hh(Z(), o, b, c, j)
    }
}

function Ch(a, b) {
    if (a == null) return null;
    var c = null,
        d = null,
        e = null,
        f = null,
        g = a.k();
    if (g == "camera") c = a;
    else if (g == "animatedmesh") d = a;
    else if (g == "light") e = a;
    else if (g == "2doverlay") f = a;
    if (b == "Visible") return a.X;
    else if (b == "Position") return new vector3d(a.f.c, a.f.b, a.f.d);
    else if (b == "PositionAbs") {
        a = O(a);
        return new vector3d(a.c, a.b, a.d)
    } else if (b == "Rotation") return new vector3d(a.T.c, a.T.b, a.T.d);
    else if (b == "Scale") return new vector3d(a.na.c, a.na.b, a.na.d);
    else if (b == "Target") {
        if (c != null) return new vector3d(c.ga.c,
            c.ga.b, c.ga.d)
    } else if (b == "UpVector") {
        if (c != null) return new vector3d(c.wb.c, c.wb.b, c.wb.d)
    } else if (b == "FieldOfView_Degrees") {
        if (c != null) return n.Qi(c.ld)
    } else if (b == "AspectRatio") {
        if (c != null) return c.Ic
    } else if (b == "Animation") return "";
    else if (b == "Looping") {
        if (d != null) return d.Yb
    } else if (b == "FramesPerSecond") {
        if (d != null) return d.Cb * 1E3
    } else if (b == "AnimationBlending") {
        if (d != null) return d.ge
    } else if (b == "BlendTimeMs") {
        if (d != null) return d.hd
    } else if (b == "Radius") {
        if (e != null) return e.Ma.Ga
    } else if (b == "Color") {
        if (e !=
            null) return n.Kf(255, e.Ma.la.pc * 255, e.Ma.la.kc * 255, e.Ma.la.fc * 255)
    } else if (b == "Direction") {
        if (e != null) return e.Ma.Ia
    } else if (b == "Name") return a.l;
    else if (b == "FogColor") return n.xa.ib.Tb;
    else if (b == "Realtime Shadows" && a === sh()) return n.xa.ib.oi;
    else if (b == "BackgroundColor" && a === sh()) return n.xa.ib.mh;
    else if (f != null) return ih(Z(), f, b);
    return null
}

function Dh(a, b, c, d) {
    if (a != null) {
        a.f.c = b;
        a.f.b = c;
        a.f.d = d;
        for (b = 0; b < a.ka.length; ++b) {
            c = a.ka[b];
            c != null && c.k() == "collisionresponse" && c.reset()
        }
    }
}

function Eh(a) {
    Z().Jf.push(a)
}

function Fh(a) {
    var b = Z();
    a = b.Jf.indexOf(a);
    a != -1 && b.Jf.splice(a, 1)
}

function Gh(a, b, c, d, e) {
    var f = Z();
    !f.Eh || f.O == null || Od(f.O, b, c, d - b, e - c, a, true)
}

function Hh(a, b, c, d, e) {
    a = Z();
    !a.Eh || a.O == null || Od(a.O, b, c, d - b, e - c, 4278190080, true)
}

function Ih(a, b, c, d, e) {
    a = Z();
    !a.Eh || a.O == null || Od(a.O, b, c, d - b, e - c, 4278190080, true)
}

function Jh(a, b) {
    var c = Z().Da;
    a = df(c, a, b);
    if (a != null) return new vector3d(a.c, a.b, a.d);
    return null
}

function Kh(a, b, c) {
    var d = Z().Da;
    a = ef(d, new s(a, b, c));
    return new vector3d(a.c, a.b, 0)
}

function Lh(a, b, c, d, e, f) {
    var g = new La;
    g.$ = new s(a, b, c);
    g.Q = new s(d, e, f);
    a = n.xa.ib;
    a = xc(yc.prototype, a, g.$, g.Q, a.zd, true);
    if (a < 999999999) {
        b = Ma(g);
        va(b, a);
        g = g.$.add(b);
        return new vector3d(g.c, g.b, g.d)
    }
    return null
}

function Mh(a, b, c, d, e, f, g) {
    if (a == null) return false;
    if (a.Y == null) return false;
    b = new s(b, c, d);
    e = new s(e, f, g);
    return Ra(hf(a), b, e)
}

function Nh() {
    window.close()
}

function Oh() {}

function Ph(a) {
    var b = Z();
    a = vd(b.fb, a, true);
    if (a != null) return a.l;
    return null
}

function Qh() {
    var a = Z().Da;
    if (a) return a.Dc;
    return 0
}

function Rh() {
    var a = Z().Da;
    if (a) return a.Ec;
    return 0
}

function Sh() {
    var a = Z().Da;
    if (a != null && a.O) return a.O.Jb();
    return 0
}

function Th() {
    var a = Z().Da;
    if (a != null && a.O) return a.O.Ib();
    return 0
}

function Uh() {}

function Vh() {}

function Wh(a) {
    var b = Z().Da;
    if (b != null) return lc(b, a, true);
    return false
}

function Xh(a) {
    var b = n.Xd;
    a = ee(b, a);
    a != null && Kc(b, a, false, 1)
}

function Yh(a) {
    Mc(n.Xd, a)
}

function Zh(a) {
    a = Tb(a, true, n.xa.ib);
    if (a == null) return null;
    if (a.ec == 0) return Ub(a);
    if (a.ec == 1) return dh(a);
    if (a.ec == 2) return Q(a);
    return null
}

function $h(a, b) {
    var c = n.xa.ib;
    a = Tb(a, true, c);
    if (a != null) {
        typeof b == "number" ? Ec(a, b) : Dc(a, b);
        Gc(a, c)
    }
}

function ai(a, b) {
    var c = Z().Da;
    c && ff(c, a, b)
}

function bi() {
    return null
}

function ci() {}

function di() {
    return "webgl"
}

function ei(a, b) {
    var c = n.xa.ib;
    if (c != null) {
        if (b == null) b = c.Pa;
        if (a >= 0 && a < n.xa.Ig.length) {
            a = n.xa.Ig[a];
            a != null && a.execute(b)
        }
    }
}

function fi(a) {
    ma(n.pa, a)
}

function gi() {}

function hi(a, b) {
    n.xa.sj != null && jh(n.xa.sj, a, b)
}

function ii(a, b) {
    ++n.xa.on;
    var c = n.xa.on;
    a = new na(a);
    var d = n.xa.zo,
        e = {};
    e.Wq = a;
    e.id = c;
    d.push(e);
    a.load(function(f) {
        b && b(f);
        for (f = 0; f < d.length; ++f)
            if (d[f].id == c) {
                d.splice(f, 1);
                break
            }
    });
    return c
}

function ji(a) {
    for (var b = n.xa.zo, c = 0; c < b.length; ++c)
        if (b[c].id == a) {
            b[c].Wq.abort();
            b.splice(c, 1);
            break
        }
}

function ki(a, b, c, d) {
    var e = Z(),
        f = e.Da.O;
    if (f == null) return -1;
    c = f.bb[c];
    a = Xd(f, a, b, c.wo, c.xo, c.vo);
    if (a != -1) {
        if (d != null) e.Sn["_" + a] = d;
        if (!e.Rn) {
            e.Rn = true;
            e.Jl = f.Sh;
            f.Sh = function(g) {
                e.Jl && e.Jl();
                var i = e.Sn["_" + g];
                if (i != null) {
                    e.gn = g;
                    i()
                }
            }
        }
    }
    return a
}

function li(a, b, c, d, e, f) {
    var g = Z(),
        i = g.Da.O;
    if (i != null) {
        a = i.U;
        g = Yd(i, g.gn);
        b = a.getUniformLocation(g, b);
        a.uniform4f(b, c, d, e, f)
    }
}
n.Am = null;

function mi() {
    return n.Am
}

function ni(a, b, c) {
    if (a) {
        var d = N(a, "gameai");
        if (d)
            if (b == "cancel") {
                d.Kc = 0;
                d.cc(a, 0)
            } else if (b == "moveto") {
            b = new s(0, 0, 0);
            if (c != null && typeof c.x != "undefined") {
                b.c = c.x;
                b.b = c.y;
                b.d = c.z
            }
            bh(d, a, b, O(a), q())
        } else b == "attack" && ah(d, a, c, O(c), O(a), q())
    }
};

function me() {
    this.rh = -1;
    this.Hp = "";
    this.Mb = [];
    this.wq = 2;
    this.ko = false;
    this.Ir = 320;
    this.Hr = 200;
    this.om = function(a) {
        this.Mb.push(a)
    };
    this.Sg = function() {
        if (this.rh < 0 || this.rh >= this.Mb.length) return null;
        return this.Mb[this.rh]
    };
    this.rp = function(a) {
        for (var b = 0; b < this.Mb.length; ++b)
            if (this.Mb[b] === a) {
                this.rh = b;
                return
            }
    }
};
n.Aq = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
n.Bq = function(a) {
    var b, c, d, e, f, g = n.Aq;
    e = a.length;
    d = 0;
    for (f = ""; d < e;) {
        do b = g[a.charCodeAt(d++) & 255]; while (d < e && b == -1);
        if (b == -1) break;
        do c = g[a.charCodeAt(d++) & 255]; while (d < e && c == -1);
        if (c == -1) break;
        f += String.fromCharCode(b << 2 | (c & 48) >> 4);
        do {
            b = a.charCodeAt(d++) & 255;
            if (b == 61) return f;
            b = g[b]
        } while (d < e && b == -1);
        if (b == -1) break;
        f += String.fromCharCode((c & 15) << 4 | (b & 60) >> 2);
        do {
            c = a.charCodeAt(d++) & 255;
            if (c == 61) return f;
            c = g[c]
        } while (d < e && c == -1);
        if (c == -1) break;
        f += String.fromCharCode((b & 3) << 6 | c)
    }
    return f
};

function oi() {}
l = oi.prototype;
l.Of = aa();
l.Tg = function(a, b, c) {
    this.Of(b, c)
};
l.Rg = function(a, b, c, d, e) {
    if (!a || !b) return null;
    if (this.za != null && e && this.za.X == false) return null;
    var f = new B;
    f.D = a.e();
    f.N = a.e();
    C(f, b);
    e = [];
    this.Tg(f, null, e);
    f = b.substract(a);
    f.normalize();
    for (var g, i = 9.999999999E8, j = za(b.substract(a)), m = Math.min(a.c, b.c), o = Math.max(a.c, b.c), p = Math.min(a.b, b.b), h = Math.max(a.b, b.b), v = Math.min(a.d, b.d), r = Math.max(a.d, b.d), E = null, z = 0; z < e.length; ++z) {
        var u = e[z];
        if (!(c && !Ya(Za(u), f)))
            if (!(m > u.V.c && m > u.ca.c && m > u.da.c))
                if (!(o < u.V.c && o < u.ca.c && o < u.da.c))
                    if (!(p > u.V.b && p >
                            u.ca.b && p > u.da.b))
                        if (!(h < u.V.b && h < u.ca.b && h < u.da.b))
                            if (!(v > u.V.d && v > u.ca.d && v > u.da.d))
                                if (!(r < u.V.d && r < u.ca.d && r < u.da.d))
                                    if (!(ya(a, u.V) >= i && ya(a, u.ca) >= i && ya(a, u.da) >= i))
                                        if (g = u.Cm(a, f)) {
                                            var y = ya(g, a),
                                                D = ya(g, b);
                                            if (y < j && D < j && y < i) {
                                                i = y;
                                                d && u.ra(d);
                                                E = g
                                            }
                                        }
    }
    if (E) return E.e();
    return null
};
l.Bk = k(null);
l.Ti = aa();
l.i = k(null);

function wg(a, b, c, d) {
    if (a) {
        this.za = b;
        this.M = [];
        if (a != null)
            for (b = 0; b < a.qa.length; ++b) {
                var e = a.qa[b];
                if (e)
                    if (!(c != null && e.u && e.u.h == c))
                        if (!(d != null && e.u && e.u.h == d))
                            for (var f = e.fa.length, g = 0; g < f; g += 3) this.M.push(new F(e.m[e.fa[g]].f, e.m[e.fa[g + 1]].f, e.m[e.fa[g + 2]].f))
            }
    }
}
wg.prototype = new oi;
wg.prototype.Of = function(a, b) {
    if (this.za.Y) {
        a = a ? K(a, this.za.Y) : this.za.Y;
        var c;
        if (bb(a))
            for (c = 0; c < this.M.length; ++c) b.push(this.M[c]);
        else if (gb(a))
            for (c = 0; c < this.M.length; ++c) b.push(new F(mb(a, this.M[c].V), mb(a, this.M[c].ca), mb(a, this.M[c].da)));
        else
            for (c = 0; c < this.M.length; ++c) b.push(new F(kb(a, this.M[c].V), kb(a, this.M[c].ca), kb(a, this.M[c].da)))
    }
};
wg.prototype.Tg = function(a, b, c) {
    this.Of(b, c)
};
wg.prototype.Bk = ca("za");
wg.prototype.i = function(a) {
    var b = new wg(null, a);
    b.za = a;
    b.M = this.M;
    return b
};

function xg(a, b) {
    if (b) {
        this.za = b;
        this.M = [];
        if (a != null) {
            a = Qa(a);
            this.M.push(new F(a[3], a[0], a[2]));
            this.M.push(new F(a[3], a[1], a[0]));
            this.M.push(new F(a[3], a[2], a[7]));
            this.M.push(new F(a[7], a[2], a[6]));
            this.M.push(new F(a[7], a[6], a[4]));
            this.M.push(new F(a[5], a[7], a[4]));
            this.M.push(new F(a[5], a[4], a[0]));
            this.M.push(new F(a[5], a[0], a[1]));
            this.M.push(new F(a[1], a[3], a[7]));
            this.M.push(new F(a[1], a[7], a[5]));
            this.M.push(new F(a[0], a[6], a[2]));
            this.M.push(new F(a[0], a[4], a[6]))
        }
    }
}
xg.prototype = new wg;
xg.prototype.i = function(a) {
    var b = new xg(null, a);
    b.za = a;
    b.M = this.M;
    return b
};

function ug() {
    this.Rc = [];
    this.Dl = null
}
ug.prototype = new oi;
ug.prototype.Of = function(a, b) {
    for (var c = this.Dl, d = 0; d < this.Rc.length; ++d) {
        var e = this.Rc[d];
        c != null && c == e.Bk() || e.Of(a, b)
    }
};
ug.prototype.Tg = function(a, b, c) {
    for (var d = this.Dl, e = 0; e < this.Rc.length; ++e) {
        var f = this.Rc[e];
        d != null && d == f.Bk() || f.Tg(a, b, c)
    }
};

function Zc(a, b) {
    a.Rc.push(b)
}

function Me(a, b) {
    for (var c = 0; c < a.Rc.length;)
        if (a.Rc[c] === b) {
            a.Rc.splice(c, 1);
            return
        } else ++c
}
ug.prototype.clear = function() {
    this.Rc = []
};
ug.prototype.Rg = function(a, b, c, d, e) {
    var f = 9.999999999E8,
        g = null,
        i = null;
    if (d) i = new F;
    for (var j = 0; j < this.Rc.length; ++j) {
        var m = this.Rc[j].Rg(a, b, c, i, e);
        if (m != null) {
            var o = ya(m, a);
            if (o < f) {
                g = m.e();
                f = o;
                d && i.ra(d)
            }
        }
    }
    return g
};
ug.prototype.Ti = ba("Dl");
n.Xl = function() {
    this.M = [];
    this.g = new B;
    this.jd = []
};

function vg(a, b, c, d, e) {
    this.Mp = this.Lp = 0;
    this.xn = c == null ? 64 : c;
    if (a) {
        this.za = b;
        this.xe = new n.Xl;
        this.M = [];
        for (b = 0; b < a.qa.length; ++b)
            if (c = a.qa[b])
                if (!(d != null && c.u && c.u.h == d))
                    if (!(e != null && c.u && c.u.h == e))
                        for (var f = c.fa.length, g = 0; g < f; g += 3) {
                            var i = new F(c.m[c.fa[g]].f, c.m[c.fa[g + 1]].f, c.m[c.fa[g + 2]].f);
                            this.xe.M.push(i);
                            this.M.push(i)
                        }
        pi(this, this.xe)
    }
}
vg.prototype = new oi;

function pi(a, b) {
    ++a.Lp;
    b.g.D = b.M[0].V.e();
    b.g.N = b.g.D.e();
    for (var c, d = b.M.length, e = 0; e < d; ++e) {
        c = b.M[e];
        C(b.g, c.V);
        C(b.g, c.ca);
        C(b.g, c.da)
    }
    if (!b.g.D.F(b.g.N) && d > a.xn) {
        d = Oa(b.g);
        for (var f = Qa(b.g), g = new B, i = 0; i < 8; ++i) {
            var j = [];
            g.D = d.e();
            g.N = d.e();
            C(g, f[i]);
            b.jd.push(new n.Xl);
            for (e = 0; e < b.M.length; ++e) {
                c = b.M[e];
                g.Ug(c.V) && g.Ug(c.ca) && g.Ug(c.da) ? b.jd[i].M.push(c) : j.push(c)
            }
            b.M = j;
            if (b.jd[i].M.length == 0) b.jd[i] = null;
            else pi(a, b.jd[i])
        }
    }
    a.Mp += b.M.length
}
vg.prototype.Of = function(a, b) {
    wg.prototype.Of.call(this, a, b)
};
vg.prototype.Tg = function(a, b, c) {
    if (this.za.Y) {
        var d = new I;
        a = a.e();
        if (this.za) {
            d = this.za.Y.e();
            ob(d);
            zb(d, a)
        }
        var e = d;
        e.p = 1;
        e.v = 0;
        e.s = 0;
        e.G = 0;
        e.w = 0;
        e.q = 1;
        e.t = 0;
        e.H = 0;
        e.A = 0;
        e.B = 0;
        e.o = 1;
        e.I = 0;
        e.J = 0;
        e.K = 0;
        e.C = 0;
        e.L = 1;
        e.La = true;
        if (b) d = b.e();
        if (this.za) d = K(d, this.za.Y);
        this.xe && qi(this, this.xe, c, a, d)
    }
};

function qi(a, b, c, d, e) {
    if (Ua(b.g, d)) {
        var f = b.M.length,
            g;
        if (bb(e))
            for (g = 0; g < f; ++g) c.push(b.M[g]);
        else if (gb(e))
            for (g = 0; g < f; ++g) c.push(new F(mb(e, b.M[g].V), mb(e, b.M[g].ca), mb(e, b.M[g].da)));
        else
            for (g = 0; g < f; ++g) c.push(new F(kb(e, b.M[g].V), kb(e, b.M[g].ca), kb(e, b.M[g].da)));
        for (g = 0; g < b.jd.length; ++g) {
            f = b.jd[g];
            f != null && qi(a, f, c, d, e)
        }
    }
}
vg.prototype.Bk = ca("za");

function ri(a, b) {
    var c = new n.Xl;
    c.M = b.M;
    c.g = b.g.e();
    for (var d = 0; d < b.jd.length; ++d) {
        var e = b.jd[d],
            f = null;
        if (e) f = ri(a, e);
        c.jd.push(f)
    }
    return c
}
vg.prototype.i = function(a) {
    var b = new vg(null, a, this.xn);
    b.za = a;
    b.M = this.M;
    b.xe = null;
    if (this.xe) b.xe = ri(this, this.xe);
    return b
};
(function(a) {
    function b() {
        this.list = this.next = null
    }

    function c() {
        this.rd = this.Yc = this.Gc = 0;
        this.Rf = null
    }

    function d(M, T, V, t, w, da) {
        this.We = 16;
        this.Xp = 288;
        this.status = 0;
        this.Re = null;
        this.Zd = 0;
        var S = new Array(this.We + 1),
            tb, ka, Ja, L, G, J, Sa, Ta = new Array(this.We + 1),
            Ca, ta, qa, la = new c,
            Ob = new Array(this.We);
        L = new Array(this.Xp);
        var ra, cb = new Array(this.We + 1),
            dc, db, ec;
        ec = this.Re = null;
        for (G = 0; G < S.length; G++) S[G] = 0;
        for (G = 0; G < Ta.length; G++) Ta[G] = 0;
        for (G = 0; G < Ob.length; G++) Ob[G] = null;
        for (G = 0; G < L.length; G++) L[G] = 0;
        for (G = 0; G < cb.length; G++) cb[G] = 0;
        tb = T > 256 ? M[256] : this.We;
        Ca = M;
        ta = 0;
        G = T;
        do {
            S[Ca[ta]]++;
            ta++
        } while (--G > 0);
        if (S[0] == T) {
            this.Re = null;
            this.status = this.Zd = 0
        } else {
            for (J = 1; J <= this.We; J++)
                if (S[J] != 0) break;
            Sa = J;
            if (da < J) da = J;
            for (G = this.We; G != 0; G--)
                if (S[G] != 0) break;
            Ja = G;
            if (da > G) da = G;
            for (dc = 1 << J; J < G; J++, dc <<= 1)
                if ((dc -= S[J]) < 0) {
                    this.status = 2;
                    this.Zd = da;
                    return
                }
            if ((dc -= S[G]) < 0) {
                this.status = 2;
                this.Zd = da
            } else {
                S[G] += dc;
                cb[1] = J = 0;
                Ca = S;
                ta = 1;
                for (qa = 2; --G > 0;) cb[qa++] = J += Ca[ta++];
                Ca = M;
                G = ta = 0;
                do
                    if ((J = Ca[ta++]) != 0) L[cb[J]++] =
                        G; while (++G < T);
                T = cb[Ja];
                cb[0] = G = 0;
                Ca = L;
                ta = 0;
                L = -1;
                ra = Ta[0] = 0;
                qa = null;
                for (db = 0; Sa <= Ja; Sa++)
                    for (M = S[Sa]; M-- > 0;) {
                        for (; Sa > ra + Ta[1 + L];) {
                            ra += Ta[1 + L];
                            L++;
                            db = (db = Ja - ra) > da ? da : db;
                            if ((ka = 1 << (J = Sa - ra)) > M + 1) {
                                ka -= M + 1;
                                for (qa = Sa; ++J < db;) {
                                    if ((ka <<= 1) <= S[++qa]) break;
                                    ka -= S[qa]
                                }
                            }
                            if (ra + J > tb && ra < tb) J = tb - ra;
                            db = 1 << J;
                            Ta[1 + L] = J;
                            qa = new Array(db);
                            for (ka = 0; ka < db; ka++) qa[ka] = new c;
                            ec = ec == null ? (this.Re = new b) : (ec.next = new b);
                            ec.next = null;
                            ec.list = qa;
                            Ob[L] = qa;
                            if (L > 0) {
                                cb[L] = G;
                                la.Yc = Ta[L];
                                la.Gc = 16 + J;
                                la.Rf = qa;
                                J = (G & (1 << ra) - 1) >> ra - Ta[L];
                                Ob[L - 1][J].Gc = la.Gc;
                                Ob[L - 1][J].Yc = la.Yc;
                                Ob[L - 1][J].rd = la.rd;
                                Ob[L - 1][J].Rf = la.Rf
                            }
                        }
                        la.Yc = Sa - ra;
                        if (ta >= T) la.Gc = 99;
                        else if (Ca[ta] < V) {
                            la.Gc = Ca[ta] < 256 ? 16 : 15;
                            la.rd = Ca[ta++]
                        } else {
                            la.Gc = w[Ca[ta] - V];
                            la.rd = t[Ca[ta++] - V]
                        }
                        ka = 1 << Sa - ra;
                        for (J = G >> ra; J < db; J += ka) {
                            qa[J].Gc = la.Gc;
                            qa[J].Yc = la.Yc;
                            qa[J].rd = la.rd;
                            qa[J].Rf = la.Rf
                        }
                        for (J = 1 << Sa - 1;
                            (G & J) != 0; J >>= 1) G ^= J;
                        for (G ^= J;
                            (G & (1 << ra) - 1) != cb[L];) {
                            ra -= Ta[L];
                            L--
                        }
                    }
                this.Zd = Ta[1];
                this.status = dc != 0 && Ja != 1 ? 1 : 0
            }
        }
    }

    function e() {
        if (Pd.length == ze) return -1;
        return Pd.charCodeAt(ze++) & 255
    }

    function f(M) {
        for (; fa < M;) {
            Y |= e() << fa;
            fa += 8
        }
    }

    function g(M) {
        return Y & si[M]
    }

    function i(M) {
        Y >>= M;
        fa -= M
    }

    function j(M, T, V) {
        var t, w, da;
        if (V == 0) return 0;
        for (da = 0;;) {
            f(Da);
            w = eb.list[g(Da)];
            for (t = w.Gc; t > 16;) {
                if (t == 99) return -1;
                i(w.Yc);
                t -= 16;
                f(t);
                w = w.Rf[g(t)];
                t = w.Gc
            }
            i(w.Yc);
            if (t == 16) {
                u &= h - 1;
                M[T + da++] = z[u++] = w.rd
            } else {
                if (t == 15) break;
                f(t);
                sa = w.rd + g(t);
                i(t);
                f(Pb);
                w = Ae.list[g(Pb)];
                for (t = w.Gc; t > 16;) {
                    if (t == 99) return -1;
                    i(w.Yc);
                    t -= 16;
                    f(t);
                    w = w.Rf[g(t)];
                    t = w.Gc
                }
                i(w.Yc);
                f(t);
                fc = u - w.rd - g(t);
                for (i(t); sa > 0 && da < V;) {
                    sa--;
                    fc &=
                        h - 1;
                    u &= h - 1;
                    M[T + da++] = z[u++] = z[fc++]
                }
            }
            if (da == V) return V
        }
        fb = -1;
        return da
    }

    function m(M, T, V) {
        if (y == null) {
            var t, w = new Array(288);
            for (t = 0; t < 144; t++) w[t] = 8;
            for (; t < 256; t++) w[t] = 9;
            for (; t < 280; t++) w[t] = 7;
            for (; t < 288; t++) w[t] = 8;
            H = 7;
            t = new d(w, 288, 257, mg, ng, H);
            if (t.status != 0) {
                return -1
            }
            y = t.Re;
            H = t.Zd;
            for (t = 0; t < 30; t++) w[t] = 5;
            zip_fixed_bd = 5;
            t = new d(w, 30, 0, og, pg, zip_fixed_bd);
            if (t.status > 1) {
                y = null;
                return -1
            }
            D = t.Re;
            zip_fixed_bd = t.Zd
        }
        eb = y;
        Ae = D;
        Da = H;
        Pb =
            zip_fixed_bd;
        return j(M, T, V)
    }

    function o(M, T, V) {
        var t, w, da, S, tb, ka, Ja, L = new Array(316);
        for (t = 0; t < L.length; t++) L[t] = 0;
        f(5);
        ka = 257 + g(5);
        i(5);
        f(5);
        Ja = 1 + g(5);
        i(5);
        f(4);
        t = 4 + g(4);
        i(4);
        if (ka > 286 || Ja > 30) return -1;
        for (w = 0; w < t; w++) {
            f(3);
            L[qg[w]] = g(3);
            i(3)
        }
        for (; w < 19; w++) L[qg[w]] = 0;
        Da = 7;
        w = new d(L, 19, 19, null, null, Da);
        if (w.status != 0) return -1;
        eb = w.Re;
        Da = w.Zd;
        S = ka + Ja;
        for (t = da = 0; t < S;) {
            f(Da);
            tb = eb.list[g(Da)];
            w = tb.Yc;
            i(w);
            w = tb.rd;
            if (w < 16) L[t++] = da = w;
            else if (w == 16) {
                f(2);
                w = 3 + g(2);
                i(2);
                if (t + w > S) return -1;
                for (; w-- > 0;) L[t++] =
                    da
            } else {
                if (w == 17) {
                    f(3);
                    w = 3 + g(3);
                    i(3)
                } else {
                    f(7);
                    w = 11 + g(7);
                    i(7)
                }
                if (t + w > S) return -1;
                for (; w-- > 0;) L[t++] = 0;
                da = 0
            }
        }
        Da = r;
        w = new d(L, ka, 257, mg, ng, Da);
        if (Da == 0) w.status = 1;
        if (w.status != 0) return -1;
        eb = w.Re;
        Da = w.Zd;
        for (t = 0; t < Ja; t++) L[t] = L[t + ka];
        Pb = E;
        w = new d(L, Ja, 0, og, pg, Pb);
        Ae = w.Re;
        Pb = w.Zd;
        if (Pb == 0 && ka > 257) return -1;
        if (w.status != 0) return -1;
        return j(M, T, V)
    }

    function p(M, T, V) {
        var t, w;
        for (t = 0; t < V;) {
            if (Ac && fb == -1) return t;
            if (sa > 0) {
                if (fb != v)
                    for (; sa > 0 && t < V;) {
                        sa--;
                        fc &= h - 1;
                        u &= h - 1;
                        M[T + t++] = z[u++] = z[fc++]
                    } else {
                        for (; sa > 0 && t <
                            V;) {
                            sa--;
                            u &= h - 1;
                            f(8);
                            M[T + t++] = z[u++] = g(8);
                            i(8)
                        }
                        if (sa == 0) fb = -1
                    }
                if (t == V) return t
            }
            if (fb == -1) {
                if (Ac) break;
                f(1);
                if (g(1) != 0) Ac = true;
                i(1);
                f(2);
                fb = g(2);
                i(2);
                eb = null;
                sa = 0
            }
            switch (fb) {
                case 0:
                    w = T + t;
                    var da = V - t,
                        S = undefined;
                    S = fa & 7;
                    i(S);
                    f(16);
                    S = g(16);
                    i(16);
                    f(16);
                    if (S != (~Y & 65535)) w = -1;
                    else {
                        i(16);
                        sa = S;
                        for (S = 0; sa > 0 && S < da;) {
                            sa--;
                            u &= h - 1;
                            f(8);
                            M[w + S++] = z[u++] = g(8);
                            i(8)
                        }
                        if (sa == 0) fb = -1;
                        w = S
                    }
                    break;
                case 1:
                    w = eb != null ? j(M, T + t, V - t) : m(M, T + t, V - t);
                    break;
                case 2:
                    w = eb != null ? j(M, T + t, V - t) : o(M, T + t, V - t);
                    break;
                default:
                    w = -1;
                    break
            }
            if (w == -1) {
                if (Ac) return 0;
                return -1
            }
            t += w
        }
        return t
    }
    var h = 32768,
        v = 0,
        r = 9,
        E = 6,
        z, u, y = null,
        D, H, Y, fa, fb, Ac, sa, fc, eb, Ae, Da, Pb, Pd, ze, si = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535),
        mg = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0),
        ng = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99),
        og = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577),
        pg = new Array(0,
            0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13),
        qg = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15),
        rg = {};
    a.JSInflate = rg;
    rg.Uq = function(M) {
        var T, V, t;
        if (z == null) z = new Array(2 * h);
        fa = Y = u = 0;
        fb = -1;
        Ac = false;
        sa = fc = 0;
        eb = null;
        Pd = M;
        ze = 0;
        T = new Array(1024);
        for (M = "";
            (V = p(T, 0, T.length)) > 0;)
            for (t = 0; t < V; t++) M += String.fromCharCode(T[t]);
        Pd = null;
        return M
    }
})(this);
jsdummyfunc = void 0;
window.startCopperLichtFromFile = function(a, b, c, d, e) {
    a = new le(a, true, null, false, c, d, e);
    a.load(b);
    return a
};
window.CL3D = n;
window.ccbGetSceneNodeFromId = nh;
window.ccbCloneSceneNode = oh;
window.ccbGetActiveCamera = ph;
window.ccbSetActiveCamera = qh;
window.ccbGetChildSceneNode = rh;
window.ccbGetRootSceneNode = sh;
window.ccbGetSceneNodeChildCount = th;
window.ccbGetSceneNodeFromName = uh;
window.ccbRemoveSceneNode = vh;
window.ccbSetSceneNodeParent = wh;
window.ccbGetSceneNodeMaterialCount = xh;
window.ccbGetSceneNodeMaterialProperty = yh;
window.ccbSetSceneNodeMaterialProperty = Ah;
window.ccbSetSceneNodeProperty = Bh;
window.ccbGetSceneNodeProperty = Ch;
window.ccbSetSceneNodePositionWithoutCollision = Dh;
window.ccbRegisterOnFrameEvent = Eh;
window.ccbDrawColoredRectangle = Gh;
window.ccbDrawTextureRectangle = Hh;
window.ccbDrawTextureRectangleWithAlpha = Ih;
window.ccbGet3DPosFrom2DPos = Jh;
window.ccbGet2DPosFrom3DPos = Kh;
window.ccbGetCollisionPointOfWorldWithLine = Lh;
window.ccbEndProgram = Nh;
window.ccbDoesLineCollideWithBoundingBoxOfSceneNode = Mh;
window.ccbLoadTexture = Ph;
window.ccbGetMousePosX = Qh;
window.ccbGetMousePosY = Rh;
window.ccbGetScreenWidth = Sh;
window.ccbGetScreenHeight = Th;
window.ccbSetCloseOnEscapePressed = Uh;
window.ccbSetCursorVisible = Vh;
window.ccbSwitchToScene = Wh;
window.ccbPlaySound = Xh;
window.ccbStopSound = Yh;
window.ccbGetCopperCubeVariable = Zh;
window.ccbSetCopperCubeVariable = $h;
window.ccbReadFileContent = bi;
window.ccbWriteFileContent = ci;
window.ccbGetPlatform = di;
window.ccbInvokeAction = ei;
window.ccbCleanMemory = zh;
window.print = fi;
window.system = gi;
window.ccbRegisterBehaviorEventReceiver = hi;
window.ccbUnregisterOnFrameEvent = Fh;
window.ccbSwitchToFullscreen = ai;
window.ccbDoHTTPRequest = ii;
window.ccbCancelHTTPRequest = ji;
window.ccbCreateMaterial = ki;
window.ccbSetShaderConstant = li;
window.ccbSetPhysicsVelocity = Oh;
window.ccbUpdatePhysicsGeometry = Oh;
window.ccbAICommand = ni;
window.ccbGetCurrentNode = mi;