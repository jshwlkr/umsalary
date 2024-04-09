// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "U-M Salary",

  pages: [
    
    {name: "Year over year comparison", path: "/year-over-year"},
    {name: "Campus comparison", path: "/campus"},
    {name: "2023 Title Search", path: "/2023/title-search"},
    {name: "2022 Title Search", path: "/2022/title-search"},
    {name: "2021 Title Search", path: "/2021/title-search"},
    {name: "About", path: "/about"}

  ],

  // Some additional configuration options and their defaults:
  theme: "dashboard", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
  // search: true, // activate search
};
