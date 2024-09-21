const totalBusSeat = 40;
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

  // add seat total number
  const seatCount = getInputById("seatCount");
  seatCount.innerText = turn;
  if(turn === 1){
    seatCount.classList = 'bg-primaryColor px-1 text-white rounded-full text-[14px] font-normal'
  }

  // seat left count
  const seatLeft = getInputById("seatLeft");
  seatLeft.innerText = totalBusSeat - turn;
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

// passenger details
const pPhoneNumber = getInputById("pPhoneNumber");
const submitNext = getInputById("submitNext");
pPhoneNumber.addEventListener("keyup", (e) => {
  if (e.target.value.length === 11) {
    submitNext.disabled = false;
  } else {
    submitNext.disabled = true;
  }
});

submitNext.addEventListener("click", (e) => {
  e.preventDefault();
});

const modalBtn = getInputById("modalBtn");
modalBtn.addEventListener("click", () => {
  location.reload();
});
