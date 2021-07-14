import express from 'express';
import cors from 'cors';
import cards from './cards';

const app = express();
app.use(cors());
const port = 3001;

app.get('/:id', (req, res) => {
  // const { id } = req.params;
  const categories = cards;
  // res.send(categories);
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
