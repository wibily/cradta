import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import accordion from "./pancake/react/accordion";
import breadcrumbs from "./pancake/react/breadcrumbs";
import buttons from "./pancake/react/buttons";
import callout from "./pancake/react/callout";
import card from "./pancake/react/card";
import controlInput from "./pancake/react/control-input";
import ctaLink from "./pancake/react/cta-link";
import directionLinks from "./pancake/react/direction-links";
import footer from "./pancake/react/footer";
import form from "./pancake/react/form";
import header from "./pancake/react/header";
import headings from "./pancake/react/headings";
import inpageNav from "./pancake/react/inpage-nav";
import keywordList from "./pancake/react/keyword-list";
import linkList from "./pancake/react/link-list";
import mainNav from "./pancake/react/main-nav";
import pageAlerts from "./pancake/react/page-alerts";
import progressIndicator from "./pancake/react/progress-indicator";
import searchbox from "./pancake/react/searchbox";
import select from "./pancake/react/select";
import sideNav from "./pancake/react/side-nav";
import skipLink from "./pancake/react/skip-link";
import table from "./pancake/react/table";
import tags from "./pancake/react/tags";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
