import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type CreateEventError = { 'userNotAuthenticated' : null } |
  { 'invalidInput' : null } |
  { 'systemError' : null };
export type CreateEventError__1 = { 'userNotAuthenticated' : null } |
  { 'invalidInput' : null } |
  { 'systemError' : null };
export interface CreateEventRequest {
  'ticketTypes' : Array<
    {
      'name' : string,
      'description' : [] | [string],
      'capacity' : bigint,
      'price' : bigint,
    }
  >,
  'date' : string,
  'name' : string,
  'time' : string,
  'description' : string,
  'imageUrl' : [] | [string],
  'artStyle' : string,
  'location' : string,
}
export type CreateEventResponse = { 'ok' : Event } |
  { 'err' : CreateEventError };
export interface Event {
  'id' : EventId,
  'status' : EventStatus,
  'organizer' : Principal,
  'ticketTypes' : Array<TicketType>,
  'date' : string,
  'name' : string,
  'time' : string,
  'description' : string,
  'imageUrl' : [] | [string],
  'artStyle' : string,
  'location' : string,
}
export type EventId = string;
export type EventId__1 = string;
export type EventStatus = { 'active' : null } |
  { 'cancelled' : null } |
  { 'completed' : null };
export type GetEventError = { 'eventNotFound' : null };
export type GetEventResponse = { 'ok' : Event } |
  { 'err' : GetEventError };
export type GetEventsError = { 'systemError' : null };
export type GetEventsResponse = { 'ok' : Array<Event> } |
  { 'err' : GetEventsError };
export type MintTicketError = { 'ticketTypeNotFound' : null } |
  { 'userNotAuthenticated' : null } |
  { 'eventNotFound' : null } |
  { 'systemError' : null } |
  { 'soldOut' : null } |
  { 'eventNotActive' : null };
export interface MintTicketRequest {
  'eventId' : EventId,
  'ticketTypeId' : TicketTypeId,
}
export type MintTicketResponse = { 'ok' : Ticket } |
  { 'err' : MintTicketError };
export type Result = { 'ok' : boolean } |
  { 'err' : CreateEventError__1 };
export interface Ticket {
  'id' : TicketId,
  'eventId' : EventId,
  'ticketTypeId' : TicketTypeId,
  'owner' : Principal,
  'metadata' : TicketMetadata,
  'isUsed' : boolean,
  'mintedAt' : bigint,
}
export type TicketId = string;
export type TicketId__1 = string;
export interface TicketMetadata {
  'name' : string,
  'description' : string,
  'imageUrl' : [] | [string],
  'attributes' : Array<[string, string]>,
}
export interface TicketType {
  'id' : TicketTypeId,
  'name' : string,
  'sold' : bigint,
  'description' : [] | [string],
  'capacity' : bigint,
  'price' : bigint,
}
export type TicketTypeId = string;
export interface Ticket__1 {
  'id' : TicketId,
  'eventId' : EventId,
  'ticketTypeId' : TicketTypeId,
  'owner' : Principal,
  'metadata' : TicketMetadata,
  'isUsed' : boolean,
  'mintedAt' : bigint,
}
export type VerifyTicketError = { 'userNotAuthenticated' : null } |
  { 'eventNotFound' : null } |
  { 'systemError' : null } |
  { 'eventNotActive' : null } |
  { 'ticketNotFound' : null };
export interface VerifyTicketRequest { 'ticketId' : TicketId }
export type VerifyTicketResponse = { 'ok' : boolean } |
  { 'err' : VerifyTicketError };
export interface _SERVICE {
  'cancelEvent' : ActorMethod<[EventId__1], Result>,
  'createEvent' : ActorMethod<[CreateEventRequest], CreateEventResponse>,
  'getAllEvents' : ActorMethod<[], GetEventsResponse>,
  'getEvent' : ActorMethod<[EventId__1], GetEventResponse>,
  'getOrganizerEvents' : ActorMethod<[], GetEventsResponse>,
  'getTicket' : ActorMethod<[TicketId__1], [] | [Ticket__1]>,
  'getUserTickets' : ActorMethod<[], Array<Ticket__1>>,
  'mintTicket' : ActorMethod<[MintTicketRequest], MintTicketResponse>,
  'verifyTicket' : ActorMethod<[VerifyTicketRequest], VerifyTicketResponse>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
