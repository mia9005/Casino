const reels = document.querySelectorAll('.reel');

// Get random symbols from symbols array using index
function getRandomSymbol() {
  const symbols = ["🍒", "🍊", "🍇", "🍓", "🍉", "🍋", "🍏"];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}
//Get JSON data from server
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data.symbols;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
//Get symbol data from server using function named fetchData
async function startSpin() {
    const symbols = await fetchData();
  
    reels.forEach((reel, index) => {
      const symbol = getRandomSymbol();
      reel.textContent = symbol;
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.querySelector('#spin-button');
    spinButton.addEventListener('click', startSpin);
  });