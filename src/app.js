
const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/enrollments", enrollmentRoutes);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorMiddleware);

module.exports = app;
