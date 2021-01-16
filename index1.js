const puppeteer = require('puppeteer');
// let electronicUrl = 'https://www.nike.com/vn/w/mens-shoes-nik1zy7ok';
let electronicUrl = 'https://www.nike.com/vn/t/killshot-sp-shoe-0gpfZX/DC1982-001';
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(electronicUrl);  
  const articles = await page.evaluate(() => {
    let titleLinks =  document.querySelectorAll("picture > img ");
    titleLinks = [...titleLinks];
    let articles = titleLinks.map(link => ({
        // title: link.getAttribute('title'),
        img: link.getAttribute('src')
    }));
   
    return articles;
});

// In ra kết quả và đóng trình duyệt
console.log(articles);



        await browser.close();
})();

// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/19ca7a3d-f58d-4478-a61d-b67ea7076fbd/killshot-sp-shoe-0gpfZX.jpg