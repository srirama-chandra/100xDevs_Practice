
type User = {
    [key:string]:number;
}


// More Cleaner Syntax Using Record

type UserRecord = Record<string,number>

const userData: UserRecord = {
    "id1":1,
    "id2":2
}