const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({
  onConnect(session,cb){
    console.log(`onConnect`, session.id)
    cb(); //Accept the connection
   // cb(new Error('Connect Acce')) // reject the server
  },
  onMailFrom(address, session, cb){
    console.log(`onMailFrom`, address.address, session.id)
  }
});


  server.listen(25, ()=>{
    console.log("Server Running on 25")

  });
  