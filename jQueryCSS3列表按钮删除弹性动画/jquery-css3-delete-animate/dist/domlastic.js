var domLastic = function () {
    "use strict";
    function t(t) {
        t && (t.itemsClassnameToConnect && (r = t.itemsClassnameToConnect), t.itemsJointStrength && (s = t.itemsJointStrength), t.animationSpeed && (m = t.animationSpeed), t.animationIntensity && (c = t.animationIntensity), t.animationDirection && (l = t.animationDirection), t.callback && (u = t.callback))
    }

    function n() {
        if (!r)throw'Error: DomLastic "itemsClassnameToConnect" is not set.';
        if ("horizontal" !== l && "vertical" !== l)throw'Error: DomLastic "animationDirection" wrong value. Allowed values: "vertical" or "horizontal".';
        if (u && "function" != typeof u)throw'Error: DomLastic "callback" is not a function';
        if (isNaN(s))throw'Error: DomLastic "itemsJointStrength" is not a number';
        if (isNaN(m))throw'Error: DomLastic "animationSpeed" is not a number';
        if (isNaN(c))throw'Error: DomLastic "animationIntensity" is not a number'
    }

    function i() {
        var t = ".DomLastic-animate {animation-name: animate;animation-duration: " + m + "ms;animation-timing-function: linear;animation-fill-mode: both;animation-play-state: running;}",
            n = 0, i = 6, a = .7, o = 1, e = [1.05, 1, 1.025, 1, 1.01, 1], r = [a, o, a + .15, o, a + .25, o], s = 1,
            u = [s - 20 * c, s + 20 * c, s - 4 * c, s + 6 * c, s + 4 * c, s + 5 * c], f = "@keyframes animate {";
        for (n = 0; n < i; n++) {
            var h = n / (i - 1) * 100, d = e[n], v = r[n], D = u[n];
            "vertical" === l && (f += h + "% {transform: scale(" + d + ", " + v + ") translate(0," + (D - n) + "px);}"), "horizontal" === l && (f += h + "% {transform: scale(" + d + ", " + d + ") translate(" + (D - n) + "px, 0);}")
        }
        return f += "100% { transform: scale(1, 1) translate(0,0);}}", "<style>" + t + f + "</style>"
    }

    function a() {
        var t = i();
        e(document).find("head").append(t)
    }

    function o() {
        setTimeout(function () {
            "function" == typeof u && u.call(this)
        }, m)
    }

    var e = jQuery, r = null, s = 20, m = 600, c = .5, l = "vertical", u = null;
    return {
        init: function (i) {
            t(i), n(), a()
        },
        animateItems: function () {
            e(document).find("." + r).each(function (t) {
                var n = e(this);
                setTimeout(function () {
                    n.addClass("DomLastic-animate")
                }, t * s + Math.floor(10 * Math.random() + 1))
            }), setTimeout(function () {
                e(document).find("." + r).removeClass("DomLastic-animate")
            }, m + 100), o()
        }
    }
}();