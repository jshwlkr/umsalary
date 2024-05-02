---
title: Year Over Year Comparisons
---

```js
const twentytwenty = await FileAttachment("/data/2020salaries.csv").csv({typed: true});
const twentytwentyone = await FileAttachment("/data/2021salaries.csv").csv({typed: true});
const twentytwentytwo = await FileAttachment("/data/2022salaries.csv").csv({typed: true});
const twentytwentythree = await FileAttachment("/data/2023salaries.csv").csv({typed: true});

const twentyTotal = d3.sum(twentytwenty, (d) => d.APPT_ANNUAL_FTR);
const twentyoneTotal = d3.sum(twentytwentyone, (d) => d.APPT_ANNUAL_FTR);
const twentytwoTotal = d3.sum(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR);
const twentythreeTotal = d3.sum(twentytwentythree, (d) => d.APPT_ANNUAL_FTR);
const twentyoneCount = d3.count(twentytwentyone, (d) => d.APPT_ANNUAL_FTR);
const twentytwoCount = d3.count(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR);
const twentythreeCount = d3.count(twentytwentythree, (d) => d.APPT_ANNUAL_FTR);

const data = [
  {Year: 2020, Total: d3.sum(twentytwenty, (d) => d.APPT_ANNUAL_FTR), Count: d3.count(twentytwenty, (d) => d.APPT_ANNUAL_FTR) },
  {Year: 2021, Total: d3.sum(twentytwentyone, (d) => d.APPT_ANNUAL_FTR), Count: d3.count(twentytwentyone, (d) => d.APPT_ANNUAL_FTR) },
  {Year: 2022, Total: d3.sum(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR), Count: d3.count(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR) },
  {Year: 2023, Total: d3.sum(twentytwentythree, (d) => d.APPT_ANNUAL_FTR), Count: d3.count(twentytwentythree, (d) => d.APPT_ANNUAL_FTR) },
]
```

<div class="card">
<h2>Employee Count Year Over Year</h2>

```js
Plot.plot({

  x: {
    padding: 0.4,
    tickFormat: "",
    label: "Year"
  },
  y: {
    grid: true,
    label: "Employee Count"
  },
  marks: [
    Plot.barY(data, {x: "Year", y: "Count", tip: "x"}),

  ]
})
```

</div>