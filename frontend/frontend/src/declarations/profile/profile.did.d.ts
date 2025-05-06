import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type CreateProfileError = { 'profileAlreadyExists' : null } |
  { 'userNotAuthenticated' : null };
export type CreateProfileResponse = { 'ok' : boolean } |
  { 'err' : CreateProfileError };
export type GetProfileError = { 'userNotAuthenticated' : null } |
  { 'profileNotFound' : null };
export type GetProfileResponse = { 'ok' : Profile__1 } |
  { 'err' : GetProfileError };
export interface Profile { 'bio' : string, 'username' : string }
export interface Profile__1 { 'bio' : string, 'username' : string }
export type Result = { 'ok' : boolean } |
  { 'err' : { 'userNotAuthenticated' : null } | { 'profileNotFound' : null } };
export interface _SERVICE {
  'createProfile' : ActorMethod<[string, string], CreateProfileResponse>,
  'getProfile' : ActorMethod<[], GetProfileResponse>,
  'getProfileByPrincipal' : ActorMethod<[Principal], [] | [Profile]>,
  'updateProfile' : ActorMethod<[string, string], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
