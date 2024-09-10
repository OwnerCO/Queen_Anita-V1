//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '51978194933'
global.nomerowner = ["51978194933"]

// Apikey 

global.skizo = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.casterix = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
//watermark 
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢'

// cpanel 
global.domain = 'https://syssolutionsreload.mystrikingly.com/' // deeceexxx
global.apikey2 = 'ptlc' // I love anita
global.capikey2 = 'ptla' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = 'mongodb+srv://ownerco:ownerco@gifted.h5i4ndp.mongodb.net/?retryWrites=true&w=majority'; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
