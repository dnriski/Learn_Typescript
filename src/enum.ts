export enum CustomerType{
    REGULAR = 1, //bisa disesuaikan dengan tipe data number atau string
    GOLD = 2,
    PLATINUM = 3,
}

export type Customer ={
    id:number | string;
    name:string;
    type:CustomerType;

}