const featureNavbarItem = document.querySelector("#first-dropdown");
const featureDropdown = document.querySelector("#first-dropdown-content");
const featureArrow = document.querySelector("#first-arrow")
const companyNavbarItem = document.querySelector("#second-dropdown");
const companyDropdown = document.querySelector("#second-dropdown-content");
const companyArrow = document.querySelector("#second-arrow")

let isHoveringOverFeature = false;
let isHoveringOverCompany = false;

featureNavbarItem.addEventListener('mouseenter', () => {
  isHoveringOverFeature = true;
  featureDropdown.classList.add('show-dropdown')
  featureArrow.setAttribute('src','./images/icon-arrow-up.svg')
  featureDropdown.style.top = '40px'
  let interval = setInterval(() => {
    if (isHoveringOverFeature) { return; }
    else {
      clearInterval(interval);
      featureDropdown.classList.remove('show-dropdown')
      featureArrow.setAttribute('src','./images/icon-arrow-down.svg')
    }
  }, 200)
})

featureNavbarItem.addEventListener('mouseleave', ()=>{
  isHoveringOverFeature = false;
})

companyNavbarItem.addEventListener('mouseenter', () => {
  isHoveringOverCompany = true;
  companyDropdown.classList.add('show-dropdown')
  companyArrow.setAttribute('src','./images/icon-arrow-up.svg')
  let interval = setInterval(() => {
    if (isHoveringOverCompany) { return; }
    else {
      clearInterval(interval);
      companyDropdown.classList.remove('show-dropdown')
      companyArrow.setAttribute('src','./images/icon-arrow-down.svg')
    }
  }, 200)
})

companyNavbarItem.addEventListener('mouseleave', ()=>{
  isHoveringOverCompany = false;
})
