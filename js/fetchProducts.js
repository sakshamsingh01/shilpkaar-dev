console.log("loaded");


let filter = (string) => {
  string = string.replace(/&slash/g, "/");
  string = string.replace(/&dot/g, ".");
  return string;
};



let fetchCat = async (key) => {
    let jsonData = await fetch("./js/p.json")
.then((res) => res.json())
.then((data) => {
console.log(data);
return data;});
 console.log(jsonData)
    document.getElementById("products-container").innerHTML = "";
     console.log(jsonData[key]);

     jsonData[key].forEach(product => {
         document.getElementById("products-container").innerHTML += `
    
        <div class="col-6 col-lg-3">
        <div class="card card-block" data-product="tp1">
          <div class="imgDiv" data-product="tp1">
            <img src=${filter(product["Feature Image"])} class="card-img-top" alt=${filter(product["Title"])} height="100%"
              id="product-img" data-product="tp1">
          </div>
          <div class="card-body d-flex justify-content-between flex-wrap" data-product="tp1">
            <h6 class="card-title" id="product-name" data-product="tp1">${filter(product["Title"])}</h5>
              <a class="badge rounded nav-link" href="#">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.2425 18.4664H29.7782C30.6176 18.4664 31.2771 17.7724 31.2771 16.9356C31.2771 16.0784 30.6176 15.4049 29.7782 15.4049H24.2425C23.4032 15.4049 22.7437 16.0784 22.7437 16.9356C22.7437 17.7724 23.4032 18.4664 24.2425 18.4664ZM36.3532 7.85499C37.5722 7.85499 38.3716 8.2836 39.171 9.22247C39.9703 10.1613 40.1102 11.5084 39.9304 12.731L38.0319 26.1201C37.6721 28.6938 35.5138 30.5899 32.9758 30.5899H11.1728C8.51485 30.5899 6.31656 28.5101 6.09673 25.8159L4.25817 3.56681L1.24052 3.03614C0.441141 2.89327 -0.118423 2.09727 0.0214676 1.28087C0.161359 0.44609 0.940751 -0.107026 1.76011 0.0174766L6.5264 0.750202C7.20587 0.874704 7.70548 1.44415 7.76543 2.13809L8.14514 6.70998C8.20509 7.36514 8.72469 7.85499 9.36419 7.85499H36.3532ZM10.8526 33.8158C9.17388 33.8158 7.81494 35.2037 7.81494 36.9182C7.81494 38.6122 9.17388 40.0001 10.8526 40.0001C12.5113 40.0001 13.8702 38.6122 13.8702 36.9182C13.8702 35.2037 12.5113 33.8158 10.8526 33.8158ZM33.3351 33.8158C31.6564 33.8158 30.2974 35.2037 30.2974 36.9182C30.2974 38.6122 31.6564 40.0001 33.3351 40.0001C34.9938 40.0001 36.3527 38.6122 36.3527 36.9182C36.3527 35.2037 34.9938 33.8158 33.3351 33.8158Z"
                    fill="white" />
                </svg> <span class="ms-2">₹</span><span id="price">${filter(product["MRP"])}</span>
              </a>
    
          </div>
        </div>
      </div>
    
        
        `;
    });


};

document.getElementById('Wall Hanging').addEventListener('click',()=>{fetchCat('Wall Hanging')});
document.getElementById('Cushion Cover').addEventListener('click',()=>{fetchCat('Cushion Cover')});
document.getElementById('Lamps').addEventListener('click',()=>{fetchCat('Lamps')});
document.getElementById('Footwear').addEventListener('click',()=>{fetchCat('Footwear')});
document.getElementById('Instrument').addEventListener('click',()=>{fetchCat('Instrument')});
document.getElementById('Saree').addEventListener('click',()=>{fetchCat('Saree')});
document.getElementById('Showpiece').addEventListener('click',()=>{fetchCat('Showpiece')});
document.getElementById('Shawls').addEventListener('click',()=>{fetchCat('Shawls')});
document.getElementById('Furniture').addEventListener('click',()=>{fetchCat('Furniture')});
document.getElementById('Mirrors').addEventListener('click',()=>{fetchCat('Mirrors')});

