"use strict";
// @flow
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";

const PAGE_NAMES = ["Casa", "Calendario", "EnVivo", "Contactenos"];

type Props = {};

type State = {
  page: string,
};

export default class PageManager extends React.Component<Props, State> {
  state: State = {
    page: "Casa",
  };
  render() {
    var pageContent = <HomePage />;
    return (
      <div>
        <div id="tab_manager">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  {PAGE_NAMES.map((page, index) => {
                    if (page == this.state.page) {
                      var navclassName = "nav-link active";
                    } else {
                      var navclassName = "nav-link";
                    }
                    return (
                      <li className="nav-item" key={page}>
                        <a className={navclassName} href="#">
                          {page}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {pageContent}
      </div>
    );
  }
}
