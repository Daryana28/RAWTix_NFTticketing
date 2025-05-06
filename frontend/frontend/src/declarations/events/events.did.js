export const idlFactory = ({ IDL }) => {
  const EventId__1 = IDL.Text;
  const CreateEventError__1 = IDL.Variant({
    'userNotAuthenticated' : IDL.Null,
    'invalidInput' : IDL.Null,
    'systemError' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : CreateEventError__1 });
  const CreateEventRequest = IDL.Record({
    'ticketTypes' : IDL.Vec(
      IDL.Record({
        'name' : IDL.Text,
        'description' : IDL.Opt(IDL.Text),
        'capacity' : IDL.Nat,
        'price' : IDL.Nat,
      })
    ),
    'date' : IDL.Text,
    'name' : IDL.Text,
    'time' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Opt(IDL.Text),
    'artStyle' : IDL.Text,
    'location' : IDL.Text,
  });
  const EventId = IDL.Text;
  const EventStatus = IDL.Variant({
    'active' : IDL.Null,
    'cancelled' : IDL.Null,
    'completed' : IDL.Null,
  });
  const TicketTypeId = IDL.Text;
  const TicketType = IDL.Record({
    'id' : TicketTypeId,
    'name' : IDL.Text,
    'sold' : IDL.Nat,
    'description' : IDL.Opt(IDL.Text),
    'capacity' : IDL.Nat,
    'price' : IDL.Nat,
  });
  const Event = IDL.Record({
    'id' : EventId,
    'status' : EventStatus,
    'organizer' : IDL.Principal,
    'ticketTypes' : IDL.Vec(TicketType),
    'date' : IDL.Text,
    'name' : IDL.Text,
    'time' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Opt(IDL.Text),
    'artStyle' : IDL.Text,
    'location' : IDL.Text,
  });
  const CreateEventError = IDL.Variant({
    'userNotAuthenticated' : IDL.Null,
    'invalidInput' : IDL.Null,
    'systemError' : IDL.Null,
  });
  const CreateEventResponse = IDL.Variant({
    'ok' : Event,
    'err' : CreateEventError,
  });
  const GetEventsError = IDL.Variant({ 'systemError' : IDL.Null });
  const GetEventsResponse = IDL.Variant({
    'ok' : IDL.Vec(Event),
    'err' : GetEventsError,
  });
  const GetEventError = IDL.Variant({ 'eventNotFound' : IDL.Null });
  const GetEventResponse = IDL.Variant({ 'ok' : Event, 'err' : GetEventError });
  const TicketId__1 = IDL.Text;
  const TicketId = IDL.Text;
  const TicketMetadata = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Opt(IDL.Text),
    'attributes' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const Ticket__1 = IDL.Record({
    'id' : TicketId,
    'eventId' : EventId,
    'ticketTypeId' : TicketTypeId,
    'owner' : IDL.Principal,
    'metadata' : TicketMetadata,
    'isUsed' : IDL.Bool,
    'mintedAt' : IDL.Int,
  });
  const MintTicketRequest = IDL.Record({
    'eventId' : EventId,
    'ticketTypeId' : TicketTypeId,
  });
  const Ticket = IDL.Record({
    'id' : TicketId,
    'eventId' : EventId,
    'ticketTypeId' : TicketTypeId,
    'owner' : IDL.Principal,
    'metadata' : TicketMetadata,
    'isUsed' : IDL.Bool,
    'mintedAt' : IDL.Int,
  });
  const MintTicketError = IDL.Variant({
    'ticketTypeNotFound' : IDL.Null,
    'userNotAuthenticated' : IDL.Null,
    'eventNotFound' : IDL.Null,
    'systemError' : IDL.Null,
    'soldOut' : IDL.Null,
    'eventNotActive' : IDL.Null,
  });
  const MintTicketResponse = IDL.Variant({
    'ok' : Ticket,
    'err' : MintTicketError,
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
    'cancelEvent' : IDL.Func([EventId__1], [Result], []),
    'createEvent' : IDL.Func([CreateEventRequest], [CreateEventResponse], []),
    'getAllEvents' : IDL.Func([], [GetEventsResponse], ['query']),
    'getEvent' : IDL.Func([EventId__1], [GetEventResponse], ['query']),
    'getOrganizerEvents' : IDL.Func([], [GetEventsResponse], ['query']),
    'getTicket' : IDL.Func([TicketId__1], [IDL.Opt(Ticket__1)], ['query']),
    'getUserTickets' : IDL.Func([], [IDL.Vec(Ticket__1)], ['query']),
    'mintTicket' : IDL.Func([MintTicketRequest], [MintTicketResponse], []),
    'verifyTicket' : IDL.Func(
        [VerifyTicketRequest],
        [VerifyTicketResponse],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
