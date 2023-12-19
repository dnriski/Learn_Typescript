import { Seller } from "../src/seller-interface"

describe('interface', () => { 
    it("Work", ()=>{
        const seller:Seller={
            id:1,
            name:"Toko Pak Edi"
        }
        console.log(seller);
    })
 })