const navBar = document.querySelector('.nav-bar')
const buttonUp = document.querySelector('.btn-up')
let lastScrollTop

window.addEventListener('scroll', function () {

	let scrollY = window.scrollY || document.documentElement.scrollTop;
	scrollY > 400 ? showButtonUp() : hideButtonUp();

	let scrrollTop = window.pageYOffset || document.documentElement.scrollTop
	if (scrrollTop > lastScrollTop) {
		navBar.style.top = '-80px'
	}
	else {
		navBar.style.top = '0'
	}
	lastScrollTop = scrrollTop
})

const showButtonUp = () => {
	buttonUp.classList.remove('btn-up__hide')
}
const hideButtonUp = () => {
	buttonUp.classList.add('btn-up__hide')
}
buttonUp.addEventListener('click', (e) => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
})



var splide = new Splide('#image-carousel', {
	type: 'loop',
	perPage: 1,
	autoplay: true,
	interval: 5000,
	pauseOnHover: false,
	speed: 2000,
	easing: "ease-in-out",
	drag: false
});
splide.mount();

var splideReview = new Splide('#image-carousel1', {
	type: 'loop',
	perPage: 1,
	autoplay: true,
	interval: 4000,
	pauseOnFocus: true,
	speed: 2000,
	easing: "ease-in-out",
	arrows: false,
	drag: false
});
splideReview.mount();



const menuToggle = document.querySelector(".nav-bar__toggle")
const menuNav = document.querySelector(".nav-bar__item")

const mobileMenu = () => {
	menuToggle.classList.toggle("is-active")
	menuNav.classList.toggle("active")
	if (menuToggle.classList.contains('is-active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
}
menuToggle.addEventListener('click', mobileMenu)

const hideMobileMenu = () => {
	if (window.innerWidth <= 768) {
		menuToggle.classList.toggle('is-active')
		menuNav.classList.toggle('active')
	}
	document.body.style.overflow = 'auto'
};
menuNav.addEventListener('click', hideMobileMenu)



const showButton = document.querySelector('.product__button')
const product = document.querySelector('.product')

const addProductStyle = function (productsArray, count, displayStyle) {
	if (window.innerWidth <= 768) {
		for (let i = productsArray.length - 1; count < 8; i--, count++) {
			productsArray[i].style.display = displayStyle
		}
		return
	}
	if (window.innerWidth <= 1300) {
		for (let i = productsArray.length - 1; count < 4; i--, count++) {
			productsArray[i].style.display = displayStyle
		}
	}
}

const showProduct = () => {
	let products = document.querySelectorAll('.product__item')
	let count = 0
	if (showButton.classList.contains('isActive')) {
		showButton.classList.remove('isActive')
		showButton.innerHTML = 'Show more...'
		product.classList.remove('product__active')
		addProductStyle(products, count, 'none')
	} else {
		showButton.classList.toggle('isActive')
		showButton.innerHTML = 'Show less...'
		product.classList.toggle('product__active')
		addProductStyle(products, count, 'flex')
	}
}

showButton.addEventListener('click', () => {
	showProduct()
})



const animItems = document.querySelectorAll('._anim-item')

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params) {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4


			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active')
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect()
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}
// Hər bir footer elementinə click hadisəsi əlavə etmək
document.getElementById('home').addEventListener('click', function(event) {
	event.preventDefault(); // Səhifənin yenilənməsini dayandırmaq üçün
	document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Keçid ediləcək yerdə olan hissəyə keçid etmək
  });
  
  document.getElementById('about').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('services').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('contact').addEventListener('click', function(event) {
	event.preventDefault();
	document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
  