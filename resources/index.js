// Navbar animations
const mouse = document.getElementById('homepage-arrow');
const items = document.querySelectorAll('.timeline-items .timeline-item');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// Function for typing



(function typeTitleOut() {
  const texts = ['Developer', 'Problem Solver', 'Student of Life'];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('#typer').textContent = letter;
    if (letter.length === currentText.length) {
      count++
      index = 0
    }
    setTimeout(type, 150);
  })()
})()




// PROJECT SECTION

const projects = document.querySelectorAll('.project-item');

const projectHover = (e) => {
  console.log(e.target);
  let card = e.target;
  // hide the desc
  const origMessage = card.querySelector('.visible-desc');
  origMessage.style.display = 'none';
  card.querySelector('.used').style.display = 'none';


  // display the new desc
  card.querySelector('.hidden-desc').style.display = 'contents';
  card.querySelector('.source').style.display = 'contents';

  //Make title visible
  card.querySelector('.proj-name').style.color = 'black';
}



const projectReturn = (e) => {
  console.log(e.target);
  let card = e.target;
  // show the desc
  const origMessage = card.querySelector('.visible-desc');
  console.log(origMessage)
  origMessage.style.display = 'contents';
  card.querySelector('.used').style.display = 'contents';


  // hide the new desc
  card.querySelector('.hidden-desc').style.display = 'none';
  card.querySelector('.source').style.display = 'none';

  //Make title visible
  card.querySelector('.proj-name').style.color = 'white';

}



projects.forEach(project => {
  // project.addEventListener('mouseenter', projectHover);
  // project.addEventListener('mouseleave', projectReturn);
  project.addEventListener('pointerenter', projectHover);
  project.addEventListener('pointerleave', projectReturn);
})




// ABOUT ME SECTION

// buttons
const aboutButtonOne = document.querySelector('.btn1');
const aboutButtonTwo = document.querySelector('.btn2');
const aboutButtonThree = document.querySelector('.btn3');

// descriptions
const buttonOneDesc = document.querySelector('.description-one p');
const buttonTwoDesc = document.querySelector('.description-two p');
const buttonThreeDesc = document.querySelector('.description-three p');

// Display none to show the default description
buttonTwoDesc.style.display = "none";
buttonThreeDesc.style.display = "none";
aboutButtonOne.style.color = 'black';

// functions to display desc on clicks
const displayDesc = (e) => {
  switch (e.target) {
    case aboutButtonOne:
      console.log(buttonOneDesc)
      // change button color
      aboutButtonOne.style.background = "white";
      aboutButtonOne.style.color = "black";

      aboutButtonThree.style.background = "black";
      aboutButtonThree.style.color = "white";
      aboutButtonTwo.style.background = "black";
      aboutButtonTwo.style.color = "white";

      // change desc contents
      buttonOneDesc.style.display = "contents";
      buttonTwoDesc.style.display = "none";
      buttonThreeDesc.style.display = "none";
      break;

    case aboutButtonTwo:
      console.log(buttonTwoDesc)
      // change button color
      aboutButtonTwo.style.background = "white";
      aboutButtonTwo.style.color = "black";

      aboutButtonThree.style.background = "black";
      aboutButtonThree.style.color = "white";
      aboutButtonOne.style.background = "black";
      aboutButtonOne.style.color = "white";


      // change desc contents
      buttonOneDesc.style.display = "none";
      buttonTwoDesc.style.display = "contents";
      buttonThreeDesc.style.display = "none";

      break;
    case aboutButtonThree:
      console.log(buttonThreeDesc)
      // change button color
      aboutButtonThree.style.background = "white";
      aboutButtonThree.style.color = "black";

      aboutButtonTwo.style.background = "black";
      aboutButtonTwo.style.color = "white";
      aboutButtonOne.style.background = "black";
      aboutButtonOne.style.color = "white";



      // change desc contents
      buttonOneDesc.style.display = "none";
      buttonTwoDesc.style.display = "none";
      buttonThreeDesc.style.display = "contents"
      break;
    default:
      console.log(e.target)
      buttonOneDesc.style.display = "contents";
      buttonTwoDesc.style.display = "none";
      buttonThreeDesc.style.display = "none";
  }

}

aboutButtonOne.addEventListener('click', displayDesc)
aboutButtonTwo.addEventListener('click', displayDesc)
aboutButtonThree.addEventListener('click', displayDesc)




// mobile menu
const navBar = document.querySelector('.navbar-list');
const hamburgerMenu = document.querySelector('#mobile-menu');


const showNavMobile = () => {
  navBar.style.display = 'flex';
}

const showNavDesktop = () => {
  if (window.innerWidth <= 978) {
    return
  }
  navBar.style.display = 'flex';
}

const hideNavMobile = () => {
  if (window.innerWidth > 978) {
    navBar.style.display = 'flex';
    return
  } else {
    navBar.style.display = 'none';
  }
}


hamburgerMenu.addEventListener('click', showNavMobile);
hamburgerMenu.addEventListener('mouseover', showNavMobile);
hamburgerMenu.addEventListener('touch', showNavMobile);
navBar.addEventListener('mouseleave', hideNavMobile);
window.addEventListener('resize', showNavDesktop);
window.addEventListener('resize', hideNavMobile);
