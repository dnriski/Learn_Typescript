"use strict";
describe('Any', function () {
    it("should any", function () {
        const bebas = {
            name: "Riski", hobbies: "Membaca", age: 30
        };
        bebas.age = 34;
        console.info(bebas);
    });
});
