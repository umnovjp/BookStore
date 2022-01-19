const { Book, User, Auth } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // return await User.find({}).populate(); //not sure what to populate add something later
      // const foundUser = await User.findOne({
      //   $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
      // });
  
      // if (!foundUser) {
      //   return res.status(400).json({ message: 'Cannot find a user with this id!' });
      // }
  
      // res.json(foundUser);
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
