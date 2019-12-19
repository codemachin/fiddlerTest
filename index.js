var Application = require('spectron').Application
var assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

var app = new Application({
  path: '/Applications/Progress Telerik Fiddler.app/Contents/MacOS/Progress Telerik Fiddler'
})

describe('Application launch', function () {
    this.timeout(10000)
  
    beforeEach(function () {
      this.app = new Application({
        // Your electron path can be any binary
        // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
        // But for the sake of the example we fetch it from our node_modules.
        path: electronPath,
  
        // Assuming you have the following directory structure
  
        //  |__ my project
        //     |__ ...
        //     |__ main.js
        //     |__ package.json
        //     |__ index.html
        //     |__ ...
        //     |__ test
        //        |__ spec.js  <- You are here! ~ Well you should be.
  
        // The following line tells spectron to look and use the main.js file
        // and the package.json located 1 level above.
        args: ['/Applications/Progress Telerik Fiddler.app/Contents/MacOS/Progress Telerik Fiddler']
      })
      return this.app.start()
    })
  
    afterEach(function () {
      if (this.app && this.app.isRunning()) {
        return this.app.stop()
      }
    })
  
    it('shows an initial window', async() => {
        await this.app.client.click('#Settings')
        const count=await app.client.getWindowCount()
        assert.equal(count, 2)
        await app.client.windowByIndex(1)
        await app.client.waitUntilWindowLoaded()
        const swin=await app.client.getHTML('#Progress Telerik Fiddler')
        //if (!Progress Telerik Fiddler){
            await sleep (10000)
        }
    )})
      //return this.app.client.getWindowCount().then(function (count) {
        //assert.equal(count, 1)
        // Please note that getWindowCount() will return 2 if `dev tools` are opened.
        // assert.equal(count, 2)

   //})
  //})

// const timeout = () => {
//     return new Promise((resolve)=>{
//         setTimeout(async ()=>{
//             await app.client.click('.button-text')
//             resolve()
//         },30000)
//     })
// }

// app.start().then(function () {
//     console.log('Application Launched')
//     /*app.browserWindow.isVisible().then(function (visible) {
//         console.log('window is visible? ' + visible)
//       })*/
//       //console.log(app.client.getWindowCount.length);
//     //   app.client.getSelectedText().then(async function (selectedText) {
//     //     console.log(selectedText)
//     //     // this.timeout(5000)
//     //     try{
//     //         console.log('i am result')
            
//     //         await timeout()
//     //     }catch(e){
//     //         console.log('i am error')
//     //         console.log(e)
//     //     }
        
//     //     //app.client.waitUntilWindowLoader();
//     //   })
//   // Check if the window is visible
//   return app.browserWindow.isVisible()
// }).then(function (isVisible) {
//   // Verify the window is visible
//   assert.equal(isVisible, true)
// }).then(function () {
//   // Get the window's title
//   return app.client.getTitle()
// }).then(function (title) {
//   // Verify the window's title
//   assert.equal(title, 'Fiddler Splash Screen')
// }).then(async function () {
    
//     visible = await app.browserWindow.isVisible()
//     async function r(){
//         await setTimeout(async()=>{
//             await app.client.waitUntilWindowLoaded().getWindowCount()
//             await r()
//         },2000)
//     }
//     await r()
//     // setInterval(async ()=>{
//     //     let count = await app.client.waitUntilWindowLoaded().getWindowCount()
//     //     console.log("current", count)
//     // },2000)

//     console.log("=================")
//   // Stop the application
// //   return app.stop()
// }).catch(function (error) {
//   // Log any failures
//   //it('Navigate to settings',asyn() => {

//       console.error('Test Pass', error.message)

