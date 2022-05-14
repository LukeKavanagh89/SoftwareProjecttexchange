import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';
import userRoutes from './routes/users.js';

const port = 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',  userRoutes);

app.get('/', (request, response) => {
    response.send('Greetings from T-Exchange');
})

const CONNECTION_URL = 'mongodb+srv://texchange:texchange123@cluster0.bkdh0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is working on port: http://localhost:${PORT}`)))
    .catch((error) => console.log (error.message));

mongoose.set('useFindAndModify', false);