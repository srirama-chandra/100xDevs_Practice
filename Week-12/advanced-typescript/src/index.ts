
interface User {
    id:string;
    name:string;
    email:string;
    password:string;
}

type updatedProps = Pick<User,'name'|'password'>

function updateUser(props:updatedProps)
{
    console.log(props.name+" "+props.password);
}