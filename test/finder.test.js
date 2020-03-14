const app = require("../app");
const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");

const route = "/v1/finders"
const idExplorer = "5e4d890645dd27745b5f6e81";
const explorers = "/explorers"

chai.use(chaiHttp);
describe("Tests on finder", () => {
    describe("Tests on GET", () => {
        it("Gets all finders", done => {
            chai
            .request(app)
            .get(route)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });
        it("Gets finders", done => {
            chai
            .request(app)
            .get(route + "/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });
    });
    describe("PUT or CREATE", () => {
        it("Update finder", done =>{
            chai
            .request(app)
            .put(route + explorers + "/" + idExplorer)
            .send({
                keyword: "Hawai",
                startDate: "2021"
            })
            .end((err, res) => {
                expect(res).to.have.any.status(200, 201);
                done();
            });
        });
    });
    describe("DELETE", () => {
        it("Delete finder by sponsor ID", done =>{
            chai
            .request(app)
            .delete(route + explorers + "/" + idExplorer)
            .end((err, res) => {
                expect(res).to.have.status(200);
                //expect(res).to.have({message: "Finder eliminado."});
                done();
            });
        });
    });
});