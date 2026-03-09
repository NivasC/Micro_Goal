# 🎯 Micro Goal Tracker API

A simple **Backend API** for tracking daily micro goals.  
This project allows users to create, update, delete, and manage small goals using a REST API.

Built as part of a **Micro Goal Backend Project** using Node.js and Express.

---

## 🚀 Features

✅ Create new micro goals  
✅ View all goals  
✅ Update goal status  
✅ Delete goals  
✅ RESTful API structure  
✅ Backend built using Express.js  

---

## 🛠️ Technologies Used

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 🔗 Mongoose
- 🌐 REST API
- 📦 npm

---

## 📂 Project Structure
MicroProjectApi
│
├── Backend
│
├── routes
│
├── controllers
│
├── models
│
│
├── index.js
│
└── README.md



---json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

---
## 💾 MongoDB Stored Data Example

When a user registers using the API, the data is stored in **MongoDB**.

Example document stored in the database:

{
  "_id": {
    "$oid": "69ae45728e6308f6beef7d2a"
  },
  "name": "JhoneDoe",
  "email": "jhondoe@example.com",
  "password": "$2b$10$TUMEPxry08tGz61Cy7HyuOPcQu0AcgimBu0sR6FDRhdzb17n71Jc6",
  "__v": 0
}
---

## ⚙️ Installation

Clone the repository


git clone https://github.com/NivasC/Micro-Goal.git


Go to the project folder


cd Micro-Goal


Install dependencies


npm install


Run the server


npm start


---

## 🔌 Example API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| GET | /goals | Get all goals |
| POST | /goals | Create a new goal |
| PUT | /goals/:id | Update goal |
| DELETE | /goals/:id | Delete goal |

---

## 📸 Example Goal Object

```json
{
  "title": "Complete coding practice",
  "status": "pending",
  "createdAt": "2026-03-09"
}
