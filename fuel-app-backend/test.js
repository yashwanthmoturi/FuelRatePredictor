const request = require('supertest');
const app = require('./App');
const chaiAsPromised = require('chai-as-promised');
const chai = require('chai');
chai.use(chaiAsPromised);

const { describe } = require('mocha');
const expect = chai.expect;

describe('API Endpoints', () => {

  // Test for /register endpoint
  describe('POST /register', () => {
    it('should return 400 and message "Invalid Email address," if registration email format is invalid', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'yash', password: 'password' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
    });

    it('should return 400 and message "The password length must be inbetween 7 and 100" if registration password length is insufficient', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'yashwanth0231@gmail.com', password: 'pass' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'The password length must be inbetween 7 and 100' });
    });

    it('should return 200 and message "success" if registration is successful', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'yashwanth0231@gmail.com', password: 'password' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ message: 'success' });
    });

    it('should return 409 with message "duplicate user" if user already exists', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'yashwanth0231@gmail.com', password: 'password' });

      expect(response.status).to.equal(409);
      expect(response.body).to.deep.equal({ message: 'duplicate user' });
    });
  });

  describe('POST /login', () => {
    it('should return 400 and message "Invalid Email address," if login email format is invalid', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'yash', password: 'password' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
    });

    it('should return 400 and message "The password length must be inbetween 7 and 100" if login password length is insufficient', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'yashwanth0231@gmail.com', password: 'pass' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'The password length must be inbetween 7 and 100' });
    });

    it('should return 200 and status "ok" with message "ClientProfilePending" if client profile is pending', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'yashwanth0231@gmail.com', password: 'password' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ status: 'ok', message: 'ClientProfilePending' });
    });

    it('should return 401 with error message "Invalid Credentials" if invalid credentials are provided', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'yashwanth0231@gmail.com', password: 'awfewel' });

      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({ error: 'Invalid Credentials' });
    });
  });

// Test for /forgot endpoint
describe('POST /forgot', () => {
  it('should return 400 and message "Invalid Email address," if email format is invalid', async () => {
    const response = await request(app)
      .post('/forgot')
      .send({ email: 'yash' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
  });

  it('should return 200 and message "Email sent" if user is registered', async () => {
    const response = await request(app)
      .post('/forgot')
      .send({ email: 'yashwanth0231@gmail.com' });

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'Email sent' });
  });

  it('should return 409 with message "user have not registered" if user is not registered', async () => {
    const response = await request(app)
      .post('/forgot')
      .send({ email: 'unregistered@example.com' });

    expect(response.status).to.equal(409);
    expect(response.body).to.deep.equal({ message: 'user have not registered' });
  });
});

// Test for /verify endpoint
describe('POST /verify', () => {
  it('should return 400 and message "Invalid Email address," if verification email format is invalid', async () => {
    const response = await request(app)
      .post('/verify')
      .send({ email: 'yash', code: '11323' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
  });

  it('should return 400 and message "The verification code length should be 5" if verification code length is invalid', async () => {
    const response = await request(app)
      .post('/verify')
      .send({ email: 'yashwanth0231@gmail.com', code: '113' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'The verification code length should be 5' });
  });

  it('should return 200 and message "code verified" if valid email and code are provided', async () => {
    const response = await request(app)
      .post('/verify')
      .send({ email: 'dummyemail4729529492@gmail.com', code: '12345' });

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'code verified' });
  });

  it('should return 409 with message "Invalid code" if invalid code is provided', async () => {
    const response = await request(app)
      .post('/verify')
      .send({ email: 'yashwanth0231@gmail.com', code: '54321' });

    expect(response.status).to.equal(409);
    expect(response.body).to.deep.equal({ message: 'Invalid code' });
  });
});

 // Test for /updatePassword endpoint
 describe('POST /updatePassword', () => {
  it('should return 400 and message "Invalid Email address," if email format is invalid', async () => {
    const response = await request(app)
      .post('/updatePassword')
      .send({ email: 'yash', password: 'password' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
  });

  it('should return 400 and message "The password length must be inbetween 7 and 100" if password length is insufficient', async () => {
    const response = await request(app)
      .post('/updatePassword')
      .send({ email: 'yashwanth0231@gmail.com', password: 'pass' });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'The password length must be inbetween 7 and 100' });
  });

  it('should return 200 and message "success" if password is updated successfully', async () => {
    const response = await request(app)
      .post('/updatePassword')
      .send({ email: 'yashwanth0231@gmail.com', password: 'newpassword' });

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'success' });
  });
});

