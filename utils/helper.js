var data = require('./data.js')

var api_key = data.api.api_key
var token = data.api.server_token

var superagent = require('superagent')


function deleteAllCards(){
    return new Promise(function(resolve, reject){
        superagent(`https://trello.com/1/boards/h9SF3UQA/cards/?fields=id&key=${api_key}&token=${token}`)
        .end( function(err,res){
            if(err){console.log(err)
            reject()}
            if(res){
                var obj = res.body
                var arr = []
                obj.forEach(e => {arr.push(e.id)
                });
                arr.forEach(cardId => {
                    superagent.delete(`https://api.trello.com/1/cards/${cardId}?key=${api_key}&token=${token}`)
                    .end(()=>{
                        resolve()
                    })
                    
                });
            }
        });
    
    })
        
}

function deleteBoard(id) {
        superagent.delete(`https://api.trello.com/1/boards/${id}?key=${api_key}&token=${token}`)
        .end((err,res) => {
            if(err){
                console.log("error deleting")
            }
            
        })
    
}

function createListOnBoard(listName, boardId) {
    return new Promise(function(reject, resolve){
        superagent.post(`https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${api_key}&token=${token}`)
        .end((err, res)=>{
            if(err){
                reject()
            } else {
                resolve(res) 
            }
        })
    })
}


var createBoard = name => new Promise((resolve, reject)=> {

    var url
    var id
    superagent
        .post("https://api.trello.com/1/boards/")
        .query({
            name: name,
            key: api_key,
            token: token
        })
        .end((err, res)=>{
            if (res){
                url = res.body.shortUrl
                id = res.body.id
                resolve([id, url])
            }
            if (err) {
                reject(err)
            }

        })

});

module.exports = {
    deleteAllCards,
    createBoard,
    deleteBoard,
    createListOnBoard
}