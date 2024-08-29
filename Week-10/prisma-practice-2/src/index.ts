import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface user{
    email:string,
    name:string,
    password:string
}

async function createUser(obj:user) {

    const response = await prisma.user.create({
        data:{
            name:obj.name,
            email:obj.email,
            password:obj.password,
            posts:{
                create:[{title:"Post-1"}]
            }
        },
        select:{
            id:true
        }
    });
    console.log(response);
    console.log("User Created",response);
    
}

async function findUser(email:string) {

    const response = await prisma.user.findUnique({
       where:{
        email:email
       },
       include:{
        posts:true
       }
    });
    console.log(response);
    
}


async function updateUser(email:string,name:string) {

    const response = await prisma.user.update({
       where:{
        email:email
       },
      data:{
        name:name
      },
      select:{
        name:true
      }
    });
    console.log(response);
    console.log(response.name,"name updated successfully");
    
}

async function deleteUser(email:string) {

    const response = await prisma.user.delete({
       where:{
        email:email
       },
      select:{
        name:true
      }
    });
    console.log(response.name,"deleted successfully");
    
}

async function deleteUnpublishedPosts(email:string) {

     await prisma.user.update({
       where:{
        email:email
       },
      data:{
        posts:{
            deleteMany:{
                published:false
            }
        }
      }
    });
    console.log("unpublished posts deleted successfully");
    
}
deleteUnpublishedPosts("user3@gmail.com");