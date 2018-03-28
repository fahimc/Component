'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function forEach(callback, thisArg) {
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var array = this;
            thisArg = thisArg || this;
            for (var i = 0, l = array.length; i !== l; ++i) {
                callback.call(thisArg, array[i], i, array);
            }
        };
    }
    NodeList.prototype.forEach = Array.prototype.forEach;
})();
// mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
// Authors: Graeme Yeates (github.com/megawac) 
window.MutationObserver = window.MutationObserver || function (w) {
    function v(a) {
        this.i = [];this.m = a;
    }function I(a) {
        (function c() {
            var d = a.takeRecords();d.length && a.m(d, a);a.h = setTimeout(c, v._period);
        })();
    }function p(a) {
        var b = { type: null, target: null, addedNodes: [], removedNodes: [], previousSibling: null, nextSibling: null, attributeName: null, attributeNamespace: null, oldValue: null },
            c;for (c in a) {
            b[c] !== w && a[c] !== w && (b[c] = a[c]);
        }return b;
    }function J(a, b) {
        var c = C(a, b);return function (d) {
            var f = d.length,
                n;b.a && 3 === a.nodeType && a.nodeValue !== c.a && d.push(new p({ type: "characterData", target: a, oldValue: c.a }));b.b && c.b && A(d, a, c.b, b.f);if (b.c || b.g) n = K(d, a, c, b);if (n || d.length !== f) c = C(a, b);
        };
    }function L(a, b) {
        return b.value;
    }function M(a, b) {
        return "style" !== b.name ? b.value : a.style.cssText;
    }function A(a, b, c, d) {
        for (var f = {}, n = b.attributes, k, g, x = n.length; x--;) {
            k = n[x], g = k.name, d && d[g] === w || (D(b, k) !== c[g] && a.push(p({ type: "attributes", target: b, attributeName: g, oldValue: c[g], attributeNamespace: k.namespaceURI })), f[g] = !0);
        }for (g in c) {
            f[g] || a.push(p({ target: b,
                type: "attributes", attributeName: g, oldValue: c[g] }));
        }
    }function K(a, b, c, d) {
        function f(b, c, f, k, y) {
            var g = b.length - 1;y = -~((g - y) / 2);for (var h, l, e; e = b.pop();) {
                h = f[e.j], l = k[e.l], d.c && y && Math.abs(e.j - e.l) >= g && (a.push(p({ type: "childList", target: c, addedNodes: [h], removedNodes: [h], nextSibling: h.nextSibling, previousSibling: h.previousSibling })), y--), d.b && l.b && A(a, h, l.b, d.f), d.a && 3 === h.nodeType && h.nodeValue !== l.a && a.push(p({ type: "characterData", target: h, oldValue: l.a })), d.g && n(h, l);
            }
        }function n(b, c) {
            for (var g = b.childNodes, q = c.c, x = g.length, v = q ? q.length : 0, h, l, e, m, t, z = 0, u = 0, r = 0; u < x || r < v;) {
                m = g[u], t = (e = q[r]) && e.node, m === t ? (d.b && e.b && A(a, m, e.b, d.f), d.a && e.a !== w && m.nodeValue !== e.a && a.push(p({ type: "characterData", target: m, oldValue: e.a })), l && f(l, b, g, q, z), d.g && (m.childNodes.length || e.c && e.c.length) && n(m, e), u++, r++) : (k = !0, h || (h = {}, l = []), m && (h[e = E(m)] || (h[e] = !0, -1 === (e = F(q, m, r, "node")) ? d.c && (a.push(p({ type: "childList", target: b, addedNodes: [m], nextSibling: m.nextSibling, previousSibling: m.previousSibling })), z++) : l.push({ j: u, l: e })), u++), t && t !== g[u] && (h[e = E(t)] || (h[e] = !0, -1 === (e = F(g, t, u)) ? d.c && (a.push(p({ type: "childList", target: c.node, removedNodes: [t], nextSibling: q[r + 1], previousSibling: q[r - 1] })), z--) : l.push({ j: e, l: r })), r++));
            }l && f(l, b, g, q, z);
        }var k;n(b, c);return k;
    }function C(a, b) {
        var c = !0;return function f(a) {
            var k = { node: a };!b.a || 3 !== a.nodeType && 8 !== a.nodeType ? (b.b && c && 1 === a.nodeType && (k.b = G(a.attributes, function (c, f) {
                if (!b.f || b.f[f.name]) c[f.name] = D(a, f);return c;
            })), c && (b.c || b.a || b.b && b.g) && (k.c = N(a.childNodes, f)), c = b.g) : k.a = a.nodeValue;return k;
        }(a);
    }function E(a) {
        try {
            return a.id || (a.mo_id = a.mo_id || H++);
        } catch (b) {
            try {
                return a.nodeValue;
            } catch (c) {
                return H++;
            }
        }
    }function N(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            c[d] = b(a[d], d, a);
        }return c;
    }function G(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            c = b(c, a[d], d, a);
        }return c;
    }function F(a, b, c, d) {
        for (; c < a.length; c++) {
            if ((d ? a[c][d] : a[c]) === b) return c;
        }return -1;
    }v._period = 30;v.prototype = { observe: function observe(a, b) {
            for (var c = { b: !!(b.attributes || b.attributeFilter || b.attributeOldValue), c: !!b.childList, g: !!b.subtree,
                a: !(!b.characterData && !b.characterDataOldValue) }, d = this.i, f = 0; f < d.length; f++) {
                d[f].s === a && d.splice(f, 1);
            }b.attributeFilter && (c.f = G(b.attributeFilter, function (a, b) {
                a[b] = !0;return a;
            }));d.push({ s: a, o: J(a, c) });this.h || I(this);
        }, takeRecords: function takeRecords() {
            for (var a = [], b = this.i, c = 0; c < b.length; c++) {
                b[c].o(a);
            }return a;
        }, disconnect: function disconnect() {
            this.i = [];clearTimeout(this.h);this.h = null;
        } };var B = document.createElement("i");B.style.top = 0;var D = (B = "null" != B.attributes.style.value) ? L : M,
        H = 1;return v;
}(void 0);
//# sourceMappingURL=mutationobserver.map
var ComponentManager = {
    componentCollection: {},
    instanceCollection: [],
    plugins: [],
    init: function init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad: function onLoad() {
        this.generateComponents();
        this.observe();
    },
    generateComponents: function generateComponents() {
        for (var key in this.componentCollection) {
            var obj = this.componentCollection[key].obj;
            var template = this.componentCollection[key].template;
            this.createAllInstance(obj, template);
        };
    },
    observe: function observe() {
        var _this = this;

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (item) {
                if (item.removedNodes.length) {
                    item.removedNodes.forEach(function (element) {
                        if (element.component) {
                            element.component.unmounted();
                            for (var a = 0; a < _this.instanceCollection.length; ++a) {
                                if (_this.instanceCollection[instance] == element.component) {
                                    _this.collection.splice(a, 1);
                                    break;
                                }
                            }
                        }
                    });
                }
                if (item.addedNodes.length) {
                    item.addedNodes.forEach(function (element) {
                        var componentName = element.getAttribute('' + Component.CONST.COMPONENT_ATTRIBUTE);
                        if (componentName) {
                            var obj = _this.componentCollection[componentName].obj;
                            var template = _this.componentCollection[componentName].template;
                            _this.createInstance(element, obj, template);
                        }
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true });
    },
    createAllInstance: function createAllInstance(obj, template) {
        var _this2 = this;

        var elements = document.querySelectorAll('[' + Component.CONST.COMPONENT_ATTRIBUTE + '="' + obj.name + '"]');
        elements.forEach(function (element) {
            _this2.createInstance(element, obj, template);
        });
    },
    createInstance: function createInstance(element, obj, templateString) {
        var templateElement = document.querySelector('[' + Component.CONST.COMPONENT_ATTRIBUTE + '="' + obj.name + '"][' + Component.CONST.TEMPLATE_ATTRIBUTE + ']');
        var template = templateElement ? templateElement : templateString;
        var instance = new ComponentInstance(element, obj.data, obj.methods);
        this.instanceCollection.push(instance);
        element.component = instance;
        if (template) element.innerHTML = typeof template == 'string' ? template : template.innerHTML;
        instance.mounted();
        instance.updated();
    }
};

var Component = function Component(obj, template) {
    _classCallCheck(this, Component);

    ComponentManager.componentCollection[obj.name] = { obj: obj, template: template };
};

;
Component.CONST = {
    COMPONENT_ATTRIBUTE: 'data-component',
    TEMPLATE_ATTRIBUTE: 'data-template'
};

var ComponentInstance = function () {
    function ComponentInstance(element, data, methods) {
        var _this3 = this;

        _classCallCheck(this, ComponentInstance);

        this.element = element;
        if (data) {
            var _loop = function _loop(key) {

                Object.defineProperty(_this3, key, {
                    get: function get() {
                        return this['_' + key];
                    },
                    set: function set(new_value) {
                        this['_' + key] = new_value;
                        this.updated();
                    }
                });
                _this3[key] = data[key];
            };

            for (var key in data) {
                _loop(key);
            }
        }
        if (methods) {
            for (var key in methods) {
                this[key] = methods[key];
            }
        }

        ComponentManager.plugins.forEach(function (plugin) {
            if (plugin) plugin(_this3);
        });
    }

    _createClass(ComponentInstance, [{
        key: 'mounted',
        value: function mounted() {}
    }, {
        key: 'unmounted',
        value: function unmounted() {}
    }, {
        key: 'updated',
        value: function updated() {}
    }]);

    return ComponentInstance;
}();

ComponentManager.init();