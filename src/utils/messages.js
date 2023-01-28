const generateMessage = (text) => {
  return {
    text,
    craetedAt: new Date().getTime(),
  };
};

const generateLocationMessage = (url) => {
  return {
    url,
    craetedAt: new Date().getTime(),
  };
};

module.exports = {
  generateLocationMessage,
  generateMessage,
};
