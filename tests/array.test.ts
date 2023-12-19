describe('Array', function(){
    it('should same with javascript', function(){
        const names:string[] = ["Riski Dwi ", "Andi", "Eko"];
       
        // Read Only Array
        const hobbies: ReadonlyArray<string> =["Membaca", "Menulis"]
        console.info(hobbies[0])
    })

    it("should support tupple", function () {

        //Tupple, array dengan jumlah dan tipe data yang sudah ditentukan
        const person : readonly[String, String, number] = ["Riski", "Menulis", 30];
        console.info(person);
      });

})