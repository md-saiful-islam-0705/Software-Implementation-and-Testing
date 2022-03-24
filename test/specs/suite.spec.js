const { screenShot, variables } = require('../..')

describe('Power website testing', () => {
    it('Opening baseUrl', () => {
        const { baseUrl } = variables;
        browser.url(baseUrl);
        screenShot();
        browser.maximizeWindow()
        browser.pause(5000);
    });  
});



