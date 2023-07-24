// Получаем элементы игрового поля и игроков
const gameBoard = document.getElementById('game-board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

// Функция для обновления позиции игрока
function movePlayer(player, x, y) {
  player.style.left = x + 'px';
  player.style.top = y + 'px';
}

// Обработчик события клика по игровому полю
gameBoard.addEventListener('click', (event) => {
  // Получаем координаты клика
  const x = event.clientX - gameBoard.offsetLeft;
  const y = event.clientY - gameBoard.offsetTop;

  // Обновляем позицию игрока при клике
  movePlayer(player1, x, y);
  // В реальной игре вам нужно управлять позицией игрока на сервере и синхронизировать с другими игроками.
});