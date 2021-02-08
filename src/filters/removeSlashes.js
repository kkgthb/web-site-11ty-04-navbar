const pattern = '^\\/|\\/$';
module.exports = function (slug) {
  return String(slug).replace(pattern,'');
};
