// // ==============================================
// // ================= 1-masala ==================
// // ==============================================

// function checkGalaxyPassword(password) {
//   return password.startsWith("galaxy") && password.endsWith("42");
// }

// const password = "galaxyadventure42";
// console.log(checkGalaxyPassword(password));

// // ==============================================
// // ================= 2-masala ==================
// // ==============================================

// function decodeSecretMessage(message) {
//   if (message.includes("secret")) {
//     return message.toUpperCase();
//   }
// }

// const message = "find the secret key";
// console.log(decodeSecretMessage(message));

// // ==============================================
// // ================= 3-masala ==================
// // ==============================================

// function makeSuperHero(name) {
//   let i = name.toUpperCase();
//   return i.concat("HERO");
// }

// const name = "storm";
// console.log(makeSuperHero(name));

// // ==============================================
// // ================= 4-masala ==================
// // ==============================================

// function securePassword(password) {
//   return password.replace("hack", "safe");
// }

// const password = "dont hack me";
// console.log(securePassword(password));

// // ==============================================
// // ================= 5-masala ==================
// // ==============================================

// function formatBlogTitle(title) {
//   let i = title.slice(0, 7);
//   return i.toLowerCase();
// }

// const title = "AWESOME Blog";
// console.log(formatBlogTitle(title));

// // ==============================================
// // ================= 6-masala ==================
// // ==============================================

// function addPizzaIngredient(ingredients) {
//   ingredients.push("pepperoni");
//   return ingredients;
// }

// const ingredients = ["cheese", "tomato", "olives"];
// console.log(addPizzaIngredient(ingredients));

// // ==============================================
// // ================= 7-masala ==================
// // ==============================================

// function removeLastItem(shoppingList) {
//   shoppingList.pop();
//   return shoppingList;
// }
// const shoppingList = ["milk", "bread", "socks"];
// console.log(removeLastItem(shoppingList));

// // ==============================================
// // ================= 8-masala ==================
// // ==============================================

// function selectTopMovies(movies) {
//   return movies.slice(0, 2);
// }

// const movies = ["Inception", "Matrix", "Titanic", "Avatar"];
// console.log(selectTopMovies(movies));

// // ==============================================
// // ================= 9-masala ==================
// // ==============================================

// function checkTeamMember(team) {
//   return team.includes("LeBron");
// }

// const team = ["Kobe", "Jordan", "Curry"];
// console.log(checkTeamMember(team));

// // ==============================================
// // ================= 10-masala ==================
// // ==============================================

// function announceTravelPlans(cities) {
//   return cities.join(",");
// }

// const cities = ["Tokyo", "Paris", "New York"];
// console.log(announceTravelPlans(cities));

// // ==============================================
// // ================= 11-masala ==================
// // ==============================================

// function greetFriends(friends) {
//   friends.forEach((friend) => {
//     console.log(`${friend} Salom!`);
//   });
// }

// const friends = ["Ali", "Vali", "Sami"];
// greetFriends(friends);

// // ==============================================
// // ================= 12-masala ==================
// // ==============================================

// function createPhoneNumbers(names) {
//   return names.map((name, index) => {
//     const number = `+9989012345${index}`;
//     return `${name}: ${number}`;
//   });
// }

// const names = ["Bobur", "Javohir"];
// console.log(createPhoneNumbers(names));

// // ==============================================
// // ================= 13-masala ==================
// // ==============================================

// function calculateGameScores(scores) {
//   let total = 0;
//   scores.forEach((score) => {
//     total += score;
//   });
//   const doubled = scores.map((score) => score * 2);
//   return { total, doubled };
// }

// const scores = [10, 20, 30];
// console.log(calculateGameScores(scores));
// // ==============================================
// // ================= 14-masala ==================
// // ==============================================

// function filterLargeNumbers(numbers, callback) {
//   return numbers.filter(callback);
// }

// const isLarge = (num) => num > 5;

// const numbers = [2, 6, 3, 8, 4];
// console.log(filterLargeNumbers(numbers, isLarge));

// // ==============================================
// // ================= 15-masala ==================
// // ==============================================

// function processNumbers(numbers, processor) {
//   return numbers.map(processor);
// }

// const numbers = [1, 2, 3];
// const double = n => n * 2;
// console.log(processNumbers(numbers, double));
