// Original file: a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Person as _Person, Person__Output as _Person__Output } from './Person.ts';
import type { PersonName as _PersonName, PersonName__Output as _PersonName__Output } from './PersonName.ts';

export interface PersonServiceClient extends grpc.Client {
  addPerson(argument: _Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
  getPersonByName(argument: _PersonName, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _PersonName, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _PersonName, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _PersonName, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
}

export interface PersonServiceHandlers extends grpc.UntypedServiceImplementation {
  addPerson: grpc.handleUnaryCall<_Person__Output, _Person>;
  
  getPersonByName: grpc.handleUnaryCall<_PersonName__Output, _Person>;
  
}

export interface PersonServiceDefinition extends grpc.ServiceDefinition {
  addPerson: MethodDefinition<_Person, _Person, _Person__Output, _Person__Output>
  getPersonByName: MethodDefinition<_PersonName, _Person, _PersonName__Output, _Person__Output>
}
