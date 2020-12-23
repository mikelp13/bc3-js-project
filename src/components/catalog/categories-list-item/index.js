import { add } from 'lodash';
import './styles.css';
import categoryTemplate from './template/category.hbs';


$(window).on( 'load', function () {
    $('.sliders').slick({
        dots: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
        
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
      
    });
});

$(window).on('load', function() {
    console.log( "ready!" );
});


// import itemsTemplate from '../templates/gallery-items.hbs'; +
// import menuItems from '../menu.json';

// const markup = itemsTemplate(menuItems);
// const menuRef = document.querySelector('.js-menu');
// menuRef.insertAdjacentHTML('beforeend', markup);

// let jsonData = {};
// function createCategory(categories) { 
//     const markup = categoryTemplate(categories);
//     refs.categories.in
// }

// let addData = [];
// const liImgRef = document.querySelector('.category-js');

// const getCall = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/ads')
//         .then(response => response.json())
//         .then(data => addData = [...data])
// }



// 1 вариант =============================================================

// let addData = [];
// const liImgRef = document.querySelector('.category-js');

// const getCall = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/ads')
//         .then(response => response.json())
//         .then(data => addData = [...data])
// }

// const createImg = (data) => { 

//     return `<li class="category-card sliders-item">
//               <img class="category-card__img" src=${data.imageUrl} alt="photo ${data.title}">
//               <p class="category-card__name">${data.title}</p>
//               <div class="category-card__prices">
//                 <p class="category-card__price--new">${data.price}</p>
//               </div>
//             </li>`
// }


// const createMarkup = async () => { 
//     await getCall();
//     console.log('console result', typeof addData, addData);
//     addData.forEach((data) => {
//         console.log(typeof data, data);
//         // liImgRef.innerHTML = createImg(data);
//     });
//     // let i = 0;
//     // if (i < addData.length) { 
//     //     console.log('before', i);
//     //     liImgRef.innerHTML = createImg(addData[i]);
//     //     i += 1;
//     //     console.log("after", i);
//     // }
//     liImgRef.innerHTML = createImg(addData[0]);
//     console.log('markup ready!');

// }
// createMarkup();

// =============================================================================



