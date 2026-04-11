import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { Person as _Person, Person__Output as _Person__Output } from './Person.ts';
import type { PersonName as _PersonName, PersonName__Output as _PersonName__Output } from './PersonName.ts';
import type { PersonServiceClient as _PersonServiceClient, PersonServiceDefinition as _PersonServiceDefinition } from './PersonService.ts';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Person: MessageTypeDefinition<_Person, _Person__Output>
  PersonName: MessageTypeDefinition<_PersonName, _PersonName__Output>
  PersonService: SubtypeConstructor<typeof grpc.Client, _PersonServiceClient> & { service: _PersonServiceDefinition }
}

