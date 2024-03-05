// to get the button elements
const buttonElements = document.querySelectorAll('button');

// adding click event to each button element to add styles
buttonElements.forEach(item => 
    item.addEventListener('click', (e) => {
    // removing styles from every element except current selected one
    buttonElements.forEach(item => item.parentElement.classList.toggle("hide"));
    e.target.parentElement.classList.toggle("hide");
    e.target.parentElement.classList.toggle("expand");

    if(e.target.parentElement.classList.contains("expand"))
        e.target.innerHTML = 'Close';
    else
        e.target.innerHTML = 'Learn More';
}));