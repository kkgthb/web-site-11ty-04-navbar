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
  {
    slug: "wet",
    title: "Water.css exists",
    sections: [
      {
        sectionType: "soaking",
        text: "This has water.css applied",
      },
    ],
  },
  {
    slug: "wetlists",
    title: "Watery Lists",
    sections: [
      {
        sectionType: "soaking",
        text: "This has water.css applied and uses lists",
      },
    ],
  },
];

module.exports = async function () {
  return flexiPages;
};
