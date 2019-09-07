var loginCommands = {
    completeLogin: function() {
        return this.waitForElementPresent('@userField')
        .setValue('@userField', 'facucampi+tests@gmail.com')
        .setValue('@passField', 'test1234')
        .click('@loginButtom')
    },
}



module.exports = {
    url: 
        function () {
            return this.api.launch_url + '/login'
        }
    ,
    elements: {
        userField: "#user",
        passField: "#password",
        loginButtom: "#login"
    },
    commands: [loginCommands],

};