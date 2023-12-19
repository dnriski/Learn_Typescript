"use strict";
describe('It a function', function () {
    it('should be work on typescript', function () {
        function sayHello(name) {
             return `Hello ${name}`;
        }
        expect(sayHello('Riski')).toBe("Hello Riski");
        function printHello(name) {
            console.log(`Hello ${name}`);
        }
        printHello("RiskiAy");
    });
    it('should be work on typescript', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Riski")).toBe("Hello Riski");
    });
    it("should support rest parameter", function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", function () {
        function sayHello(name, lastname) {
            if (lastname) {
                return `Hello ${name} ${lastname}`;
            }
            else {
                return `Hello ${name}`;
            }
        }
        expect(sayHello("Riski")).toBe("Hello Riski");
        expect(sayHello("Riski", "Dwi")).toBe("Hello Riski Dwi");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("riski")).toBe("RISKI");
    });



});
