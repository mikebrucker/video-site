const validateInput = input => {
  if (
    input === undefined ||
    input === null ||
    (typeof input === "object" && Object.keys(input).length === 0) ||
    (typeof input === "string" && input.trim().length === 0)
  ) {
    return false;
  }
};

module.exports = validateInput;
