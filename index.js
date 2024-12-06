const express = require('express');
const app = express();
const PORT = 8080;

const cors = require('cors');

// Allow all origins (you can specify specific origins for better security)
app.use(cors());


// Middleware to parse JSON request bodies
app.use(express.json());

// Sample in-memory data store
const projects = [
    {
        id: 1,
        title: "The Block",
        description: {
            en: "A responsive website for a construction company, showcasing services, projects, and achievements with a professional and user-friendly design.",
            fr: "Un site web responsive pour une entreprise de construction, mettant en valeur les services, projets et réalisations avec un design professionnel et convivial."
        },
        technologies: [
            {
                name: "React",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
                    alt: "React-Logo",
                }
            },
            {
                name: "Tailwind CSS",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/tailwindcss-3521648-2945278.png",
                    alt: "Tailwind-CSS-Logo",

                }
            }
        ],
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
        description: {
            en: "A luxury cleaning service website offering tailored experiences, ensuring every home corner shines with bespoke cleanliness.",
            fr: "Un site web de service de nettoyage haut de gamme, offrant des expériences personnalisées pour garantir une propreté impeccable à chaque foyer."
        },
        technologies: [
            {
                name: "React",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
                    alt: "React-Logo",

                }
            },
            {
                name: "Tailwind CSS",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/tailwindcss-3521648-2945278.png",
                    alt: "Tailwind-CSS-Logo",

                }
            }
        ],
        url: "https://home-first.vercel.app/",
        repoLink: "https://github.com/Ayoub-Benanberg/Home-First",
        image: {
            src: "https://i.ibb.co/HGZctZQ/home.png",
            alt: "Homes-First"
        },
    },
    {
        id: 3,
        title: "Snazzy Store",
        description: {
            en: "E-Commerce website with a responsive built using HTML, CSS, and Bootstrap.",
            fr: "Un site e-commerce au design responsive, développé avec HTML, CSS et Bootstrap."
        },
        technologies: [
            {
                name: "HTML",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png",
                    alt: "HTML-Logo",

                }
            },
            {
                name: "CSS",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png",
                    alt: "CSS-Logo",

                }
            },
            {
                name: "Bootstrap",
                image: {
                    src: "https://cdn.iconscout.com/icon/free/png-256/bootstrap-226077.png",
                    alt: "Bootstrap-Logo",

                }
            }
        ],
        url: "https://ayoub-benanberg.github.io/Snazzy-Store/",
        repoLink: "https://github.com/Ayoub-Benanberg/Snazzy-Store",
        image: {
            src: "https://i.ibb.co/KwsghKP/snazzy.png",
            alt: "Snazzy"
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
    if (!title || !description || !technologies || !repoLink || !image.src) {
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


// DELETE route to remove a project by ID
app.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    // Find the index of the project to be deleted
    const projectIndex = projects.findIndex(project => project.id === parseInt(id));

    if (projectIndex === -1) {
        return res.status(404).send({ message: "Project not found!" });
    }

    // Remove the project from the data store
    const deletedProject = projects.splice(projectIndex, 1);

    res.status(200).send({
        message: "Project deleted successfully",
        project: deletedProject[0],
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
