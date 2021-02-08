module.exports = {
  title: "Beautiful site",
  homeTitle: "Beautiful site - no, really",
  description: "Meta description",
  mainNavLinks: [
    { url: "/", text: "Home" },
    { url: "/page1/", text: "Page 1" },
    {
      text: "Dropdown A",
      sublinks: [
        { url: "/dal1/", text: "Dropdown A link 1" },
        { url: "/dal2/", text: "Dropdown A link 2" },
        { url: "/dal3/", text: "Dropdown A link 3" },
        { url: "/dal4/", text: "Dropdown A link 4" },
        { url: "/dal5/", text: "Dropdown A link 5" },
        { url: "/dal6/", text: "Dropdown A link 6" },
      ],
    },
    { url: "/page2/", text: "Page 2" },
    { url: "/page3/", text: "Page 3" },
    {
      text: "Dropdown B",
      sublinks: [
        { url: "/dbl1/", text: "Dropdown B link 1" },
        { url: "/dbl2/", text: "Dropdown B link 2" },
        { url: "/dbl3/", text: "Dropdown B link 3 supercalifragilisticexpialidocious" },
        { url: "/dbl4/", text: "Dropdown B link 4" },
      ],
    },
  ],
};
