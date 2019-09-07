const data = require('../../utils/data')
const assert = require('chai').assert
var request = require('supertest');

var helper = require('../../utils/helper')

const username = data.user.username;

const api_key = data.api.api_key
const token = data.api.server_token
const base_url = data.api.base_url
const title = data.cardTitle;

request = request(base_url)
var boardId = null
var listId = null
var cardId = null;

describe('Trello Api test', function(){

    before( async function(){
    await helper.deleteAllCards()
    
})
    describe('Test the add to card functionality', function(){
        
        it('Verifies the test board exists', function(done){
            request.get(`/members/${username}/boards`)
                .query({
                    filter: "open",
                    fields: "id,name",
                    lists:"open",
                    key: api_key,
                    token: token
                })
                .expect(200)
                // Verifies that the Test Board exists and gets the id for the board and the list id
                .expect((res)=>{
                    for (i in res.body) {
                        e = res.body[i]
                    
                        if(e.name == 'Test Board'){
                            boardId = e.id;
                            listId = e.lists[0].id
                        }
                        assert.isNotNull(boardId, 'The test board was not found')
                        assert.isNotNull(listId, 'The To Do lint in Test Board was not found')
                    }
                }).end(done)
        });
        
        it('Tests the creation of a card', function(done) {
            request.post('/cards')
                .query({
                    idList: listId,
                    key: api_key,
                    token: token,
                    name: title
                })
                .expect(200)
                .expect((res) => {
                    cardId = res.body.id
                    assert.equal(res.body.name, title, "The title of the created card does not match the submitted one")
                    assert.equal(res.body.idBoard, boardId, "The board where the card was created does not match the board of the submitted list")
                    assert.equal(res.body.idList, listId, "The list where the card was created does not match the submitted one")
                })
                .end(done)

        })

        it("Verifies the created card is present on a /GET call to the board", function(done){
            request.get(`/boards/${boardId}/cards/`)
                .query({
                    fields: "id,name,idList",
                    filter: "visible",
                    key: api_key,
                    token: token
                })
                .expect(200)
                .expect((res) => {

                    var o = res.body[0]
                    assert.equal(o.name, title, 'The name of the card does not match the submitted title')
                    assert.equal(o.id, cardId, 'The id of the retrieved card does not match the id from the created card')
                    assert.equal(o.idList, listId, 'The id of the list does not match the one in the creation of the card')
                }).end(done)
        })
    });

});
