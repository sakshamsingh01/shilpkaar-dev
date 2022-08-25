// fetch elements
const cardNodes = document.querySelectorAll(".card-block");
const exoticLastDiv = document.getElementById('last-div-exotic');
const topRatedLastDiv = document.getElementById('last-div-tr')
cardNodes.forEach(item=>{
    item.addEventListener('click',opendetailpage);
})
function opendetailpage(e){
    const productId = e.target.dataset.product;
    window.location.href = `${productId}.html`;
};
exoticLastDiv.addEventListener('click',()=>{
    window.location.href = "allexotic.html";
});
topRatedLastDiv.addEventListener('click',()=>{
    window.location.href = "alltoprated.html";
});
featuredLastDiv.
peopleLastDiv.addEventListener('click',()=>{
    window.location.href = "allcourses.html";
    console.log('hi')
   })
