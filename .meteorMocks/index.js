let usersQueryResult = [];
export function __setUsersQueryResult(result) {
  usersQueryResult = result;
}
export const Meteor = {
  users: {
    findOne: jest.fn().mockImplementation(() => usersQueryResult),
    find: jest.fn().mockImplementation(() => ({
      fetch: jest.fn().mockReturnValue(usersQueryResult),
      count: jest.fn(),
    })),
  },
  methods:jest.fn(),
};

export const createContainer = jest.fn((options = {}, component) => component );
export const withTracker = jest.fn(Op => jest.fn(C => createContainer(Op, C)));
export const Mongo = {
  Collection: jest.fn().mockImplementation(() => ({
    _ensureIndex: (jest.fn()),
  })),
};
export const mockFn=jest.fn();