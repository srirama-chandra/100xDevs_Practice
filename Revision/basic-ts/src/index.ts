
interface User{
    name : string,
    age : number,
    email : string,
    password : string
}

type updateProps = Partial<Pick<User,'name' | 'email'>>

