# Project API

A Node.js and Express-based API to showcase and manage projects for a portfolio.

## Features

- **Retrieve Projects**: View all portfolio projects via a GET request.
- **Add New Projects**: Add projects dynamically via a POST request.
- **Delete Projects**: Delete a project by its ID via a DELETE request.
- **In-Memory Storage**: Projects are stored temporarily during runtime.

## API Endpoints

### 1. Get All Projects
**GET** `/projects`  
- Retrieves all projects from the API.

**Example Response**:
```json
[
  {
    "id": 1,
    "title": "The Block",
    "description": "A single-page website for a construction company.",
    "technologies": ["React", "Tailwind CSS"],
    "url": "https://the-block-cc.vercel.app/",
    "repoLink": "https://github.com/Ayoub-Benanberg/The-Block",
    "image": {
      "src": "https://i.ibb.co/n7pBYhs/block.png",
      "alt": "The-Block"
    }
  }
]
```

### 2. Add a New Project
**POST** `/projects`  
- Adds a new project to the API.

**Request Body** (JSON):
```json
{
  "title": "New Project",
  "description": "Description of the project",
  "technologies": ["HTML", "CSS"],
  "url": "https://example.com",
  "repoLink": "https://github.com/example",
  "image": {
    "src": "https://example.com/image.png",
    "alt": "Project Image Alt Text"
  }
}
```

**Example Response**:
```json
{
  "message": "Project added successfully",
  "project": {
    "id": 4,
    "title": "New Project",
    "description": "Description of the project",
    "technologies": ["HTML", "CSS"],
    "url": "https://example.com",
    "repoLink": "https://github.com/example",
    "image": {
      "src": "https://example.com/image.png",
      "alt": "Project Image Alt Text"
    }
  }
}
```

### 3. Delete a Project
**DELETE** `/projects/:id`  
- Deletes a project by its `id`.

**Example Request**:
```bash
DELETE /projects/1
```

**Example Response (Success)**:
```json
{
  "message": "Project deleted successfully",
  "id": 1
}
```

**Example Response (Project Not Found)**:
```json
{
  "message": "Project not found",
  "id": 1
}
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayoub-Benanberg/Project-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Project-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Access the API at `http://localhost:8080`.

## Deployment

This API is deployed on [Render](https://render.com).  
Access it live: [https://my-personal-portfolio-project-api.onrender.com](https://my-personal-portfolio-project-api.onrender.com)

## Technologies Used

- Node.js
- Express.js

## Author

**Ayoub Benanberg**  
[GitHub](https://github.com/Ayoub-Benanberg)  
[Portfolio](https://benanberg-ayoub.vercel.app/)
