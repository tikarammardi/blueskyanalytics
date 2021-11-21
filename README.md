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

## Live Link
https://blueskyan.herokuapp.com/countries


https://blueskyan.herokuapp.com/country/id?startYear=2012&endYear=2014&parameters=Co2,sf6
------------------------
[get countries data](https://blueskyan.herokuapp.com/countries)
-------------------------
[get data by query string](https://blueskyan.herokuapp.com/country/id?startYear=2012&endYear=2014&parameters=Co2,sf6)

<img width="1431" alt="image1" src="https://user-images.githubusercontent.com/19359591/142768415-ef8fab5b-7b5f-487e-a863-773364cd8603.png">
<img width="1433" alt="image2" src="https://user-images.githubusercontent.com/19359591/142768424-8ef6b8c0-8bb9-4e09-aad3-91708ae28605.png">
<img width="1433" alt="image3" src="https://user-images.githubusercontent.com/19359591/142768430-42ee255f-6c54-43b2-a0c4-55bfa1dd46c7.png">
