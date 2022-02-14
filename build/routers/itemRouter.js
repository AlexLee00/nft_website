"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _itemController = require("../controllers/itemController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemRouter = _express["default"].Router();

itemRouter.get("/:id([0-9a-f]{24})", _itemController.see);
itemRouter.get("/:id([0-9a-f]{24})/edit", _itemController.edit);
itemRouter.get("/:id([0-9a-f]{24})/remove", _itemController.remove);
itemRouter.get("/upload", _itemController.upload);
var _default = itemRouter;
exports["default"] = _default;