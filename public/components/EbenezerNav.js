"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EbenezerNav;

var _react = _interopRequireWildcard(require("react"));

var _FacebookPageIcon = _interopRequireDefault(require("./FacebookPageIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function EbenezerNav(props) {
  var PAGE_NAMES = Array.from(props.tabs.keys());
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "tab_manager"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark py-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "navbar-nav"
  }, PAGE_NAMES.map(function (tabName, index) {
    if (tabName == props.currentTab) {
      var navclassName = "nav-link active";
    } else {
      var navclassName = "nav-link";
    }

    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "nav-item",
      style: {
        cursor: "pointer"
      },
      key: index
    }, /*#__PURE__*/_react["default"].createElement("a", {
      className: navclassName,
      onClick: function onClick() {
        window.history.pushState("", "", "/" + tabName);
        props.onChangeTab(tabName);
      }
    }, tabName));
  })), /*#__PURE__*/_react["default"].createElement(_FacebookPageIcon["default"], null))), props.currentTab != "Casa" && /*#__PURE__*/_react["default"].createElement("img", {
    id: "nav_logo",
    src: "../media/ebenezer_logo.png",
    type: "img/png",
    style: {
      width: "4vw"
    }
  })));
}