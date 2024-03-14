const btnTabs = document.querySelectorAll(".nav-item");
const tabsContents = document.querySelectorAll(".tab-content");
//form
const form = document.querySelector(".form");
const btnsRadio = document.querySelectorAll(".btn-radio");
// modal
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close-modal");
form.addEventListener("submit", (event) => {
  event.preventDefault;
});
// button  basket

const btnAdds = document.querySelectorAll(".btn-add");

//Basket Items
const cartHeader = document.querySelector(".cart-header-empty"),
  mainCart = document.querySelector(".main-cart"),
  listsItems = document.querySelector(".lists-item"),
  itemCount = document.querySelector(".item-count"),
  priceCount = document.querySelector(".price-count");
const btnBasket = document.querySelector(".cart-btn"),
  btnHIde = document.querySelector(".btn-hide");
const btnCheckout = document.querySelector(".btn-checkout");

/// Items
const cards = document.querySelectorAll(".card");

/////////// tabs

btnTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let tabId = tab.getAttribute("data-tab");

    if (tabId != null) {
      tabsContents.forEach((content) => {
        content.classList.remove("active");
        btnTabs.forEach((btn) => {
          btn.style.backgroundColor = "#FFFFFF";
        });
      });
      document.getElementById(tabId).classList.add("active");

      tab.style.backgroundColor = "   #FFAB08";
    } else {
      console.log("dsdad");
    }
  });
});

const products = [];

//addTocart

const addTocart = (obj) => {
  products.push(obj);

  renderCart(products);
};

//  //show & hide   basket with button

btnHIde.addEventListener("click", () => {
  mainCart.classList.toggle("hide");
});
btnBasket.addEventListener("click", () => {
  mainCart.classList.toggle("hide");
});

//show & hide basket

const hideMainCart = (arr) => {
  if (arr.length == 0) {
    mainCart.classList.add("hide");
    cartHeader.textContent = " В корзине пока пусто :( ";
  }
  if (arr.length > 0) {
    mainCart.classList.remove("hide");
    cartHeader.textContent = "";
  }
};

const createCartObject = (btns, cards) => {
  let product = {};

  btns.forEach((btn, idx) => {
    btn.setAttribute("data-index", `${idx}`);

    btn.addEventListener("click", () => {
      const item = cards[idx];
      const img = item.querySelector(".img").getAttribute("src");
      const name = item.querySelector(".name").textContent;
      const price = parseFloat(item.querySelector(".price").textContent);
      const weight = parseFloat(item.querySelector(".weight").textContent);

      const existingItem = products.find(
        (cartItem) =>
          cartItem.name === name &&
          cartItem.price === price &&
          cartItem.weight === weight
      );

      if (existingItem) {
        alert(`Этот  Товар Уже Есть ${name} В корзине `);
      } else {
        product.img = img;
        product.name = name;
        product.price = price;
        product.weight = weight;
        product.count = 1;
        addTocart(product);
        product = {};
      }
    });
  });
};
let totalPriceItems;
createCartObject(btnAdds, cards);

//itemsCart & control

const renderCart = (products) => {
  listsItems.innerHTML = "";
  products.forEach((item, idx) => {
    listsItems.innerHTML += `
    <li> 
    <img src="img/items/1-1.png" alt="" style="width: 64px;" height="52px"> 
    <div class="item-descr">
      <span>${item.name}</span>
      <span class="weight">${item.weight}г</span>
      <span>${item.price}₽</span>
    </div>   
    <div class="item-section">
      <button class="btn-minus" data-index="${idx}">-</button>
      <span class="item-count">${item.count}</span>
      <button class="btn-plus" data-index="${idx}">+</button>
    </div>
  </li>`;
    totalPriceItems = products.reduce(
      (acc, items) => (acc += items.price * items.count),
      0
    );

    priceCount.innerHTML = `${totalPriceItems} ₽`;
  });

  itemCount.innerHTML = `${products.length}`;
  const btnMinus = document.querySelectorAll(".btn-minus"),
    btnPlus = document.querySelectorAll(".btn-plus");

  hideMainCart(products);

  controlCart(products, btnMinus, btnPlus);
};

// control Cart
const controlCart = (arr, btnMinus, btnBtnPlus) => {
  btnMinus.forEach((btn, i) => {
    if (arr[i].count == 0) {
      arr.splice(i, 1);

      renderCart(arr);
    }
    btn.addEventListener("click", () => {
      arr[i].count--;
      renderCart(arr);
    });
  });
  btnBtnPlus.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      arr[i].count++;
      renderCart(arr);
    });
  });
};

///show & hide modal

btnCheckout.addEventListener("click", () => {
  if (products.length !== 0) {
    modal.classList.remove("hide");
  }
});

btnClose.addEventListener("click", () => {
  modal.classList.add("hide");
});

let isDelivery = false;

btnsRadio.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value == "delivery") {
      document.querySelector(".delivery-section").classList.remove("hide");
      isDelivery = true;
    } else if (btn.value == "pickup") {
      document.querySelector(".delivery-section").classList.add("hide");
      isDelivery = false;
    }
  });
});

// Placing an order

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputName = document.querySelector(".input-name"),
    inputPhone = document.querySelector(".input-phone"),
    inputAdress = document.querySelector(".input-adress"),
    inputFloor = document.querySelector(".input-floor"),
    inputIntercom = document.querySelector(".input-intercom");
  const order = {};

  if (
    !isDelivery &&
    inputName.value.length >= 4 &&
    inputName.value.length <= 10 &&
    inputPhone.value.length >= 4 &&
    inputPhone.value.length <= 12
  ) {
    order.id = Math.trunc(Math.random() * 950);
    order.name = inputName.value;
    order.phone = inputPhone.value;
    order.isDeliver = isDelivery;
    order.orderItems = products.splice(0);
    order.totalPice = totalPriceItems;
    inputName.value = "";
    inputPhone.value = "";
    modal.classList.add("hide");
    console.log(order);
  }

  if (
    isDelivery &&
    inputName.value.length >= 4 &&
    inputName.value.length <= 10 &&
    inputPhone.value.length == 12 &&
    inputAdress.value.length >= 4 &&
    inputAdress.value.length <= 20 &&
    inputFloor.value.length >= 1 &&
    inputFloor.value.length <= 50 &&
    inputIntercom.value.length >= 1 &&
    inputIntercom.value.length <= 20
  ) {
    order.name = inputName.value;
    order.phone = inputPhone.value;
    order.adress = inputAdress.value;
    order.floor = inputFloor.value;
    order.interCom = inputIntercom.value;
    order.isDeliver = isDelivery;
    order.orderItems = products.splice(0);
    order.totalPice = totalPriceItems;

    inputName.value = "";
    inputPhone.value = "";
    inputAdress.value = "";
    inputFloor.value = "";
    inputIntercom.value = "";
    console.log(order);
    modal.classList.add("hide");
  }

  products.splice(0);
  renderCart(products);
  priceCount.textContent = "0 ₽";
});
