import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = 5001; // Hardcoded to 5001 to avoid EADDRINUSE

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'FUTX STORE API is running' });
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Checkout Mock endpoint
app.post('/api/checkout', async (req, res) => {
  // In a real app, this creates a Stripe Checkout Session
  res.status(200).json({ message: 'Checkout simulated successfully', url: '/success' });
});

app.listen(PORT, () => {
  console.log(`FUTX Backend is running on port ${PORT}`);
});
