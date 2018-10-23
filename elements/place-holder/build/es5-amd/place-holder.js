define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.PlaceHolder = void 0;
  function _templateObject_5db3fa70d70311e8bc53079f4bbc7ec3() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_5db3fa70d70311e8bc53079f4bbc7ec3 = function() {
      return data;
    };
    return data;
  }
  var PlaceHolder = (function(_PolymerElement) {
    babelHelpers.inherits(PlaceHolder, _PolymerElement);
    function PlaceHolder() {
      babelHelpers.classCallCheck(this, PlaceHolder);
      return babelHelpers.possibleConstructorReturn(
        this,
        (PlaceHolder.__proto__ || Object.getPrototypeOf(PlaceHolder)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      PlaceHolder,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                PlaceHolder.prototype.__proto__ ||
                  Object.getPrototypeOf(PlaceHolder.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              PlaceHolder.haxProperties,
              PlaceHolder.tag,
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
              _templateObject_5db3fa70d70311e8bc53079f4bbc7ec3()
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
                title: "Place holder",
                description: "Automated conversion of place-holder/",
                icon: "icons:android",
                color: "green",
                groups: ["Holder"],
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
            return "place-holder";
          }
        }
      ]
    );
    return PlaceHolder;
  })(_polymerElement.PolymerElement);
  _exports.PlaceHolder = PlaceHolder;
  window.customElements.define(PlaceHolder.tag, PlaceHolder);
});