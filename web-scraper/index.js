const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const url = "https://fakestoreapi.com/";

async function scraping() {
    try {
        // Step:1 It fetches HTML content from website using axios
        const { data } = await axios.get(url);
        // Step:2 It loads HTML content in cheerio
        const $ = cheerio.load(data);

        // Step:3 It selects the element from HTML content
        const title = [];
        $('h3').each((i, element) => { title.push($(element).text()) });
        console.log(title);
    }


    catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

scraping()