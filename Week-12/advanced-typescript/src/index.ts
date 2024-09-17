
type User = {
    name:string;
    age:number;
}

const userData : Readonly<User> = {
    name:"User1",
    age:20,
}

// userData.name= "hello";
// Error When Trying To Change The Value