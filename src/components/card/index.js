import './styles.css';

$(function () {
        $(document).on('click touchstart', '.category-card', function(){ 
            console.log($(this));
            console.log('card click');
        });
    });

