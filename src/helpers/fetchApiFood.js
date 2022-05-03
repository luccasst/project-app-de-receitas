const filterFoods = async (valueInput, radioName) => {
  let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  switch (radioName) {
  case 'name':
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueInput}`;
    break;
  case 'ingredient':
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${valueInput}`;
    break;
  case 'letter':
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${valueInput}`;
    break;
  default:
    break;
  }
  const result = await fetch(url);
  const data = await result.json();
  return data.meals;
};

export default filterFoods;
