import './styles.css';
import categoryTemplate from './template/category.hbs';



const categoryRefs = document.querySelectorAll('.category-list');

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
    // console.log(addCategoryProperty);
    const markup = categoryTemplate(addCategoryProperty);
    categoryRefs[0].insertAdjacentHTML('afterbegin', markup);
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
    // console.log(addCategoryTransport);
    const markup = categoryTemplate(addCategoryTransport);
    categoryRefs[1].insertAdjacentHTML('afterbegin', markup);
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
    // console.log(addCategoryWork);
    const markup = categoryTemplate(addCategoryWork);
    categoryRefs[2].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Work');
}
createСategoryWork();

let addCategoryElect;

const getCallСategoryElect = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/electronics')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryElect = [...data];
        })
}

const createСategoryElect = async () => {
    await getCallСategoryElect();
    // console.log(addCategoryElect);
    const markup = categoryTemplate(addCategoryElect);
    categoryRefs[3].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Elect');
}
createСategoryElect();


let addCategoryBusiness;

const getCallСategoryBusiness = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/businessAndServices')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryBusiness = [...data];
        })
}

const createСategoryBusiness = async () => {
    await getCallСategoryBusiness();
    // console.log(addCategoryBusiness);
    const markup = categoryTemplate(addCategoryBusiness);
    categoryRefs[4].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Business');
}
createСategoryBusiness();

let addCategorySport;

const getCallСategorySport = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/recreationAndSport')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategorySport = [...data];
        })
}

const createСategorySport = async () => {
    await getCallСategorySport();
    // console.log(addCategorySport);
    const markup = categoryTemplate(addCategorySport);
    categoryRefs[5].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Sport');
}
createСategorySport();

let addCategoryFree;

const getCallСategoryFree = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/free')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryFree = [...data];
        })
}

const createСategoryFree = async () => {
    await getCallСategoryFree();
    // console.log(addCategoryFree);
    const markup = categoryTemplate(addCategoryFree);
    categoryRefs[6].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Free');
}
createСategoryFree();

let addCategoryTrade;

const getCallСategoryTrade = async () => { 
    return await fetch('https://callboard-backend.herokuapp.com/call/specific/trade')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            addCategoryTrade = [...data];
        })
}

const createСategoryTrade = async () => {
    await getCallСategoryTrade();
    // console.log(addCategoryTrade);
    const markup = categoryTemplate(addCategoryTrade);
    categoryRefs[7].insertAdjacentHTML('afterbegin', markup);
    console.log('markup category ready Trade');
}
createСategoryTrade();


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
    console.log( "slider ready!" );
});

