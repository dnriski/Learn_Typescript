"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ["Riski Dwi ", "Andi", "Eko"];
        // Read Only Array
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies[0]);
    });
    it("should support tupple", function () {
        //Tupple, array dengan jumlah dan tipe data yang sudah ditentukan
        const person = ["Riski", "Menulis", 30];
        console.info(person);
    });
});
