import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GetPersonByNameRequest as _GetPersonByNameRequest, GetPersonByNameRequest__Output as _GetPersonByNameRequest__Output } from './GetPersonByNameRequest.ts';
import type { Person as _Person, Person__Output as _Person__Output } from './Person.ts';
import type { PersonServiceClient as _PersonServiceClient, PersonServiceDefinition as _PersonServiceDefinition } from './PersonService.ts';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  GetPersonByNameRequest: MessageTypeDefinition<_GetPersonByNameRequest, _GetPersonByNameRequest__Output>
  Person: MessageTypeDefinition<_Person, _Person__Output>
  PersonService: SubtypeConstructor<typeof grpc.Client, _PersonServiceClient> & { service: _PersonServiceDefinition }
}

