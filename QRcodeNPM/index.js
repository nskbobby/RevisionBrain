import { input } from "@inquirer/prompts";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath }  from "url";
import express from "express";
import bodyParser from "body-parser";
import { create } from "domain";

const app=express();
const dir=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;

app.listen(port,()=>{
    console.log(`running on ${port}`);

});


app.post("/submit",(req,res)=>{
console.log(req.body);
var url=(req.body).url;
var qrs=qr.image(url,{type:'svg'});
qrs.pipe(fs.createWriteStream("sample.svg"));
})

app.get("/",(req,res)=>{
res.sendFile(dir+"/index.html");
console.log()
});


/*For console prompts-----------------
const questions =[
    {
        type:'input',
        name:'URL',
        message:"Enter URL",
    },{
        type:'input',
        name:'username',
        message:"Enter your username",
        validate(value){
            if(value=='krishna'){
                return true;
            }else{
                return "you are not a valid user";
            }
        }
    }
    ];
    
    inquirer.prompt(questions).then((answers)=>{
    
        var qrs=qr.image(answers.URL,{type:'svg'});
        qrs.pipe(fs.createWriteStream("sample.svg"));
        fs.writeFile("input.txt",answers.URL,'utf8',(err)=>{
            if(err) err;
            console.log("QR Code created");
        })
    
    });
    
*/