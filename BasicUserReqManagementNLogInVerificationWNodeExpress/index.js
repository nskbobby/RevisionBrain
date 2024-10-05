import bodyParser from "body-parser";
import express from "express";
import {fileURLToPath} from "url";
import { dirname } from "path";
const dircName=dirname(fileURLToPath(import.meta.url));

const app_server=3000;
var app = express();
var userpasswordManager=['This is a temporary storage all data will be garbaged when app crashes'];
app.use(bodyParser.urlencoded({extended:'true'}));
app.use(veriyUser);

//post
//apply user verifiaction on check route
app.post('/check',(req,res)=>{

    if(res.locals.userIsAuthorised){

        res.sendFile(dircName+'/public/secret.html')
        console.log(req.body);
    }else{
        res.redirect('/');
        console.log("enter valid cred");

    }
});

app.post("/createaccount",(req,res)=>{
    
    CheckUserPresence(req,res);
    console.log(userpasswordManager);
});

app.post('/userlist',(req,res)=>{
res.send(userpasswordManager);
});

//get------
//route to create account
app.get('/createaccount',(req,res)=>{
    res.sendFile(dircName+'/public/createUser.html');
})

//home route
app.get('/',(req,res)=>{
    res.sendFile(dircName+'/public/index.html');
})

//-------------
//port listner
app.listen(app_server,()=>{
    console.log("i am listening on "+app_server);
})


//methods

//verify user
function veriyUser(req,res,next){
    
    for(var i=0;i<userpasswordManager.length;i++){
       if( req.body.username===userpasswordManager[i].email || req.body.username===userpasswordManager[i].username){
        if( req.body.password===userpasswordManager[i].password){
        res.locals.userIsAuthorised = true;
        break;
        }else{
            console.log("password didn't match. Try again!!")
            res.locals.userIsAuthorised = false;
            break;    
        }
       }else{
        res.locals.userIsAuthorised = false;
       }
    }
    
    next();
}



function deleteUser(email){
    userpasswordManager=userpasswordManager.filter(user=>user.email!==email);
}

//CheckUserNcreate
function CheckUserPresence(req,res){
    for(var i=0;i<userpasswordManager.length;i++){
        if( req.body.username===userpasswordManager[i].email || req.body.username===userpasswordManager[i].username){
         res.locals.existinguser=true;
        }
    }

if(res.locals.existinguser){
console.log("already existing user "+req.body);
res.locals.usercreated=false;
res.redirect('/');

} else if(!res.locals.existinguser){
    if(req.body.password===req.body['confirm-password']){
    

    const newUser={
  id:userpasswordManager.length,
  email:req.body.email,
  username:req.body.username,
  password:req.body.password
};

userpasswordManager.push(newUser);

res.locals.usercreated=true;
res.redirect('/');

}else{

    res.locals.usercreated=false;
    console.log(`Passwords didn't match ${req.body.password} , ${req.body["confirm-password"]}`);
    res.redirect('/createaccount');
}

if(!res.locals.usercreated){
    console.log("couldn't create user. Please try again");
    res.redirect('/createaccount');
}

}
}