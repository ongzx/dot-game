import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack.dev.config";

const app = express();
const DIST_DIR = __dirname;
const HTML = path.join(DIST_DIR, "index.html");
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(DIST_DIR));

app.get("/", (request, response, next) => {
  compiler.outputFileSystem.readFile(HTML, (err, result) => {
    if (err) {
      return next(err);
    }
    response.set("content-type", "text/html");
    response.send(result);
    response.end();
  });
});

const PORT = process.env.PORT || 8080;
const listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
