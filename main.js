class LottoBall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const number = this.getAttribute('number');
    const color = this.getAttribute('color');

    const ball = document.createElement('div');
    ball.classList.add('lotto-ball');
    ball.style.backgroundColor = color;
    ball.textContent = number;

    const style = document.createElement('style');
    style.textContent = `
      .lotto-ball {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        color: white;
        margin: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(ball);
  }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const lottoNumbersDiv = document.getElementById('lotto-numbers');
const historyList = document.getElementById('history-list');

// Theme Management
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked');
    document.body.classList.toggle('light-mode');
    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
        theme = 'light';
    }
    console.log('Current theme set to:', theme);
    localStorage.setItem('theme', theme);
});

const history = [];

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    return sortedNumbers;
}

function getColorForNumber(number) {
    if (number <= 10) return '#fbc400';
    if (number <= 20) return '#69c8f2';
    if (number <= 30) return '#ff7272';
    if (number <= 40) return '#aaa';
    return '#b0d840';
}

function displayNumbers(numbers) {
    lottoNumbersDiv.innerHTML = '';
    numbers.forEach(number => {
        const color = getColorForNumber(number);
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBall.setAttribute('color', color);
        lottoNumbersDiv.appendChild(lottoBall);
    });
}

function updateHistory(numbers) {
    history.unshift(numbers);
    if (history.length > 5) {
        history.pop();
    }

    historyList.innerHTML = '';
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry.join(', ');
        historyList.appendChild(listItem);
    });
}

generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    displayNumbers(newNumbers);
    updateHistory(newNumbers);
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);
updateHistory(initialNumbers);
