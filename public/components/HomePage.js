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
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    id: "desktop_home_background"
  }, /*#__PURE__*/_react["default"].createElement("source", {
    src: "../media/pexels_pixabay_background.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/_react["default"].createElement("img", {
    id: "mobile_home_background",
    src: "../media/mobile_home_background.png",
    type: "img/png"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "display-1",
    id: "church_name"
  }, "\"Iglesia de Dios Ebenezer\""), /*#__PURE__*/_react["default"].createElement("div", {
    id: "home_intro"
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("blockquote", {
    className: "blockquote"
  }, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "display-6"
  }, "\"Tom\xF3 luego Samuel una piedra y la puso entre Mizpa y Sen, y le puso por nombre Eben-ezer\"")), /*#__PURE__*/_react["default"].createElement("figcaption", {
    className: "blockquote-footer"
  }, "\"1 Samuel 7:12\"")))));
}