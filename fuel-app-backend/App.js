app.post('/updatePassword', (req, res) => {
    const {email, password} = req.body;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address,"
    }
    if(!validate_feild(password, 7, 100)) {
        invalidMessage += "The password length must be inbetween 7 and 100";
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Update register_table set password=$2 where email=$1', [email, password], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            res.send({message:"success"});
        })   
    }
})

app.post('/clientProfile', (req, res) => {
    const {email, firstname, lastname, address1, address2, city, state, zipcode} = req.body;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address, "
    }
    if(!validate_feild(firstname, 1, 50)) {
        invalidMessage += "firstname length must be inbetween 1 and 50, "
    }
    if(!validate_feild(lastname, 1, 50)) {
        invalidMessage += "lastname length must be inbetween 1 and 50, "
    }
    if(!validate_feild(address1, 1, 100)) {
        invalidMessage += "address1 length must be inbetween 1 and 100, "
    }
    if(!validate_feild(city, 1, 100)) {
        invalidMessage += "city length must be inbetween 1 and 100, "
    }
    if(!validate_feild(state, 2, 2)) {
        invalidMessage += "state length must be 2, "
    }
    if(!validate_feild(zipcode, 5, 9)) {
        invalidMessage += "zipcode length must be inbetween 5 and 9"
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
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
    }
})

app.post('/updatePassword', (req, res) => {
    const {email, password} = req.body;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address,"
    }
    if(!validate_feild(password, 7, 100)) {
        invalidMessage += "The password length must be inbetween 7 and 100";
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Update register_table set password=$2 where email=$1', [email, password], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            res.send({message:"success"});
        })   
    }
})

app.post('/clientProfile', (req, res) => {
    const {email, firstname, lastname, address1, address2, city, state, zipcode} = req.body;
    let invalidMessage = "";
    if(!validateEmail(email)) {
        invalidMessage += "Invalid Email address, "
    }
    if(!validate_feild(firstname, 1, 50)) {
        invalidMessage += "firstname length must be inbetween 1 and 50, "
    }
    if(!validate_feild(lastname, 1, 50)) {
        invalidMessage += "lastname length must be inbetween 1 and 50, "
    }
    if(!validate_feild(address1, 1, 100)) {
        invalidMessage += "address1 length must be inbetween 1 and 100, "
    }
    if(!validate_feild(city, 1, 100)) {
        invalidMessage += "city length must be inbetween 1 and 100, "
    }
    if(!validate_feild(state, 2, 2)) {
        invalidMessage += "state length must be 2, "
    }
    if(!validate_feild(zipcode, 5, 9)) {
        invalidMessage += "zipcode length must be inbetween 5 and 9"
    }
    if(invalidMessage.length) {
        res.status(400).send({invalid_request: invalidMessage});
    }
    else {
        pool.query('Insert into user_table values($1,$2,$3,$4,$5,$6,$7,$8)', [firstname, lastname, address1, address2, city, state, zipcode, email], (error, results) => {
            if(error) {
                res.status(401).send(error);
            }
            // console.log(results);
            else {
                res.send({message:"Client Profile Completed"});
    
            }
        })
    }
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