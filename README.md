# Covid-19 Data

This site was created to provide a simple, free and open-source user interface for [covid19api.com](https://covid19api.com/). See the deployed site [here](https://esin87.github.io/covid19-data/).

This application is a straightforward access point for up-to-date statistics on COVID-19 confirmed cases, deaths, and recoveries by country.

## Technologies Used

- React for a SPA with dynamic client-side rendering
- React Router for page navigation
- React Bootstrap for styled components
- MomentJS for React for date parsing

## Available Features

#### Current:

- Query the API with a search string that returns available information for the country
- See available country list, and click on country to return specific results

#### Future:

- Refactor and DRY up React code (move state upward and component-ize reused code)
- Polish styling
- Include global overview of COVID cases
- Add data graphics
- Add testing coverage
- Add About page

## Installation Instructions

- Clone the repo down locally.
- Navigate into the project folder and run `npm install` to download required dependencies.
- Run `npm start` to launch the React development server.

## Acknowledgements

This application wouldn't be possible without help from numerous sources, including:

- [Kyle Redelinghuys](https://twitter.com/ksredelinghuys), who created the [covid19api](https://covid19api.com/)
- Jennifer Meade, whose lessons and tutorials on React have been invaluable
- Tom Pawlak's [blogpost](https://blog.abelotech.com/posts/number-currency-formatting-javascript/), which helped me quickly parse commas into long numbers

## Contribution Guidelines

This is a work in progress, and any suggestions, contributions or bug identifications are more than welcome. Please submit a pull request or issue as needed.
