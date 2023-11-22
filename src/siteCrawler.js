const fs = require('fs');
const puppeteer = require('puppeteer');
const {v4: uuidv4} = require('uuid');

async function siteCrawler() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
    });
    const page = await browser.newPage();
    const _products = [];
    try {
        await page.goto('https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers');
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        await new Promise(resolve => setTimeout(resolve, 15000));
        const root = await page.$('#zg_left_col1');
        const categories = await root.$$('.celwidget');
        for (const category of categories) {
            try {
                const categoryNameElement = await category.$('h2');
                const categoryName = await page.evaluate(element => element.textContent.trim(), categoryNameElement);
                const modifiedText = categoryName.replace(/^Best Sellers in /, '');
                const parts = modifiedText.split(' ');
                const _category = parts[0].trim().toLowerCase();
                console.log(`_category::${JSON.stringify(_category)}`)
                const products = await category.$$('.a-carousel-card');
                for (const product of products) {
                    try {
                        const imageElement = await product.$('img');
                        const src = await page.evaluate(img => img.src, imageElement);
                        const title = (await product.$$('.a-link-normal'))[1];
                        const t = await page.evaluate(element => element.textContent.trim(), title);
                        const priceElement = await product.$('._cDEzb_p13n-sc-price_3mJ9Z');
                        let priceDouble;
                        if (priceElement) {
                            const priceText = await page.evaluate(element => element.textContent.trim(), priceElement);
                            priceDouble = parseFloat(priceText.replace('$', ''));
                        } else {
                            priceDouble = 0.0
                        }
                        _products.push({
                            productNumber: `${(uuidv4())}`,
                            productImage: src,
                            productName: t,
                            productDescription: t,
                            productPrice: priceDouble,
                            quantity: generateQuantity(),
                            productCategory: {
                                categoryId: _category,
                                categoryName: _category,
                                categoryImage: ""
                            }
                        });
                    } catch (e1) {
                        console.error(e1);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
    console.log("total::" + _products.length);
    writeFile(_products);
}

const writeFile = (_products) => {
    const filePath = 'products.json';
    fs.writeFile(filePath, JSON.stringify(_products), 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`JSON data written to ${filePath}`);
        }
    });
}

const generateQuantity = () => {
    const min = 10;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

siteCrawler();
