// finding all selected cards
const selectedCards = document.getElementsByClassName("card");
let totalPrice = 0;
for (const selectedCard of selectedCards) {
  selectedCard.addEventListener("click", function () {
    const productName = selectedCard.querySelector("h2").innerText;

    // find item container
    const itemContainer = document.getElementById("item-container");

    // keep count of child
    const count = itemContainer.childElementCount;

    // create an element p
    const p = document.createElement("p");

    // set innerHTML of p
    p.innerHTML = `${count + 1}. ${productName}`;

    // append child

    itemContainer.appendChild(p);

    // getting selected item's price
    const priceAsText = selectedCard.querySelector("span").innerText;

    const price = parseFloat(priceAsText);

    // calculate total price
    totalPrice += price;

    // enable Make Purchase button
    if (totalPrice > 0) {
      const applyBtn = document.getElementById("make-purchase-btn");
      applyBtn.removeAttribute("disabled");
    }

    // enable apply button
    if (totalPrice >= 200) {
      const applyBtn = document.getElementById("apply-btn");
      applyBtn.removeAttribute("disabled");
    }

    // set total price
    setElementValueById(totalPrice, "total-price");

    // getting
  });
}

// reset page by modal
document.getElementById("modal-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.getElementById("apply-btn").addEventListener("click", function () {
  // get coupon code from the input field
  const couponField = document.getElementById("coupon");
  const coupon = couponField.value;
  if (coupon !== "SELL200") {
    alert("Invalid coupon");
    return;
  }
  couponField.value = "";

  // discount calculation
  const discount = (totalPrice * 0.2).toFixed(2);

  //set discount
  setElementValueById(discount, "discount");

  // total calculation
  const total = (totalPrice - discount).toFixed(2);

  setElementValueById(total, "total");

  // console.log(totalPrice);
  
});
