"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _itemController = require("../controllers/itemController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get("/", _itemController.main);
globalRouter.get("/join", _userController.join);
globalRouter.get("/login", _userController.login);
globalRouter.get("/register", _userController.register);
globalRouter.get("/wallet", _userController.wallet);
globalRouter.get("/explore", _itemController.explore);
globalRouter.get("/detail", _itemController.detail);
globalRouter.get("/rankings", _itemController.rankings);
globalRouter.get("/news", _itemController.news);
globalRouter.get("/gallery", _itemController.gallery);
globalRouter.get("/contact", _itemController.contact);
globalRouter.get("/help", _itemController.help);
var _default = globalRouter;
exports["default"] = _default;