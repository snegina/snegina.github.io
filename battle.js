let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
let array = [];

while (isSunk == false) {
    
    guess = prompt("Привет! Это мини игра морской бой. В 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3х палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
    if (array.includes(guess)) {
        alert("Ты уже стрелял");
        guesses = guesses + 1;
        continue;
    }
    if (guess < 0 || guess > 6 || (typeof guess === "string" & isNaN(guess))) {
        alert("Всё же введи число от 0 до 6")
    } else {
        guesses = guesses + 1;
        
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

let accuracy = 3 / guesses;
let stats = "Ты выстрелил " + guesses + " раз. Уровень твоей точности " + (accuracy.toFixed(2));

alert(stats);
