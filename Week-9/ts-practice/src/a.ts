
interface User{
    name:string;
    age:number;
}

function isLegal(user:User)
{
    if(user.age > 18) return true;
    return false;
}

console.log(isLegal({name:"Harish",age:18}));