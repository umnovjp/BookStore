const { Book, User, Auth } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return await User.find({}).populate(); //not sure what to populate add something later
    }
  }
};

module.exports = resolvers;
