// const puppeteer = require('puppeteer');
// // let electronicUrl = 'https://www.nike.com/vn/w/mens-shoes-nik1zy7ok';
// let electronicUrl = 'https://www.nike.com/vn/u/custom-nike-zoom-type-premium-by-you-10000934/8944110251';
// (async () => {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto(electronicUrl);  
//   const articles = await page.evaluate(() => {
//     let titleLinks =  document.querySelectorAll('div > label.css-xf3ahq')
//     titleLinks = [...titleLinks];
//     let articles = titleLinks.map(i => ({
//         // title: i.getAttribute('title'),
//         size: i.innerText
//     }));
//     return articles;
// });

// // In ra kết quả và đóng trình duyệt
// console.log(articles);

//         await browser.close();
// })();
const puppeteer = require('puppeteer');

let electronicUrl = 'https://www.nike.com/vn/t/killshot-sp-shoe-0gpfZX/DC1982-400';
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(electronicUrl);

  let electronicData = await page.evaluate(() => {
    let products = [];
    let product_wrapper = document.querySelectorAll('.prl6-sm')
    // product_wrapper = [...product_wrapper]
    product_wrapper.forEach((product) => {
      let dataJson = {};
      try {
        dataJson.sizes =  product.querySelector('div > label.css-xf3ahq').innerText;
      }
      catch (err) {
          console.log(err)
      }
      // console.log(dataJson.img.indexOf("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto"));
      
     
    
    });
    return products;
  });

   console.log(electronicData);
    await browser.close();
})();