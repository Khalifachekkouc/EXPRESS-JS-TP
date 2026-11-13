# Server Configuration
PORT=3000

# MongoDB Configuration
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password_here
DB_NAME=express_tp_db

# Option 1: MongoDB Atlas (Cloud) URI
MONGO_URI=mongodb+srv://<DB_USER>:<DB_PASSWORD>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority

# Option 2: Local MongoDB URI
# MONGO_URI=mongodb://localhost:27017/express_tp_db