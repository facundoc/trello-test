module.exports = {
    url: function() {
        return this.api.launch_url + '/b/h9SF3UQA/test-boards'
    },
    elements: {
        // addNewCard: ".js-add-another-card",
        // cardTitle: ".list-card-composer-textarea",
        // addCard: ".cc-controls-section > input",

        addNewCard: {
            selector: ".js-add-a-card",
        },

        cardTitle: {
            selector: ".list-card-composer-textarea",
        },

        addCard: {
            selector: ".cc-controls-section > input",
        },

        testCard: {
            selector: '//*[@id="board"]/div[1]/div/div[2]/a[1]',
            locateStrategy: 'xpath'
            
        }
    }
}

