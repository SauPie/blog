import express from 'express';
import bodyParser from 'body-parser';
//Import MongoDB tools
import { MongoClient } from 'mongodb';
//Import build folder
import path from 'path';

// - - - - - - - - - - - - -

const app = express();

//Added before move to server for the build version of front-end
app.use(express.static(path.join(__dirname, '/build')));

//This Parse JSON that comes from API (POSTMAN THISCASE)
app.use(bodyParser.json());

//This function was created to remove repetion of calling MongoDB in GET, UPVOTE, COMMENT functions.
const withDB = async (operations, res) => {
  try {
      const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
      const db = client.db('my-blog');

      await operations(db);

      client.close();
  } catch (error) {
      res.status(500).json({ message: 'Error connecting to db', error });
  }

}


//Needed for MongoDB setup (MongoDB is read from the function withDB )
app.get('/api/articles/:name', async (req, res) => {
      withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
      }, res);
});


//Async is needed
//Try colum is

//UP VOTE COMMAND FOR ARTICLES (MongoDB getdata > update > upload)
app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

//Add comments
app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

//All requests that are caught any api routes shoud be pass to our app /client can go trough url right
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));

//GET HELLOU REQUEST AND SEND HELLO REQUEST
app.get('/hello', (req, res) => res.send('Hellou there you reached port 8000'));
//app.post('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
//app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
