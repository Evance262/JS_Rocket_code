const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
    const name = prompt('Which shuttle do you want to launch?');
    alert(`Launching shuttle ${name}, in 3, 2, 1, 0..`);
    headingA.textContent = `${name} Dispatch!`;
}
