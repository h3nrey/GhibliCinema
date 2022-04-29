const express = require("express");
const routes = express.Router();
const axios = require("axios");

routes.get("", async(req,res) => {
    try {
        const data = await axios.get(`${baseURL}/films`)
        const movies = await data.data
        // res.json(data.data)
        res.render("index", {movies:movies});
    } catch (error) {
        
    }
})

routes.get("/movie/:id", async(req,res) => {
    const movieID = req.params.id
    try {
        const data = await axios.get(`${baseURL}/films/${movieID}`);
        const movie = await data.data;
        res.render("moviePage", {movie:movie})
    } catch (error) {
        
    }
})

routes.get("/watch/:id", async(req,res) => {
    const movieID = req.params.id
    try {
        const data = await axios.get(`${baseURL}/films/${movieID}`);
        const movie = await data.data;
        res.render("movieWatch", {movie:movie})
    } catch (error) {
        
    }
})

module.exports = routes;