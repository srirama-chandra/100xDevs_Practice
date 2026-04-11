import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from "path";
import { fileURLToPath } from 'url';

const fileURL = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURL)

const PROTO_PATH = path.join(__dirname, "../a.proto");
const packageFile = protoLoader.loadSync(PROTO_PATH);
const personProto = grpc.loadPackageDefinition(packageFile);

const Persons = [];

function addPerson(call:any, callback:any) {
    let person = {
        name: call.request.name,
        age: call.request.age
    }
    Persons.push(person);
    console.log("Added Person");
    callback(null,person);
}

const server = new grpc.Server();

server.addService((personProto.AddressBookService as grpc.ServiceClientConstructor).service,{
    addPerson: addPerson
})

server.bindAsync("0.0.0.0:50051",grpc.ServerCredentials.createInsecure(),() => {
    server.start();
})