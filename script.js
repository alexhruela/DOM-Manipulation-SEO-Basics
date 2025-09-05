document.addEventListener('DOMContentLoaded', function () {
  const changeTextBtn = document.getElementById('changeTextBtn');
  const addItemBtn = document.getElementById('addItemBtn');
  const removeElementBtn = document.getElementById('removeElementBtn');

  const paragraph = () => document.getElementById('target-paragraph');
  const list = () => document.getElementById('reasons-list');

  // 1) Change paragraph text
  changeTextBtn.addEventListener('click', function () {
    const p = paragraph();
    if (p) {
      p.textContent = 'Dota 2 keeps me engaged by testing my strategy, teamwork, and decision-making under pressure.';
    } else {
      alert('Paragraph was already removed. Nothing to change.');
    }
  });

  // 2) Add new list item
  addItemBtn.addEventListener('click', function () {
    const ul = list();
    if (!ul) {
      alert('List not found. Cannot add item.');
      return;
    }
    const li = document.createElement('li');
    li.textContent = 'Endless variety with new heroes and updates';
    ul.appendChild(li);
    li.tabIndex = -1;
    li.focus();
  });

  // 3) Remove element: paragraph first, then list items, then notify
  removeElementBtn.addEventListener('click', function () {
    const p = paragraph();
    const ul = list();

    if (p) {
      p.remove();
      return;
    }

    if (ul && ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
      return;
    }

    alert('Nothing left to remove.');
  });
});
