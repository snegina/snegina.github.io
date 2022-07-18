var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var array = [];

while (isSunk == false) {
    
    guess = prompt("Привет! Это мини игра морской бой. В 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3х палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
    if (array.includes(guess)) {
        alert("Ты уже стрелял");
        guesses = guess + 1;
        continue;
    }
    if (guess < 0 || guess > 6 || (typeof guess === "string" & isNaN(guess))) {
        alert("Всё же введи число от 0 до 6")
    } else {
        guesses = guesses + 1;
        alert(guesses);
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попал");
            array.push(guess);
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!")
            }
        } else {

            alert("МИМО");

        }
    }
}

var accuracy = 3 / guesses;
var stats = "Ты выстрелил " + guesses + " раз. Уровень твоей точности " + (accuracy.toFixed(2));

alert(stats);

