const ticketPrice = 550;
let tPrice = 0;
let turn = 0;

seatBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    turn++;
    if (turn > 4) {
      alert("You booked maximum seats");
      return;
    }
    btn.style.backgroundColor = "#1dd100";
    btn.style.color = "white";
    tPrice += ticketPrice;
    memoItem(btn.innerText);
  });
});

const memoItem = (v) => {
  const memo = getInputById("memo");
  const noSeatBooked = getInputById("noSeatBooked");
  noSeatBooked.classList.add("hidden");
  const li = document.createElement("li");
  li.innerHTML = `<span>${v}</span><span>Economy</span><span class="text-right">${ticketPrice}</span>`;
  li.className = "grid grid-cols-3 gap-4 py-1";
  memo.appendChild(li);

  // add total price
  const totalPrice = getInputById("totalPrice");
  totalPrice.innerText = tPrice;

  // add grand total
  const grandTotal = getInputById("grandTotal");
  grandTotal.innerText = tPrice;
};

const couponSubmit = getInputById("couponSubmit");
couponSubmit.addEventListener("click", () => {
  const coupon = getInputById("coupon");
  if (coupon.value === "NEW15" || coupon.value === "Couple 20") {
    const discountDiv = getInputById("discountDiv");
    discountDiv.classList.remove("hidden");
    const couponDiv = getInputById("couponDiv");
    couponDiv.classList.add("hidden");
    discountAndGrandTotal();
  } else {
    alert("Invalid coupon");
  }
});

const discountAndGrandTotal = () => {
  const discountValue = getInputById("discountValue");
  const grandTotal = getInputById("grandTotal");
  const coupon = getInputById("coupon");

  if (coupon.value === "NEW15") {
    const discount = tPrice * 0.15;
    discountValue.innerText = discount;
    grandTotal.innerText = tPrice - discount;
  } else {
    const discount = tPrice * 0.2;
    discountValue.innerText = discount;
    grandTotal.innerText = tPrice - discount;
  }
};
