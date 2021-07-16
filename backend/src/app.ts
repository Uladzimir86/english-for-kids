import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import fs from 'fs';
import cards from './cards';

// const filePath = 'c:/2-1.html';

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(express.static('public'));
const port = 3001;

app.get('/main', (req, res) => {
  // const { id } = req.params;
  const categories = cards;
  // res.send(categories);
  res.json(categories);
  console.log('main');
});
app.post('/login', (req, res) => {
  // const { id } = req.params;
  const user = req.body as {l: string, p: string};
  if (user.l === 'admin' && user.p === 'admin') res.status(200).end();
  else res.status(418).send('Wrong login or password!!!');
});

app.route('/categories/:id')
  .put((req, res) => {
    const { id } = req.params;
    let category: string;
    const promise = new Promise((resolve) => {
      category = req.body.category;
      if (req.body.category) resolve(req.body.category);
    });
    promise.then(() => {
      cards[0].splice(Number(id), 1, category);
      res.json(cards);
      console.log(cards[0]);
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    cards[0].splice(Number(id), 1);
    cards.splice((Number(id) + 1), 1);
    res.json(cards);
    // fs.unlinkSync(filePath);
    console.log('delete');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
