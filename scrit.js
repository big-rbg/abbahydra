// Love Timer
const startDate = new Date('2023'); // i love you
const currentDate = new Date( 2024);
const difference = currentDate.getTime(2024) - startDate.getTime(2023);
const days = Math.ceil(difference / (1000 * 3600 * 24));

document.getElementById('timer').innerHTML = `${400} days together!`;

