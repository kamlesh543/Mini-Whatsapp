

const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=> {
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "neha",
    to: "shuknya",
    msg: "please give me our notes",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "ritu",
    msg: "happy birthday ritu 🎂",
    created_at: new Date(),
  },
  {
    from: "kamlesh",
    to: "muskan",
    msg: "how are you & what are you doing now?",
    created_at: new Date(),
  },
  {
    from: "abhay",
    to: "suman",
    msg: "let’s meet tomorrow morning",
    created_at: new Date(),
  },
  {
    from: "pooja",
    to: "deepak",
    msg: "good luck for your interview",
    created_at: new Date(),
  },
  {
    from: "anita",
    to: "vikas",
    msg: "did you finish the project?",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "simran",
    msg: "call me when you are free",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "alok",
    msg: "happy journey ✈️",
    created_at: new Date(),
  },
  {
    from: "ramesh",
    to: "priti",
    msg: "how are you dear?",
    created_at: new Date(),
  },
  {
    from: "sonu",
    to: "monu",
    msg: "see you at the party tonight",
    created_at: new Date(),
  },
  {
    from: "rekha",
    to: "meena",
    msg: "I am missing you a lot",
    created_at: new Date(),
  },
  {
    from: "arjun",
    to: "kavita",
    msg: "don’t forget the meeting at 5",
    created_at: new Date(),
  },
  {
    from: "manish",
    to: "anjali",
    msg: "thank you for your help",
    created_at: new Date(),
  },
  {
    from: "geeta",
    to: "radha",
    msg: "good night 🌙",
    created_at: new Date(),
  },
  {
    from: "suresh",
    to: "amit",
    msg: "I will send you the files",
    created_at: new Date(),
  },
  {
    from: "raj",
    to: "simran",
    msg: "movie plan this weekend?",
    created_at: new Date(),
  },
  {
    from: "karan",
    to: "nidhi",
    msg: "exam is postponed till next week",
    created_at: new Date(),
  },
  {
    from: "alok",
    to: "sneha",
    msg: "are you coming to college?",
    created_at: new Date(),
  },
  {
    from: "sunil",
    to: "mohit",
    msg: "let’s play cricket today",
    created_at: new Date(),
  },
  {
    from: "mukesh",
    to: "rahul",
    msg: "don’t worry, everything will be fine",
    created_at: new Date(),
  },
  {
    from:"neha",
    to:"shuknya",
    msg:"please give me our notes",
    created_at:new Date(),
  },
  {
    from:"rahul",
    to:"ritu",
    msg:"happy birthday rahul",
    created_at:new Date(),
  },
  {
    from:"kamlesh",
    to:"muskan",
    msg:"how are you & what are you doing in this time",
    created_at:new Date(),
  },
  {
    from:"abhay",
    to:"vivek",
    msg:" oar CR kya hal chal ",
    created_at:new Date(),
  },
  {
    from:"Muskan",
    to:"priti",
    msg:"send me your exam sheets",
    created_at:new Date()
  },
];

Chat.insertMany(allChats);