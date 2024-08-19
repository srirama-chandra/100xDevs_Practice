
type person = {
    name:string;
    age:number;
}
type dob = {
    name:string;
    year:number;
}

type newType = person & dob ;

const user1 : newType = {
    name:"Ramesh",
    age:21,
    year:2023,
}
