// import { add } from 'lodash';
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


let addData = [];
// const liImgRef = document.querySelector('.category-js');
const ulImgRef = document.querySelectorAll('.category-list');

console.log(ulImgRef);

const getCall = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/ads')
        .then(response => response.json())
        .then(data => addData = [...data])
}

const createCategory = async () => {
    await getCall();
    console.log(addData);
    const markup = categoryTemplate(addData);
    ulImgRef[0].insertAdjacentHTML('afterbegin', markup);
    ulImgRef[1].insertAdjacentHTML('afterbegin', markup);
    ulImgRef[2].insertAdjacentHTML('afterbegin', markup);
    console.log('markup ready');
}
createCategory();

