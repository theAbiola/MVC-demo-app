import express from "express";
import env from "dotenv";
import homeRoute from "./routes/homeRoute.js";
import navRoutes from "./routes/navRoutes.js"

const app = express();
const port = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", homeRoute);
app.use("/nav", navRoutes);


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})