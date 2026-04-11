// Original file: a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetPersonByNameRequest as _GetPersonByNameRequest, GetPersonByNameRequest__Output as _GetPersonByNameRequest__Output } from './GetPersonByNameRequest.ts';
import type { Person as _Person, Person__Output as _Person__Output } from './Person.ts';

export interface PersonServiceClient extends grpc.Client {
  addPerson(argument: _Person, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  addPerson(argument: _Person, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
  getPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  getPersonByName(argument: _GetPersonByNameRequest, callback: grpc.requestCallback<_Person__Output>): grpc.ClientUnaryCall;
  
}

export interface PersonServiceHandlers extends grpc.UntypedServiceImplementation {
  addPerson: grpc.handleUnaryCall<_Person__Output, _Person>;
  
  getPersonByName: grpc.handleUnaryCall<_GetPersonByNameRequest__Output, _Person>;
  
}

export interface PersonServiceDefinition extends grpc.ServiceDefinition {
  addPerson: MethodDefinition<_Person, _Person, _Person__Output, _Person__Output>
  getPersonByName: MethodDefinition<_GetPersonByNameRequest, _Person, _GetPersonByNameRequest__Output, _Person__Output>
}
