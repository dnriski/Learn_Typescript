import { Customer, CustomerType } from "../src/enum"

describe("Enum", function(){
    it("should run in typescript", function(){
        const customer:Customer = {
            id:1,
            name:"Riski Dwi",
            type:CustomerType.REGULAR
        }
    })
})