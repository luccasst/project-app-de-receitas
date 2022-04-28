export default function setStorage(email) {
  localStorage.setItem('mealsToken', JSON.stringify(1));
  localStorage.setItem('cocktailsToken', JSON.stringify(1));
  localStorage.setItem('user', JSON.stringify({ email }));
}
