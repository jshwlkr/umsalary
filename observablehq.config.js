// See https://observablehq.com/framework/config for documentation.
export default {

  title: "U-M Salary",

  pages: [
    
    {
      name: "2023",
      pages: [
        {name: "Campus comparison", path: "/2023/campus"},
        {name: "Title Search", path: "/2023/title-search"},
      ]
    },
    {
      name: "2022",
      open: false,
      pages: [
        {name: "Title Search", path: "/2022/title-search"}
      ]
    },
    {
      name: "2021",
      open: false,
      pages: [
        {name: "Title Search", path: "/2021/title-search"}
      ]
    },
    {
      name: "2020",
      open: false,
      pages: [
        {name: "Title Search", path: "/2020/title-search"}
      ]
    },
    {name: "Year over year comparison", path: "/year-over-year"}
  ],

  theme: "dashboard", // try "light", "dark", "slate", etc.
};
