module.exports = function (section) {
  // Note that if you alter this function while running a dev server, you have to restart it to see them.
  /* We will trust that the section has already been validated before being passed to this function. */
  if (!section.sectionStyle) {
    return "plain";
  }
  return section.sectionStyle;
};
