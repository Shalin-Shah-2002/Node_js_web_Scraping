const axios = require('axios');
const cheerio = require('cheerio');

const baseURL = "https://www.scrapingbee.com/"

async function scraping() {
    try {

        const { data } = await axios.get(baseURL,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                }
            }
        );
        const $ = cheerio.load(data);
        const statements = []


        // console.log(data);
        // console.log($(".block.mb-35.text-18").length);
        // console.log($(".mb-20.tracking-tight.leading-a26").length);
        const title = $(".mb-20.tracking-tight.leading-a26").text();

        $(".mb-20.tracking-tight.leading-a26").each((i, Element) => {
            statements.push($(Element).text().trim())

        })
        // console.log(statements);
        const jsonData = JSON.stringify(statements, null, 2);
        console.log(jsonData);

        // console.log(title.trim());
        // $(".block.mb-35.text-18").each((i, element) => {
        //     console.log($(element).text());
        // });




    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

scraping()