const { Book, User, Auth } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
  
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
