const app = require("./app");

app.listen(process.env.server_port , () =>{
    console.log(`http://localhost:${process.env.server_port}`)
});

