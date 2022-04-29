//imports
const axios = require("axios");
const express = require("express");
const app = express();
// const data = require("./moviedatabase")s
const port  = process.env.PORT || 5000;
const baseURL = "https://ghibliapi.herokuapp.com"

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"));
app.use('/assets', express.static(__dirname + "public/assets"));
app.use('/script', express.static(__dirname + "/public/scripts"));

//setup view engine
app.set("view engine", "ejs");

// const routes = require("./src/routes")
// app.use("/", routes);

//routes
app.get("/", async(req,res) => {
    try {
        const data = await axios.get(`${baseURL}/films`)
        const movies = await data.data
        // res.json(data.data)
        res.render("index", {movies:movies});
    } catch (error) {
        
    }
})

app.get("/movie/:id", async(req,res) => {
    const movieID = req.params.id
    try {
        const data = await axios.get(`${baseURL}/films/${movieID}`);
        const movie = await data.data;
        res.render("moviePage", {movie:movie})
    } catch (error) {
        
    }
})

app.get("/watch/:id", async(req,res) => {
    const movieID = req.params.id
    try {
        const data = await axios.get(`${baseURL}/films/${movieID}`);
        const movie = await data.data;
        res.render("movieWatch", {movie:movie})
    } catch (error) {
        
    }
})


app.listen(port, () => console.log("listening on port " + port));