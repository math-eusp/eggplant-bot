const Discord = require("discord.js");
const client = new Discord.Client();

client.login("");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame("Eggplant Simulator 2k17"); 
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  //if (message.author.bot) return;  
  var user_id = message.author.id;
  message.guild.roles.forEach(function(role){
    if(role.name === "Growing Eggplants"){
      role.members.forEach(function(member){
        if(user_id == member.id){
          message.react("🍆").then(msg => console.log(`Growed an eggplant`))
	        .catch(console.error);
        }
      });
    }
  });
});