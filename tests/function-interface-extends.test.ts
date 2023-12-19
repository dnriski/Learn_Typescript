import { Employee, Manager } from "../src/employee"
import {Person} from "../src/person";

describe('Function Interface Extends', () => { 
    it("Work", function(){

    const employee:Employee={
        id:"1",
        name:"Risk Dwi",
        division:"IT"
    }
    const manager:Manager={
        id:"2",
        name:"Dwi",
        division:"Manager",
        numberOfEmployee:123
    }
      console.log(employee);
      console.log(manager);
    })

    it("describe", function () {
        interface Person{
            name :string;
            sayHello(name:string):string;
        }

        const person:Person={
            name:"Eko",
            sayHello:function (name:string):string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.log(person.sayHello("Panji"))

    })

    it('should support typescript', function(){
        interface HasName{
            name:string
        }
        interface HasId{
            id:string
        }
        type Domain = HasId & HasName
        const domain:Domain={
            id:'1',
            name:"riski dwi nugroho"
        }
    console.log(domain)
    })

      it('support', function (){

          const person:any={
              name :"riski",
              age:30
          }
          const person2 : Person = person as Person
          console.log(person2)
      })


 })

