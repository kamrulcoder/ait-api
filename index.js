// express import 
const express = require("express");

// app create 
const app = express();

//  all dependency import 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan")
const cors = require('cors');

// dependency import 
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    cors()
]
/* ==========================
   all route import   start 
*============================ */

const contactRouter = require("./routes/contacts")
const userRouter = require("./routes/users")
const regstraterRouter = require("./routes/registers")

/* ==========================
   all route import   start 
*============================ */


// env dependency  function call 
dotenv.config();
app.use(middleware)


/* ==========================
   all route  use start  
*============================ */

app.use("/contacts", contactRouter)
app.use("/users", userRouter);
app.use("/registers", regstraterRouter)


app.get("/", (req, res) => {
    res.send("<h2>you are success and all  work api project </h2>")
})

/* ==========================
   all route  use end   
*============================ */


/* ==========================
mongdb connect code  start 
*============================ */

const PORT = process.env.PORT || 5000;

const uri = "mongodb+srv://ait:SjmJRTYNzGgcWowg@cluster0.fusm9.mongodb.net/advancedit?retryWrites=true&w=majority";
mongoose.connect(uri,
    { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected')
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    })
    .catch(e => {
        return console.log(e)
    })

/* ==========================
mongdb connect code  end
*============================ */