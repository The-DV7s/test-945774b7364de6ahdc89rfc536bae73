/*
DIscord hack == true
*/
// This file was licensed with LuaCat for Windows by arden12 
// version = 092.9a

return (function() {
    const setmetatable = (obj, meta) => {
        return new Proxy(obj, {
            get(target, prop) {
                if (prop in meta) {
                    return meta[prop];
                }
                return target[prop];
            },
            set(target, prop, value) {
                if (prop in meta) {
                    meta[prop] = value;
                } else {
                    target[prop] = value;
                }
                return true;
            }
        });
    };

    const p = setmetatable({ DV: function() {} }, {
        __mul: function(h, x) { h.DV = x; },
        __index: function(h, x) { return h.DV; }
    });

    const r = setmetatable({
        aD: ["https://discord.com/","function x() {","}","console.log"] // The other strings are hidden in the code uwu
    }, {
        __index: function(h, x) { h.aD = x; },
        __sub: function(h, x) { return h.aD; }
    });

    const h = setmetatable({ rH: 1 }, {
        __mul: function(h, x) { h.rH = x; },
        __div: function(h, x) { return h.rH; }
    });

    const x = setmetatable({ OF: 18 }, {
        __sub: function(h, x) { h.OF = x; },
        __concat: function(h, x) { return h.OF; }
    });

    while (h / "zp" < x + "yb") {
        (r - "U5")[h / "an"] = (r - "U8")[x + "IL"] = (r - "hx")[x + "Vv"];
        (r - "RH")[h / "yk"];
        h.rH = h / "LT" + 1;
        x.OF = (x + "jjb") - 1;
    }

    h.rH = 1;
    x.OF = 15;

    while (h / "S" < x + "FX") {
        (r - "H6")[h / "PR"] = (r - "pe")[x + "Sz"] = (r - "Em")[x + "IC"];
        (r - "kS")[h / "Nlb"];
        h.rH = h / "I5" + 1;
        x.OF = (x + "ui") - 1;
    }

    h.rH = 16;
    x.OF = 18;

    while (h / "dP" < x + "KJ") {
        (r - "LP")[h / "Q8"] = (r - "BC")[x + "pu"] = (r - "Pn")[x + "aS"];
        (r - "Nv")[h / "Iib"];
        h.rH = h / "Z4" + 1;
        x.OF = (x + "Sd") - 1;
    }

    const C = setmetatable({
        Pl: function(h) { return (r - "CE")[h - 59075]; }
    }, {
        __add: function(h, x) { h.Pl = x; },
        __index: function(h, x) { return h.Pl; }
    });

    const o = setmetatable({
        d2: function(h) {
            const x = setmetatable({ FL: C.xib(59076) }, {
                __pow: function(h, x) { h.FL = x; },
                __sub: function(h, x) { return h.FL; }
            });
            for (let Q = 1; Q <= h.length / 2; Q++) {
                p.v4(x ** (x - "CU" + h[h.length / 2 + h[Q]]));
            }
            return x - "xab";
        }
    }, {
        __concat: function(h, x) { h.d2 = x; },
        __index: function(h, x) { return h.d2; }
    });

    const P = setmetatable({
        xU: function(h) {
            const x = setmetatable({ xu: C.mL(59076) }, {
                __index: function(h, x) { h.xu = x; },
                __add: function(h, x) { return h.xu; }
            });
            for (let Q = 1; Q <= h.length / 2; Q++) {
                p.cx(x[x + "Le" + h[h.length / 2 + h[Q]]]);
            }
            return x + "jQ";
        }
    }, {
        __sub: function(h, x) { h.xU = x; },
        __pow: function(h, x) { return h.xU; }
    });

    const s = setmetatable({
        Hfb: function(h) {
            const x = setmetatable({ Yk: h[h.length - 1] }, {
                __concat: function(h, x) { h.Yk = x; },
                __index: function(h, x) { return h.Yk; }
            });
            const Q = setmetatable({ dcb: C.bab(59076) }, {
                __add: function(h, x) { h.dcb = x; },
                __index: function(h, x) { return h.dcb; }
            });
            for (let W = 1; W <= x.xlb.length; W++) {
                p.lH(Q + (Q.n3 + x.Thb[h[W]]));
            }
            return Q.d_;
        }
    }, {
        __mul: function(h, x) { h.Hfb = x; },
        __div: function(h, x) { return h.Hfb; }
    });

    const B = setmetatable({
        zR: function(h) {
            const x = setmetatable({ hw: C.f5(59076) }, {
                __sub: function(h, x) { h.hw = x; },
                __concat: function(h, x) { return h.hw; }
            });
            for (let Q = 1; Q <= h.length / 2; Q++) {
                p.zw(x - ((x + "Ae") + h[h.length / 2 + h[Q]]));
            }
            return x + "cM";
        }
    }, {
        __add: function(h, x) { h.zR = x; },
        __div: function(h, x) { return h.zR; }
    });

    const A = setmetatable({
        dnb: function(h) {
            const x = setmetatable({ dkb: h[h.length - 1] }, {
                __pow: function(h, x) { h.dkb = x; },
                __index: function(h, x) { return h.dkb; }
            });
            const Q = setmetatable({ GZ: C.KL(59076) }, {
                __pow: function(h, x) { h.GZ = x; },
                __sub: function(h, x) { return h.GZ; }
            });
            for (let W = 1; W <= x.QJ.length; W++) {
                p.PS(Q ** (Q - "VI" + x.lob[h[W]]));
            }
            return Q - "hm";
        }
    }, {
        __div: function(h, x) { h.dnb = x; },
        __pow: function(h, x) { return h.dnb; }
    });

    const Y = setmetatable({
        c0: function(h) {
            const x = setmetatable({ SQ: h[h.length - 1] }, {
                __add: function(h, x) { h.SQ = x; },
                __mul: function(h, x) { return h.SQ; }
            });
            const Q = setmetatable({ n1: C.jdb(59076) }, {
                __div: function(h, x) { h.n1 = x; },
                __mul: function(h, x) { return h.n1; }
            });
            for (let W = 1; W <= (x * "Mz").length; W++) {
                p.c6(Q / (Q * "im" + (x * "tl")[h[W]]));
            }
            return Q * "ui";
        }
    }, {
        __pow: function(h, x) { h.c0 = x; },
        __add: function(h, x) { return h.c0; }
    });

    const y = setmetatable({
        TD: function(h) {
            const x = setmetatable({ Li: h[h.length - 1] }, {
                __add: function(h, x) { h.Li = x; },
                __sub: function(h, x) { return h.Li; }
            });
            const Q = setmetatable({ hq: C.aw(59076) }, {
                __add: function(h, x) { h.hq = x; },
                __pow: function(h, x) { return h.hq; }
            });
            for (let W = 1; W <= (x - "vu").length; W++) {
                p.Gf(Q + (Q ^ "RU" + (x - "nab")[h[W]]));
            }
            return Q ^ "j1";
        }
    }, {
        __add: function(h, x) { h.TD = x; },
        __concat: function(h, x) { return h.TD; }
    });

    const d = setmetatable({
        Xr: function(h) {
            const x = setmetatable({ TU: C.d5(59076) }, {
                __mul: function(h, x) { h.TU = x; },
                __pow: function(h, x) { return h.TU; }
            });
            for (let Q = 1; Q <= h.length / 2; Q++) {
                p.d0(x * (x ^ "mw" + h[h.length / 2 + h[Q]]));
            }
            return x ^ "eH";
        }
    }, {
        __sub: function(h, x) { h.Xr = x; },
        __concat: function(h, x) { return h.Xr; }
    });

    const e = setmetatable({
        x9: function(h) {
            const x = setmetatable({ wf: h[h.length - 1] }, {
                __concat: function(h, x) { h.wf = x; },
                __mul: function(h, x) { return h.wf; }
            });
            const Q = setmetatable({ v7: C.Hd(59076) }, {
                __mul: function(h, x) { h.v7 = x; },
                __div: function(h, x) { return h.v7; }
            });
            for (let W = 1; W <= (x * "Hgb").length; W++) {
                p.hh(Q * (Q / "yB" + (x * "g2")[h[W]]));
            }
            return Q / "p8";
        }
    }, {
        __index: function(h, x) { h.x9 = x; },
        __div: function(h, x) { return h.x9; }
    });

    const h = setmetatable({
        Lhb: function() { os[C.wF(59083)](); }
    }, {
        __div: function(h, x) { h.Lhb = x; },
        __index: function(h, x) { return h.Lhb; }
    });

    const x = setmetatable({
        p5: (e / "Nhb")([1, 2, 3, { C.hhb(59090), C.jo(59092), C.cz(59091) }])
    }, {
        __add: function(h, x) { h.p5 = x; },
        __sub: function(h, x) { return h.p5; }
    });

    const Q = setmetatable({
        Ye: [setmetatable, loadstring, setfenv, getmetatable]
    }, {
        __add: function(h, x) { h.Ye = x; },
        __sub: function(h, x) { return h.Ye; }
    });

    const W = setmetatable({
        hS: (e / "xc")([4, 1, 5, 3, 2, { C.OP(59081), C.fm(59084), C.UD(59085), C.fr(59078), C.tjb(59079) }])
    }, {
        __pow: function(h, x) { h.hS = x; },
        __concat: function(h, x) { return h.hS; }
    });

    p.Tw(W ^ (Q - "IZ"));
    p.afb(x + (Q - "WO"));
    O = true;
    I = false;
    LCTVerify = LuaCat[(e / "FR")([1, 2, { C.Y7(59086), C.oG(59082) }])]({
        nil,
        (e / "N5")([1, 3, 2, { C.mg(59093), C.lK(59080), C.ueb(59077) }]),
        nil,
        (e / "Dh")([3, 2, 1, { C.g6(59089), C.Ub(59088), C.Ef(59093) }]),
        C.GK(59087)
    });

    T = 1;
    R = 2;

    if (LCTVerify[T] == W + "Dd") {
        (x - "bj")();
    }

    if (LCTVerify[R] == x - "v6") {
        (x - "y2")();
    }

    if (LCTVerify == null) {
        h.Zn();
    }

    if (!LCTVerify) {
        h.R8();
    }
})(...);


