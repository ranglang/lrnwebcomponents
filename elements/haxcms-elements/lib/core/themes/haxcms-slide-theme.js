/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import { HAXCMSLitElementTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { SimpleColorsSuper } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
/**
 * `haxcms-slide-theme`
 * `A simple slide playing theme`
 *

 * @polymer
 * @demo demo/index.html
 */
class HAXCMSSlideTheme extends SimpleColorsSuper(HAXCMSLitElementTheme) {
  constructor() {
    super();
    this.__disposer = [];
    setTimeout(() => {
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-dot-indicator");
      import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");
      import("@polymer/paper-icon-button/paper-icon-button.js");
      import("@polymer/iron-icons/iron-icons.js");
      import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js");
    }, 0);
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "haxcms-slide-theme";
  }
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        /**
         * Hide the slotted content during edit mode. This must be here to work.
         */
        :host([edit-mode]) #slot {
          display: none;
        }
        .active-slide {
          width: calc(100vw - 64px);
          padding: 32px;
          margin: 0;
          position: fixed;
          top: 0;
          bottom: 60px;
          overflow: scroll;
          border-bottom: 4px solid var(--haxcms-color, black);
        }
        :host([is-logged-in]) .active-slide {
          left: 48px;
          width: calc(100vw - 64px - 48px);
        }
        :host([is-logged-in]) .bottom-wrapper {
          left: 48px;
          width: calc(100vw - 48px);
        }
        :host([edit-mode]) .active-slide {
          bottom: 0;
          overflow: scroll;
          border-bottom: unset;
        }
        .controls:hover {
          background-color: rgba(0, 0, 0, 1);
        }
        .controls {
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          display: inline-flex;
          height: 60px;
          width: 200px;
          line-height: 60px;
          justify-content: center;
          vertical-align: middle;
          height: 60px;
          font-size: 16px;
        }
        .counter {
          width: 100%;
          justify-content: center;
          vertical-align: middle;
          display: inline-flex;
        }
        site-menu-button {
          --site-menu-button-link-color: #ffffff;
        }
        site-menu-button:hover,
        site-menu-button:focus,
        site-menu-button:active {
          outline: 1px dashed var(--haxcms-color, yellow);
          outline-offset: -1px;
        }
        .site-label-wrapper {
          display: inline-flex;
          vertical-align: middle;
          height: 60px;
        }
        site-print-button {
          display: inline-flex;
          margin: 8px;
        }
        site-title {
          display: inline-flex;
          margin: 0 0 0 32px;
        }
        site-active-title {
          display: inline-flex;
          padding: 0 32px;
          margin: 0 0 0 16px;
          border-left: 4px solid var(--haxcms-color, black);
        }
        site-dot-indicator {
          display: inline-flex;
          padding: 0 32px;
          border-right: 4px solid var(--haxcms-color, black);
          --site-dot-indicator-color: var(--haxcms-color, black);
        }
        .bottom-wrapper {
          z-index: 2;
          position: fixed;
          bottom: 0;
          height: 60px;
          left: 0;
          right: 0;
          transition: 0.2s opacity linear;
          opacity: 1;
          width: 100vw;
        }
        :host([edit-mode]) .bottom-wrapper {
          opacity: 0;
          pointer-events: none;
        }
        @media screen and (max-width: 900px) {
          site-title {
            display: none;
          }
        }
        @media screen and (max-width: 800px) {
          site-active-title {
            display: none;
          }
        }
        @media screen and (max-width: 700px) {
          site-print-button {
            display: none;
          }
          site-label-wrapper {
            display: inline-block;
          }
        }
      `
    ];
  }
  // render function
  render() {
    return html`
      <custom-style>
        <style>
          site-menu-button {
            --site-menu-button-button-hover-color: var(--haxcms-color, yellow);
            --site-menu-button-button: {
              height: 60px;
              width: 60px;
              padding: 0;
              margin: 0;
              line-height: 60px;
            }
          }
          site-title {
            --site-title-link: {
              text-decoration: none;
            }
            --site-title-heading: {
              color: black;
              font-size: 28px;
              margin: 0;
              padding: 0;
            }
          }
          site-active-title {
            color: black;
            font-size: 28px;
            margin: 0;
            padding: 0;
          }
        </style>
      </custom-style>
      <div class="active-slide">
        <div id="contentcontainer">
          <div id="slot"><slot></slot></div>
        </div>
      </div>
      <div class="bottom-wrapper">
        <div class="controls">
          <site-menu-button
            type="prev"
            label="Previous"
            position="top"
          ></site-menu-button>
          <div class="counter">
            ${this.activeManifestIndexCounter} / ${this.manifestLength}
          </div>
          <site-menu-button
            type="next"
            label="Next"
            position="top"
          ></site-menu-button>
        </div>
        <div class="site-label-wrapper">
          <site-dot-indicator></site-dot-indicator>
          <site-title></site-title>
          <site-print-button
            type="page"
            label="Print slide"
            position="top"
          ></site-print-button>
          <site-print-button
            type="site"
            label="Print All slides"
            position="top"
          ></site-print-button>
          <site-active-title></site-active-title>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      ...super.properties,
      manifestLength: { type: Number },
      activeManifestIndexCounter: { type: Number }
    };
  }
  /**
   * Connect state and theme wiring
   */
  connectedCallback() {
    super.connectedCallback();
    // store disposer so we can clean up later
    autorun(reaction => {
      this.manifestLength = toJS(store.routerManifest.items.length);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeManifestIndexCounter = toJS(store.activeManifestIndexCounter);
      this.__disposer.push(reaction);
    });
  }
  /**
   * Disconnect the wiring for the theme and clean up state
   */
  disconnectedCallback() {
    // clean up state
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HAXCMSSlideTheme.tag, HAXCMSSlideTheme);
export { HAXCMSSlideTheme };
