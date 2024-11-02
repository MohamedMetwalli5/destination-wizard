![Version](https://img.shields.io/badge/Version-2.1.2-blue.svg)
![License](https://img.shields.io/badge/License-MIT%20-red.svg)

# destination-wizard 🧙‍♂️

## About
`destination-wizard` is a simple npm package that recommends destinations based on the desired country and city. It also provides local cuisine recommendations, including halal drink and food options.

## How to Install
Run this command in your terminal to install the package:
```bash
npm i destination-wizard
```
## How to Use
After installing the package, you can use the following functions to get city and cuisine recommendations based on different countries.

### Functions
#### RecommendCity(country)
Returns a random city from the specified country.

```javascript
const { RecommendCity } = require('destination-wizard');

console.log(RecommendCity("Egypt"));
```


#### RecommendFood(country)
Provides a random local food recommendation from the specified country. The foods listed are suitable for halal consumption when specified.

```javascript
const { RecommendFood } = require('destination-wizard');

console.log(RecommendFood("Egypt"));
```

#### RecommendHalalDrink(country)
Suggests a random halal drink option from the specified country.

```javascript
const { RecommendHalalDrink } = require('destination-wizard');

console.log(RecommendHalalDrink("Egypt"));
```


## Example Usage

```javascript
const { RecommendCity, RecommendFood, RecommendHalalDrink } = require('destination-wizard');

console.log("Random City:", RecommendCity("Japan"));
console.log("Local Food:", RecommendFood("Japan"));
console.log("Halal Drink:", RecommendHalalDrink("Japan"));
```

## Data Source
The destinations and local cuisines come from a predefined set of data that includes cities and traditional foods/drinks specific to each country. The cities are chosen randomly when recommendations are made.

## License
This project is licensed under the MIT License.
