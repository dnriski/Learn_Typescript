describe("loop", function(){
    it("Should support for loop", function(){})
    const names:string[]=["Riski","Dwi","Nugroho"]

    for(let i=0;i<names.length;i++){
        console.log(names[i])
    }

    for(const name of names){
        console.log(name)
    }
    for(const index in names){
        console.log(names[index])
    }

    it("while loop", function (){
        let counter:number=0

        while (counter<10){
            console.log(counter)
            counter++
        }
    })

    it("do while loop", function (){
        let counter:number=0

        do{
            console.log(counter)
            counter++
        }
        while (counter<10)
    })
    it("break & continou", function (){
        let counter:number=0

        do{
            counter++
            if(counter==10) {
                break
            }
            if(counter % 2 ==0){
                continue;
            }
        console.log(counter)
        }while(true)

    })




})