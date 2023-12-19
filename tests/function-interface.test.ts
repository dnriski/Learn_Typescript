describe('Function Interface', () => { 
    it("Work", function(){

        interface Addfunction {
            (value1:number, value2:number):number
        }
        const add:Addfunction = (value1:number, value2:number):number =>{
            return value1 + value2
        }
        expect(add(2,2)).toBe(4)
    })

    it("Support indexable interface", function(){

        interface StringArray{
            [index:number]:string
        }
        const names: StringArray = ["Riski", "Rama", "Dwi"]
        console.log(names)
    })
    it("Support indexable interface", function(){

        interface StringDictionary{
            [key:string]:string
        }
        const dictionary: StringDictionary = {
            "name":"Eko",
            "address":"Indonesia"
        }
       expect(dictionary["name"]).toBe("Eko")
       expect(dictionary["address"]).toBe("Indonesia")
    })

 })