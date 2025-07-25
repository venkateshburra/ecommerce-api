import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/products', productRoutes);

app.listen(port, () => console.log(`✅ Server running at http://localhost:${port}`));
