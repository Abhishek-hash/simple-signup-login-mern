const express = require('express')
const mongoDB = require('./db/db')
const cors = require('cors')
const user = require('./db/user')
const PORT = 5000

const app = express()
app.use(express.json());
app.use(cors());

// api to register the user
app.post('/register', async (req, resp) => {

    try {
        await user.create({
            name: req.body.name,
            password: req.body.password,
        })
        return resp.status(200).json({success: true});
    }
    catch (error) {
        console.log(error)
        resp.status(400).json({ sucess: false });
    }
});


// api to login the user
app.post('/login', async (req, resp) => {

    try {
        let isUser = await user.findOne({
           name: req.body.name 
        })
        if(isUser) {
            return resp.status(200).json({success: true});
        }

        else return resp.status(400).json({error: "user does not exist"});
    }
    catch (error) {
        console.log(error)
        resp.status(400).json({ sucess: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)

})

mongoDB()