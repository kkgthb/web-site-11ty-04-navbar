module.exports = function (section) {
  // Note that if you alter this function while running a dev server, you have to restart it to see them.
  if (!section || !section.sectionType) {
    // Don't allow through flexipage-data-sections with no type
    return false;
  }
  switch (section.sectionType) {
    case "feature":
      return !!section.image;
    default:
      // If no specific rules for sectionType, go ahead and allow it through
      return true;
  }
};