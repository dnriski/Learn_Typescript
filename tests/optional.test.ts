describe("Optional", function(){
    it("Should run in typescript", function(){
      function sayHello(name?:string | null){
        if(name){
            console.info(`Hello ${name}`)
        }else{
            console.log("Hello");
        }
      }
      sayHello("Eko");
      const name:string | undefined = undefined;
      sayHello(name)
      sayHello(null)
    })
})