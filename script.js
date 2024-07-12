import "./styles.css";
// menu data structure 

// Selecting and caching the <main> element
let mainEl = document.querySelector('main');

// Setting the background color of mainEl to the value of --main-bg
mainEl.style.backgroundColor = 'var(--main-bg)';

// Setting the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Adding a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');



// Part 2: Creating a Menu Bar

// Selecting and caching the <nav id="top-menu"> element
let topMenuEl = document.getElementById('top-menu');

// Setting the height of topMenuEl to be 100%
topMenuEl.style.height = '100%';

// Setting the background color of topMenuEl to the value of --top-menu-bg
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Adding a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');



var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

