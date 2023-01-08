//elements
const portfolioItems = document.getElementsByClassName("portfolio-item-wrapper");


//portfolio interaction animations
var projectHover = function() {
    this.classList.toggle("portfolio-text-reveal");
    this.querySelector(".portfolio-img-background").classList.toggle("portfolio-img-reveal");
};
for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('mouseenter', projectHover);
    portfolioItems[i].addEventListener('mouseleave', projectHover)
}


