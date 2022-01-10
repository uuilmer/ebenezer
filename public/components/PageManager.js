"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _HomePage = _interopRequireDefault(require("./HomePage"));

var _EventsPage = _interopRequireDefault(require("./EventsPage"));

var _EbenezerNav = _interopRequireDefault(require("./EbenezerNav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PAGES = new Map([["Casa", /*#__PURE__*/_react["default"].createElement(_HomePage["default"], null)], ["Eventos", /*#__PURE__*/_react["default"].createElement(_EventsPage["default"], null)], ["Contactenos", null]]);

var PageManager = /*#__PURE__*/function (_React$Component) {
  _inherits(PageManager, _React$Component);

  var _super = _createSuper(PageManager);

  function PageManager(props) {
    var _this;

    _classCallCheck(this, PageManager);

    _this = _super.call(this, props); // TODO: Try to handle the url in a more elegant way

    _defineProperty(_assertThisInitialized(_this), "state", {
      /*
        TODO: Make the default page a global constant
        and perhaps put all of the names from PAGES in
        a Strings file for easy update: Improves EbenezerNav.js
      */
      currentTab: "Casa"
    });

    if (PAGES.hasOwnProperty(window.location.pathname.split("/")[1])) {
      _this.state = {
        page: window.location.pathname.split("/")[1]
      };
    } else {
      window.history.pushState("", "", "/Casa");
    }

    return _this;
  }

  _createClass(PageManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageContent = PAGES.get(this.state.currentTab);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_EbenezerNav["default"], {
        currentTab: this.state.currentTab,
        tabs: PAGES,
        onChangeTab: function onChangeTab(newTab) {
          return _this2.setState({
            currentTab: newTab
          });
        }
      }), pageContent);
    }
  }]);

  return PageManager;
}(_react["default"].Component);

exports["default"] = PageManager;