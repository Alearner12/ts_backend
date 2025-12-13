# TypeScript Backend Journey 🚀

A comprehensive learning project documenting my backend development journey with TypeScript, including database integration and server backend implementation.

## 📚 Overview

This project demonstrates modern backend development practices using:
- **TypeScript** for type-safe code
- **Node.js & Express.js** for server framework
- **MongoDB** with Mongoose for NoSQL database
- **PostgreSQL** with pg library for SQL database
- **RESTful API** design patterns

## 🛠️ Technologies Used

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Databases**:
  - MongoDB (via Mongoose)
  - PostgreSQL (via pg)
- **Dev Tools**: 
  - ts-node (TypeScript execution)
  - nodemon (auto-reload)
  - dotenv (environment variables)

## 📁 Project Structure

```
ts_backend/
├── src/
│   ├── config/          # Database configurations
│   │   ├── mongodb.ts
│   │   └── postgresql.ts
│   ├── controllers/     # Request handlers
│   │   └── userController.ts
│   ├── models/          # Data models
│   │   └── User.ts
│   ├── routes/          # API routes
│   │   └── userRoutes.ts
│   ├── middleware/      # Custom middleware
│   │   └── index.ts
│   ├── utils/           # Utility functions
│   └── index.ts         # Application entry point
├── dist/                # Compiled JavaScript (generated)
├── .env.example         # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json        # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, if using MongoDB)
- PostgreSQL (optional, if using PostgreSQL)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Alearner12/ts_backend.git
cd ts_backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. (Optional) Set up databases:
   - For MongoDB: Start MongoDB service
   - For PostgreSQL: Create database and update credentials in .env

### Running the Application

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Build for production**:
```bash
npm run build
```

**Run production build**:
```bash
npm start
```

The server will start at `http://localhost:3000`

## 📡 API Endpoints

### Base Routes
- `GET /` - Welcome message and API information
- `GET /health` - Health check endpoint

### User Routes (MongoDB Example)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Example API Usage

**Create a new user:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }'
```

**Get all users:**
```bash
curl http://localhost:3000/api/users
```

**Get user by ID:**
```bash
curl http://localhost:3000/api/users/<user_id>
```

**Update user:**
```bash
curl -X PUT http://localhost:3000/api/users/<user_id> \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 26
  }'
```

**Delete user:**
```bash
curl -X DELETE http://localhost:3000/api/users/<user_id>
```

## 🗄️ Database Integration

### MongoDB (Mongoose)

The project includes MongoDB integration using Mongoose ODM. To use MongoDB:

1. Uncomment the MongoDB connection in `src/index.ts`:
```typescript
await connectMongoDB();
```

2. Configure MongoDB URI in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/ts_backend
```

### PostgreSQL (pg)

The project includes PostgreSQL integration using the pg library. To use PostgreSQL:

1. Uncomment the PostgreSQL connection in `src/index.ts`:
```typescript
await connectPostgreSQL();
```

2. Configure PostgreSQL credentials in `.env`:
```
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=ts_backend
PG_USER=postgres
PG_PASSWORD=your_password
```

## 📖 Learning Journey

This project covers:

### 1. TypeScript Basics
- Type annotations and interfaces
- Strict type checking
- TypeScript configuration

### 2. Express.js Backend
- Setting up Express server with TypeScript
- Middleware implementation
- Route handling
- Error handling

### 3. Database Integration
- **MongoDB**: 
  - Schema design with Mongoose
  - CRUD operations
  - Validation and indexes
- **PostgreSQL**:
  - Connection pooling
  - Query execution

### 4. RESTful API Design
- Resource-based URLs
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes
- JSON responses

### 5. Best Practices
- Environment variable management
- Error handling
- Request logging
- Code organization and structure
- Type safety

## 🔧 Configuration

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2020
- Module: CommonJS
- Strict mode enabled
- Source maps for debugging

### Development Setup
- **nodemon**: Watches for file changes
- **ts-node**: Executes TypeScript directly
- Auto-reload on save

## 🤝 Contributing

This is a personal learning project, but suggestions and improvements are welcome!

## 📝 License

ISC

## 🎯 Next Steps

Future enhancements to explore:
- [ ] Add authentication (JWT)
- [ ] Implement input validation
- [ ] Add unit and integration tests
- [ ] Add API documentation (Swagger)
- [ ] Implement caching (Redis)
- [ ] Add Docker containerization
- [ ] Deploy to cloud platform
- [ ] Add more database operations
- [ ] Implement pagination and filtering
- [ ] Add logging system (Winston)

## 📚 Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

⭐ **Happy Learning!** Feel free to explore, modify, and learn from this project.
