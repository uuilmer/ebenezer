"use strict";
// @flow
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import EventsPage from "./EventsPage";
import EbenezerNav from "./EbenezerNav";

const PAGES = new Map([
  ["Casa", <HomePage />],
  ["Eventos", <EventsPage />],
  ["Contactenos", null],
]);

type Props = {};

type State = {
  currentTab: "Casa" | "Eventos" | "Contactenos",
};

export default class PageManager extends React.Component<Props, State> {
  state: State = {
    currentTab: "Casa",
  };
  
  constructor(props: Props) {
    super(props);
    // TODO: Try to handle the url in a more elegant way
    if (PAGES.hasOwnProperty(window.location.pathname.split("/")[1])) {
      this.state = { page: window.location.pathname.split("/")[1] };
    } else {
      window.history.pushState("", "", "/Casa");
    }
  }

  render() {
    var pageContent = PAGES.get(this.state.currentTab);
    return (
      <>
        <EbenezerNav
          currentTab={this.state.currentTab}
          tabs={PAGES}
          onChangeTab={(newTab) => this.setState({ currentTab: newTab })}
        />
        {pageContent}
      </>
    );
  }
}
