//// кнопки  tab
const   btnTabs = document.querySelectorAll('.btn-nav')
const tabsContents = document.querySelectorAll('.tab-content')


// кнопки корзины


// кнопки добавление 
const btnAdds = document.querySelectorAll('.btn-add')


//элэменты корзины  
const  cartHeader = document.querySelector('.cart-header-empty'),
       mainCart = document.querySelector('.main-cart'),
       listsItems = document.querySelector('.lists-item'),
       itemCount = document.querySelector('.item-count'),
       priceCount = document.querySelector('.price-count')
       const btnBasket = document.querySelector('.cart-btn'),
       btnHIde = document.querySelector('.btn-hide')
/// продукты 
const cards = document.querySelectorAll('.card')


// onclick(btnTabs[i].style.backgroundColor = 'black')


/////////// табы 


btnTabs.forEach( tab => {
    tab.addEventListener('click', () => {
        let  tabId = tab.getAttribute('data-tab')

        if(tabId != null){
            tabsContents.forEach( content => {
                content.classList.remove('active')
                btnTabs.forEach(btn => {
                btn.style.backgroundColor = '#FFFFFF'
               })
              
            })
            document.getElementById(tabId).classList.add('active')
               
            tab.style.backgroundColor = '   #FFAB08'
        }else{
            console.log('dsdad')
        }


    
        })
        
})







const products = []





//addTocart 

const addTocart = (obj) => {


products.push(obj)

renderCart(products)


}



//  //показ-скрытие корзины   с помощью кнопки

btnHIde.addEventListener('click' ,() => {
  mainCart.classList.toggle('hide')
})
btnBasket.addEventListener('click', () => {
  mainCart.classList.toggle('hide')

})

  //показ-скрытие корзины

const hideMainCart =  (arr) => {
  if(arr.length == 0){
    mainCart.classList.add('hide')
    cartHeader.textContent = ' В корзине пока пусто :( '

  }
    if(arr.length > 0){
      mainCart.classList.remove('hide')
      cartHeader.textContent = ''

    }
  
}




const createCartObject = (btns, cards) => {
let product = {}

btns.forEach((btn, idx) => {
    btn.setAttribute('data-index', `${idx}`)

  btn.addEventListener('click', () => {
    const item = cards[idx]
      const img = item.querySelector('.img').getAttribute('src');
  const name = item.querySelector('.name').textContent;
  const price = parseFloat(item.querySelector('.price').textContent);
  const weight = parseFloat(item.querySelector('.weight').textContent);



      const existingItem = products.find(cartItem => cartItem.name === name && cartItem.price === price && cartItem.weight === weight );

      if (existingItem) {
       alert(`Этот  Товар Уже Есть ${name} В корзине `)

      } else {
        product.img = img;
        product.name = name;
        product.price = price;
        product.weight = weight;
        product.count = 1;
        addTocart(product);
        product = {}

      }
  })

})
}



createCartObject(btnAdds, cards)

//itemsCart & control

const renderCart =  (products) => {
  listsItems.innerHTML = ''
  products.forEach((item, idx) => {
    listsItems.innerHTML +=`
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
  </li>`
 const totalPriceItems = products.reduce((acc, items) => acc += items.price * items.count, 0)
 
 priceCount.innerHTML = `${totalPriceItems} ₽`

})

   itemCount.innerHTML = `${products.length}`
   const btnMinus = document.querySelectorAll('.btn-minus'),
   btnPlus = document.querySelectorAll('.btn-plus')   


   hideMainCart(products)


 
   controlCart(products, btnMinus, btnPlus)
}



// control Cart
const  controlCart = ( arr, btnMinus, btnBtnPlus) => {

  btnMinus.forEach((btn, i) => {
    if(arr[i].count == 0){
      arr.splice(i, 1)
    
      renderCart(arr)

    }
   btn.addEventListener('click', () => {
   arr[i].count--
  renderCart(arr)
   })
  })
  btnBtnPlus.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        arr[i].count++   
        renderCart(arr)
       
    })
  })


}

