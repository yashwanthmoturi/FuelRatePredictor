const express = require('express')
const app = express()
app.use(express.json());
const nodemailer = require("nodemailer");
var cors = require('cors')

app.use(cors())

const port = 3001

const transporter = nodemailer.createTransport({
    host: 'smtp.outlook.com',
    port: 587,
    auth: {
        user: 'fuelratepredictor@outlook.com',
        pass: 'FuelRate@2437'
    }
});



const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FuelDB',
    password: 'admin',
    port: 5432,
  })

const generateRandomNumber = () => {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    

app.post('/login', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    const {email, password} = req.body;
   
    

    // let email = 'yashwanthmoturi2002@gmail.com'
    // let password = 'moturi'
    pool.query('Select count(*) from register_table where email=$1 and password=$2', [email, password], (error, results) => {
        if(error) {
            res.status(401).send(error);
        }
        if(results?.rows[0].count === "1") {
            pool.query('Select count(*) from user_table where email=$1', [email], (error, results) => {
                if(error) {
                    res.status(401).send(error);
                }
                else if(results?.rows[0].count === "1") {
                    res.status(200).send({status:"ok"});
                }
                else {
                    res.status(200).send({status:"ok",message:"ClientProfilePending"});
                }
            })
        }
        else {
            res.status(401).send({error:"Invalid Credentials"})
        }
    })
})

app.post('/register', (req, res) => {
    const {email, password} = req.body;
    // let email = 'yashwanthmoturi2002@gmail.com'
    // let password = 'moturi'
    pool.query('Select count(*) from register_table where email=$1',[email], (error, results) => {
        if(error) {
            res.status(401).send(error);
        }
        if(results?.rows[0].count === "1") {
            res.status(409).send({"message":"duplicate user"});
        }
        else {
            pool.query('Insert into register_table values($1,$2)', [email, password], (error, results) => {
                if(error) {
                    res.status(401).send(error);
                }
                // console.log(results);
                res.send({message:"success"});
            })
        }
    })
    
})

app.post('/forgot', async (req, res) => {
    const {email} = req.body;



        pool.query('Select count(*) from register_table where email=$1',[email], async (error, results) => {
            if(error) {
                res.status(401).send({message:"Error in sending Email"});
            }
            if(results?.rows[0].count === "0") {
                res.status(409).send({"message":"user have not registered"});
            }
            else {
                // send email
                try{
                    const randomNum = generateRandomNumber();
    
                    await transporter.sendMail({
                        from: 'fuelratepredictor@outlook.com',
                        to: email,
                        subject: 'Verification Code',
                        html: `<h1>Verification code is ${randomNum}</h1>`
                    });
                    
                    pool.query('Insert into verification_table values($1,$2) ON Conflict(email) do update set code=$3', [email, randomNum, randomNum]);
    
    
                }
                catch(e){
                    // console.log("Hii",e,"bye");
                    res.send({message:"Error sending Email"});
                }
                res.send({message:"Email sent"});
            }
        })

})

app.post('/verify', (req, res) => {
    const {email, code} = req.body;
        pool.query('Select count(*) from verification_table where email=$1 and code=$2',[email, code], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            else if(results?.rows[0]?.count === "0") {
                res.status(409).send({"message":"Invalid code"});
            }
            else {
                res.send({message:"code verified"});
            }
        })
})

app.post('/updatePassword', (req, res) => {
    const {email, password} = req.body;
        pool.query('Update register_table set password=$2 where email=$1', [email, password], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            res.send({message:"success"});
        })   
})

app.post('/clientProfile', (req, res) => {
    const {email, firstname, lastname, address1, address2, city, state, zipcode} = req.body;
        pool.query('Insert into user_table values($1,$2,$3,$4,$5,$6,$7,$8)', [firstname, lastname, address1, address2, city, state, zipcode, email], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            else {
                res.send({message:"Client Profile Completed"});
    
            }
        })
})

app.get('/getUserDetails', (req, res) => {
    const {email} = req.query;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address,"
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Select address1, address2, state, city, zipcode from user_table where email=$1',[email], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            else {
                res.send(results?.rows[0]);
            }
        })
    }
})

app.post('/submitQuote', (req, res) => {
    const {email, gallons_requested, delivery_date, delivery_address, suggested_price_per_gallon, total_amount_due} = req.body;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address,"
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Insert into fuel_quote_history values($1,$2,$3,$4,$5,$6)', [gallons_requested, delivery_address, delivery_date, suggested_price_per_gallon, total_amount_due, email], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            else {
                res.send({message:"Fuel Quote Submitted"});
            }
        })
    }
})

app.get('/getFuelHistory', (req, res) => {
    const {email} = req.query;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address,"
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Select gallons_requested, delivery_date, delivery_address, suggested_price_per_gallon, total_amount_due from fuel_quote_history where email=$1',[email], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            else {
                res.send(results?.rows);
            }
        })
    }
})

app.listen(port, () => {
  console.log(`Fuel app backen listening on port ${port}`)
})


module.exports = app;