var Application = require('spectron').Application
var assert = require('assert')
// var mocha = require('mocha')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);
chai.should()


var app = new Application({
  path: '/Applications/Progress Telerik Fiddler.app/Contents/MacOS/Progress Telerik Fiddler'
})

describe('Application launch', function () {
  
    before(function () {
      this.app = new Application({
        // Your electron path can be any binary
        // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
        // But for the sake of the example we fetch it from our node_modules.
        path: '/Applications/Progress Telerik Fiddler.app/Contents/MacOS/Progress Telerik Fiddler',
      })
      return this.app.start()
    })
  
    // afterEach(function () {
    //   if (this.app && this.app.isRunning()) {
    //     return this.app.stop()
    //   }
    // })
  
    // it('shows an initial window', function () {
    //   return this.app.client.getWindowCount().then(function (count) {
    //     console.log("-========",count)
    //     assert.equal(count, 1)
    //     // Please note that getWindowCount() will return 2 if `dev tools` are opened.
    //     assert.equal(count, 2)
    //   })
    // })

    it('shows an second window',  function () {
      return this.app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
        console.log("=======",count)

        assert.equal(count, 1)
        // Please note that getWindowCount() will return 2 if `dev tools` are opened.
        
      })
    })
    function handleError(done, fn) {
        try { 
            fn();
            done();
        } catch (error) {
            done(error);
        }
    }
    // it('should take less than 5000ms as well', function(done){
    //     this.timeout(5000)
    //     setTimeout(done, 4500);
    // })
    //it('try to open 2nd', function(done){
       // this.timeout(20000)
        // return this.app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
        //     console.log("@=======@",count)
        //     done()
        
        // })
        // Get the window's title
        
    //     it('has the correct title', async function(){
    //         const title = await this.app.client.windowByIndex(0);
    //         console.log(title)
        
    // })
    it('shows an initial window', function (done) {
      this.timeout(25000)
      this.app.client
      .getWindowCount().should.eventually.equal(1).then(()=>{
        setTimeout( () =>{
          this.app.client.windowByIndex(0)
          
          .getTitle().then((title)=>{
            console.log("::::",title)
            this.app.client.click('button').then((r)=>{
              console.log(r)
              this.app.client.$$('a').then((r)=>{
                this.app.client.getText('button').then((text)=>{
                  console.log("el",text)
                  done()

                })
              })
            })
          }).catch((e)=>{
            console.log(e)
          })
        }, 10000);

        
      })
    })
        
        
        // const p = await this.app.client.windowByIndex(0)
        // // await this.app.client.waitUntilWindowLoaded()

        // const swin=await this.app.client.getTitle()
        // if (swin!='Progress Telerik Fiddler'){
        //     await x (10000)
        //     await this.app.client.windowByIndex(1)
        //     let res = await this.app.client.getTitle()
        //     console.log(res)
        // }
  
    // it('should give more info',  async function() {
    //     this.timeout(5000);
    //     let c = await this.app.client.waitUntilWindowLoaded().getWindowCount()
    //     console.log("++++",c)
    
    //     // setTimeout(function () {
    //     //     this.app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
    //     //         console.log("++++++++",count)
    //     //     })
            
    
    //     // }, 5000);
    //  });
})

function x(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },10000)
    })
}






