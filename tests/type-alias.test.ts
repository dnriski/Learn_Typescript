import { Category, Product } from "../src/alias"

describe('Type Alias', function(){
    it('should support in typescript',function(){
        const category:Category={
            id:"1",
            name:"Handphone"
        };
        const product:Product={
            id:"1",
            name:'Samsung S20',
            price:200000000,
            category:category
        }

        console.info(category)
        console.info(product)

    })
})