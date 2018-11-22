import {
  html,
  Polymer
} from "../node_modules/@polymer/polymer/polymer-legacy.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/paper-button/paper-button.js";
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "./hax-stax-browser.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      #dialog {
        --app-drawer-width: 320px;
        z-index: 1000;
        margin-top: 64px;
        @apply --hax-stax-picker-dialog;
      }
      #closedialog {
        float: right;
        top: 135px;
        right: 0;
        position: absolute;
        padding: 4px;
        margin: 0;
        color: var(--simple-colors-light-green-background1, green);
        background-color: transparent;
        width: 40px;
        height: 40px;
        min-width: unset;
      }
      .title {
        margin-top: 32px;
        text-align: center;
        padding: 16px;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 32px;
        font-weight: bold;
        font-family: sans-serif;
        text-transform: uppercase;
        color: var(--simple-colors-light-green-background1);
      }
      app-drawer {
        --app-drawer-content-container: {
          background-color: rgba(0, 0, 0, 0.7);
        };
        --app-drawer-width: 320px;
      }
      .pref-container {
        text-align: left;
        padding: 16px;
      }
    </style>
    <app-drawer id="dialog" align="left">
      <h3 class="title">[[title]]</h3>
      <div style="height: 100%; overflow: auto;" class="pref-container">
        <hax-stax-browser id="staxbrowser"></hax-stax-browser>
      </div>
      <paper-button id="closedialog" on-tap="close">
        <iron-icon icon="icons:cancel" title="Close dialog"></iron-icon>
      </paper-button>
    </app-drawer>
`,
  is: "hax-stax-picker",
  behaviors: [simpleColorsBehaviors],
  properties: { title: { type: String, value: "Templates" } },
  ready: function() {
    document.body.appendChild(this);
  },
  attached: function() {
    this.fire("hax-register-stax-picker", this);
  },
  open: function() {
    this.$.staxbrowser.resetBrowser();
    this.$.dialog.open();
  },
  close: function() {
    this.$.dialog.close();
  },
  toggleDialog: function() {
    if (this.$.dialog.opened) {
      this.close();
    } else {
      window.HaxStore.instance.closeAllDrawers(this);
    }
  }
});