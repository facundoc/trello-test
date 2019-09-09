var data = require('../../utils/data');
var testCardTitle = data.cardTitle;
var boardName = data.board.name
var listName = data.board.listName
var helper = require('../../utils/helper')
var boardUrl
var boardId

module.exports = {
    beforeEach : async function(){
        let board = await helper.createBoard(boardName)
        
        boardUrl = board[1]
        boardId = board[0] 

        await helper.createListOnBoard(listName, boardId)       
        
    },

    afterEach : function(){
        helper.deleteBoard(boardId)
    },

    'Verifies the creation of a card': (browser) => {
        const login = browser.page.login();
        const dashboard = browser.page.dashboard()
        const board = browser.page.board()
        //Login process
        login
            .navigate()
            .completeLogin()
        //Navigates to previously created board
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