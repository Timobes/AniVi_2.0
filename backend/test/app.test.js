const dotenv = require('dotenv');

const request = require('supertest')
const app = require('../index');
const assert = require('assert');

let token = ''

dotenv.config()

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
    // it('/login', function() {

    // });
 
    it('auth', (done) => {
        request(app)
            .post('/api/auth/auth')
            .send({username: `${process.env.TEST_ADMIN_NAME}`, pass: `${process.env.TEST_ADMIN_PASS}`})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)

                    const cookies = res.headers['set-cookie'];

                    // Функция для извлечения значения конкретной куки
                    const getCookieValue = (name) => {
                        const cookie = cookies.find(cookie => cookie.startsWith(name + '='));
                        return cookie ? cookie.split(';')[0].split('=')[1] : null;
                    };
            
                    token = getCookieValue('accessToken');
                done() 
            })
    })

    it('is admin', (done) => {
        request(app)
            .post('/api/auth/admin')
            .set('Cookie', [`accessToken=${token}`])
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)

                done()
            })
    })
})
