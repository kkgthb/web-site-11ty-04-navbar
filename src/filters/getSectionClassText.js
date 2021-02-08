module.exports = function (section) {
  let classnames = [
    "section",
    section.sectionType && `section--${section.sectionType}`,
  ];
  return classnames.join(" ");
};