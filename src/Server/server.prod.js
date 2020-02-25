import path from 'path';
import express from 'express';

const app = express();
const DIST_DIR = __dirname;
const HTML = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

app.get("/", (request, response) => {
  response.sendFile(HTML);
});

const PORT = process.env.PORT || 8080;
const listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
