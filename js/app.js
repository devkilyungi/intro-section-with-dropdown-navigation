const featureNavbarItem = document.querySelector("#first-dropdown");
const featureDropdown = document.querySelector("#first-dropdown-content");
const companyNavbarItem = document.querySelector("#second-dropdown");
const companyDropdown = document.querySelector("#second-dropdown-content");

let isHoveringOverFeature = false;
let isHoveringOverCompany = false;

featureNavbarItem.addEventListener('mouseenter', () => {
  isHoveringOverFeature = true;
  featureDropdown.classList.add('show-dropdown')
  featureDropdown.style.top = '40px'
  let interval = setInterval(() => {
    if (isHoveringOverFeature) { return; }
    else {
      clearInterval(interval);
      featureDropdown.classList.remove('show-dropdown')
    }
  }, 250)
})

featureNavbarItem.addEventListener('mouseleave', ()=>{
  isHoveringOverFeature = false;
})

companyNavbarItem.addEventListener('mouseenter', () => {
  isHoveringOverCompany = true;
  companyDropdown.classList.add('show-dropdown')
  let interval = setInterval(() => {
    if (isHoveringOverCompany) { return; }
    else {
      clearInterval(interval);
      companyDropdown.classList.remove('show-dropdown')
    }
  }, 250)
})

companyNavbarItem.addEventListener('mouseleave', ()=>{
  isHoveringOverCompany = false;
})
