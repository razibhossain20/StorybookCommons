import { configure, addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import crfTheme from "./crfTheme";

// // golbal scss
import "../styles/glpg-118/storybook.scss";

// //viewport addons
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
addParameters({
    options: {
        theme: crfTheme,
    },
});

export const parameters = {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
        locales: 'en-US',
      }
    },
  };

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
    require("./welcomeStory");
    req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
