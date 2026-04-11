import path from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './generated/a.ts';
import type { PersonServiceHandlers } from './generated/PersonService.ts';
import { Status } from '@grpc/grpc-js/build/src/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const protoPath = path.join(__dirname,"a.proto");

const packageDefinition = protoLoader.loadSync(protoPath);

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

type person = {
    name: string,
    age: number
}

const Persons: person[] = [];

const handlers : PersonServiceHandlers = {
    addPerson : (call, callback) => {
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    Persons.push(person);
    callback(null, person)
    },

    getPersonByName: (call, callback) => {
    let person = Persons.find(x => x.name === call.request.name);
    if (person) {
      callback(null, person)
    } else {
      callback({
        code: Status.NOT_FOUND,
        details: "not found"
      }, null);
    }
  }

}

const server = new grpc.Server();

server.addService((personProto.PersonService).service, handlers);

server.bindAsync('0.0.0.0:5051',grpc.ServerCredentials.createInsecure(),() => {
    server.start();
})