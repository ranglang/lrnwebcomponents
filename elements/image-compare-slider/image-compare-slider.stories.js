import { html } from "lit-element/lit-element.js";
import { ImageCompareSlider } from "@lrnwebcomponents/image-compare-slider/image-compare-slider.js";
import { withKnobs, withWebComponentsKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";

export default {
  title: "Media|Image Compare",
  component: "image-compare-slider",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }
};
let images = [
  new URL(`./demo/images/Matterhorn01.png`, import.meta.url),
  new URL(`./demo/images/Matterhorn02.png`, import.meta.url)
];

const utils = new StorybookUtilities();
export const ImageCompareSliderStory = () => {
  return utils.makeElementFromHaxDemo(ImageCompareSlider);
};
