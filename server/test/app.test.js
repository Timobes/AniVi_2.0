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

// Test auth endpoint
describe('/auth', function() {
    const randomName = generateRandomString(8)
    const randomPass = generateRandomString(8)

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
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)

                done() 
            })
    })

    it('is admin', (done) => {
        agent
            .post('/api/auth/admin')
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)

                done()
            })
    })
})

// Test anime endpoint
describe('/anime', () => {
    it('/get', (done) => {
        request(app)
            .get('/api/anime')
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)
                done() 
            })
    });

    it('/get one', (done) => {
        request(app)
            .get('/api/anime/1')
            .expect(201)
            .end((err, res) => {
                if (err) return done(err)
                done() 
            })
    })

    it('/create anime', (done) => {
        agent
            .post('/api/anime/')
            .send({
                "anime_title_rus": "text 1", 
                "anime_title_eng": "text 1", 
                "anime_title_jap": "text 1", 
                "description": "desc 1", 
                "year": "09-09-2005", 
                "poster_url": "https://dere.shikimori.one/uploads/poster/animes/57334/main-fa84f9d076cad6ac3c74bb6972578bbe.webp", 
                "user_id": 1
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)

                done()
            })
    })
});



