const crypts = [
    { from: 'A', to: 'K' },
    { from: 'B', to: 'V' },
    { from: 'C', to: 'H' },
    { from: 'D', to: 'L' },
    { from: 'E', to: 'X' },
    { from: 'F', to: 'G' },
    { from: 'G', to: 'Q' },
    { from: 'H', to: 'B' },
    { from: 'I', to: 'O' },
    { from: 'J', to: 'Y' },
    { from: 'K', to: 'R' },
    { from: 'L', to: 'I' },
    { from: 'M', to: 'T' },
    { from: 'N', to: 'J' },
    { from: 'O', to: 'Z' },
    { from: 'P', to: 'A' },
    { from: 'Q', to: 'D' },
    { from: 'R', to: 'P' },
    { from: 'S', to: 'C' },
    { from: 'T', to: 'W' },
    { from: 'U', to: 'M' },
    { from: 'V', to: 'F' },
    { from: 'W', to: 'N' },
    { from: 'X', to: 'U' },
    { from: 'Y', to: 'S' },
    { from: 'Z', to: 'E' },
    { from: '0', to: '5' },
    { from: '1', to: '3' },
    { from: '2', to: '7' },
    { from: '3', to: '1' },
    { from: '4', to: '9' },
    { from: '5', to: '2' },
    { from: '6', to: '8' },
    { from: '7', to: '0' },
    { from: '8', to: '4' },
    { from: '9', to: '6' },
  ];

const grid = document.getElementById('grid');

crypts.forEach(({ from, to }) => {
  const button = document.createElement('div');
  button.className = 'button';
  button.textContent = from;

  button.addEventListener('click', () => {
    const toButton = Array.from(grid.children).find(
      (child) => child.textContent === to
    );
    if (toButton) {
      toButton.classList.add('highlight');
      setTimeout(() => toButton.classList.remove('highlight'), 300);
    }
  });

  grid.appendChild(button);
});