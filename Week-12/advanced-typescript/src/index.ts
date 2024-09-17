
// interface User {
//     id:string;
//     name:string;
//     email:string;
//     password:string;
// }

// type updatedProps = Pick<User,'name'|'password'>

// type optionalTypes = Partial<updatedProps>

// function updateUser(props:optionalTypes)
// {
//     console.log(props.name);
// }

// updateUser({name:"hi"})

interface Config {
    url:string;
    apiKey:string
}

const configData :Readonly<Config> = {
    url:"randomurl.com",
    apiKey:"key"
}


