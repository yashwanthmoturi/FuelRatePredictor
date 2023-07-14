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
    it('should return 200 and message "success" if registration is successful', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'newuser@example.com', password: 'password' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ message: 'success' });
    });

    it('should return 409 with message "duplicate user" if user already exists', async () => {
      const response = await request(app)
        .post('/register')
        .send({ email: 'newuser@example.com', password: 'password' });

      expect(response.status).to.equal(409);
      expect(response.body).to.deep.equal({ message: 'duplicate user' });
    });
  });

  describe('POST /login', () => {
    it('should return 200 and status "ok" if valid credentials are provided', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'newuser@example.com', password: 'password' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ status: 'ok' });
    });

    it('should return 200 and status "ok" with message "ClientProfilePending" if client profile is pending', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'profilepending@example.com', password: 'password' });

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ status: 'ok', message: 'ClientProfilePending' });
    });

    it('should return 401 with error message "Invalid Credentials" if invalid credentials are provided', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'invalid@example.com', password: 'password' });

      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({ error: 'Invalid Credentials' });
    });
  });

  // Test for /forgot endpoint
  describe('POST /forgot', () => {
    it('should return 200 and message "Email sent" if user is registered', async () => {
      const response = await request(app)
        .post('/forgot')
        .send({ email: 'registered@example.com' });

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
});