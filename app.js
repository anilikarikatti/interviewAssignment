const express = require("express");

const app = express();

require('dotenv').config();


const { getSignedUrl } = require("@aws-sdk/cloudfront-signer"); 



let signedUrl = getSignedUrl({
  url:"https://dg229k54skoz0.cloudfront.net/"+"nature.jpg",
  dateLessThan:new Date(Date.now()+1000*60*5) ,
    
  privateKey:process.env.PRIVATE_KEY,
  keyPairId:process.env.KEY_PAIR_ID

});

console.log(signedUrl);

app.listen(8000,()=>{
    console.log("port listening 8000");
})