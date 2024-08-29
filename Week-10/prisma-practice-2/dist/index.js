"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                name: obj.name,
                email: obj.email,
                password: obj.password,
                posts: {
                    create: [{ title: "Post-1" }]
                }
            },
            select: {
                id: true
            }
        });
        console.log(response);
        console.log("User Created", response);
    });
}
function findUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                posts: true
            }
        });
        console.log(response);
    });
}
function updateUser(email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.update({
            where: {
                email: email
            },
            data: {
                name: name
            },
            select: {
                name: true
            }
        });
        console.log(response);
        console.log(response.name, "name updated successfully");
    });
}
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.delete({
            where: {
                email: email
            },
            select: {
                name: true
            }
        });
        console.log(response.name, "deleted successfully");
    });
}
deleteUser("user1@gmail.com");
