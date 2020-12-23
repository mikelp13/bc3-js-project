import accCabinet from './template/accCabinet.hbs';
import {data} from '../../data/data';
const loggedUserCarts = document.querySelector('#loggedUser__carts');
const authWrapper = document.querySelector('.header-auth')
const headerUpperWrapper = document.querySelector('.desktop-upper-wrapper')



function CreateCabinetMarkup() {
    authWrapper.insertAdjacentHTML('beforebegin', accCabinet())
}

CreateCabinetMarkup()
// console.log(authWrapper.innerHTML = accCabinet());