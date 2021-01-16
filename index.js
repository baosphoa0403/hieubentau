const puppeteer = require('puppeteer');

let electronicUrl = 'https://www.nike.com/vn/w/boys-shoes-1onrazy7ok';
// let electronicUrl = 'https://www.nike.com/vn/u/custom-nike-zoom-type-premium-by-you-10000934/8944110251';
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(electronicUrl);

  let electronicData = await page.evaluate(() => {
    let products = [];
    let product_wrapper = document.querySelectorAll(".product-card__body ");
    // let product_wrapper = document.querySelectorAll(".css-13mtpjc");
    product_wrapper.forEach((product) => {
      let dataJson = {};
      try {
        dataJson.img = product.querySelector('picture > img').src;
        dataJson.title = product.querySelector('.product-card__title').innerText;
        dataJson.message = product.querySelector('.product-card__titles').innerText;
        dataJson.price = product.querySelector('.product-price').innerText;
        dataJson.colors = product.querySelector('.product-card__product-count > span').innerText;
      }
      catch (err) {
          console.log(err)
      }
      products.push(dataJson);
    });
    return products;
  });

   console.log(electronicData);
   await browser.close();
})();