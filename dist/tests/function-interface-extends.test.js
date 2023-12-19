describe('Function Interface Extends', () => {
    it("Work", function () {
        const employee = {
            id: "1",
            name: "Risk Dwi",
            division: "IT"
        };
        const manager = {
            id: "2",
            name: "Dwi",
            division: "Manager",
            numberOfEmployee: 123
        };
        console.log(employee);
        console.log(manager);
    });
    it("describe", function () {
        const person = {
            name: "Eko",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.log(person.sayHello("Panji"));
    });
    it('should support typescript', function () {
        const domain = {
            id: '1',
            name: "riski dwi nugroho"
        };
        console.log(domain);
    });
    it('support', function () {
        const person = {
            name: "riski",
            age: 30
        };
        const person2 = person;
        console.log(person2);
    });
});
export {};
