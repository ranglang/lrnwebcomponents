/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-image-iconset-svg`
 * @element mdi-image-iconset-svg is a iconset for the Material Design Icons collection with the "image" tag
 *
 * Example:
 *   <iron-icon icon="mdi-image:image"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-image" size="24">
    <svg>
      <g id="image">
        <path
          d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z"
        ></path>
      </g>

      <g id="message-image">
        <path
          d="M5,14L8.5,9.5L11,12.5L14.5,8L19,14M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
        ></path>
      </g>

      <g id="numeric-1-box-multiple-outline">
        <path
          d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M14,15H16V5H12V7H14M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-2-box-multiple-outline">
        <path
          d="M17,13H13V11H15A2,2 0 0,0 17,9V7C17,5.89 16.1,5 15,5H11V7H15V9H13A2,2 0 0,0 11,11V15H17M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-3-box-multiple-outline">
        <path
          d="M17,13V11.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5V7C17,5.89 16.1,5 15,5H11V7H15V9H13V11H15V13H11V15H15A2,2 0 0,0 17,13M3,5H1V21A2,2 0 0,0 3,23H19V21H3M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1Z"
        ></path>
      </g>

      <g id="numeric-4-box-multiple-outline">
        <path
          d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-5-box-multiple-outline">
        <path
          d="M17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H11V11H15V13H11V15H15A2,2 0 0,0 17,13M3,5H1V21A2,2 0 0,0 3,23H19V21H3M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1Z"
        ></path>
      </g>

      <g id="numeric-6-box-multiple-outline">
        <path
          d="M13,11H15V13H13M13,15H15A2,2 0 0,0 17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H13A2,2 0 0,0 11,7V13C11,14.11 11.9,15 13,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-7-box-multiple-outline">
        <path
          d="M13,15L17,7V5H11V7H15L11,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-8-box-multiple-outline">
        <path
          d="M13,11H15V13H13M13,7H15V9H13M13,15H15A2,2 0 0,0 17,13V11.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5V7C17,5.89 16.1,5 15,5H13A2,2 0 0,0 11,7V8.5A1.5,1.5 0 0,0 12.5,10A1.5,1.5 0 0,0 11,11.5V13C11,14.11 11.9,15 13,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-9-box-multiple-outline">
        <path
          d="M15,9H13V7H15M15,5H13A2,2 0 0,0 11,7V9C11,10.11 11.9,11 13,11H15V13H11V15H15A2,2 0 0,0 17,13V7C17,5.89 16.1,5 15,5M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="numeric-9-plus-box-multiple-outline">
        <path
          d="M21,9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M11,9V8H12V9M14,12V8C14,6.89 13.1,6 12,6H11A2,2 0 0,0 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12A2,2 0 0,0 14,12M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
        ></path>
      </g>

      <g id="tooltip-image">
        <path
          d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M19,15V7L15,11L13,9L7,15H19M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
