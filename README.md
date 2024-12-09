# Project API

A Node.js and Express-based API to showcase and manage projects for a portfolio, with Firebase Firestore for data storage.

## Features

- **Retrieve Projects**: View all portfolio projects via a GET request, sorted by the newest project first.
- **Add New Projects**: Add projects dynamically via a POST request.
- **Firebase Storage**: Projects are stored in Firebase Firestore, providing persistent storage.
- **Sorted by Date**: Projects are automatically sorted by creation date (`createdAt`), with the newest project displayed first.
- **Delete Projects**: Remove projects from the portfolio with a DELETE request.

## API Endpoints

### 1. Get All Projects
**GET** `/projects`  
- Retrieves all projects from the API, sorted by the `createdAt` field in descending order (newest first).

**Example Response**:
```json
[
  {
    "id": "project_id_1",
    "title": "The Block",
    "description": "A single-page website for a construction company.",
    "technologies": ["React", "Tailwind CSS"],
    "url": "https://the-block-cc.vercel.app/",
    "repoLink": "https://github.com/Ayoub-Benanberg/The-Block",
    "image": {
      "src": "https://i.ibb.co/n7pBYhs/block.png",
      "alt": "The-Block"
    },
    "createdAt": "2024-12-09T12:00:00Z"
  }
]
```

### 2. Add a New Project
**POST** `/projects`  
- Adds a new project to the API and stores it in Firebase Firestore.

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
    "id": "new_project_id",
    "title": "New Project",
    "description": "Description of the project",
    "technologies": ["HTML", "CSS"],
    "url": "https://example.com",
    "repoLink": "https://github.com/example",
    "image": {
      "src": "https://example.com/image.png",
      "alt": "Project Image Alt Text"
    },
    "createdAt": "2024-12-09T12:00:00Z"
  }
}
```

### 3. Delete a Project
**DELETE** `/projects/:id`  
- Deletes a project from the API by ID.

**Request**:
- **URL Parameter**: `id` (The ID of the project to delete)

**Example Response**:
```json
{
  "message": "Project deleted successfully"
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
- Firebase Firestore

## Author

**Ayoub Benanberg**  
[GitHub](https://github.com/Ayoub-Benanberg)  
[Portfolio](https://benanberg-ayoub.vercel.app/)
