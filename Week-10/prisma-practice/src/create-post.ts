import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addPosts() {

    await prisma.post.create({
        data:{
            title:"Title1",
            content:"Content-1",
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}

addPosts();