var faker = require('faker');

var cardTitle = faker.lorem.sentence();

var user = {
    
    mail: "facucampi+tests@gmail.com",
    name: "Facundo Tester",
    username: "facundotester",
    password: "test1234",
    

}

var api = {
    base_url: "https://api.trello.com/1",
    api_key: "1fb5fe547beeaccad5674d9d0961a08a",
    server_token: "3149f16b4e6f1cb3db5909d9596569c840e198c4e503ac5a2a4a4e0cb2fa1278"
}

module.exports = {
    cardTitle,
    user, 
    api

}