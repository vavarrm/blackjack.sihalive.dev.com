function CCard(a, d, b) {
    var c, f, e = -1, g, r, s, h, t, l, p, m, n, w;
    this._init = function(a, b, c) {
        w = c;
        c = {
            images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_1_1: [0],
                card_1_2: [1],
                card_1_3: [2],
                card_1_4: [3],
                card_1_5: [4],
                card_1_6: [5],
                card_1_7: [6],
                card_1_8: [7],
                card_1_9: [8],
                card_1_10: [9],
                card_1_J: [10],
                card_1_Q: [11],
                card_1_K: [12],
                card_2_1: [13],
                card_2_2: [14],
                card_2_3: [15],
                card_2_4: [16],
                card_2_5: [17],
                card_2_6: [18],
                card_2_7: [19],
                card_2_8: [20],
                card_2_9: [21],
                card_2_10: [22],
                card_2_J: [23],
                card_2_Q: [24],
                card_2_K: [25],
                card_3_1: [26],
                card_3_2: [27],
                card_3_3: [28],
                card_3_4: [29],
                card_3_5: [30],
                card_3_6: [31],
                card_3_7: [32],
                card_3_8: [33],
                card_3_9: [34],
                card_3_10: [35],
                card_3_J: [36],
                card_3_Q: [37],
                card_3_K: [38],
                card_4_1: [39],
                card_4_2: [40],
                card_4_3: [41],
                card_4_4: [42],
                card_4_5: [43],
                card_4_6: [44],
                card_4_7: [45],
                card_4_8: [46],
                card_4_9: [47],
                card_4_10: [48],
                card_4_J: [49],
                card_4_Q: [50],
                card_4_K: [51],
                back: [52]
            }
        };
        c = new createjs.SpriteSheet(c);
        n = new createjs.Sprite(c,"back");
        n.x = a;
        n.y = b;
        n.stop();
        w.addChild(n);
        p = [];
        m = []
    }
    ;
    this.unload = function() {
        l = t = null;
        w.removeChild(n)
    }
    ;
    this.addEventListener = function(a, b, c) {
        p[a] = b;
        m[a] = c
    }
    ;
    this.setInfo = function(a, b, d, w, p, m) {
        f = !1;
        h = 0;
        g = d;
        r = w;
        t = a;
        l = b;
        s = m;
        c = p;
        e = STATE_CARD_DEALING
    }
    ;
    this.removeFromTable = function() {
        p[ON_CARD_TO_REMOVE] && p[ON_CARD_TO_REMOVE].call(m[ON_CARD_TO_REMOVE], this)
    }
    ;
    this.initSplit = function(a) {
        t = new CVector2(n.x,n.y);
        l = a;
        h = 0;
        e = STATE_CARD_SPLIT
    }
    ;
    this.initRemoving = function(a) {
        t = new CVector2(n.x,n.y);
        l = a;
        h = 0;
        e = STATE_CARD_REMOVING
    }
    ;
    this.setValue = function() {
        n.gotoAndStop(g);
        var a = this;
        createjs.Tween.get(n).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardShown()
        })
    }
    ;
    this.showCard = function() {
        var a = this;
        createjs.Tween.get(n).to({
            scaleX: .1
        }, 100).call(function() {
            a.setValue()
        })
    }
    ;
    this.hideCard = function() {
        var a = this;
        createjs.Tween.get(n).to({
            scaleX: .1
        }, 100).call(function() {
            a.setBack()
        })
    }
    ;
    this.setBack = function() {
        n.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(n).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardHidden()
        })
    }
    ;
    this.cardShown = function() {
        p[ON_CARD_SHOWN] && p[ON_CARD_SHOWN].call(m[ON_CARD_SHOWN])
    }
    ;
    this.cardHidden = function() {
        f = !0
    }
    ;
    this.getValue = function() {
        return r
    }
    ;
    this.getFotogram = function() {
        return g
    }
    ;
    this._updateDealing = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_DEALING)
            e = -1,
            h = 0,
            n.x = l.getX(),
            n.y = l.getY(),
            n.rotation = 360,
            p[ON_CARD_ANIMATION_ENDING] && p[ON_CARD_ANIMATION_ENDING].call(m[ON_CARD_ANIMATION_ENDING], this, c, s),
            !1 === (c && 2 === s) && this.showCard();
        else {
            this.visible = !0;
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING)
              , b = new CVector2
              , b = tweenVectors(t, l, a, b);
            n.x = b.getX();
            n.y = b.getY();
            !1 === c && (n.rotation = 36E3 * a / 100)
        }
    }
    ;
    this._updateSplit = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_DEALING)
            h = 0,
            p[SPLIT_CARD_END_ANIM] && p[SPLIT_CARD_END_ANIM].call(m[SPLIT_CARD_END_ANIM]),
            e = -1;
        else {
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING)
              , b = new CVector2
              , b = tweenVectors(t, l, a, b);
            n.x = b.getX();
            n.y = b.getY()
        }
    }
    ;
    this._updateRemoving = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_REMOVE)
            h = 0,
            f = n.visible = !1,
            e = -1,
            p[ON_CARD_TO_REMOVE] && p[ON_CARD_TO_REMOVE].call(m[ON_CARD_TO_REMOVE], this);
        else {
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_REMOVE)
              , b = new CVector2
              , b = tweenVectors(t, l, a, b);
            n.x = b.getX();
            n.y = b.getY();
            n.rotation = 4500 * a / 100
        }
    }
    ;
    this.update = function() {
        switch (e) {
        case STATE_CARD_DEALING:
            this._updateDealing();
            break;
        case STATE_CARD_SPLIT:
            this._updateSplit();
            break;
        case STATE_CARD_REMOVING:
            !0 === f && this._updateRemoving()
        }
    }
    ;
    s_oCard = this;
    this._init(a, d, b)
}
var s_oCard;
function CSpriteLibrary() {
    var a, d, b, c, f, e;
    this.init = function(g, r, s) {
        b = d = 0;
        c = g;
        f = r;
        e = s;
        a = {}
    }
    ;
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        },
        d++)
    }
    ;
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    }
    ;
    this._onSpritesLoaded = function() {
        f.call(e)
    }
    ;
    this._onSpriteLoaded = function() {
        c.call(e);
        ++b === d && this._onSpritesLoaded()
    }
    ;
    this.loadSprites = function() {
        for (var b in a)
            a[b].oSprite.oSpriteLibrary = this,
            a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            }
            ,
            a[b].oSprite.src = a[b].szPath
    }
    ;
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1024, CANVAS_HEIGHT = 768, FPS_TIME = 1E3 / 24, DISABLE_SOUND_MOBILE = !0, STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, STATE_GAME_WAITING_FOR_BET = 0, STATE_GAME_DEALING = 1, STATE_GAME_HITTING = 2, STATE_GAME_SPLIT = 3, STATE_GAME_FINALIZE = 4, STATE_GAME_SHOW_WINNER = 5, STATE_CARD_DEALING = 0, STATE_CARD_SPLIT = 1, STATE_CARD_REMOVING = 2, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, SIT_DOWN = "SIT_DOWN", PASS_TURN = "PASS_TURN", PLAYER_LOSE = "PLAYER_LOSE", ASSIGN_FICHES = "ASSIGN_FICHES", FICHES_END_MOV = "FICHES_END_MOV", RESTORE_ACTION = "RESTORE_ACTION", END_HAND = "END_HAND", ON_CARD_SHOWN = "ON_CARD_SHOWN", ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING", SPLIT_CARD_END_ANIM = "SPLIT_CARD_END_ANIM", ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE", NUM_FICHES = 6, CARD_WIDTH = 44, CARD_HEIGHT = 63, MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, TIME_FICHES_MOV = 600, TIME_CARD_DEALING = 250, TIME_CARD_REMOVE = 1E3, TIME_SHOW_FINAL_CARDS = 4E3, TIME_END_HAND = 1500, BET_TIME = 1E4;
function CVector2(a, d) {
    var b, c;
    this._init = function(a, d) {
        b = a;
        c = d
    }
    ;
    this.add = function(a, d) {
        b += a;
        c += d
    }
    ;
    this.addV = function(a) {
        b += a.getX();
        c += a.getY()
    }
    ;
    this.scalarDivision = function(a) {
        b /= a;
        c /= a
    }
    ;
    this.subV = function(a) {
        b -= a.getX();
        c -= a.getY()
    }
    ;
    this.scalarProduct = function(a) {
        b *= a;
        c *= a
    }
    ;
    this.invert = function() {
        b *= -1;
        c *= -1
    }
    ;
    this.dotProduct = function(a) {
        return b * a.getX() + c * a.getY()
    }
    ;
    this.set = function(a, d) {
        b = a;
        c = d
    }
    ;
    this.setV = function(a) {
        b = a.getX();
        c = a.getY()
    }
    ;
    this.length = function() {
        return Math.sqrt(b * b + c * c)
    }
    ;
    this.length2 = function() {
        return b * b + c * c
    }
    ;
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a,
        c /= a)
    }
    ;
    this.getNormalize = function(a) {
        this.length();
        a.set(b, c);
        a.normalize()
    }
    ;
    this.rot90CCW = function() {
        var a = b;
        b = -c;
        c = a
    }
    ;
    this.rot90CW = function() {
        var a = b;
        b = c;
        c = -a
    }
    ;
    this.getRotCCW = function(a) {
        a.set(b, c);
        a.rot90CCW()
    }
    ;
    this.getRotCW = function(a) {
        a.set(b, c);
        a.rot90CW()
    }
    ;
    this.ceil = function() {
        b = Math.ceil(b);
        c = Math.ceil(c)
    }
    ;
    this.round = function() {
        b = Math.round(b);
        c = Math.round(c)
    }
    ;
    this.toString = function() {
        return "Vector2: " + b + ", " + c
    }
    ;
    this.print = function() {
        trace("Vector2: " + b + ", " + c + "")
    }
    ;
    this.getX = function() {
        return b
    }
    ;
    this.getY = function() {
        return c
    }
    ;
    this._init(a, d)
}
function CTweenController() {
    this.tweenValue = function(a, d, b) {
        return a + b * (d - a)
    }
    ;
    this.easeLinear = function(a, d, b, c) {
        return b * a / c + d
    }
    ;
    this.easeInCubic = function(a, d, b, c) {
        c = (a /= c) * a * a;
        return d + b * c
    }
    ;
    this.easeBackInQuart = function(a, d, b, c) {
        c = (a /= c) * a;
        return d + b * (2 * c * c + 2 * c * a + -3 * c)
    }
    ;
    this.easeInBack = function(a, d, b, c) {
        return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
    }
    ;
    this.easeOutCubic = function(a, d, b, c) {
        return b * ((a = a / c - 1) * a * a + 1) + d
    }
}
function CToggle(a, d, b) {
    var c, f, e;
    this._init = function(a, b, d) {
        c = [];
        f = [];
        d = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                on: [0, 1],
                off: [1, 2]
            }
        });
        e = s_bAudioActive ? new createjs.Sprite(d,"on") : new createjs.Sprite(d,"off");
        e.x = a;
        e.y = b;
        e.stop();
        s_oStage.addChild(e);
        this._initListener()
    }
    ;
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup", this.buttonRelease);
        s_oStage.removeChild(e)
    }
    ;
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, b, d) {
        c[a] = b;
        f[a] = d
    }
    ;
    this.buttonRelease = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but");
        e.scaleX = 1;
        e.scaleY = 1;
        (s_bAudioActive = !s_bAudioActive) ? e.gotoAndStop("on") : e.gotoAndStop("off");
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
    }
    ;
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    }
    ;
    this._init(a, d, b)
}
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}
)(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
$(window).ready(function() {
    sizeHandler()
});
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = CANVAS_WIDTH
          , d = CANVAS_HEIGHT
          , b = window.innerWidth;
        multiplier = Math.min(window.innerHeight / d, b / a);
        a *= multiplier;
        d *= multiplier;
        $("#canvas").css("width", a + "px");
        $("#canvas").css("height", d + "px");
        $("#canvas").css("left", b / 2 - a / 2 + "px")
    }
}
function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}
function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d; )
        c = Math.floor(Math.random() * d),
        d -= 1,
        b = a[d],
        a[d] = a[c],
        a[c] = b;
    return a
}
function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d).toFixed(1);
    var b = ""
      , b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return b = 10 > a ? b + ("0" + a) : b + a
}
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length)
        return a.sort();
    var d = Array.prototype.slice.call(arguments);
    return a.sort(function(a, c) {
        for (var f = d.slice(), e = f.shift(); a[e] == c[e] && f.length; )
            e = f.shift();
        return a[e] == c[e] ? 0 : a[e] > c[e] ? 1 : -1
    })
}
;
function roundDecimal(a, d) {
    var b = Math.pow(10, d);
    return Math.round(b * a) / b
}
function tweenVectors(a, d, b, c) {
    c.set(a.getX() + b * (d.getX() - a.getX()), a.getY() + b * (d.getY() - a.getY()));
    return c
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
        case "touchstart":
            this.onTouchStart(a);
            break;
        case "touchmove":
            this.onTouchMove(a);
            break;
        case "touchend":
            this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};
