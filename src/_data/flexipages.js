let flexiPages = [
  {
    slug: "/",
    title: "Home",
    sections: [
      {
        sectionType: "gibberish",
        text: "Hello world",
      },
    ],
  },
  {
    slug: "lists",
    title: "Nav with lists",
    sections: [
      {
        sectionType: "more_gibberish",
        text: "Do you like lists in your nav?",
      },
    ],
  },
];

module.exports = async function () {
  return flexiPages;
};
