import React, { useState } from "react";
import FacebookPageIcon from "./FacebookPageIcon";

export default function EbenezerNav(props) {
  const PAGE_NAMES = Array.from(props.tabs.keys());

  return (
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
              {PAGE_NAMES.map((tabName, index) => {
                if (tabName == props.currentTab) {
                  var navclassName = "nav-link active";
                } else {
                  var navclassName = "nav-link";
                }
                return (
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    key={index}
                  >
                    <a
                      className={navclassName}
                      onClick={() => {
                        window.history.pushState("", "", "/" + tabName);
                        props.onChangeTab(tabName);
                      }}
                    >
                      {tabName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <FacebookPageIcon />
          </div>
        </div>
        {props.currentTab != "Casa" && (
          <img
            id="nav_logo"
            src="../media/ebenezer_logo.png"
            type="img/png"
            style={{ width: "10vw" }}
          />
        )}
      </nav>
    </div>
  );
}
