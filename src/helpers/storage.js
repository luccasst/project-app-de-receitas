export default function setStorage() {
  const mealsToken = !JSON.parse(localStorage.getItem('mealsToken'));
  const cocktailsToken = !JSON.parse(localStorage.getItem('cocktailsToken'));
  console.log(mealsToken, cocktailsToken);
  if (mealsToken && cocktailsToken) {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
  }
}
