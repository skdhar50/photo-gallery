const auth = require("json-server-auth");
const jsonServer = require("json-server");
const express = require("express");
const http = require("http");
const compression = require("compression");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

app.db = router.db;

app.use(middlewares);

const rules = auth.rewriter({
	users: 640,
	photos: 660,
	feedbacks: 660,
});

app.use(rules);
app.use(auth);
app.use(cors());
app.use(router);
app.use(express.static("public"));
app.use(compression);

app.listen(port);
