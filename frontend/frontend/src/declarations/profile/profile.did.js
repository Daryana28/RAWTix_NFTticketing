export const idlFactory = ({ IDL }) => {
  const CreateProfileError = IDL.Variant({
    'profileAlreadyExists' : IDL.Null,
    'userNotAuthenticated' : IDL.Null,
  });
  const CreateProfileResponse = IDL.Variant({
    'ok' : IDL.Bool,
    'err' : CreateProfileError,
  });
  const Profile__1 = IDL.Record({ 'bio' : IDL.Text, 'username' : IDL.Text });
  const GetProfileError = IDL.Variant({
    'userNotAuthenticated' : IDL.Null,
    'profileNotFound' : IDL.Null,
  });
  const GetProfileResponse = IDL.Variant({
    'ok' : Profile__1,
    'err' : GetProfileError,
  });
  const Profile = IDL.Record({ 'bio' : IDL.Text, 'username' : IDL.Text });
  const Result = IDL.Variant({
    'ok' : IDL.Bool,
    'err' : IDL.Variant({
      'userNotAuthenticated' : IDL.Null,
      'profileNotFound' : IDL.Null,
    }),
  });
  return IDL.Service({
    'createProfile' : IDL.Func(
        [IDL.Text, IDL.Text],
        [CreateProfileResponse],
        [],
      ),
    'getProfile' : IDL.Func([], [GetProfileResponse], ['query']),
    'getProfileByPrincipal' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(Profile)],
        ['query'],
      ),
    'updateProfile' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
