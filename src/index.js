const puppetter = require('puppeteer');

//const elements = ['']
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

(async () =>{
    const browser = await puppetter.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://www.rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx');
    await page.waitForSelector('div')

    await page.$eval('#cboEmpresa', elem => elem.click())
    await page.focus('#cboEmpresa')
    await page.keyboard.type('023264')
    await page.waitForSelector('li#ui-id-4')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await page.$eval('input#rdPeriodo', elem => elem.click())

    await page.focus('input#txtDataIni')
    await page.keyboard.type('01/01/2010')

    await page.focus('input#txtHoraIni')
    await page.keyboard.type('23:59')

    await page.focus('input#txtDataFim')
    await page.keyboard.type('01/01/2020')

    await page.focus('input#txtHoraFim')
    await page.keyboard.type('23:59')
  

    await page.focus('input#cboCategoria_chosen_input')
    try{
        await page.keyboard.type('ITR', {delay: 100})
        await page.keyboard.press('Enter')
    }catch(err){console.log(err)}

    await page.$eval('input#btnConsulta', elem => elem.click())

    await sleep(5000)

    const TR = await page.$$('tbody i#VisualizarDocumento')
    
    console.log(TR.length)
    

    //await browser.close()
    
    
    console.log('Finish')
    
})()


// This is work page.click('input#rdPeriodo')