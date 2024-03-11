// Deklaracja stałych dla elementów HTML
const iloscElems = document.querySelectorAll(".ilosc");
const proElems = document.querySelectorAll(".pro");
const upButtons = document.querySelectorAll(".up");
const orButtons = document.querySelectorAll(".or");

let order_m = 0;

const check_if = () => {
  iloscElems.forEach((elem) => {
    const ilosc = parseInt(elem.innerHTML);
    if (ilosc === 0) {
      elem.style.backgroundColor = "Red";
    } else if (ilosc >= 1 && ilosc <= 5) {
      elem.style.backgroundColor = "Yellow";
    } else if (ilosc >= 60) {
      elem.style.backgroundColor = "Green";
    } else {
      elem.style.backgroundColor = "Honeydew";
    }
  });
};

check_if();

upButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    const nowaIlosc = window.prompt("Podaj nową ilość");
    iloscElems[index].innerHTML = nowaIlosc;
    check_if();
  });
});

orButtons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    order_m++;
    window.alert(`Zamówienie nr: ${order_m} pro: ${proElems[index].innerHTML}`);
  });
});
