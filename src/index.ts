// create server and all other basic configurations
import express from "express";
import userRoutes from "./routes/userRoutes";
import twitterRoutes from "./routes/twitterRoutes";
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/tweets", twitterRoutes);



app.listen(3000, () => {
  console.log("Server is running");
});
