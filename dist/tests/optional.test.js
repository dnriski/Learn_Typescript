"use strict";
describe("Optional", function () {
    it("Should run in typescript", function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.log("Hello");
            }
        }
        sayHello("Eko");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
