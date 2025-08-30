const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

//is used in Express.js to serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));


main()
.then(()=>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route

app.get("/chats",async(req, res)=>{
  let chats = await Chat.find();
  console.log(chats);
  // res.send("working");  // check server run or not
  // pass render
  res.render("index.ejs",{chats});
});

// New Route
app.get("/chat/new",(req,res)=>{
  res.render("new.ejs");
});

//creat Route

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  });

  newChat
    .save()
    .then(() => {
      console.log("chat was saved");
      res.redirect("/chats");   
    })
    .catch((err) => {
      console.log(err);
      res.send("Error saving chat"); 
    });
});



// Edit Route
app.get("/chats/:id/edit", async(req, res) => {
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

// UPDATE ROUTE

app.put("/chats/:id", async(req, res) => {
   let { id }=req.params;
   let {msg:newMsg } = req.body;
   console.log(newMsg);
   let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {msg:newMsg},
    {runValidators:true, new:true}
   );
   console.log(updatedChat);
   res.redirect("/chats");
});

//Detroy Route

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log("Deleted Chat:", deletedChat);
  res.redirect("/chats");  
});


// let chat1 = new Chat({
//   from:"Muskan",
//   to:"priti",
//   msg:"send me your exam sheets",
//   created_at:new Date()
// });

// chat1.save().then((res)=>{
//   console.log(res)
// });

// check server work or not
app.get('/', (req, res) => {
  res.send('root is working');
});

// run locolhost 8080
app.listen(8080, () => {
  console.log(`app listening on port 8080`);
});


Chat.deleteMany({name:"muskan"}).then((res)=>{
  console.log(res);
});


