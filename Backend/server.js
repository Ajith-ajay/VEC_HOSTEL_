const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/db');
const session = require('./config/session');

// Importing route files
const loginRoute = require('./routes/auth');
const studentRequestRoute = require('./routes/studentRoutes/request');
const studentPreRequestRoute = require('./routes/studentRoutes/preRequest');
const studentProfileRoute = require('./routes/studentRoutes/studentProfile');
const studentVacateRoute = require('./routes/studentRoutes/vacate');
const securityRoute = require('./routes/securityRoute/security');
const wardenDetailsRoute = require('./routes/wardenRoutes/sidebar');
const wardenAttendanceRoute = require('./routes/wardenRoutes/attendance');
const wardenRequestRoute = require('./routes/wardenRoutes/request');
const wardenStudentRoute = require('./routes/wardenRoutes/studentData');
const wardenAnalysisRoute = require('./routes/wardenRoutes/analysis');
const superiorAnalysisRoute = require('./routes/superiorRoute/analysis');
const superiorAttendanceRoute = require('./routes/superiorRoute/attendance');
const superiorRequestRoute = require('./routes/superiorRoute/request');
const superiorStudentRoute = require('./routes/superiorRoute/superiorStudent');
const superiorWardensProfileRoute = require('./routes/superiorRoute/wardensprofile');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(session);

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api', loginRoute);
app.use('/api', studentRequestRoute);
app.use('/api', studentPreRequestRoute);
app.use('/api', studentProfileRoute);
app.use('/api', studentVacateRoute);
app.use('/api', securityRoute);
app.use('/api', wardenDetailsRoute);
app.use('/api', wardenAttendanceRoute);
app.use('/api', wardenRequestRoute);
app.use('/api', wardenStudentRoute);
app.use('/api', wardenAnalysisRoute);
app.use('/api', superiorAnalysisRoute);
app.use('/api', superiorAttendanceRoute);
app.use('/api', superiorRequestRoute);
app.use('/api', superiorStudentRoute);
app.use('/api', superiorWardensProfileRoute);

app.get('/', (req, res) => {
    res.send("Welcome to the Node.js MongoDB API!");
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
