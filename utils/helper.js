var data = require('./data.js')

var api_key = data.api.api_key
var token = data.api.server_token


var request = require('request')

function deleteAllCards(){
    return new Promise(function(resolve, reject){
        request(`https://trello.com/1/boards/h9SF3UQA/cards/?fields=id&key=${api_key}&token=${token}`, function(err,res){
            if(err){console.log(err)
            reject()}
            if(res){
                var obj = JSON.parse(res.body)
                var arr = []
                obj.forEach(e => {arr.push(e.id)
                });
                arr.forEach(cardId => {
                    request.delete(`https://api.trello.com/1/cards/${cardId}?key=${api_key}&token=${token}`,()=>{
                        resolve()
                    })
                    
                });
            }
        });
    })
        
}

module.exports = {
    deleteAllCards
}