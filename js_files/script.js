//portfolio image animations
const portfolioItems = document.getElementsByClassName("portfolio-items-wrapper");
const portfolioImage = document.getElementsByClassName("portfolio-img-background");
portfolioItems[0].addEventListener('mouseenter', function(e) {
    if (e.target.getElementsByClassName("portfolio-item-wrapper")) {
        e.target.classList.toggle("hover");
        
    }
})

