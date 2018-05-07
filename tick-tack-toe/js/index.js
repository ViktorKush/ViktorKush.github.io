function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function game() {
  var myNode = document.getElementById("container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var fieldSize = 25;
  var container = document.getElementById("container");
  var movesNumber = 0;
  var symbols = ["x", "o"];
  var symbolsChoice = 0;
  // let movesArray = new Array(fieldSize);
  var rowSize = Math.sqrt(fieldSize);
  container.style.width = rowSize * 100 + 50 + "px";
  //блок в якому ми створюємо клітинки
  //a block of code in which we add cells
  for (var i = 0; i < fieldSize; i++) {
    var cell = document.createElement('div'); //создаем ячейку(creating a cell)
    cell.innerHTML = "";
    cell.className = "cell";
    cell.id = "cell" + i;
    container.appendChild(cell);
  }
  var cells = document.getElementsByClassName("cell");
  for (var _i = 0; _i < cells.length; _i++) {
    cells[_i].addEventListener("click", makingMove);
  }
  function makingMove() {
    movesNumber++;
    this.innerText = symbols[symbolsChoice];
    check();
    symbolsChoice++;
    if (symbolsChoice > 1) symbolsChoice = 0;
    this.removeEventListener("click", makingMove);
    this.style.cssText = "border-color:black; cursor:default;";
  }
  // checking
  // тепер перевірка
  function checking(element, index, array) {
    return element.innerText === symbols[symbolsChoice];
  }
  // для того, щоб перевірити і вертикаль і горизонталь і діагональ нам треба змінювати ітератор.

  function check() {
    var weHaveWinnerDiagonal1 = [].concat(_toConsumableArray(cells)).filter(function (item, index) {
      return index % (rowSize + 1) === 0;
    }).every(checking);
    var weHaveWinnerDiagonal2 = [].concat(_toConsumableArray(cells)).filter(function (item, index) {
      return index !== 0 && index !== cells.length - 1 && index % (rowSize - 1) === 0;
    }).every(checking);

    var _loop = function _loop(_i2) {
      var weHaveWinnerHorizontal = [].concat(_toConsumableArray(cells)).slice(_i2 * rowSize, _i2 * rowSize + rowSize).every(checking);
      var weHaveWinnerVertical = [].concat(_toConsumableArray(cells)).filter(function (item, index) {
        return (index - _i2) % rowSize === 0;
      }).every(checking);
      if ((weHaveWinnerHorizontal || weHaveWinnerVertical || weHaveWinnerDiagonal1 || weHaveWinnerDiagonal2) && end()) {
        return "break";
      };
    };

    for (var _i2 = 0; _i2 < rowSize; _i2++) {
      var _ret = _loop(_i2);

      if (_ret === "break") break;
    };
  }
  function end() {
    alert(symbols[symbolsChoice] + " wins!");
    for (var _i3 = 0; _i3 < cells.length; _i3++) {
      cells[_i3].removeEventListener("click", makingMove);
      cells[_i3].style.cssText = "border-color:black; cursor:default;";
    }
    return true;
  }
}
game();
document.getElementById("restart").addEventListener("click", game);