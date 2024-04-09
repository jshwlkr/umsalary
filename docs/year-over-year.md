---
title: Year over Year Comparisons
---

```js
const twentytwentyone = await FileAttachment("/data/2021salaries.csv").csv({typed: true});
const twentytwentytwo = await FileAttachment("/data/2022salaries.csv").csv({typed: true});
const twentytwentythree = await FileAttachment("/data/2023salaries.csv").csv({typed: true});


const twentyoneTotal = d3.sum(twentytwentyone, (d) => d.APPT_ANNUAL_FTR);
const twentytwoTotal = d3.sum(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR);
const twentythreeTotal = d3.sum(twentytwentythree, (d) => d.APPT_ANNUAL_FTR);
const twentyoneCount = d3.count(twentytwentyone, (d) => d.APPT_ANNUAL_FTR);
const twentytwoCount = d3.count(twentytwentytwo, (d) => d.APPT_ANNUAL_FTR);
const twentythreeCount = d3.count(twentytwentythree, (d) => d.APPT_ANNUAL_FTR);
```

<div class="card">
  <div>
    <div>2021 Employee Count: ${twentyoneCount}</div>
    <div>2022 Employee Count: ${twentytwoCount}</div>
    <div>2023 Employee Count: ${twentythreeCount}</div>
  </div>
</div>