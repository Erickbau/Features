const puppetter = require('puppeteer');

//const elements = ['']

(async () =>{
    const browser = await puppetter.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx');
    await page.waitForSelector('div')

    await page.focus('#cboEmpresa')
    await page.keyboard.type('Ambev')

    await page.$eval('input#rdPeriodo', elem => elem.click())

    await page.focus('input#txtDataIni')
    await page.keyboard.type('01/01/2010')

    await page.focus('input#txtHoraIni')
    await page.keyboard.type('23:59')

    await page.focus('input#txtDataFim')
    await page.keyboard.type('01/01/2010')

    await page.focus('input#txtHoraFim')
    await page.keyboard.type('23:59')
  

    await page.focus('input#cboCategoria_chosen_input')
    await page.keyboard.type('ITR')
    await page.keyboard.press('Enter')


   await browser.close()
    


    console.log('Finish')

})()


// This is work page.click('input#rdPeriodo')