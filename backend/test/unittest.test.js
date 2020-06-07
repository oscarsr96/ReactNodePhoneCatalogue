var assert = require('assert');
var request = require('supertest')

var request = request("http://localhost:3000")

describe('products', function() {
    describe('GET', function(){
        it('Should return json as default data format', function(done){
            request.get('/api/phones')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});
