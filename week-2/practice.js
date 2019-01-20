const banner           = document.querySelector('.banner');
const welcomeHead      = document.querySelector('h1.welcome');
const seeMoreButton    = document.getElementById('toSeeMoreButton');
const heddinDiv        = document.querySelector('div.hidden');
const navBarMenuImg    = document.querySelector('img.menu-icon');
const navBarMenuDetail = document.querySelector('#navBarDetail');
const navBarMenuClose  = document.querySelector('#navBarDetail .close-icon');

function modifyText() {
	if (welcomeHead.textContent === 'Welcome to JC 101 to know more about JC') {
		welcomeHead.textContent = 'Have a Good Time!';
	} else {
		welcomeHead.textContent = 'Welcome to JC 101 to know more about JC';
	}
}

function showHiddenPart() {
	if (seeMoreButton.textContent === 'See More') {
		seeMoreButton.textContent = 'Hide';
		heddinDiv.style.display = 'block';
	} else {
		seeMoreButton.textContent = 'See More';
		heddinDiv.style.display = 'None';
	}
	
}

function showNavBarDetail() {
	navBarMenuDetail.style.display = 'block';
}

function closeNavBarDetail() {
	navBarMenuDetail.style.display = 'none';
}

banner.addEventListener('click', modifyText);
seeMoreButton.addEventListener('click', showHiddenPart);
navBarMenuImg.addEventListener('click', showNavBarDetail);

navBarMenuClose.addEventListener('click', closeNavBarDetail);
navBarMenuClose.addEventListener('mouseover', ()=> {
	navBarMenuClose.setAttribute('src', 'image/close-hover.png');
});

navBarMenuClose.addEventListener('mouseout', ()=> {
	navBarMenuClose.setAttribute('src', 'image/close.png');
});

// Force to close Navigation bar detail when the screen width is wider than 800px
if (matchMedia) {
const mq = window.matchMedia("(min-width: 800px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

function WidthChange(mq) {
	if (mq.matches) {
		closeNavBarDetail();
	} 
}

