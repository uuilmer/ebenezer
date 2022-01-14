"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HomePage;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function HomePage() {
  /*
    Includes code for Dynamic Home Page Title
    Adapted from: https://www.sliderrevolution.com/resources/css-text-animation/
    Animation: Cross Color Text Reveal
    Developer: Kenny
  */
  // TODO: Add dynamic quotes
  var darkRef = (0, _react.useRef)(null);
  var lightRef = (0, _react.useRef)(null);
  setupDynamicTitle(darkRef, lightRef);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "home_page_container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "outer-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "home-image",
    className: "image-container"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "section-title on-dark"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "paralax-title",
    ref: darkRef
  }, "Iglesia de Dios Ebenezer"))), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "section-title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "paralax-title",
    ref: lightRef
  }, "Iglesia de Dios Ebenezer"))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "home_intro"
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("blockquote", {
    className: "blockquote"
  }, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "display-6"
  }, "\"Tom\xF3 luego Samuel una piedra y la puso entre Mizpa y Sen, y le puso por nombre Eben-ezer\"")), /*#__PURE__*/_react["default"].createElement("figcaption", {
    className: "blockquote-footer"
  }, "\"1 Samuel 7:12\""))));
} /// Use black and white identical title elements to add cool animation
///
/// @param darkRef A useRef return value reqpresenting the black title
/// @param lightRef A useRef return value reqpresenting the white title


function setupDynamicTitle(darkRef, lightRef) {
  var didScroll = false;
  /*
    When the user scrolls, trigger the conditional statement
    inside the infinetly repeating computeFrame function
  */

  var scrollInProgress = function scrollInProgress() {
    didScroll = true;
  };

  var computeFrame = function computeFrame() {
    if (didScroll) {
      darkRef.current.style.transform = "translateX(" + window.scrollY / 10 + "%)";
      lightRef.current.style.transform = "translateX(" + window.scrollY / 10 + "%)";
      didScroll = false;
    } // Recursively call computeFrame to cause constant frame computation


    requestAnimationFrame(computeFrame);
  }; // Begin animation


  requestAnimationFrame(computeFrame);
  window.addEventListener("scroll", scrollInProgress);
}