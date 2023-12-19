describe('It a function', function (){
    it('should be work on typescript', function (){
        function sayHello(name:string):string{
            return `Hello ${name}`;
        }
        expect(sayHello('Riski')).toBe("Hello Riski")

        function printHello(name:string):void{ //void jika tidak mengembalikan data secara spesifik
            console.log(`Hello ${name}`)
        }
        printHello("RiskiAy")
    })
    it('should be work on typescript', function (){
        function sayHello(name:string="Guest"):string{
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest")
        expect(sayHello("Riski")).toBe("Hello Riski")

    })
    it("should support rest parameter", function(){
        function sum(...values:number[]):number{
            let total = 0;
            for (const value of values){
                total += value;
            }
            return total
        }
        expect(sum(1,2,3,4,5)).toBe(15)
    })
    it("should support optional parameter", function(){
        function sayHello(name:string, lastname?:string):string{
            if(lastname){
                return `Hello ${name} ${lastname}`
            }else {
                return `Hello ${name}`
            }

        }
        expect(sayHello("Riski")).toBe("Hello Riski")
        expect(sayHello("Riski", "Dwi")).toBe("Hello Riski Dwi")
    })
    it('should support function overloading', function (){
        function callMe(value:number):number;
        function callMe(value:string):string;
        function callMe(value:any):any{
            if(typeof value ==="string"){
                return value.toUpperCase()
            }else if(typeof value ==="number"){
                return value* 10
            }
        }
        expect(callMe(10)).toBe(100)
        expect(callMe("riski")).toBe("RISKI")
    })
    it('should function as parameter', function(){
        function sayHello(name:string, filter:(name:string)=>string):string{
            return `Hello ${filter(name)}`
        }
        function toUpper(name:string):string{
            return name.toUpperCase()
        }
        expect(sayHello("Eko", toUpper)).toBe("Hello EKO")
        expect(sayHello("Eko", function (name:string):string{
            return name.toUpperCase()
        })).toBe("Hello EKO")
        expect(sayHello("Eko",  (name:string):string =>  name.toUpperCase())).toBe("Hello EKO")

    })



})