function CTextButton(a, d, b, c, f, e, g, r) {
    var s, h, t, l, p, m, n, w, q, v;
    this._init = function(a, b, c, d, e, f, g, E) {
        s = !1;
        l = [];
        p = [];
        v = E;
        n = new createjs.Bitmap(c);
        h = c.width;
        t = c.height;
        E = Math.ceil(g / 20);
        w = new createjs.Text(d,"bold " + g + "px " + e,"#000000");
        var r = w.getBounds();
        w.textAlign = "center";
        w.textBaseline = "alphabetic";
        w.x = c.width / 2 + E;
        w.y = Math.floor(c.height / 2) + r.height / 3 + E;
        q = new createjs.Text(d,"bold " + g + "px " + e,f);
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = c.width / 2;
        q.y = Math.floor(c.height / 2) + r.height / 3;
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        m.addChild(n, w, q);
        v.addChild(m);
        this._initListener()
    }
    ;
    this.unload = function() {
        m.off("mousedown");
        m.off("pressup");
        v.removeChild(m)
    }
    ;
    this.setVisible = function(a) {
        m.visible = a
    }
    ;
    this.enable = function() {
        s = !1;
        n.filters = [];
        n.cache(0, 0, h, t)
    }
    ;
    this.disable = function() {
        s = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        n.filters = [new createjs.ColorMatrixFilter(a)];
        n.cache(0, 0, h, t)
    }
    ;
    this._initListener = function() {
        oParent = this;
        m.on("mousedown", this.buttonDown);
        m.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        p[a] = c
    }
    ;
    this.buttonRelease = function() {
        s || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"),
        m.scaleX = 1,
        m.scaleY = 1,
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(p[ON_MOUSE_UP]))
    }
    ;
    this.buttonDown = function() {
        s || (m.scaleX = .9,
        m.scaleY = .9,
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]))
    }
    ;
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    }
    ;
    this.changeText = function(a) {
        q.text = a;
        w.text = a
    }
    ;
    this.setX = function(a) {
        m.x = a
    }
    ;
    this.setY = function(a) {
        m.y = a
    }
    ;
    this.getButtonImage = function() {
        return m
    }
    ;
    this.getX = function() {
        return m.x
    }
    ;
    this.getY = function() {
        return m.y
    }
    ;
    this._init(a, d, b, c, f, e, g, r);
    return this
}
function CSeat() {
    var a, d, b, c, f, e, g, r, s, h, t, l, p, m, n, w, q, v, x, B, C, D, z, y, A;
    this._init = function() {
        h = new createjs.Container;
        h.x = 396;
        h.y = 429;
        var a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("seat"));
        a.x = 66;
        a.y = 175;
        h.addChild(a);
        a = s_oSpriteLibrary.getSprite("but_game_small_bg");
        n = new CTextButton(115,221,a,TEXT_SIT_DOWN,"Arial","#ffffff",20,h);
        n.addEventListener(ON_MOUSE_UP, this._onSitDown, this);
        p = new createjs.Text("","bold 20px Arial","#ffde00");
        p.shadow = new createjs.Shadow("#000000",2,2,1);
        p.x = 84;
        p.y = 208;
        p.textAlign = "right";
        h.addChild(p);
        m = new createjs.Text("","bold 20px Arial","#ffde00");
        m.shadow = new createjs.Shadow("#000000",2,2,1);
        m.x = 175;
        m.y = 208;
        m.textAlign = "left";
        h.addChild(m);
        t = new createjs.Text("","bold 20px Arial","#ffffff");
        t.shadow = new createjs.Shadow("#000000",2,2,1);
        t.x = 56;
        t.y = 105;
        t.textAlign = "right";
        h.addChild(t);
        l = new createjs.Text("","bold 20px Arial","#ffffff");
        l.shadow = new createjs.Shadow("#000000",2,2,1);
        l.x = 138;
        l.y = 105;
        l.textAlign = "left";
        h.addChild(l);
        x = new createjs.Text("","bold 20px Arial","#ffffff");
        x.shadow = new createjs.Shadow("#000000",2,2,1);
        x.x = 0;
        x.y = 240;
        x.textAlign = "center";
        h.addChild(x);
        B = new createjs.Text("","bold 20px Arial","#ffffff");
        B.shadow = new createjs.Shadow("#000000",2,2,1);
        B.x = 150;
        B.y = 240;
        B.textAlign = "left";
        h.addChild(B);
        C = new createjs.Bitmap(s_oSpriteLibrary.getSprite("arrow_hand"));
        C.visible = !1;
        h.addChild(C);
        s_oStage.addChild(h);
        w = new CVector2;
        w.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        D = new CFichesController(w);
        f = 0;
        e = [];
        g = [];
        this.reset();
        q = new CVector2;
        q.set(64, 163);
        s = new CVector2(q.getX(),q.getY());
        v = new CVector2;
        v.set(172, 163);
        y = [];
        A = []
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(h)
    }
    ;
    this.addEventListener = function(a, b, c) {
        y[a] = b;
        A[a] = c
    }
    ;
    this.reset = function() {
        c = b = 0;
        d = a = !1;
        for (var f = 0; f < e.length; f++)
            e[f].getFichesController().reset();
        e = [];
        f = new CHandController(q,D);
        e.push(f);
        for (f = 0; f < g.length; f++)
            g[f].unload();
        g = [];
        r = [];
        D.addEventListener(FICHES_END_MOV, this._onFichesEndMove);
        z = null;
        this.clearText()
    }
    ;
    this.clearText = function() {
        p.text = "";
        m.text = "";
        t.text = "";
        l.text = ""
    }
    ;
    this.clearBet = function() {
        D.reset();
        r = [];
        p.text = "";
        e[b].changeBet(0)
    }
    ;
    this.addCardToHand = function(a) {
        e[b].addCard(a);
        g.push(a);
        a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard)
    }
    ;
    this.increaseHandValue = function(a) {
        e[b].increaseHandValue(a);
        this.refreshCardValue()
    }
    ;
    this.refreshCardValue = function() {
        t.text = "" + this.getHandValue(0);
        0 < this.getHandValue(1) && (l.text = "" + this.getHandValue(1))
    }
    ;
    this.setCredit = function(a) {
        f = a
    }
    ;
    this.increaseCredit = function(a) {
        f += a
    }
    ;
    this.changeBet = function(a) {
        e[b].changeBet(a)
    }
    ;
    this.checkHand = function() {
        var c = e[b].getValue();
        if (21 === c)
            this.checkPlayerLastHand(PASS_TURN);
        else if (21 < c)
            0 < e[b].getAces() ? (e[b].removeAce(),
            21 === e[b].getValue() ? this.checkPlayerLastHand(PASS_TURN) : a ? this.checkPlayerLastHand(PASS_TURN) : y[RESTORE_ACTION] && y[RESTORE_ACTION].call(A[RESTORE_ACTION], !1, !0, !0, !1, !1)) : 1 < e.length || d ? this.checkPlayerLastHand(PASS_TURN) : this.checkPlayerLastHand(PLAYER_LOSE);
        else if (a)
            this.checkPlayerLastHand(PASS_TURN);
        else {
            var f = !1;
            2 === e[b].getNumCards() && 8 < c && 16 > c ? f = !0 : 0 < this.getAces() && (21 < c ? (c -= 10,
            this.removeAce()) : c -= 10,
            8 < c && 16 > c && (f = !0));
            y[RESTORE_ACTION] && y[RESTORE_ACTION].call(A[RESTORE_ACTION], !1, !0, !0, f, !1)
        }
    }
    ;
    this.checkPlayerLastHand = function(a) {
        b--;
        -1 < b ? (y[RESTORE_ACTION] && y[RESTORE_ACTION].call(A[RESTORE_ACTION], !1, !0, !0, !1, !1),
        C.x = q.getX()) : (y[a] && y[a].call(A[a], 0),
        this.removeArrow())
    }
    ;
    this.bet = function(a, b) {
        b ? (p.text = "$" + a / 2,
        m.text = "$" + a / 2) : p.text = "$" + a
    }
    ;
    this.setSplitHand = function() {
        for (var a = [], c = 0; c < r.length; c++)
            a.push(r[c]);
        z = new CFichesController(w);
        z.refreshFiches(a, 0, 0, !1);
        z.addEventListener(z.FICHES_END_MOV, this._onFichesEndMove);
        a = new CHandController(v,z);
        e.push(a);
        e[1].addCard(e[0].getCard(1));
        e[0].removeCard(1);
        e[1].setHandValue(e[0].getValue());
        b = e.length - 1
    }
    ;
    this.decreaseCredit = function(a) {
        f -= a
    }
    ;
    this.stand = function() {
        this.checkPlayerLastHand(PASS_TURN)
    }
    ;
    this.refreshFiches = function(a, b, c, d) {
        r.push({
            value: a,
            index: b
        });
        D.refreshFiches(r, c, d)
    }
    ;
    this.initMovement = function(a, b, c) {
        this.getFichesController(a).initMovement(b, c, !1)
    }
    ;
    this.initInsuranceMov = function(a, b) {
        D.initInsuranceMov(a, b)
    }
    ;
    this.showWinner = function(a, b, c) {
        0 < c ? (0 === a ? x.text = b + ": " + c : B.text = b + ": " + c,
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("win")) : (0 === a ? x.text = b : B.text = b,
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("lose"));
        var d = this;
        0 === a ? createjs.Tween.get(x).to({
            alpha: 1
        }, TIME_SHOW_FINAL_CARDS).call(function() {
            d.endWinAnim()
        }) : createjs.Tween.get(B).to({
            alpha: 1
        }, TIME_SHOW_FINAL_CARDS).call(function() {
            d.endWinAnim()
        })
    }
    ;
    this.endWinAnim = function() {
        x && B && (x.text = "",
        B.text = "",
        y[END_HAND] && y[END_HAND].call(A[END_HAND]))
    }
    ;
    this.newCardDealed = function() {
        c++;
        return c
    }
    ;
    this.removeAce = function() {
        e[b].removeAce()
    }
    ;
    this.removeArrow = function() {
        C.visible = !1
    }
    ;
    this["double"] = function(a) {
        e[b].changeBet(a);
        a = [];
        for (var c = 0; c < r.length; c++)
            a.push(r[c]);
        1 < e.length ? 1 === b ? z.refreshFiches(a, 0, 40) : D.refreshFiches(a, 0, 40) : D.refreshFiches(a, 0, 40)
    }
    ;
    this.split = function() {
        g[0].initSplit(new CVector2(h.x + q.getX(),h.y + q.getY()));
        g[1].initSplit(new CVector2(h.x + v.getX(),h.y + v.getY()));
        g[1].addEventListener(SPLIT_CARD_END_ANIM, this._onSplitCardEndAnim)
    }
    ;
    this.insurance = function(a, b, c) {
        this.changeBet(a);
        this.increaseCredit(b);
        D.createFichesPile(c, !0);
        d = !0
    }
    ;
    this._onSitDown = function() {
        n.setVisible(!1);
        y[SIT_DOWN] && y[SIT_DOWN].call(A[SIT_DOWN])
    }
    ;
    this._onFichesEndMove = function() {
        y[ASSIGN_FICHES] && y[ASSIGN_FICHES].call(A[ASSIGN_FICHES])
    }
    ;
    this._onRemoveCard = function(a) {
        for (var b = 0; b < g.length; b++)
            if (g[b] === a) {
                g.splice(b, 1);
                break
            }
    }
    ;
    this._onSplitCardEndAnim = function() {
        s_oGame._onSplitCardEndAnim();
        C.x = v.getX();
        C.y = v.getY() + 70;
        C.visible = !0
    }
    ;
    this.updateFichesController = function(a) {
        z && z.update(a);
        D.update(a)
    }
    ;
    this.updateSplit = function() {
        for (var a = 0; a < g.length; a++)
            g[a].update(s_iTimeElaps)
    }
    ;
    this.isSplitAvailable = function() {
        return g[0] && g[1] ? g[0].getValue() === g[1].getValue() ? !0 : !1 : !1
    }
    ;
    this.getAttachCardOffset = function() {
        if (0 === b)
            s.set(h.x + q.getX() + CARD_WIDTH / 2 * e[b].getNumCards(), h.y + q.getY() - CARD_HEIGHT / 2 * e[b].getNumCards());
        else {
            var a = h.x + v.getX() + CARD_WIDTH / 2 * e[b].getNumCards()
              , c = h.y + v.getY() - CARD_HEIGHT / 2 * e[b].getNumCards();
            s.set(a, c)
        }
        return s
    }
    ;
    this.getCurBet = function() {
        return e[b].getCurBet()
    }
    ;
    this.getCredit = function() {
        return f
    }
    ;
    this.getHandValue = function(a) {
        return a > e.length - 1 ? 0 : e[a].getValue()
    }
    ;
    this.getNumHands = function() {
        return e.length
    }
    ;
    this.getBetForHand = function(a) {
        return e[a].getCurBet()
    }
    ;
    this.getAces = function() {
        return e[b].getAces()
    }
    ;
    this.getFichesController = function(a) {
        return e[a].getFichesController()
    }
    ;
    this.getCardOffset = function() {
        return q
    }
    ;
    this.getPlayerCards = function() {
        return g
    }
    ;
    this.getStartingBet = function() {
        return D.getValue()
    }
    ;
    this._init()
}
function CPreloader() {
    var a;
    this._init = function() {
        this._onAllPreloaderImagesLoaded()
    }
    ;
    this._onPreloaderImagesLoaded = function() {}
    ;
    this._onAllPreloaderImagesLoaded = function() {
        a = new createjs.Text("","bold 22px Arial center","#ffffff");
        a.x = CANVAS_WIDTH / 2 - 40;
        a.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(a)
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(a)
    }
    ;
    this.refreshLoader = function(d) {
        a.text = d + "%"
    }
    ;
    this._init()
}
function CMenu() {
    var a, d, b, c;
    this._init = function() {
        a = new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(a);
        var f = s_oSpriteLibrary.getSprite("but_menu_bg");
        d = new CTextButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT - 164,f,TEXT_PLAY,"Arial","#ffffff",40,s_oStage);
        d.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            f = s_oSpriteLibrary.getSprite("audio_icon"),
            b = new CToggle(CANVAS_WIDTH - f.width / 2 + 20,f.height / 2 + 20,f),
            b.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(c);
        createjs.Tween.get(c).to({
            alpha: 0
        }, 1E3).call(function() {
            c.visible = !1
        })
    }
    ;
    this.unload = function() {
        d.unload();
        d = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            b.unload(),
            b = null;
        s_oStage.removeChild(a);
        a = null;
        s_oStage.removeChild(c);
        c = null
    }
    ;
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame()
    }
    ;
    this._onAudioToggle = function() {
        createjs.Sound.setMute(!s_bAudioActive)
    }
    ;
    this._init()
}
function CMain(a) {
    var d = 0, b = 0, c = STATE_LOADING, f, e, g;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader;
        this._loadImages();
        s_oGameSettings = new CGameSettings
    }
    ;
    this.soundLoaded = function() {
        d++;
        d === b && (e.unload(),
        this.gotoMenu())
    }
    ;
    this._initSounds = function() {
        createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"],
        createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)),
        createjs.Sound.registerSound("./sounds/card.ogg", "card"),
        createjs.Sound.registerSound("./sounds/chip.ogg", "chip"),
        createjs.Sound.registerSound("./sounds/fiche_collect.ogg", "fiche_collect"),
        createjs.Sound.registerSound("./sounds/press_but.ogg", "press_but"),
        createjs.Sound.registerSound("./sounds/win.ogg", "win"),
        createjs.Sound.registerSound("./sounds/lose.ogg", "lose")) : (createjs.Sound.alternateExtensions = ["ogg"],
        createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)),
        createjs.Sound.registerSound("./sounds/card.mp3", "card", 4),
        createjs.Sound.registerSound("./sounds/chip.mp3", "chip", 4),
        createjs.Sound.registerSound("./sounds/fiche_collect.mp3", "fiche_collect"),
        createjs.Sound.registerSound("./sounds/press_but.mp3", "press_but"),
        createjs.Sound.registerSound("./sounds/win.mp3", "win"),
        createjs.Sound.registerSound("./sounds/lose.mp3", "lose")),
        b += 6)
    }
    ;
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_menu_bg", "./sprites/but_menu_bg.png");
        s_oSpriteLibrary.addSprite("but_game_bg", "./sprites/but_game_bg.png");
        s_oSpriteLibrary.addSprite("but_game_small_bg", "./sprites/but_game_small_bg.png");
        s_oSpriteLibrary.addSprite("but_game_very_small_bg", "./sprites/but_game_very_small_bg.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game_1", "./sprites/bg_game_1.jpg");
        s_oSpriteLibrary.addSprite("bg_game_2", "./sprites/bg_game_2.jpg");
        s_oSpriteLibrary.addSprite("bg_game_3", "./sprites/bg_game_3.jpg");
        s_oSpriteLibrary.addSprite("bg_game_4", "./sprites/bg_game_4.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("seat", "./sprites/seat.png");
        s_oSpriteLibrary.addSprite("card_spritesheet", "./sprites/card_spritesheet.png");
        s_oSpriteLibrary.addSprite("arrow_hand", "./sprites/arrow_hand.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        for (var a = 0; a < NUM_FICHES; a++)
            s_oSpriteLibrary.addSprite("fiche_" + a, "./sprites/fiche_" + a + ".png");
        b += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    }
    ;
    this._onImagesLoaded = function() {
        d++;
        e.refreshLoader(Math.floor(d / b * 100));
        d === b && (e.unload(),
        this.gotoMenu())
    }
    ;
    this._onAllImagesLoaded = function() {}
    ;
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    }
    ;
    this.gotoMenu = function() {
        new CMenu;
        c = STATE_MENU
    }
    ;
    this.gotoGame = function() {
        g = new CGame(f);
        c = STATE_GAME;
        $(s_oMain).trigger("game_start")
    }
    ;
    this.gotoHelp = function() {
        new CHelp;
        c = STATE_HELP
    }
    ;
    this._update = function(a) {
        var b = (new Date).getTime();
        s_iTimeElaps = b - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = b;
        1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps,
        s_iCntTime -= 1E3,
        s_iCntFps = 0);
        c === STATE_GAME && g.update();
        s_oStage.update(a)
    }
    ;
    s_oMain = this;
    f = a;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings;
