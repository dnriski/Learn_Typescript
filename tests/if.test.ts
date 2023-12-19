describe("if statement", function (){
    it("should support in typescript", function(){
        const examValue = 90;
        if(examValue>80){
            console.log("GOOD")
        }else if(examValue>60){
            console.log("BAD")
        }else{
            console.log("POOR")
        }
    })
    it("its ternary operator", function (){
        const value = 80;
        const say = value >= 75?"GOOD":"BAD";
        console.log(say)
    })

    it("its switch statement", function(){
        function sayHello(name:string):string{
            switch(name){
                case "Eko":
                    return "HI Eko";
                case "Budi":
                    return "HI Budi";
                default:
                    return "Hello"
            }
        }
        console.log(sayHello("Eko"))
        console.log(sayHello("Budi"))
        console.log(sayHello("Joko"))

    })

})