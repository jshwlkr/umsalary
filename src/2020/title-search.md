---
title: Title Search | 2020
---


## 2020 Title Search

Searching for a term will create a selection that affects statistics farther down the page. Individual rows can be selected by clicking or shift-clicking checkboxes in the table. Submitting a search will replace any existing selection. Nothing selected will display statistics for the entire data set.

```js
const salaries = await FileAttachment("../data/2020salaries.csv").csv({typed: true});
const searchInput = Inputs.search(salaries, {label: "Search the dataset", placeholder: "Search"});
const search = view(searchInput);
```
If you search for multiple terms, such as “ann arbor nurse" or “flint professor” or "dearborn lecturer", every term must appear in the selection table entry. The search operation applies a logical AND.

[Full time rate](https://spg.umich.edu/policy/201.10) is the amount of pay an employee would receive if they were employed full-time for the entire year.

<div class="card">
<h2>Selection</h2>

```js 
const selection = view(Inputs.table(search, {
  columns: [
    "CAMPUS",
    "APPOINTMENT_TITLE",
    "APPOINTING_DEPT",
    "APPT_ANNUAL_FTR"
  ],
  header: {
    CAMPUS: "Campus",
    APPOINTMENT_TITLE: "Title",
    APPOINTING_DEPT: "Department",
    APPT_ANNUAL_FTR: "Full Time Rate ($)"
  },
  format: {
    APPT_ANNUAL_FTR: (x) => x.toFixed(2)
  },
  width: {
    CAMPUS: "5",
    APPOINTMENT_TITLE: "30%",
    APPOINTING_DEPT: "25%",
    APPT_ANNUAL_FTR: "25%"
  }
}))
```

```js

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const median = d3.median(selection, d => d.APPT_ANNUAL_FTR);
const mean = d3.mean(selection, d => d.APPT_ANNUAL_FTR);
const max = d3.max(selection, d => d.APPT_ANNUAL_FTR);
const min = d3.min(selection, d => d.APPT_ANNUAL_FTR);
const mode = d3.mode(selection, d => d.APPT_ANNUAL_FTR);
const firstQuartile = d3.quantile(selection, 0.25, d => d.APPT_ANNUAL_FTR);
const thirdQuartile = d3.quantile(selection, 0.75, d => d.APPT_ANNUAL_FTR);
const variance = d3.variance(selection, d => d.APPT_ANNUAL_FTR);
const deviation = d3.deviation(selection, d => d.APPT_ANNUAL_FTR);
//https://d3js.org/d3-array/summarize

```
<div class="card">
<div>
  <h3>Selection statistics</h3>
  <div>Mean (average): ${USDollar.format(mean)}</div>
  <div>Max: ${USDollar.format(max)}</div>
  <div> Median (middle): ${USDollar.format(median)}</div>
  <div>Min: ${USDollar.format(min)}</div>
</div>
<div>
<div>First (lower) quartile: ${USDollar.format(firstQuartile)} </div>
<div>Third (upper) quartile: ${USDollar.format(thirdQuartile)} </div>

</div>
</div>
</div>

<div class="card">

```js
const boxplot = view(Plot.plot({
  ariaLabel: "Selection Box Plot",
  ariaDescription: "A box plot of selected titles.",
  title: "Selection Box Plot",
  marginLeft: 55,
  marginBottom: 140,
  y: {
    grid: true,
    label: "Base Salary ($)"
  },
  x: {
    padding: 0.4,
    tickRotate: -45,
    label: "Title"
  },
  marks: [
    Plot.boxY(selection, {x: "APPOINTMENT_TITLE", y: "APPT_ANNUAL_FTR"})
  ]
}));

```

</div>

## Disclaimer
While this data originates from official sources, it must be treated as an approximation.