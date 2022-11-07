/* ________________________________________UY ishi_LS5___________________________________________ */

/* 1) ---------------------------------------------------------------------*/

const users = {}
for (i=1; i<=10; i++){
let userismi = prompt('Ismni kiriting')
let useryoshi = +prompt('Yoshni kiriting')
const id=i
users [id]={
    name: userismi,
    age: useryoshi
}
}
for(const key in users){
    console.info(`Foydalanuvchi ${key}\nIsmi: ${users[key].name}\nYoshi: ${users[key].age}`)
}

/* 2) ----------------------------------------------------------------------*/

function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}
let data = receipt()
let summ = 9000
let text = 'Sizning buyurtmangiz:'
let taxi = ' Yetkazib berish bilan (9000 sum)'
let umum = 'Umumiy = '

console.info(text)
for(const key in data) {
    console.info(`${[key]}: ${data[key].info} - ${data[key].price}`)
summ=summ + data[key].price 
}
console.info(`${umum}${summ}${taxi}`)
/* ============================================================================= */

