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

| Method | Endpoint                 | Description                         |
| ------ | ------------------------ | ----------------------------------- |
| GET    | `/products`              | Fetch all products                  |
| GET    | `/products/:id`          | Fetch a specific product by ID      |
| GET    | `/products?category=...` | Filter products by category (query) |
| POST   | `/products`              | Add a new product                   |

