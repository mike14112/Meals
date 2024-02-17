//// кнопки  tab
const   btnTab = document.querySelectorAll('.btn-nav')
const tabsContents = document.querySelectorAll('.tab-content')


// кнопки корзины
const btnBasket = document.querySelector('.cart-btn'),
cartContent = document.querySelector('.main-cart'),
btnHIde = document.querySelector('.btn-hide')

// кнопки добавление 
const btnAdds = document.querySelectorAll('.btn-add')


/// продукты 
const cards = document.querySelectorAll('.card')

/// массив продуктов 
const products = [];



/////////// табы 
btnTab.forEach( tab => {
    tab.addEventListener('click', () => {
        let  tabId = tab.getAttribute('data-tab')

        if(tabId != null){
            tabsContents.forEach( content => {
                content.classList.remove('active')
            })
        
            document.getElementById(tabId).classList.add('active')
        }else{
            console.log('dsdad')
        }


    
        })
        
})

//показ-скрытие корзины

btnBasket.addEventListener('click', ()=> {
   cartContent.classList.toggle('hide')
})

btnHIde.addEventListener('click', () => {
    cartContent.classList.add('hide')
})


// создание обьекта  продукта и помещение в массив 

btnAdds.forEach((btn, i) => {
   btn.addEventListener('click', ()=> {

const product = {}

const item = cards[i]

const img = item.querySelector('.img').getAttribute('src');
const name = item.querySelector('.name').innerText;
const price = parseFloat(item.querySelector('.price').innerText);
const weight = parseFloat(item.querySelector('.weight').innerText);

product.img = img
product.name = name
product.price = price
product.weight = weight


products.push(product )
console.log(products)

   })
})


