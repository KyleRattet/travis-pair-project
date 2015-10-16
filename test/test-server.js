process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe("Testing", function() {
  it("should return 200 on success", function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });

  it("should return false on 404", function(done){
    chai.request(server)
    .get("/")
    .end(function(err, res) {
      res.should.have.status(404);
      done();
    });
  });
});
