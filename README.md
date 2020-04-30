# COVID-19 Data

This site was created to provide a simple, free and open-source user interface for [covid19api.com](https://covid19api.com/). See the deployed site [here](https://esin87.github.io/covid19-data/).

This application is a straightforward access point for up-to-date statistics on COVID-19 confirmed cases, deaths, and recoveries by country.

## Technologies Used

- React for a SPA with dynamic client-side rendering
- React Router for page navigation
- React Bootstrap for styled components
- MomentJS for React for date parsing

## Available Features

#### Current:

- [x] Query the API with a search string that returns available case information for the country
- [x] See available country list, and click on country to return specific results

#### Future:

- [ ] Refactor and DRY up React code (move state upward and component-ize reused code)
- [ ] Polish styling
- [x] Include global summary of COVID-19 cases
- [ ] Add graphics
- [ ] Add testing coverage
- [x] Add About page

## Installation Instructions

- Clone the repo down locally.
- Navigate into the project folder and run `npm install` to download required dependencies.
- Run `npm start` to launch the React development server.

## Acknowledgements

This application wouldn't be possible without help from numerous sources, including:

- [Kyle Redelinghuys](https://twitter.com/ksredelinghuys), who created the [covid19api](https://covid19api.com/)
- Jennifer Meade, whose lessons and tutorials on React have been invaluable
- Tom Pawlak's [blog post](https://blog.abelotech.com/posts/number-currency-formatting-javascript/), which helped me quickly parse commas into long numbers

## Contribution Guidelines

This is a work in progress, and any suggestions, contributions or bug identifications are more than welcome. Please fork and submit a pull request or submit an issue if you'd like to contribute to the project.
