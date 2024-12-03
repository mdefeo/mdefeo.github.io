import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from our server!');
});

app.listen(8080, () => {
  console.log('server listening on port 8080')
})

