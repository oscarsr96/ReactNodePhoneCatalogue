var assert = require('assert');
var request = require('supertest')
var app = require('../server');

describe('phones', function() {
    describe('GET', function(){
        it('Should return json as default data format', function(done){
            request(app).get('/phones')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});