TEXT_GAMEOVER = "GAME OVER";
TEXT_PLAY = "PLAY";
TEXT_SIT_DOWN = "SIT DOWN";
TEXT_MONEY = "MONEY";
TEXT_CLEAR = "CLEAR";
TEXT_REBET = "REBET";
TEXT_DEAL = "DEAL";
TEXT_HIT = "HIT";
TEXT_STAND = "STAND";
TEXT_DOUBLE = "DOUBLE";
TEXT_SPLIT = "SPLIT";
TEXT_MIN_BET = "MIN BET";
TEXT_MAX_BET = "MAX BET";
TEXT_NO = "NO";
TEXT_YES = "YES";
TEXT_DISPLAY_MSG_WAITING_BET = "WAITING FOR YOUR BET";
TEXT_DISPLAY_MSG_SIT_DOWN = "PLEASE SIT DOWN\nTO START PLAYING";
TEXT_DISPLAY_MSG_YOUR_ACTION = "WAITING FOR PLAYER\nACTION";
TEXT_DISPLAY_MSG_DEALER_TURN = "DEALER TURN";
TEXT_DISPLAY_MSG_PLAYER_LOSE = "HAND WON BY DEALER ";
TEXT_DISPLAY_MSG_PLAYER_WIN = "HAND WON BY PLAYER ";
TEXT_DISPLAY_MSG_PLAYER_STANDOFF = "STANDOFF";
TEXT_DISPLAY_MSG_DEALING = "DEALING...";
TEXT_SHOW_WIN_PLAYER = "YOU WIN ";
TEXT_SHOW_LOSE_PLAYER = "YOU LOSE ";
TEXT_SHOW_STANDOFF = "STANDOFF";
TEXT_INSURANCE = "Do you want\nInsurance?";
function CInterface(a) {
    var d, b, c, f, e, g, r, s, h, t, l, p, m, n;
    this._init = function(a) {
        var q = s_oSpriteLibrary.getSprite("but_game_very_small_bg");
        c = new CTextButton(350,CANVAS_HEIGHT - 20,q,TEXT_CLEAR,"Arial","#ffffff",14,s_oStage);
        c.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
        q = s_oSpriteLibrary.getSprite("but_exit");
        b = new CGfxButton(CANVAS_WIDTH - q.width / 2 - 15,q.height / 2 + 15,q,s_oStage);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            h = new CToggle(b.getX() - q.width,q.height / 2 + 15,s_oSpriteLibrary.getSprite("audio_icon")),
            h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        t = new createjs.Text("$" + a.toFixed(2),"bold 29px Digital-7","#ffde00");
        t.x = 80;
        t.y = CANVAS_HEIGHT - 38;
        t.textAlign = "center";
        s_oStage.addChild(t);
        p = new createjs.Text("","bold 24px Digital-7","#ffde00");
        p.x = 145;
        p.y = 20;
        p.textAlign = "center";
        p.lineHeight = 20;
        s_oStage.addChild(p);
        m = new createjs.Text("","bold 18px Digital-7","#ffde00");
        m.x = 150;
        m.y = 70;
        m.textAlign = "center";
        m.lineHeight = 20;
        s_oStage.addChild(m);
        l = new createjs.Text("","bold 20px Arial","#fff");
        l.shadow = new createjs.Shadow("#000000",2,2,1);
        l.x = 420;
        l.y = 180;
        l.textAlign = "right";
        s_oStage.addChild(l);
        q = s_oSpriteLibrary.getSprite("but_game_bg");
        f = new CTextButton(570,CANVAS_HEIGHT - 30,q,TEXT_DEAL,"Arial","#ffffff",20,s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
        e = new CTextButton(670,CANVAS_HEIGHT - 30,q,TEXT_HIT,"Arial","#ffffff",20,s_oStage);
        e.addEventListener(ON_MOUSE_UP, this._onButHitRelease, this);
        g = new CTextButton(770,CANVAS_HEIGHT - 30,q,TEXT_STAND,"Arial","#ffffff",20,s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onButStandRelease, this);
        r = new CTextButton(870,CANVAS_HEIGHT - 30,q,TEXT_DOUBLE,"Arial","#ffffff",20,s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onButDoubleRelease, this);
        s = new CTextButton(970,CANVAS_HEIGHT - 30,q,TEXT_SPLIT,"Arial","#ffffff",20,s_oStage);
        s.addEventListener(ON_MOUSE_UP, this._onButSplitRelease, this);
        a = [{
            x: 39,
            y: 647
        }, {
            x: 84,
            y: 672
        }, {
            x: 129,
            y: 697
        }, {
            x: 174,
            y: 717
        }, {
            x: 219,
            y: 732
        }, {
            x: 264,
            y: 747
        }];
        d = [];
        for (var v = 0; v < NUM_FICHES; v++) {
            var x = s_oGameSettings.getFichesValues()
              , q = s_oSpriteLibrary.getSprite("fiche_" + v);
            d[v] = new CGfxButton(a[v].x,a[v].y,q,s_oStage);
            d[v].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [x[v], v])
        }
        n = new CInsurancePanel;
        FICHE_WIDTH = q.width;
        this.disableButtons()
    }
    ;
    this.unload = function() {
        b.unload();
        b = null;
        !1 === DISABLE_SOUND_MOBILE && (h.unload(),
        h = null);
        s_oStage.removeChild(t)
    }
    ;
    this.reset = function() {
        this.disableButtons()
    }
    ;
    this.enableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++)
            d[a].enable();
        c.enable()
    }
    ;
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++)
            d[a].disable();
        c.disable()
    }
    ;
    this.disableButtons = function() {
        f.disable();
        e.disable();
        g.disable();
        r.disable();
        s.disable()
    }
    ;
    this.enable = function(a, b, c, d, h) {
        a ? f.enable() : f.disable();
        b ? e.enable() : e.disable();
        c ? g.enable() : g.disable();
        d ? r.enable() : r.disable();
        h ? s.enable() : s.disable()
    }
    ;
    this.refreshCredit = function(a) {
        t.text = "$" + a.toFixed(2)
    }
    ;
    this.refreshDealerCardValue = function(a) {
        l.text = "" + a
    }
    ;
    this.displayMsg = function(a, b) {
        p.text = a;
        m.text = b
    }
    ;
    this.showInsurancePanel = function() {
        n.show(TEXT_INSURANCE)
    }
    ;
    this.clearDealerText = function() {
        l.text = ""
    }
    ;
    this.gameOver = function() {}
    ;
    this._onFicheClicked = function(a) {
        s_oGame.onFicheSelected(a[1], a[0])
    }
    ;
    this._onButClearRelease = function() {
        s_oGame.clearBets()
    }
    ;
    this._onButDealRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onDeal()
    }
    ;
    this._onButHitRelease = function() {
        this.disableButtons();
        s_oGame.onHit()
    }
    ;
    this._onButStandRelease = function() {
        this.disableButtons();
        s_oGame.onStand()
    }
    ;
    this._onButDoubleRelease = function() {
        this.disableButtons();
        s_oGame.onDouble()
    }
    ;
    this._onButSplitRelease = function() {
        this.disableButtons();
        s_oGame.onSplit()
    }
    ;
    this._onExit = function() {
        s_oGame.onExit()
    }
    ;
    this._onAudioToggle = function() {
        createjs.Sound.setMute(!s_bAudioActive)
    }
    ;
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface;
function CInsurancePanel() {
    var a, d, b, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        c.visible = !1;
        var f = new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.addChild(f);
        b = new createjs.Text("","bold 50px Arial","#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = 300;
        b.textAlign = "center";
        c.addChild(b);
        f = s_oSpriteLibrary.getSprite("but_game_small_bg");
        a = new CTextButton(CANVAS_WIDTH / 2 - 100,CANVAS_HEIGHT - 300,f,TEXT_NO,"Arial","#ffffff",20,c);
        a.addEventListener(ON_MOUSE_UP, this._onButNoRelease, this);
        d = new CTextButton(CANVAS_WIDTH / 2 + 100,CANVAS_HEIGHT - 300,f,TEXT_YES,"Arial","#ffffff",20,c);
        d.addEventListener(ON_MOUSE_UP, this._onButYesRelease, this)
    }
    ;
    this.unload = function() {
        s_oStage.removeChild(c)
    }
    ;
    this.show = function(a) {
        b.text = a;
        c.visible = !0
    }
    ;
    this._onButNoRelease = function() {
        c.visible = !1
    }
    ;
    this._onButYesRelease = function() {
        c.visible = !1;
        s_oGame.onBuyInsurance()
    }
    ;
    this._init()
}
function CHandController(a, d) {
    var b, c, f, e, g, r;
    this._init = function(a, d) {
        f = c = b = 0;
        e = [];
        g = a;
        r = d
    }
    ;
    this.addCard = function(a) {
        e.push(a);
        11 === a.getValue() && c++
    }
    ;
    this.removeCard = function(a) {
        var d = e[a];
        b -= d.getValue();
        11 === d.getValue() && c--;
        e.splice(a, 1)
    }
    ;
    this.changeBet = function(a) {
        f = a
    }
    ;
    this.removeAce = function() {
        b -= 10;
        c--
    }
    ;
    this.setHandValue = function(a) {
        b = a
    }
    ;
    this.increaseHandValue = function(a) {
        b += a
    }
    ;
    this.getValue = function() {
        return b
    }
    ;
    this.getCurBet = function() {
        return f
    }
    ;
    this.getDoubleBet = function() {
        return f
    }
    ;
    this.getAces = function() {
        return c
    }
    ;
    this.getCard = function(a) {
        return e[a]
    }
    ;
    this.getNumCards = function() {
        return e.length
    }
    ;
    this.getAttachOffset = function() {
        return g
    }
    ;
    this.getFichesController = function() {
        return r
    }
    ;
    this._init(a, d)
}
function CGfxButton(a, d, b) {
    var c, f, e, g, r, s = [], h;
    this._init = function(a, b, d) {
        c = !1;
        g = [];
        r = [];
        f = d.width;
        e = d.height;
        h = new createjs.Bitmap(d);
        h.x = a;
        h.y = b;
        h.regX = d.width / 2;
        h.regY = d.height / 2;
        s_oStage.addChild(h);
        this._initListener()
    }
    ;
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        s_oStage.removeChild(h)
    }
    ;
    this.setVisible = function(a) {
        h.visible = a
    }
    ;
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    }
    ;
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        r[a] = c
    }
    ;
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        r[a] = c;
        s = d
    }
    ;
    this.buttonRelease = function() {
        c || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("press_but"),
        h.scaleX = 1,
        h.scaleY = 1,
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(r[ON_MOUSE_UP], s))
    }
    ;
    this.buttonDown = function() {
        c || (h.scaleX = .9,
        h.scaleY = .9,
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN], s))
    }
    ;
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    }
    ;
    this.setX = function(a) {
        h.x = a
    }
    ;
    this.setY = function(a) {
        h.y = a
    }
    ;
    this.enable = function() {
        c = !1;
        h.filters = [];
        h.cache(0, 0, f, e)
    }
    ;
    this.disable = function() {
        c = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        h.filters = [new createjs.ColorMatrixFilter(a)];
        h.cache(0, 0, f, e)
    }
    ;
    this.getButtonImage = function() {
        return h
    }
    ;
    this.getX = function() {
        return h.x
    }
    ;
    this.getY = function() {
        return h.y
    }
    ;
    this._init(a, d, b);
    return this
}
function CGameSettings() {
    var a, d, b, c;
    this._init = function() {
        b = [];
        a = [];
        for (var d = 0; 2 > d; d++)
            for (var e = 0; 52 > e; e++) {
                a.push(e);
                var g = (e + 1) % 13;
                if (10 < g || 0 === g)
                    g = 10;
                1 === g && (g = 11);
                b.push(g)
            }
        c = [.1, 1, 5, 10, 25, 100]
    }
    ;
    this.getFichesValues = function() {
        return c
    }
    ;
    this.getFichesValueAt = function(a) {
        return c[a]
    }
    ;
    this.getIndexForFiches = function(a) {
        for (var b = 0, d = 0; d < c.length; d++)
            c[d] === a && (b = d);
        return b
    }
    ;
    this.generateFichesPile = function(a) {
        var b = [], d, r = c.length - 1, s = c[r];
        do {
            d = a % s;
            d = CMath.roundDecimal(d, 1);
            a = Math.floor(a / s);
            for (var h = 0; h < a; h++)
                b.push(s);
            r--;
            s = c[r];
            a = d
        } while (0 < d && -1 < r);return b
    }
    ;
    this.timeToString = function(a) {
        a = Math.round(a / 1E3);
        var b = Math.floor(a / 60);
        a -= 60 * b;
        var c = ""
          , c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
        return 10 > a ? c + ("0" + a) : c + a
    }
    ;
    this.getShuffledCardDeck = function() {
        for (var b = [], c = 0; c < a.length; c++)
            b[c] = a[c];
        for (d = []; 0 < b.length; )
            d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
        return d
    }
    ;
    this.getCardValue = function(a) {
        return b[a]
    }
    ;
    this._init()
}
function CGameOver() {
    var a, d;
    this._init = function() {
        d = new createjs.Container;
        d.alpha = 0;
        d.visible = !1;
        var b = new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"))
          , c = s_oSpriteLibrary.getSprite("but_game_small_bg");
        (new CGfxButton(CANVAS_WIDTH / 2,CANVAS_HEIGHT - 164,c,d)).addEventListener(ON_MOUSE_UP, this._onButExitRelease, this);
        a = new createjs.Text("","bold 20px Arial","#ffffff");
        a.x = CANVAS_WIDTH - 89;
        a.y = CANVAS_HEIGHT - 25;
        a.textAlign = "center";
        d.addChild(a);
        d.addChild(b);
        s_oStage.addChild(d)
    }
    ;
    this.unload = function() {
        d.removeChild(oBg)
    }
    ;
    this.show = function() {
        d.visible = !0
    }
    ;
    this._onButExitRelease = function() {
        d.visible = !1
    }
    ;
    this._init()
}
function CGame(a) {
    var d = !1, b, c, f, e, g, r, s, h, t, l, p, m, n, w, q, v, x, B, C, D, z, y, A, E, G, F, H, u, k;
    this._init = function() {
        s = TOTAL_MONEY;
        g = MAX_BET;
        r = MIN_BET;
        h = -1;
        e = 0;
        s_oTweenController = new CTweenController;
        var a = Math.floor(4 * Math.random()) + 1;
        H = new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game_" + a));
        s_oStage.addChild(H);
        k = new CSeat;
        k.setCredit(TOTAL_MONEY);
        k.addEventListener(SIT_DOWN, this._onSitDown, this);
        k.addEventListener(RESTORE_ACTION, this._onSetPlayerActions);
        k.addEventListener(PASS_TURN, this._passTurnToDealer);
        k.addEventListener(END_HAND, this._onEndHand);
        k.addEventListener(PLAYER_LOSE, this._playerLose);
        F = new createjs.Container;
        F.x = 0;
        F.y = 0;
        s_oStage.addChild(F);
        u = new CInterface(s);
        u.displayMsg(TEXT_DISPLAY_MSG_SIT_DOWN);
        this.reset();
        z = new CVector2;
        z.set(876, 228);
        y = new CVector2;
        y.set(450, 180);
        A = new CVector2;
        A.set(80, 820);
        E = new CVector2;
        E.set(CANVAS_WIDTH / 2, -100);
        G = new CVector2(116,216);
        D = [k.getCardOffset(), y];
        u.disableBetFiches();
        d = !0
    }
    ;
    this.unload = function() {
        createjs.Sound.stop();
        for (var a = 0; a < q.length; a++)
            q[a].unload();
        for (var a = k.getPlayerCards(), b = 0; b < a.length; b++)
            a[b].unload();
        s_oStage.removeAllChildren();
        u.unload()
    }
    ;
    this.reset = function() {
        b = !0;
        c = !1;
        m = p = l = t = e = f = 0;
        k.reset();
        q = [];
        q.splice(0);
        x = [];
        x.splice(0);
        u.reset();
        u.enableBetFiches();
        B = [];
        B = s_oGameSettings.getShuffledCardDeck();
        C = [];
        v = [];
        for (var a = 0; a < B.length; a++)
            0 === a % 2 ? C.push(B[a]) : v.push(B[a]);
        w = n = 0
    }
    ;
    this.changeState = function(a) {
        h = a;
        switch (h) {
        case STATE_GAME_DEALING:
            u.disableButtons(),
            u.displayMsg(TEXT_DISPLAY_MSG_DEALING),
            this._dealing()
        }
    }
    ;
    this.attachCardToDeal = function(a, b, c, d) {
        var e = new CCard(z.getX(),z.getY(),F);
        c ? (e.setInfo(a, b, v[w], s_oGameSettings.getCardValue(v[w]), c, d),
        w++) : (e.setInfo(a, b, C[n], s_oGameSettings.getCardValue(C[n]), c, d),
        n++);
        e.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
        q.push(e);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("card")
    }
    ;
    this.cardFromDealerArrived = function(a, b, d) {
        for (var e = 0; e < q.length; e++)
            if (q[e] === a) {
                q.splice(e, 1);
                break
            }
        !1 === b ? (k.addCardToHand(a),
        k.increaseHandValue(a.getValue()),
        k.refreshCardValue()) : (l += a.getValue(),
        2 < p && u.refreshDealerCardValue(l),
        11 === a.getValue() && m++,
        x.push(a));
        3 > d ? s_oGame._dealing() : (s_oGame._checkHand(),
        !1 === b && c && s_oGame._onStandPlayer())
    }
    ;
    this._onStandPlayer = function() {
        k.stand()
    }
    ;
    this._checkHand = function() {
        var a;
        if (b)
            k.checkHand();
        else if (u.refreshDealerCardValue(l),
        21 === l)
            for (0 < f && (k.increaseCredit(2 * f),
            u.refreshCredit(k.getCredit())),
            a = 0; a < k.getNumHands(); a++)
                this._playerLose(a);
        else
            21 < l ? 0 < m ? (m--,
            l -= 10,
            u.refreshDealerCardValue(l),
            17 > l ? this.hitDealer() : this._checkWinner()) : this._checkWinner() : 17 > l ? this.hitDealer() : this._checkWinner()
    }
    ;
    this._playerWin = function(a) {
        var b = 2 * k.getBetForHand(a);
        k.increaseCredit(b);
        k.showWinner(a, TEXT_SHOW_WIN_PLAYER, b);
        u.displayMsg(TEXT_DISPLAY_MSG_PLAYER_WIN);
        k.initMovement(a, A.getX(), A.getY());
        21 === l ? k.initInsuranceMov(A.getX(), A.getY()) : k.initInsuranceMov(E.getX(), E.getY())
    }
    ;
    this._playerLose = function(a) {
        k.showWinner(a, TEXT_SHOW_LOSE_PLAYER, 0);
        u.displayMsg(TEXT_DISPLAY_MSG_PLAYER_LOSE);
        k.initMovement(a, E.getX(), E.getY());
        21 === l ? k.initInsuranceMov(A.getX(), A.getY()) : k.initInsuranceMov(E.getX(), E.getY())
    }
    ;
    this.playerStandOff = function(a) {
        k.increaseCredit(k.getBetForHand(a));
        k.showWinner(a, TEXT_SHOW_STANDOFF, 0);
        u.displayMsg(TEXT_DISPLAY_MSG_PLAYER_STANDOFF);
        k.initMovement(a, A.getX(), A.getY());
        21 === l ? k.initInsuranceMov(A.getX(), A.getY()) : k.initInsuranceMov(E.getX(), E.getY())
    }
    ;
    this._dealing = function() {
        if (t < 2 * D.length) {
            var a = new CCard(z.getX(),z.getY(),F), b = new CVector2(z.getX(),z.getY()), c;
            1 === t % D.length ? (p++,
            c = new CVector2(y.getX() + (CARD_WIDTH + 2) * (1 < t ? 1 : 0),y.getY()),
            a.setInfo(b, c, v[w], s_oGameSettings.getCardValue(v[w]), !0, p),
            w++,
            2 === p && a.addEventListener(ON_CARD_SHOWN, this._onCardShown)) : (a.setInfo(b, k.getAttachCardOffset(), C[n], s_oGameSettings.getCardValue(C[n]), !1, k.newCardDealed()),
            n++);
            q.push(a);
            t++;
            a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
            a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("card")
        } else
            this._checkAvailableActionForPlayer()
    }
    ;
    this.hitDealer = function() {
        var a = new CVector2(z.getX(),z.getY())
          , b = new CVector2(y.getX() + (CARD_WIDTH + 3) * p,y.getY());
        p++;
        this.attachCardToDeal(a, b, !0, p);
        this.changeState(STATE_GAME_HITTING);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("card")
    }
    ;
    this._checkWinner = function() {
        for (var a = 0; a < k.getNumHands(); a++)
            21 < k.getHandValue(a) ? this._playerLose(a) : 21 < l ? this._playerWin(a) : 22 > k.getHandValue(a) && k.getHandValue(a) > l ? this._playerWin(a) : k.getHandValue(a) === l ? this.playerStandOff(a) : this._playerLose(a)
    }
    ;
    this._onEndHand = function() {
        for (var a = new CVector2(G.getX(),G.getY()), b = 0; b < x.length; b++)
            x[b].initRemoving(a),
            x[b].hideCard();
        for (var b = k.getPlayerCards(), c = 0; c < b.length; c++)
            b[c].initRemoving(a),
            b[c].hideCard();
        k.clearText();
        u.clearDealerText();
        e = 0;
        s_oGame.changeState(STATE_GAME_SHOW_WINNER);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("fiche_collect");
        $(s_oMain).trigger("end_hand", [k.getCredit()])
    }
    ;
    this.ficheSelected = function(a, b) {
        var c = k.getCurBet();
        c + a <= g && a <= k.getCredit() && (c = Number((c + a).toFixed(1)),
        k.decreaseCredit(a),
        k.changeBet(c),
        k.refreshFiches(a, b, 0, 0),
        k.bet(c, !1),
        u.enable(!0, !1, !1, !1, !1),
        u.refreshCredit(k.getCredit()))
    }
    ;
    this._checkAvailableActionForPlayer = function() {
        this.changeState(-1);
        if (21 === k.getHandValue(0))
            this._passTurnToDealer();
        else {
            var a = !1;
            k.isSplitAvailable() && s >= 2 * k.getCurBet() && (a = !0);
            u.displayMsg(TEXT_DISPLAY_MSG_YOUR_ACTION);
            var b = !1;
            8 < k.getHandValue(0) && 16 > k.getHandValue(0) && s >= 2 * k.getCurBet() && (b = !0);
            u.enable(!1, !0, !0, b, a);
            11 === x[0].getValue() && (f = Math.floor(k.getCurBet() / 2),
            u.showInsurancePanel())
        }
    }
    ;
    this._passTurnToDealer = function() {
        b = !1;
        u.disableButtons();
        x[1].showCard();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("card");
        u.displayMsg(TEXT_DISPLAY_MSG_DEALER_TURN);
        k.refreshCardValue()
    }
    ;
    this._gameOver = function() {
        u.gameOver()
    }
    ;
    this.onFicheSelected = function(a, b) {
        this.ficheSelected(b, a)
    }
    ;
    this._onSetPlayerActions = function(a, b, c, d, e) {
        u.enable(a, b, c, d, e);
        k.refreshCardValue()
    }
    ;
    this._onSitDown = function() {
        this.changeState(STATE_GAME_WAITING_FOR_BET);
        u.enableBetFiches()
    }
    ;
    this.onDeal = function() {
        this.changeState(STATE_GAME_DEALING)
    }
    ;
    this.onHit = function() {
        var a = new CVector2(z.getX(),z.getY())
          , b = new CVector2(k.getAttachCardOffset().getX(),k.getAttachCardOffset().getY());
        this.attachCardToDeal(a, b, !1, k.newCardDealed());
        this.changeState(STATE_GAME_HITTING)
    }
    ;
    this.onStand = function() {
        k.stand()
    }
    ;
    this.onDouble = function() {
        var a = k.getCurBet(), b;
        b = a + a;
        k["double"](b);
        k.changeBet(b);
        k.decreaseCredit(a);
        k.bet(b);
        u.refreshCredit(k.getCredit());
        this.onHit();
        c = !0
    }
    ;
    this.onSplit = function() {
        k.split();
        this.changeState(STATE_GAME_SPLIT)
    }
    ;
    this._onSplitCardEndAnim = function() {
        var a = k.getCurBet()
          , b = a
          , a = a + b;
        k.bet(a, !0);
        u.enable(!1, !0, !0, !1, !1);
        k.setSplitHand();
        k.refreshCardValue();
        k.changeBet(a - b);
        k.decreaseCredit(b);
        u.refreshCredit(k.getCredit())
    }
    ;
    this.clearBets = function() {
        var a = k.getStartingBet();
        0 < a && (k.clearBet(),
        k.increaseCredit(a),
        u.refreshCredit(k.getCredit()))
    }
    ;
    this.onBuyInsurance = function() {
        var a = k.getCurBet()
          , a = a + f;
        k.insurance(a, -f, f);
        u.refreshCredit(k.getCredit())
    }
    ;
    this._onCardShown = function() {
        s_oGame._checkHand()
    }
    ;
    this._onRemoveCard = function(a) {
        a.unload()
    }
    ;
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("restart")
    }
    ;
    this.getState = function() {
        return h
    }
    ;
    this._updateWaitingBet = function() {
        e += s_iTimeElaps;
        e > BET_TIME ? (e = 0,
        0 === k.getCurBet() && this.ficheSelected(s_oGameSettings.getFichesValueAt(0), s_oGameSettings.getIndexForFiches(s_oGameSettings.getFichesValueAt(0))),
        u.disableBetFiches(),
        u.enable(!0, !1, !1, !1, !1),
        this.changeState(STATE_GAME_DEALING)) : u.displayMsg(TEXT_MIN_BET + ":" + r + "\n" + TEXT_MAX_BET + ":" + g, TEXT_DISPLAY_MSG_WAITING_BET + " " + Math.floor((BET_TIME - e) / 1E3))
    }
    ;
    this._updateDealing = function() {
        for (var a = 0; a < q.length; a++)
            q[a].update()
    }
    ;
    this._updateHitting = function() {
        for (var a = 0; a < q.length; a++)
            q[a].update()
    }
    ;
    this._updateSplit = function() {
        k.updateSplit()
    }
    ;
    this._updateShowWinner = function() {
        k.updateFichesController(s_iTimeElaps);
        for (var a = k.getPlayerCards(), b = 0; b < a.length; b++)
            a[b].update();
        for (a = 0; a < x.length; a++)
            x[a].update();
        e += s_iTimeElaps;
        e > TIME_END_HAND && (e = 0,
        this.reset(),
        u.reset(),
        k.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(),
        this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET),
        u.refreshCredit(k.getCredit()))
    }
    ;
    this.update = function() {
        if (!1 !== d)
            switch (h) {
            case STATE_GAME_WAITING_FOR_BET:
                this._updateWaitingBet();
                break;
            case STATE_GAME_DEALING:
                this._updateDealing();
                break;
            case STATE_GAME_HITTING:
                this._updateHitting();
                break;
            case STATE_GAME_SPLIT:
                this._updateSplit();
                break;
            case STATE_GAME_SHOW_WINNER:
                this._updateShowWinner()
            }
    }
    ;
    s_oGame = this;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    BET_TIME = a.bet_time;
    this._init()
}
var s_oGame, s_oTweenController;
function CFichesController(a) {
    var d, b, c, f, e, g, r, s, h, t, l, p, m, n;
    this._init = function(a) {
        l = new createjs.Container;
        l.x = 496;
        l.y = 633;
        s_oStage.addChild(l);
        p = new createjs.Container;
        p.x = 400;
        p.y = 230;
        s_oStage.addChild(p);
        g = new CVector2;
        g.set(l.x, l.y);
        h = new CVector2;
        h.setV(a);
        e = f = 0;
        b = d = !1;
        m = [];
        n = []
    }
    ;
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        n[a] = c
    }
    ;
    this.reset = function() {
        c = d = !1;
        e = 0;
        l.removeAllChildren();
        p.removeAllChildren();
        l.x = g.getX();
        l.y = g.getY();
        p.x = h.getX();
        p.y = h.getY()
    }
    ;
    this.refreshFiches = function(a, b, c, f) {
        a = a.sortOn("value", "index");
        var g = c;
        f && (d = !0);
        for (var h = e = 0, m = 0; m < a.length; m++) {
            var n = new createjs.Bitmap(s_oSpriteLibrary.getSprite("fiche_" + a[m].index));
            n.scaleX = .7;
            n.scaleY = .7;
            f ? p.addChild(n) : l.addChild(n);
            n.x = b;
            n.y = g;
            g -= 5;
            h++;
            9 < h && (h = 0,
            b += FICHE_WIDTH,
            g = c);
            e += a[m].value
        }
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("chip")
    }
    ;
    this.createFichesPile = function(a, b) {
        var c = s_oGameSettings.getFichesValues()
          , d = [];
        do {
            for (var e = c[c.length - 1], f = c.length - 1; e > a; )
                f--,
                e = c[f];
            for (var f = Math.floor(a / e), g = 0; g < f; g++)
                d.push({
                    value: e,
                    index: s_oGameSettings.getIndexForFiches(e)
                });
            a = e = a % e
        } while (0 < e);this.refreshFiches(d, 0, 0, b)
    }
    ;
    this.initMovement = function(a, c, d) {
        b = d;
        r = new CVector2(l.x,l.y);
        s = new CVector2(a,c)
    }
    ;
    this.initInsuranceMov = function(a, b) {
        t = new CVector2(a,b)
    }
    ;
    this.getValue = function() {
        return e
    }
    ;
    this._updateInsuranceFiches = function() {
        if (d) {
            var a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV)
              , a = tweenVectors(h, t, a, new CVector2);
            p.x = a.getX();
            p.y = a.getY()
        }
    }
    ;
    this.update = function(a) {
        if (!c)
            if (f += a,
            f > TIME_FICHES_MOV)
                f = 0,
                c = !0,
                m[FICHES_END_MOV] && m[FICHES_END_MOV].call(n[FICHES_END_MOV], b, e);
            else {
                a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
                var d = new CVector2
                  , d = tweenVectors(r, s, a, d);
                l.x = d.getX();
                l.y = d.getY();
                this._updateInsuranceFiches()
            }
    }
    ;
    this._init(a)
}
function CEndPanel(a) {
    var d, b, c, f, e, g;
    this._init = function(a) {
        d = new createjs.Bitmap(a);
        d.x = 0;
        d.y = 0;
        e = new createjs.Text("","bold 24px Arial","#000");
        e.x = CANVAS_WIDTH / 2 + 2;
        e.y = CANVAS_HEIGHT / 2 - 38;
        e.textAlign = "center";
        f = new createjs.Text("","bold 24px Arial","#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 40;
        f.textAlign = "center";
        b = new createjs.Text("","bold 16px Arial","#000");
        b.x = CANVAS_WIDTH / 2 + 1;
        b.y = CANVAS_HEIGHT / 2 + 11;
        b.textAlign = "center";
        c = new createjs.Text("","bold 16px Arial","#ffffff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 10;
        c.textAlign = "center";
        g = new createjs.Container;
        g.alpha = 0;
        g.visible = !1;
        g.addChild(d, b, c, e, f);
        s_oStage.addChild(g)
    }
    ;
    this.unload = function() {
        g.off("mousedown", this._onExit);
        s_oStage.removeChild(g)
    }
    ;
    this._initListener = function() {
        g.on("mousedown", this._onExit)
    }
    ;
    this.show = function(a, d) {
        d ? (e.text = TEXT_CONGRATS,
        f.text = TEXT_CONGRATS) : (e.text = TEXT_GAMEOVER,
        f.text = TEXT_GAMEOVER);
        b.text = TEXT_SCORE + ": " + a;
        c.text = TEXT_SCORE + ": " + a;
        g.visible = !0;
        var h = this;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500).call(function() {
            h._initListener()
        })
    }
    ;
    this._onExit = function() {
        g.off("mousedown");
        s_oGame.onExit()
    }
    ;
    this._init(a);
    return this
}
var TYPE_LINEAR = 0
  , TYPE_OUT_CUBIC = 1
  , TYPE_IN_CUBIC = 2
  , TYPE_OUT_BACK = 3
  , TYPE_IN_BACK = 4;
function ease(a, d, b, c, f, e) {
    var g;
    switch (a) {
    case TYPE_LINEAR:
        g = easeLinear(d, b, c, f, e);
        break;
    case TYPE_IN_CUBIC:
        g = easeInCubic(d, b, c, f, e);
        break;
    case TYPE_OUT_CUBIC:
        g = easeOutCubic(d, b, c, f, e);
        break;
    case TYPE_IN_BACK:
        g = easeInBack(d, b, c, f, e);
        break;
    case TYPE_OUT_BACK:
        g = easeInBack(d, b, c, f, e)
    }
    return g
}
function easeOutBounce(a, d, b, c) {
    return (a /= c) < 1 / 2.75 ? 7.5625 * b * a * a + d : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
}
function easeInBounce(a, d, b, c) {
    return b - easeOutBounce(c - a, 0, b, c) + d
}
function easeInOutBounce(a, d, b, c) {
    return a < c / 2 ? .5 * easeInBounce(2 * a, 0, b, c) + d : .5 * easeOutBounce(2 * a - c, 0, b, c) + .5 * b + d
}
function easeInCirc(a, d, b, c) {
    return -b * (Math.sqrt(1 - (a /= c) * a) - 1) + d
}
function easeOutCirc(a, d, b, c) {
    return b * Math.sqrt(1 - (a = a / c - 1) * a) + d
}
function easeInOutCirc(a, d, b, c) {
    return 1 > (a /= c / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + d : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
}
function easeInCubic(a, d, b, c, f) {
    return b * (a /= c) * a * a + d
}
function easeOutCubic(a, d, b, c, f) {
    return b * ((a = a / c - 1) * a * a + 1) + d
}
function easeInOutCubic(a, d, b, c, f) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a + d : b / 2 * ((a -= 2) * a * a + 2) + d
}
function easeInElastic(a, d, b, c, f, e, g) {
    if (0 == a)
        return d;
    if (1 == (a /= c))
        return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b,
    f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * c - f) * Math.PI / g)) + d
}
function easeOutElastic(a, d, b, c, f, e, g) {
    if (0 == a)
        return d;
    if (1 == (a /= c))
        return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b,
    f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - f) * Math.PI / g) + b + d
}
function easeInOutElastic(a, d, b, c, f, e, g) {
    if (0 == a)
        return d;
    if (1 == (a /= c))
        return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b,
    f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return 1 > a ? -.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * c - f) * Math.PI / g) + d : e * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * c - f) * Math.PI / g) * .5 + b + d
}
function easeInExpo(a, d, b, c) {
    return 0 == a ? d : b * Math.pow(2, 10 * (a / c - 1)) + d
}
function easeOutExpo(a, d, b, c) {
    return a == c ? d + b : b * (-Math.pow(2, -10 * a / c) + 1) + d
}
function easeInOutExpo(a, d, b, c) {
    return 0 == a ? d : a == c ? d + b : 1 > (a /= c / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + d : b / 2 * (-Math.pow(2, -10 * --a) + 2) + d
}
function easeLinear(a, d, b, c) {
    return b * a / c + d
}
function easeInQuad(a, d, b, c) {
    return b * (a /= c) * a + d
}
function easeOutQuad(a, d, b, c) {
    return -b * (a /= c) * (a - 2) + d
}
function easeInOutQuad(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a + d : -b / 2 * (--a * (a - 2) - 1) + d
}
function easeInQuart(a, d, b, c) {
    return b * (a /= c) * a * a * a + d
}
function easeOutQuart(a, d, b, c) {
    return -b * ((a = a / c - 1) * a * a * a - 1) + d
}
function easeInOutQuart(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a * a + d : -b / 2 * ((a -= 2) * a * a * a - 2) + d
}
function easeInQuint(a, d, b, c) {
    return b * (a /= c) * a * a * a * a + d
}
function easeOutQuint(a, d, b, c) {
    return b * ((a = a / c - 1) * a * a * a * a + 1) + d
}
function easeInOutQuint(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a * a * a + d : b / 2 * ((a -= 2) * a * a * a * a + 2) + d
}
function easeInSine(a, d, b, c) {
    return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}
function easeOutSine(a, d, b, c) {
    return b * Math.sin(a / c * (Math.PI / 2)) + d
}
function easeInOutSine(a, d, b, c) {
    return -b / 2 * (Math.cos(Math.PI * a / c) - 1) + d
}
function easeInBack(a, d, b, c) {
    return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
}
function easeOutBack(a, d, b, c) {
    return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d
}
;