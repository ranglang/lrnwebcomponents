define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.HeroBanner = void 0;
  function _templateObject_2415fa90d6f211e8bc3a5bb12b9aaeb5() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_2415fa90d6f211e8bc3a5bb12b9aaeb5 = function() {
      return data;
    };
    return data;
  }
  var HeroBanner = (function(_PolymerElement) {
    babelHelpers.inherits(HeroBanner, _PolymerElement);
    function HeroBanner() {
      babelHelpers.classCallCheck(this, HeroBanner);
      return babelHelpers.possibleConstructorReturn(
        this,
        (HeroBanner.__proto__ || Object.getPrototypeOf(HeroBanner)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      HeroBanner,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                HeroBanner.prototype.__proto__ ||
                  Object.getPrototypeOf(HeroBanner.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              HeroBanner.haxProperties,
              HeroBanner.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_2415fa90d6f211e8bc3a5bb12b9aaeb5()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Hero banner",
                description: "Automated conversion of hero-banner/",
                icon: "icons:android",
                color: "green",
                groups: ["Banner"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "hero-banner";
          }
        }
      ]
    );
    return HeroBanner;
  })(_polymerElement.PolymerElement);
  _exports.HeroBanner = HeroBanner;
  window.customElements.define(HeroBanner.tag, HeroBanner);
});
