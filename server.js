"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var forecast = __importStar(require("./controllers/weather_check"));
var app = express_1.default();
var PORT = process.env.PORT || 7777;
app.use(express_1.default.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/weather/:city/:state', forecast.checkCity, forecast.getTemp);
app.listen(PORT, function () {
    console.log('Listening on, ', PORT);
});
