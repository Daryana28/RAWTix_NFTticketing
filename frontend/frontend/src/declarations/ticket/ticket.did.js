export const idlFactory = ({ IDL }) => {
  const TicketId__1 = IDL.Text;
  const TicketId = IDL.Text;
  const EventId__1 = IDL.Text;
  const TicketTypeId__1 = IDL.Text;
  const TicketMetadata__1 = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Opt(IDL.Text),
    'attributes' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const Ticket = IDL.Record({
    'id' : TicketId,
    'eventId' : EventId__1,
    'ticketTypeId' : TicketTypeId__1,
    'owner' : IDL.Principal,
    'metadata' : TicketMetadata__1,
    'isUsed' : IDL.Bool,
    'mintedAt' : IDL.Int,
  });
  const EventId = IDL.Text;
  const TicketTypeId = IDL.Text;
  const TicketMetadata = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Opt(IDL.Text),
    'attributes' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const Result_1 = IDL.Variant({
    'ok' : TicketId__1,
    'err' : IDL.Variant({
      'userNotAuthenticated' : IDL.Null,
      'systemError' : IDL.Null,
    }),
  });
  const Result = IDL.Variant({
    'ok' : IDL.Bool,
    'err' : IDL.Variant({
      'userNotAuthenticated' : IDL.Null,
      'systemError' : IDL.Null,
      'ticketNotFound' : IDL.Null,
    }),
  });
  const VerifyTicketRequest = IDL.Record({ 'ticketId' : TicketId });
  const VerifyTicketError = IDL.Variant({
    'userNotAuthenticated' : IDL.Null,
    'eventNotFound' : IDL.Null,
    'systemError' : IDL.Null,
    'eventNotActive' : IDL.Null,
    'ticketNotFound' : IDL.Null,
  });
  const VerifyTicketResponse = IDL.Variant({
    'ok' : IDL.Bool,
    'err' : VerifyTicketError,
  });
  return IDL.Service({
    'getTicket' : IDL.Func([TicketId__1], [IDL.Opt(Ticket)], ['query']),
    'getUserTickets' : IDL.Func([], [IDL.Vec(Ticket)], ['query']),
    'isTicketValid' : IDL.Func([TicketId__1], [IDL.Bool], ['query']),
    'mintTicket' : IDL.Func(
        [EventId, TicketTypeId, IDL.Principal, TicketMetadata],
        [Result_1],
        [],
      ),
    'transferTicket' : IDL.Func([TicketId__1, IDL.Principal], [Result], []),
    'verifyTicket' : IDL.Func(
        [VerifyTicketRequest],
        [VerifyTicketResponse],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
