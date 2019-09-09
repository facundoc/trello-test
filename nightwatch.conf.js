const seleniumServer = require('selenium-server-standalone-jar')
const chromedriver = require('chromedriver')
const seleniumHub = '127.0.0.1'


module.exports = {
    src_folders : ["/nw/tests"],
    page_objects_path: "nw/pages",
  
    selenium : {
      start_process : true,
      server_path : seleniumServer.path,
      log_path : "nw/logs",
      host : seleniumHub,
      port : 4444,
      check_process_delay: 5000,
      cli_args : {
        "webdriver.chrome.driver" : chromedriver.path,
      }
    },
  
    test_settings : {
      default : {
        launch_url: "https://trello.com",
        desiredCapabilities: {
          browserName: "chrome",
          chromeOptions: {
            w3c: false,
            args: [
                          "--headless"
                      ]
          }
        }
      }
    }
  
}