"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EbenezerTimeline;

var _react = _interopRequireDefault(require("react"));

var _Timeline = _interopRequireDefault(require("@mui/lab/Timeline"));

var _TimelineItem = _interopRequireDefault(require("@mui/lab/TimelineItem"));

var _TimelineSeparator = _interopRequireDefault(require("@mui/lab/TimelineSeparator"));

var _TimelineConnector = _interopRequireDefault(require("@mui/lab/TimelineConnector"));

var _TimelineContent = _interopRequireDefault(require("@mui/lab/TimelineContent"));

var _TimelineOppositeContent = _interopRequireDefault(require("@mui/lab/TimelineOppositeContent"));

var _TimelineDot = _interopRequireDefault(require("@mui/lab/TimelineDot"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function EbenezerTimeline() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Timeline["default"], {
    position: "alternate"
  }, /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    align: "right",
    variant: "body2",
    color: "text.secondary"
  }, "9:30 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Eat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need strength"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    variant: "body2",
    color: "text.secondary"
  }, "10:00 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Code"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because it's awesome!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  })), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Sleep"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need rest"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  }), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Repeat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because this is the life you love!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    align: "right",
    variant: "body2",
    color: "text.secondary"
  }, "9:30 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Eat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need strength"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    variant: "body2",
    color: "text.secondary"
  }, "10:00 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Code"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because it's awesome!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  })), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Sleep"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need rest"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  }), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Repeat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because this is the life you love!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    align: "right",
    variant: "body2",
    color: "text.secondary"
  }, "9:30 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Eat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need strength"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    variant: "body2",
    color: "text.secondary"
  }, "10:00 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Code"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because it's awesome!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  })), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Sleep"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need rest"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  }), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Repeat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because this is the life you love!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    align: "right",
    variant: "body2",
    color: "text.secondary"
  }, "9:30 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Eat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need strength"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineOppositeContent["default"], {
    sx: {
      m: "auto 0"
    },
    variant: "body2",
    color: "text.secondary"
  }, "10:00 am"), /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Code"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because it's awesome!"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  })), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Sleep"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because you need rest"))), /*#__PURE__*/_react["default"].createElement(_TimelineItem["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineSeparator["default"], null, /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], {
    sx: {
      bgcolor: "secondary.main"
    }
  }), /*#__PURE__*/_react["default"].createElement(_TimelineDot["default"], {
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_TimelineConnector["default"], null)), /*#__PURE__*/_react["default"].createElement(_TimelineContent["default"], {
    sx: {
      py: "12px",
      px: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: "span"
  }, "Repeat"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Because this is the life you love!")))));
}