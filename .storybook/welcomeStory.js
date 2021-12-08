import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Others/Welcome", module).add("index", () => (
    <div className="px-4 py-5 my-5 text-center">
        <div>
            <img
                className="img img-fluid"
                src="storybook-images/galapagos.png"
            />
        </div>
        <h1 className="display-4 my-5">
            Welcome to AEM Bulletproof UI components
        </h1>
        <h6>
            Quickly design and customize responsive mobile-first sites with
            Storybook.
            <br />
            Featuring Bootstrap Sass variables and mixins, responsive grid
            system, extensive prebuilt components, and powerful JavaScript
            plugins.
        </h6>
        <hr className="my-4" />
        <p>
            Storybook is an open source tool for developing UI components in
            isolation for React, Vue, and Angular. It makes building stunning
            UIs organized and efficient.
        </p>
        <a
            className="btn btn-primary btn-lg"
            href="https://storybook.js.org/"
            target="_blank"
            role="button"
        >
            Learn more
        </a>
    </div>
));
