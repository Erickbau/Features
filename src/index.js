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

    await sleep(3000)

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
   
    await page.keyboard.type('ITR')
    await sleep(1000)
    await page.keyboard.press('Enter')
  

    await page.$eval('input#btnConsulta', elem => elem.click())

    await sleep(2000)

    const listHandle = await page.evaluateHandle(
    () => document.getElementById('VisualizarDocumento').
    getAttribute('onClick')
    );  

   // await browser.close()
    
    console.log(listHandle.jsonValue())
    console.log('Finish')
    
})()

