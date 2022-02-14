"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _itemRouter = _interopRequireDefault(require("./routers/itemRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var logger = (0, _morgan["default"])("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", _globalRouter["default"]);
app.use("/items", _itemRouter["default"]);
app.use("/users", _userRouter["default"]);
var PORT = process.env.PORT || 7000;

var handleListening = function handleListening() {
  return console.log("\u2705 Server listenting on port http://localhost:".concat(PORT, " \uD83D\uDE80"));
};

app.listen(PORT, handleListening);
app.use("/static", _express["default"]["static"]("assets"));
app.use("/js", _express["default"]["static"]("js"));
app.use("/css", _express["default"]["static"]("css"));
app.use("/images", _express["default"]["static"]("images"));
app.use("/fonts", _express["default"]["static"]("fonts"));
var _default = app;
exports["default"] = _default;