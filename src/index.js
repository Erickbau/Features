const puppetter = require('puppeteer');

//const elements = ['']

(async () =>{
    const browser = await puppetter.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx');
    await page.waitForSelector('div')

    //await page.focus('#cboEmpresa')
    //await page.keyboard.type('Hello')
    
    const Label = await page.$$("label[for='rdPeriodo']")
    await page.$eval('input#rdPeriodo', elem => elem.click())
    
    console.log(Label.length)


    console.log('Finish')

})()
/*
const Label = await page.$$('input#rdPeriodo')
await click(Label)
await page.$eval('input#rdPeriodo')
console.log(Label)
*/

// This is work page.click('input#rdPeriodo')