const express = require('express');
const cors = require('cors');
const db = require('./firebase');  // Import Firestore

const { collection, addDoc, getDocs, query, orderBy, doc, deleteDoc } = require('firebase/firestore');

const app = express();
const PORT = 8080;

// Allow all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// GET route to retrieve all projects from Firebase, sorted by createdAt
app.get('/projects', async (req, res) => {
    try {
        // Query Firestore and order by 'createdAt' in descending order (newest first)
        const projectsQuery = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(projectsQuery);
        const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// POST route to add a new project
app.post('/projects', async (req, res) => {
    const { title, description, technologies, url, image, repoLink } = req.body;

    // Ensure all required fields are provided
    if (!title || !description || !technologies || !repoLink || !image.src) {
        return res.status(400).send({ message: "All fields are required!" });
    }

    try {
        // Add the createdAt field with the current timestamp
        const docRef = await addDoc(collection(db, 'projects'), {
            title,
            description,
            technologies,
            url,
            repoLink,
            image,
            createdAt: new Date()  // Add createdAt field with the current time
        });
        res.status(201).send({ message: "Project added successfully", id: docRef.id });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// DELETE route to remove a project by ID
app.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const projectDoc = doc(db, 'projects', id);
        await deleteDoc(projectDoc);
        res.status(200).send({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