// Test for /clientProfile endpoint
describe('POST /clientProfile', () => {
  it('should return 400 and message "Invalid Email address, firstname length must be inbetween 1 and 50, lastname length must be inbetween 1 and 50, address1 length must be inbetween 1 and 100, city length must be inbetween 1 and 100, state length must be 2, zipcode length must be inbetween 5 and 9" if all client profile input validations fails', async () => {
    const response = await request(app)
      .post('/clientProfile')
      .send({
        email: 'yashw',
        firstname: '',
        lastname: '',
        address1: '',
        address2: 'Apt 4B',
        city: '',
        state: 'NYWO',
        zipcode: '345'
      });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address, firstname length must be inbetween 1 and 50, lastname length must be inbetween 1 and 50, address1 length must be inbetween 1 and 100, city length must be inbetween 1 and 100, state length must be 2, zipcode length must be inbetween 5 and 9' });
  });

  it('should return 200 and message "Client Profile Completed" if client profile is inserted successfully', async () => {
    const response = await request(app)
      .post('/clientProfile')
      .send({
        email: 'yashwanth0231@gmail.com',
        firstname: 'John',
        lastname: 'Doe',
        address1: '123 Street',
        address2: 'Apt 4B',
        city: 'New York',
        state: 'NY',
        zipcode: '12345'
      });

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ message: 'Client Profile Completed' });
  });
});

  // Test for /getUserDetails endpoint
  describe('GET /getUserDetails', () => {
    it('should return 400 and message "Invalid Email address," if registration email format is invalid', async () => {
      const response = await request(app)
        .get('/getUserDetails')
        .query({ email: 'yash' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
    });

    it('should return 200 and user details if email is valid', async () => {
      const response = await request(app)
        .get('/getUserDetails')
        .query({ email: 'yashwanth0231@gmail.com' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        address1: '123 Street',
        address2: 'Apt 4B',
        state: 'NY',
        city: 'New York',
        zipcode: '12345'
      });
    });
  });

  // Test for /submitQuote endpoint
  describe('POST /submitQuote', () => {
    it('should return 400 and message "Invalid Email address," if email format is invalid', async () => {
      const response = await request(app)
        .post('/submitQuote')
        .send({ email: 'yash' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
    });

    it('should return 200 and message "Fuel Quote Submitted" if quote is submitted successfully', async () => {
      const response = await request(app)
        .post('/submitQuote')
        .send({
          email: 'yashwanth0231@gmail.com',
          gallons_requested: 100,
          delivery_date: '2023-07-15',
          delivery_address: '123 Street',
          suggested_price_per_gallon: 3.5,
          total_amount_due: 350
        });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ message: 'Fuel Quote Submitted' });
    });
  });

  describe('POST /login', () => {
    it('should return 401 with error message "Invalid Credentials" if invalid credentials are provided', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'yashwanth0231@gmail.com', password: 'awfewel' });

      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({ error: 'Invalid Credentials' });
    });
  });

  // Test for /getFuelHistory endpoint
  describe('GET /getFuelHistory', () => {
    it('should return 400 and message "Invalid Email address," if email format is invalid', async () => {
      const response = await request(app)
        .get('/getFuelHistory')
        .query({ email: 'yash' });

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ invalid_request: 'Invalid Email address,' });
    });

    it('should return 200 and fuel quote history for the user', async () => {
      const response = await request(app)
        .get('/getFuelHistory')
        .query({ email: 'yashwanth0231@gmail.com' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal([
        {
          gallons_requested: 100,
          delivery_date: '2023-07-15T05:00:00.000Z',
          delivery_address: '123 Street',
          suggested_price_per_gallon: 3.5,
          total_amount_due: 350
        }
      ]);
    });
  });
});