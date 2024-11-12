class UserValidator {
  shape(props) {
    this.options = { ...props };
    return this;
  }

  isValid(obj) {
    return Object.entries(obj)
      .reduce((acc, [key, valuel]) => acc && this.options[key].isValid(valuel), true);
  }
}
export default UserValidator;
