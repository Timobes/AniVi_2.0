const dotenv = require('dotenv');

const request = require('supertest')
const app = require('../index');
const assert = require('assert');

const agent = request.agent(app)

dotenv.config()

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}





describe('/anime', () => {
    it('/get', (done) => {
        request(app)
            .get('/api/anime')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                done() 
            })
    });

    it('/get one', (done) => {
        request(app)
            .get('/api/anime/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                done() 
            })
    })
});

describe('/auth', function() {
    const randomName = generateRandomString(7)
    const randomPass = generateRandomString(7)

    it('login', (done) => {
        request(app)
            .post('/api/auth/login')
            .send({username: `${randomName}`, pass: `${randomPass}`, repeatPass: `${randomPass}`})
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)

                done()
            })
    });
 
    it('auth', (done) => {
        agent
            .post('/api/auth/auth')
            .send({username: `${process.env.TEST_ADMIN_NAME}`, pass: `${process.env.TEST_ADMIN_PASS}`})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)

                done() 
            })
    })

    it('is admin', (done) => {
        agent
            .post('/api/auth/admin')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)

                done()
            })
    })
})

