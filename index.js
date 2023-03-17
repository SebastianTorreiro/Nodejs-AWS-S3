import express from "express";
import fileUpload from "express-fileupload";



const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));

app.get("/", (req, res) =>{
    res.json("welcome to the server")
})

app.post("/files", (req, res) =>{
    console.log(req.files)
    res.json("upload file")
})

app.listen(3000)
console.log("listen on port 3000")
