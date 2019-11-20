module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/Automation-Basics/build/')
},

after: browser => {
    browser.pause(1000)
},

'Even and Odds' : browser => {
    //input numbers
    browser
    .setValue('[name="evenOddInput"]', '1,2,3,4')
    .verify.valueContains('[name="evenOddInput"]', "1,2,3,4")

    //click split button
    .useXpath()
    .click('(//button[@class="confirmationButton"])[1]')
    
    .useCss()
    //check even output
     .verify.containsText('[name="evenResults"]', "[2,4]")

    //check odd output
    .verify.containsText('[name="oddResults"]', "[1,3]")
    



},

}


