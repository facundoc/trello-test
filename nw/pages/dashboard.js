const data = require('../../utils/data');

module.exports = {
    url: function() {
        return this.api.launch_url + `/${data.user.username}/boards`
    },

    elements: {
        boards: ".all-boards",
        boardsTitle: ".boards-page-board-section-header-name",
        testBoard: ".boards-page-board-section.mod-no-sidebar > ul > li:first-child"
    },

}