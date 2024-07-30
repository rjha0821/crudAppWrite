// server.mjs
import express from 'express';
import { databases } from './appwrite.mjs';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4000',
}));
app.use(express.json());

const databaseId = process.env.DATABASE_ID;
const collectionId = process.env.COLLECTION_ID;

//create
app.post('/create', async (req, res) => {
  try {
    const { fruitName, prize } = req.body;
    if (!fruitName || !prize) {
      return res.status(400).json({ error: 'Fruit name and prize are required.' });
    }
    
    const document = await databases.createDocument(
      databaseId,
      collectionId,
      'unique()', // Generates a unique ID for the document
      {
        fruitName,
        prize,
      }
    );
    console.log('Document created:', document); // Debug log
    res.status(201).json(document);
  } catch (error) {
    console.error('Error creating document:', error.message); // Log the error message
    res.status(500).json({ error: error.message });
  }
});

// Read
app.get('/read/:id', async (req, res) => {
  try {
    const document = await databases.getDocument(databaseId, collectionId, req.params.id);
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Read all documents
app.get('/read', async (req, res) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId);
    res.status(200).json(response.documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put('/update/:id', async (req, res) => {
  try {
    const { fruitName, prize } = req.body;
    if (!fruitName || !prize) {
      return res.status(400).json({ error: 'Fruit name and prize are required.' });
    }

    const document = await databases.updateDocument(
      databaseId,
      collectionId,
      req.params.id, // Document ID from URL
      {
        fruitName,
        prize, // Ensure this matches your data schema
      }
    );
    console.log('Document updated:', document); // Debug log
    res.status(200).json(document);
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete
app.delete('/delete/:id', async (req, res) => {
  try {
    await databases.deleteDocument(databaseId, collectionId, req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
