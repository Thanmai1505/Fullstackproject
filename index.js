const { initializeApp, cert } = require('firebase-admin/app');
//const { getFirestore} = require('firebase-admin/firestore');
var express = require('express')  
var app = express()  
const port=3000;
//const { initializeApp } = require("firebase-admin/app");
const { getFirestore}=require('firebase-admin/firestore');
var serviceAccount = require("./key.json");
initializeApp({
    credential: cert(serviceAccount),
});
const db=getFirestore();
app.set('view engine','ejs');

 app.get("/signin",function(req,res){
 	res.render("signin");
 });
 app.get("/signup",function(req,res){
 	res.render("signup");
 });
 app.get("/style",function(req,res){
 	res.render("style");
 });
 
app.get("/stomachpain",function(req,res){
	res.render("stomachpain");
});
app.get("/diarrhoea",function(req,res){
	res.render("diarrhoea");
});
app.get("/periodpain",function(req,res){
	res.render("periodpain");
});
app.get("/skinallergies",function(req,res){
	res.render("skinallergies");
});
app.get("/vomitings",function(req,res){
	res.render("vomitings");
});
app.get("/throatpain",function(req,res){
	res.render("throatpain");
});
app.get("/breastpain",function(req,res){
	res.render("breastpain");
});
app.get("/cold",function(req,res){
	res.render("cold");
});
app.get("/bodypain",function(req,res){
	res.render("bodypain");
});
app.get("/dizzyness",function(req,res){
	res.render("dizzyness");
});
app.get("/earpain",function(req,res){
	res.render("earpain");
});
app.get("/eyepain",function(req,res){
	res.send("eyepain");
});
app.get("/fever",function(req,res){
	res.send("fever");
});
app.get("/headache",function(req,res){
	res.send("headache");
})
 app.get("/signinsubmit",(req,res)=>{
	const Email=req.query.Email;
   // console.log("Email",Email);
	const password=req.query.password;
   // console.log("Password",password);
	db.collection("customers")
	.where("Email","==",Email)
	.where("password","==",password)
	.get()
	.then((docs) => {
        //console.log(docs.size);
		if(docs.size > 0){
			res.render("home");
		}
		else{
			res.send("Login Failed");
		}
        
	});
});
 
app.get("/signupsubmit",(req,res)=>{
	const Name=req.query.Name;
	const Email=req.query.Email;
	const password=req.query.password;
	db.collection("customers").add({
		Name : Name,
		Email : Email,
		password: password,
	}).then(()=>{
		res.render("signin");
	});
});

app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})