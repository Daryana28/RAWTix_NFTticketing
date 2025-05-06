import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type EventId = string;
export type EventId__1 = string;
export type Result = { 'ok' : boolean } |
  {
    'err' : { 'userNotAuthenticated' : null } |
      { 'systemError' : null } |
      { 'ticketNotFound' : null }
  };
export type Result_1 = { 'ok' : TicketId__1 } |
  { 'err' : { 'userNotAuthenticated' : null } | { 'systemError' : null } };
export interface Ticket {
  'id' : TicketId,
  'eventId' : EventId__1,
  'ticketTypeId' : TicketTypeId__1,
  'owner' : Principal,
  'metadata' : TicketMetadata__1,
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
export interface TicketMetadata__1 {
  'name' : string,
  'description' : string,
  'imageUrl' : [] | [string],
  'attributes' : Array<[string, string]>,
}
export type TicketTypeId = string;
export type TicketTypeId__1 = string;
export type VerifyTicketError = { 'userNotAuthenticated' : null } |
  { 'eventNotFound' : null } |
  { 'systemError' : null } |
  { 'eventNotActive' : null } |
  { 'ticketNotFound' : null };
export interface VerifyTicketRequest { 'ticketId' : TicketId }
export type VerifyTicketResponse = { 'ok' : boolean } |
  { 'err' : VerifyTicketError };
export interface _SERVICE {
  'getTicket' : ActorMethod<[TicketId__1], [] | [Ticket]>,
  'getUserTickets' : ActorMethod<[], Array<Ticket>>,
  'isTicketValid' : ActorMethod<[TicketId__1], boolean>,
  'mintTicket' : ActorMethod<
    [EventId, TicketTypeId, Principal, TicketMetadata],
    Result_1
  >,
  'transferTicket' : ActorMethod<[TicketId__1, Principal], Result>,
  'verifyTicket' : ActorMethod<[VerifyTicketRequest], VerifyTicketResponse>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
