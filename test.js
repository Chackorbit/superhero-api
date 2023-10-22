// const assert = require("assert");
// const request = require("supertest");
// const app = require("./app");

// // Приклад тестів
// describe("Superhero API", function () {
//   it("should create a superhero", function (done) {
//     request(app)
//       .post("/superheroes")
//       .send({
//         nickname: "Superman",
//         real_name: "Clark Kent",
//         origin_description: "Born on Krypton...",
//         superpowers: ["Flight", "Heat Vision"],
//         catch_phrase: "Look, up in the sky!",
//         images: ["superman.jpg"],
//       })
//       .expect(201, done);
//   });

//   it("should list superheroes", function (done) {
//     request(app).get("/superheroes").expect(200, done);
//   });

//   it("should get details of a superhero", function (done) {
//     request(app)
//       .get("/superheroes/1")
//       .expect(200)
//       .expect(function (res) {
//         assert(res.body.nickname === "Superman");
//       })
//       .end(done);
//   });
// });

// // Запуск тестів
// describe("Run Tests", function () {
//   it("should run all tests", function () {});
// });
