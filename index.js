const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample in-memory data store
const projects = [
    {
        id: 1,
        title: "The Block",
        description: "A responsive single-page website for a construction company, showcasing 30+ years of expertise. It highlights services, projects, achievements, and provides an intuitive contact form, offering a professional and user-friendly experience.",
        technologies: ["React", "Tailwind CSS"],
        url: "https://the-block-cc.vercel.app/",
        repoLink: "https://github.com/Ayoub-Benanberg/The-Block",
        image: {
            src: "https://i.ibb.co/n7pBYhs/block.png",
            alt: "The-Block"
        },
    },
    {
        id: 2,
        title: "Homes First",
        description: "Homes First is designed to cater to the unique needs of every family, offering tailored cleaning experiences that redefine cleanliness. Our professional team ensures every corner of your home shines with bespoke luxury.",
        technologies: ["React", "Tailwind CSS"],
        url: "https://the-block-cc.vercel.app/",
        repoLink: "https://github.com/Ayoub-Benanberg/Home-First",
        image: {
            src: "https://i.ibb.co/HGZctZQ/home.png",
            alt: "Homes-First",
        },
    },
    {
        id: 3,
        title: "Snazzy Store",
        description: "E-Commerce website with a responsive design using HTML, CSS, and Bootstrap.",
        technologies: ["HTML", "CSS", "BOOTSTRAP"],
        url: "https://ayoub-benanberg.github.io/Snazzy-Store/",
        repoLink: "https://github.com/Ayoub-Benanberg/Snazzy-Store",
        image: {
            src: "https://i.ibb.co/KwsghKP/snazzy.png",
            alt: "Snazzy",
        },
    }
];

// GET route to retrieve all projects
app.get('/projects', (req, res) => {
    res.status(200).send(projects);
});

// POST route to add a new project
app.post('/projects', (req, res) => {
    const { title, description, technologies, url, image, repoLink } = req.body;

    // Validation
    if (!title || !description || !technologies || !url || !repoLink || !image.src) {
        return res.status(400).send({ message: "All fields are required!" });
    }

    // Generate a new unique ID
    const newId = projects.length ? projects[projects.length - 1].id + 1 : 1;

    // Create the new project
    const newProject = {
        id: newId,
        title,
        description,
        technologies,
        url,
        repoLink,
        image,
    };

    // Add to the data store
    projects.push(newProject);

    res.status(201).send({
        message: "Project added successfully",
        project: newProject,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
