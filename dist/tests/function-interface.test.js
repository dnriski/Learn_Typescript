"use strict";
describe('Function Interface', () => {
    it("Work", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("Support indexable interface", function () {
        const names = ["Riski", "Rama", "Dwi"];
        console.log(names);
    });
    it("Support indexable interface", function () {
        const dictionary = {
            "name": "Eko",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Indonesia");
    });
});
