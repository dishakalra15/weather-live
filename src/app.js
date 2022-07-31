//express ke through app creating 
//const { Router } = require('express');
const express = require('express'); // expressfunc
const path=require('path');
const hbs=require('hbs');
const app = express(); // const var named app .. with help of app we can use all methods and properties inside express func
const port=process.env.PORT || 8000 ; //env variable will cahnge automatically when wew host
 

//public static path
//console.log(path.join(__dirname,"../public"));

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")


app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));  // adding public folder ka path

//routing... jo link names hote
app.get("/", (req,res)=>
{
   res.render("index") // nodejs mei response res.add() 
}) 
//get param 1.route: is like kaha homepage or about page etc here we are leaving homepage as empty can use slash
// 2. callback:
app.get("/weather", (req,res)=>
{
   res.render("weather") // nodejs mei response res.add() 
}) 
app.get("/about", (req,res)=>
{
   res.render("about") // nodejs mei response res.add() 
}) 
// res.send ki jagah res.render for hbs
// *=given mei se koi bhi get wala match nhora toh send 4040 error
app.get("*",(req,res)=>{
    res.render("404error",{
       errorMsg: 'opps! Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log('listening to port at ${port}')
})