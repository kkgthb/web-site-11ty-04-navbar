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
];

module.exports = async function () {
  return flexiPages;
};