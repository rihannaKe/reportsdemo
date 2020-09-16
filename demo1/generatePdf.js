const puppeteer = require('puppeteer');
const http = require('http');
const static = require('node-static');
const fileServer = new static.Server('./static');
const PORT = 8080;
// const url = `http://localhost:${PORT}/`;
const url = `https://thekevinscott.github.io/gatsby-remark-vega-example/hello-world/`;
const fsUrl = './reports/';


const generate_pdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const pdfConfig = {
        path: `${fsUrl}report.pdf`,
        format: 'A4',
        printBackground: true,
        landscape: true,
    }
    await page.goto(url);
    await page.pdf(pdfConfig);
    await browser.close();
    server.close();
};

const app = http.createServer((req, res) => fileServer.serve(req, res));
const server = app.listen(PORT, generate_pdf);