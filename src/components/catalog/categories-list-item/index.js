import './styles.css';
import categoryTemplate from './template/category.hbs';

const categoryRefs = document.querySelectorAll('.category-list');


$(window).on( 'load', function () {
    $('.sliders').slick({
        dots: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        
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

// проба загрузки=========================================================

// let addData = [];

// const ulImgRef = document.querySelectorAll('.category-list');

// console.log(ulImgRef);

// const getCall = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/ads')
//         .then(response => response.json())
//         .then(data => { addData = [...data]; console.log(addData); })
// }

// const createCategory = async () => {
//     await getCall();
//     console.log(addData);
//     const markup = categoryTemplate(addData);
//     ulImgRef[0].insertAdjacentHTML('afterbegin', markup);
//     ulImgRef[1].insertAdjacentHTML('afterbegin', markup);
//     ulImgRef[2].insertAdjacentHTML('afterbegin', markup);
//     console.log('markup ready');
// }
// createCategory();

// ===================================================================

let addCategoryProperty;

const getCallСategoryProperty = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/property')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryProperty = [...data];
        })
}

const createСategoryProperty = async () => {
    await getCallСategoryProperty();
    console.log(addCategoryProperty);
    const markup = categoryTemplate(addCategoryProperty);
    categoryRefs[1].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Property');
}
createСategoryProperty();

let addCategoryTransport;

const getCallСategoryTransport = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/transport')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryTransport = [...data];
        })
}

const createСategoryTransport = async () => {
    await getCallСategoryTransport();
    console.log(addCategoryTransport);
    const markup = categoryTemplate(addCategoryTransport);
    categoryRefs[2].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Transport');
}
createСategoryTransport();


let addCategoryWork;

const getCallСategoryWork = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/work')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryWork = [...data];
        })
}

const createСategoryWork = async () => {
    await getCallСategoryWork();
    console.log(addCategoryWork);
    const markup = categoryTemplate(addCategoryWork);
    categoryRefs[3].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Work');
}
createСategoryWork();

// let addCategoryWork;

// const getCallСategoryWork = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/specific/work')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             addCategoryWork = [...data];
//         })
// }

// const createСategoryWork = async () => {
//     await getCallСategoryWork();
//     console.log(addCategoryWork);
//     const markup = categoryTemplate(addCategoryWork);
//     categoryRefs[3].insertAdjacentHTML('afterbegin', markup);
//     console.log('markup category ready Work');
// }
// createСategoryWork();