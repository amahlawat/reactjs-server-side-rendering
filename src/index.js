import 'babel-polyfill';
import renderer from './helper/renderer';
import express from 'express';

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
//  const promises = 
  res.send("ssr project");
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});