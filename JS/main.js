// Burger
const burgerOpen = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('.nav');
const burgerClose = document.querySelector('.burger_menu_close');
const linksBurgerMenu = document.querySelectorAll('.nav_link');
const header = document.getElementById("Home");

    burgerOpen.addEventListener('click', function () {
        burgerMenu.classList.add('nav_active');
    });

    burgerClose.addEventListener('click', function () {
        burgerMenu.classList.remove('nav_active');
    });

    document.addEventListener( 'click', function (event) {
        let clickBorders = event.composedPath().includes(header);
        if ( ! clickBorders ) {
            burgerMenu.classList.remove('nav_active');
        }
    });

    (function () {
        for (let i = 0; i < linksBurgerMenu.length; i++) {
            linksBurgerMenu[i].addEventListener('click', function () {
                burgerMenu.classList.remove('nav_active');
            });
        };
    }());

// Price
const priceHead = document.querySelectorAll('.price_element');
const priceInfo = Array.from(document.querySelectorAll('.price_option'));
const buttonPrice = document.querySelectorAll('.button_option');

(function () {
    priceHead.forEach(function (priceHeads) {
    priceHeads.addEventListener('click', function () {
        if (priceInfo.some(element => element.classList.contains('active')) && !(priceHeads.parentElement.classList.contains('active'))) {
        priceInfo.forEach(function (element){ 
        element.classList.remove('active')
        });
        priceHeads.parentElement.classList.toggle('active');
        } else {
        priceHeads.parentElement.classList.toggle('active');
        };
    });
    });

    buttonPrice.forEach(function (event) {
        event.addEventListener('click', function () {
            document.location.href = '#Contacts';
        });
    });
}());

// Service
const buttonGardens = document.querySelector('.gardens_button');
const buttonLawn = document.querySelector('.lawn_button');
const plantingButton = document.querySelector('.planting_button');
const gardensCard = document.querySelectorAll('.gardens_card');
const lawnCard = document.querySelectorAll('.lawn_card');
const plantingCard = document.querySelectorAll('.planting_card');

buttonGardens.addEventListener('click', function () {
    buttonGardens.classList.toggle('active');
    if (!plantingButton.classList.contains('active') && !buttonLawn.classList.contains('active')) {
        plantingCard.forEach(function (element) {
            element.classList.toggle('active');
        });
        lawnCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (plantingButton.classList.contains('active') && buttonLawn.classList.contains('active')) {
        gardensCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        plantingCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        lawnCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        plantingButton.classList.toggle('active');
        buttonLawn.classList.toggle('active');
    } else if (plantingButton.classList.contains('active') && !buttonLawn.classList.contains('active')) {
        gardensCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (!plantingButton.classList.contains('active') && buttonLawn.classList.contains('active')) {
        gardensCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    };
});


buttonLawn.addEventListener('click', function () {
    buttonLawn.classList.toggle('active');
    if (!buttonGardens.classList.contains('active') && !plantingButton.classList.contains('active')) {
        gardensCard.forEach(function (element) {
            element.classList.toggle('active');
        });
        plantingCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (buttonGardens.classList.contains('active') && plantingButton.classList.contains('active')) {
        gardensCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        plantingCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        lawnCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        plantingButton.classList.toggle('active');
        buttonGardens.classList.toggle('active');
    } else if (buttonGardens.classList.contains('active') && !plantingButton.classList.contains('active')) {
        lawnCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (!buttonGardens.classList.contains('active') && plantingButton.classList.contains('active')) {
        lawnCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    }; 
});

plantingButton.addEventListener('click', function () {
    plantingButton.classList.toggle('active');
    if (!buttonGardens.classList.contains('active') && !buttonLawn.classList.contains('active')) {
        gardensCard.forEach(function (element) {
            element.classList.toggle('active');
        });
        lawnCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (buttonGardens.classList.contains('active') && buttonLawn.classList.contains('active')) {
        gardensCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        plantingCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        lawnCard.forEach(function(element) {
            element.classList.toggle('active');
        });
        buttonLawn.classList.toggle('active');
        buttonGardens.classList.toggle('active');   
    } else if (buttonGardens.classList.contains('active') && !buttonLawn.classList.contains('active')) {
        plantingCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    } else if (!buttonGardens.classList.contains('active') && buttonLawn.classList.contains('active')) {
        plantingCard.forEach(function (element) {
            element.classList.toggle('active');
        });
    };
});


// Contact us
const cityInfo = [
    {city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    address: '511 Warburton Ave',},
    {city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    address: '151 Charlotte Street',},
    {city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    address: '14 WEST Noyes BLVD',},
    {city: 'New York City',
    phone: '+1 212 456 0002',
    address: '9 East 91st Street',},];

const selectorCity = document.querySelector('.contact_selector');
const cityOption = document.querySelector('.select_city');
const city = document.querySelectorAll('.city');
const trigger = document.querySelector('.contact_trigger');
const arrowContact = document.querySelector('.contact_arrow');
const cityBlock = document.querySelector('.city_block');
const nameCity = document.querySelector('.city_name');
const phoneCity = document.querySelector('.city_phone');
const addressCity = document.querySelector('.city_address');
const buttonContact = document.querySelector('.city_btn');

(function () {
    selectorCity.addEventListener('click', function () {
        cityOption.classList.toggle('active');
        selectorCity.classList.add('active');
        arrowContact.classList.toggle('active');
    });

    city.forEach(function (element) {
        element.addEventListener("click", function () {
            cityOption.classList.remove('active');
            selectorCity.classList.add('active');
            arrowContact.classList.add('active');
            cityBlock.classList.add('active');
            trigger.textContent = this.textContent;
            nameCity.textContent = this.textContent;
            cityInfo.forEach((i) => {
                if (i.city === this.textContent) {
                phoneCity.textContent = i.phone;
                addressCity.textContent = i.address;}
            });
        });
    });
    buttonContact.addEventListener('click', function () {
        document.location.href = 'tel:' + phoneCity.textContent;
        console.log('tel:' + phoneCity.textContent);
    });
}());