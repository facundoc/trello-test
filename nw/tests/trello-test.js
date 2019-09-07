var data = require('../../utils/data');
var testCardTitle = data.cardTitle;
var helper = require('../../utils/helper')


module.exports = {
    // afterEach : function(browser) {
    //     const board = browser.page.board()
    //     board
    //         .click(".list-card-details")
    //         .click(".js-archive-card")
    //         .click(".js-delete-card")
    //         .click(".js-confirm")
    //         .end()
    // },

    beforeEach : function(){
        helper.deleteAllCards()
    },

    'Login to trello': (browser) => {
        const login = browser.page.login();
        const dashboard = browser.page.dashboard()
        const board = browser.page.board()
        //Login process
        login
            .navigate()
            .completeLogin()
        //Selects board
        dashboard
            .waitForElementPresent('@boards')
            .click("@testBoard")
        //Asserts that the first list in the board is empty and if true, creates a new card 
        board
            .assert.elementPresent("@addNewCard", "The first list in the board empty")
            .click("@addNewCard")
            .setValue("@cardTitle", testCardTitle)
            .click("@addCard")
        //Asserts that the text in the first card matches the value set previously
            .expect.element("@testCard").text.to.equal(testCardTitle)
        //Remove focus from element
        browser.keys(browser.Keys.ESCAPE)
    }
    




}