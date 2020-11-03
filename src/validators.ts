const required = () => {
  return (input: string) =>
    input.length === 0 ? `Field is required  \t` : null;
};

const minLength = (min: number) => {
  return (input: string) =>
    input.length < min && input.length !== 0
      ? `Must be at least ${min} characters  \t`
      : null;
};

const maxLength = (max: number) => {
  return (input: string) =>
    input.length > max ? `Must be no more than ${max} characters  \t` : null;
};

const minNumber = (min: number) => {
  return (input: number) =>
    input < min ? `Can not be less than ${min}  \t` : null;
};

const maxNumber = (max: number) => {
  return (input: number) =>
    input > max ? `Can not be more than ${max}\t` : null;
};

const oneLowerCase = () => {
  return (input: string) =>
    input.search(/(?=.*[a-z])/) && input.length !== 0
      ? 'Must have at least one lower case letter \t'
      : null;
};

const oneUpperCase = () => {
  return (input: string) =>
    input.search(/(?=.*[A-Z])/) && input.length !== 0
      ? 'Must have at least one upper case letter  \t'
      : null;
};

const oneDigit = () => {
  return (input: string) =>
    input.search(/(?=.*\d)/) && input.length !== 0
      ? 'Must have at least one digit  \t'
      : null;
};

const email = () => {
  return (input: string) =>
    input.search(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) &&
    input.length !== 0
      ? 'Must be valid email form  \t'
      : null;
};

const samePasswords = (password: string) => {
  return (input: string) =>
    input == password ? `Passwords must match  \t` : null;
};

export {
  minLength,
  maxLength,
  required,
  oneLowerCase,
  oneUpperCase,
  oneDigit,
  email,
  samePasswords,
  minNumber,
  maxNumber,
};
