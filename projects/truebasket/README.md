# TrueBasket

**Every fee, every markup, one honest total.**

A concept demo exploring price transparency in online grocery: build a basket and audit what it really costs in the app versus on the shelf, and whether everyone else is paying the same price.

**Live demo:** https://gagan-git-sardar.github.io/gdspahuja/projects/truebasket/

## The problem

In December 2025, a Consumer Reports / Groundwork Collaborative study of 437 shoppers found that roughly 75% of tested grocery items showed different prices to different shoppers at the same store at the same time, averaging about 7% more on identical baskets and up to 23% higher for some users. The FTC followed with a civil investigative demand into Instacart's Eversight AI pricing tool (Reuters, 17 Dec 2025) and a $60 million settlement over deceptive "free delivery" and enrolment practices (18 Dec 2025). On 22 Dec 2025, Instacart announced it was ending all item price tests and committing to the same price for everyone at the same store and time.

A promise like that is only worth something if shoppers can check it. TrueBasket is a concept for the transparency layer that promise needs.

## How the demo works

- **Two eras.** "Before" simulates 2025-style personalised price experiments: switch between Shopper A, B and C and the same basket reprices per shopper. "After" applies one uniform store markup, identical for everyone, per the same-price commitment.
- **Receipt audit.** Every line item shows shelf price vs in-app price with a markup chip, followed by named delivery and service fees and the tip.
- **True Cost Score (0–100).** Rewards low markups, low fee load and, above all, prices that do not depend on who is asking. In the Before era, the audit also shows what the other shoppers would pay for your exact basket.
- All prices are illustrative sample data. No real retailer data is used.

## Tech

A single self-contained `index.html` (HTML, CSS and vanilla JavaScript, no build step), hosted on GitHub Pages.

## About

Week 1 of a weekly MVP series by [Gagandeep Singh Pahuja](https://www.linkedin.com/in/gdspahuja/): each week, one lightweight build aimed at a real problem at a company he would love to work for.

*Concept project for illustration. Not affiliated with or endorsed by Instacart.*
