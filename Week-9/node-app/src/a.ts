
function firstElement<T>(arr : T[]) : T{
   return arr[0];
}

const value = firstElement<string>(["user1","user2"]);
console.log(value.toUpperCase());