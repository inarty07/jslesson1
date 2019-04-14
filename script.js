let money, timeData, appData;
money = +prompt("Ваш бюджет на месяц?");
timeData = prompt("Введите дату в формате YYYY-MM-DD");
let expenses, answer1, answer2, income;
answer1 = prompt("Введите обязательную статью расходов в этом месяце");
answer2 = +prompt("Во сколько обойдется");
expenses = {
    answer1: answer2
};
console.log(expenses);
appData = {
    "money": money,
    "time": timeData,
    expenses,
    "доп.доход": income,
    savings: false,
};
console.log(appData);
alert(money/30 - answer2/30);