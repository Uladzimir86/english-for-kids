"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var cards_1 = __importDefault(require("./cards"));
// const filePath = 'c:/2-1.html';
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.static('public'));
var port = 3001;
app.get('/main', function (req, res) {
    // const { id } = req.params;
    var categories = cards_1.default;
    // res.send(categories);
    res.json(categories);
    console.log('main');
});
app.post('/login', function (req, res) {
    // const { id } = req.params;
    var user = req.body;
    if (user.l === 'admin' && user.p === 'admin')
        res.status(200).end();
    else
        res.status(418).send('Wrong login or password!!!');
});
app.route('/categories/:id')
    .put(function (req, res) {
    var id = req.params.id;
    var category;
    var promise = new Promise(function (resolve) {
        category = req.body.category;
        if (req.body.category)
            resolve(req.body.category);
    });
    promise.then(function () {
        cards_1.default[0].splice(Number(id), 1, category);
        res.json(cards_1.default);
        console.log(cards_1.default[0]);
    });
})
    .delete(function (req, res) {
    var id = req.params.id;
    cards_1.default[0].splice(Number(id), 1);
    cards_1.default.splice((Number(id) + 1), 1);
    res.json(cards_1.default);
    // fs.unlinkSync(filePath);
    console.log('delete');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
