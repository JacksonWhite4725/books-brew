const { AuthenticationError } = require('apollo-server-express');
const { User, Style } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    styles: async () => {
      return await Style.find();
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveStyle: async (parent, { name, description }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, { $push: { styles: { name, description } } });
      }

      throw new AuthenticationError('Not logged in');
    },
  }
};

module.exports = resolvers;
