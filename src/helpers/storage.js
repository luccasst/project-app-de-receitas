export default function setStorage(email) {
  const mealsToken = !JSON.parse(localStorage.getItem('mealsToken'));
  const cocktailsToken = !JSON.parse(localStorage.getItem('cocktailsToken'));
  const user = !JSON.parse(localStorage.getItem('user'));
  if (mealsToken || cocktailsToken || user) {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
  }
}
