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