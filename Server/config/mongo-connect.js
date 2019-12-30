const { connect } = require('mongoose');

const connectToMongo = async () => {
  try {
    await connect('mongodb+srv://simpleUser:PasswordForSimpleUser@cluster0-q5xnz.mongodb.net/Crud?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    // eslint-disable-next-line
    console.log('Connected to mongo');
  } catch (error) {
    // eslint-disable-next-line
    console.error('Problem with connect to mongo', error);
  }
};

module.exports = connectToMongo;
