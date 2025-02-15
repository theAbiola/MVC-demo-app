import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import homeRoute from "./routes/homeRoute.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"

const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homeRoute);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})