
type person = {
    name:string;
    age:number;
}
type dob = {
    name:string;
    year:number;
}

type newType = person & dob ;

type stringOrNumber = number | string;

let id : stringOrNumber = "id123";
id = 123;
