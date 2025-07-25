---

#  E-commerce Backend API

This is a simple backend API built using **Node.js** and **Express.js** for an e-commerce platform. It allows users to fetch all products, get a product by ID, filter by category, and add new products.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Environment Variables:** Managed via `.env` + `dotenv`

---

## Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/venkateshburra/ecommerce-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory with the following content:

```
PORT=3000
```

### 4. Start the Server

```bash
npm start
# or, if using nodemon
npm run dev
```

### 5.  API Endpoints

| Method | Endpoint                 | Description                         |
| ------ | ------------------------ | ----------------------------------- |
| GET    | `/products`              | Fetch all products                  |
| GET    | `/products/:id`          | Fetch a specific product by ID      |
| GET    | `/products?category=...` | Filter products by category (query) |
| POST   | `/products`              | Add a new product                   |

