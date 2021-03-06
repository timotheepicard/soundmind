const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const modelHelpers = require ('./modelHelpers');

const userSchema = new mongoose.Schema();
userSchema.add({
  name: String,
  firstname: String,
  email: String,
  password: String,
  token: String,
  expiration: Number
});

userSchema.methods.toDTO = () => {
  const obj = this.toJSON();

  const dto = {
    id: obj.id.toString(),
    _id: obj.id.toString(),
    name: obj.name,
    firstname: obj.firstname,
    email: obj.email
  };

  return dto;
}

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password,8);
}

userSchema.methods.validPassword = function(password){ // si déclaration ES6 'this' est undefined
  return bcrypt.compareSync(password, this.password);
}

userSchema.method('toJSON', modelHelpers.toJSON);

const User = mongoose.model('User', userSchema);

exports.schema = userSchema;
exports.model = User;
