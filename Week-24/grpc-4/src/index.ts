import path from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './generated/a.js';
import type { PersonServiceHandlers } from './generated/PersonService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const protopath = path.join(__dirname,'a.proto');

const packageDefinition = protoLoader.loadSync(protopath);
const personProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

let PERSONS = [];

const handlers : PersonServiceHandlers= {

    addPerson : (call,callback) => {
        let person = {
            name : call.request.name,
            age : call.request.age
        }
        PERSONS.push(person);
        callback(null,person);
    }
}

const server = new grpc.Server();
server.addService(personProto.PersonService.service,handlers);

server.bindAsync('0.0.0.0:5051',grpc.ServerCredentials.createInsecure(), () => {
    server.start();
})