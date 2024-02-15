//// кнопки  tab
const   btnTab = document.querySelectorAll('.btn-nav')
const tabsContents = document.querySelectorAll('.tab-content')

// кнопки корзины
const btnBasket = document.querySelector('.cart-btn'),
cartContent = document.querySelector('.main-cart'),
btnHIde = document.querySelector('.btn-hide')



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