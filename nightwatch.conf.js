const seleniumServer = require('selenium-server-standalone-jar')
const chromedriver = require('chromedriver')
const dockerSeleniumHub = '127.0.0.1'


module.exports = {
    src_folders : ["/nw/tests"],
    page_objects_path: "nw/pages",
  
    selenium : {
      start_process : true,
      server_path : seleniumServer.path,
      log_path : "nw/logs",
      host : dockerSeleniumHub,
      port : 4444,
      check_process_delay: 5000,
      cli_args : {
        "webdriver.chrome.driver" : chromedriver.path,
      }
    },
  
    webdriver : {
      start_process: true,
      server_path: "node_modules/.bin/chromedriver",
      port: 9515
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