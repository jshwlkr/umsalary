---
title: Campus comparison | 2023
---

## 2023 Campus comparison

```js
const salaries = await FileAttachment("/data/2023salaries.csv").csv({typed: true});
```

```js
view(Plot.plot({
  y: {
    grid: true,
    label: "Dollars"
  },
  x: {
    label: "Campus"
  },
  marks: [
    Plot.boxY(salaries, 
    {x: "CAMPUS", y: "APPT_ANNUAL_FTR"})
  ]
}));
```