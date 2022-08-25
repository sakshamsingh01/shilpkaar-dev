console.log("loaded");
document.getElementById('login').style.display = 'block';
document.getElementById('signup').style.display = 'none';
let showloginPage = ()=> {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
let showsignupPage = ()=> {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';  
}
