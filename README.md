# Book Management API

## 📌 Overview
This project is a **RESTful API** for managing a collection of books. It includes **CRUD operations**, integrates with **MongoDB**, and fetches weather data from the **OpenWeather API**. The API is built using **Node.js, Express, and Mongoose**, and is deployed on **Heroku**.

---

## 🚀 Features
- **Book Management** (Create, Read, Update, Delete books)
- **Weather API Integration** (Fetch weather data by city)
- **Validation & Error Handling**
- **MongoDB Atlas for persistent data storage**
- **Deployed on Heroku**
- **API Documentation via Postman**

---

## 🛠 Technologies Used
- **Node.js** - Backend framework
- **Express.js** - API framework
- **MongoDB Atlas** - Database
- **Mongoose** - ODM for MongoDB
- **Axios** - Fetching external API data
- **dotenv** - Environment variable management
- **Heroku** - Deployment platform

---

## 📂 Project Structure
```
📁 assignment-web
│── 📁 controllers
│   ├── bookService.js      # Handles book-related logic
│   ├── weatherService.js   # Handles weather API integration
│
│── 📁 models
│   ├── books.js            # Mongoose book schema
│
│── 📁 routes
│   ├── bookRouter.js       # Book API routes
│   ├── weatherRouter.js    # Weather API routes
│
│── .env                    # Environment variables (API keys, MongoDB URI)
│── main.js                 # Main application file
│── package.json            # Dependencies & scripts
│── Procfile                # Heroku startup instructions
│── postman_collection.json # API documentation
```

---

## 📌 API Endpoints
### 📚 Books API
| Method | Endpoint       | Description              |
|--------|--------------|--------------------------|
| GET    | /books        | Fetch all books         |
| POST   | /books        | Add a new book          |
| PUT    | /books/:id    | Update book details     |
| DELETE | /books/:id    | Delete a book           |

#### Example Request (POST /books)
```json
{
  "title": "1984",
  "author": "George Orwell",
  "year": 1949,
  "genre": "Dystopian"
}
```

### 🌤️ Weather API
| Method | Endpoint        | Description               |
|--------|---------------|---------------------------|
| GET    | /weather/:city | Fetch weather for a city |

#### Example Response (GET /weather/London)
```json
{
  "city": "London",
  "temperature": "12°C",
  "condition": "Cloudy"
}
```

---

## 🔧 Installation & Setup
### **1️⃣ Clone Repository**
```sh
git clone https://github.com/your-repo/book-api.git
cd book-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_api_key
```

### **4️⃣ Start the Server**
```sh
npm start
```
Server will run at `http://localhost:5000/`

---
