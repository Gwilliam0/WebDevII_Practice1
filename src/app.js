import express from 'express';
import user from './routes/user.js';
import dbConnect from './config/db.js';
import morgan from 'morgan';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

await dbConnect();
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});

app.use('/api/user', user);

export default app;