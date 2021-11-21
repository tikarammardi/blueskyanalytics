## Green House Gases Emmission APIs

 This dataset from Kaggle - https://www.kaggle.com/unitednations/international-greenhouse-gas-emissions

You have to clean this dataset as per the needs mentioned below and store it in any database of your choice (you can use SQLite (file based) as data won't change for this assignment)

You have to build the following APIs :

/countries - get all countries in the dataset (names, ids and their possible values for startYear and endYear)
/country/id?queries=explained-below
temporal queries - startYear | endYear
parameters queries - one or parameters (e.g, CO2 or CO2 and NO2)
should return all values for the selected parameters between startYear and endYear
Add appropriate checks for queries and erroneous values
Bonus Features:
Add caching