const mustang = require('mustang-log');

exports.info = async (message) => {
  await mustang.log(message, 'INFO', true);
};

exports.error = async (message, extra) => {
  await mustang.log(`${message}${extra ? '\n' + extra : ''}`, 'ERROR', true);
};

exports.warn = async (message) => {
  await mustang.log(message, 'WARN', true);
};

exports.debug = async (message) => {
  await mustang.log(message, 'DEBUG', true);
};
