export.toJSON = () => {
  var obj = this.toJSON();

  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  delete obj.password;

  return obj;
}
