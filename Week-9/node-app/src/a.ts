interface User{
    name:string,
    age:number
}

function isLegal(user : User):boolean
{
    if(user.age > 18) return true;
    return false;
}

console.log(isLegal({name:"Ramesh",age:18}))