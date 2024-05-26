const shoppingCart = []


//dummy checkout btn
const button = document.querySelector('#checkoutButton')

button.addEventListener('click', () => {
    fetch('/create-checkout-session', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: shoppingCart,
        }),
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error("error")
    })
})



const item1Button = document.querySelector('#button-item-1')
item1Button.addEventListener('click', () => {
    shoppingCart.push({id: 1, quantity: 1})
})

const item2Button = document.querySelector('#button-item-2')
item2Button.addEventListener('click', () => {
    shoppingCart.push({id: 2, quantity: 1})
})

const item3Button = document.querySelector('#button-item-3')
item3Button.addEventListener('click', () => {
    shoppingCart.push({id: 3, quantity: 1})
})

const item4Button = document.querySelector('#button-item-4')
item4Button.addEventListener('click', () => {
    shoppingCart.push({id: 4, quantity: 1})
})