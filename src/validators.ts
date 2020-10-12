const minLength = (min: number) => {
  return (input: string) =>
    input.length < min ? `Value must be at least ${min} characters` : null;
};

export { minLength };
