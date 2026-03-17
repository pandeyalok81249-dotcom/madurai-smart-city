let user=localStorage.getItem("username");
if(!user){window.location="login.html";}
document.getElementById("welcome").innerHTML="Welcome "+user;

function logout(){localStorage.clear();window.location="login.html";}

function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function submitComplaint(){
let loc=document.getElementById("location").value;
let desc=document.getElementById("desc").value;
let cat=document.getElementById("category").value;
if(loc==""||desc==""){alert("Enter location and description"); return;}
document.getElementById("complaintMsg").innerHTML=`✅ Complaint submitted: ${cat} at ${loc}`;
}

function route(){
let f=document.getElementById("from").value;
let t=document.getElementById("to").value;
if(f==""||t==""){alert("Enter start and destination"); return;}
document.getElementById("routeResult").innerHTML=`Suggested route: Bus 21 → Metro Line A from ${f} to ${t}`;
}

// Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index){
slides.forEach((s,i)=>{
s.classList.remove('active');
if(i===index) s.classList.add('active');
});
}

// Next / Previous
function nextSlide(){
slideIndex = (slideIndex + 1) % slides.length;
showSlide(slideIndex);
}

function prevSlide(){
slideIndex = (slideIndex - 1 + slides.length) % slides.length;
showSlide(slideIndex);
}

// Auto Slide
setInterval(()=>{
nextSlide();
},4000);

// PROFILE FUNCTIONS
function toggleProfile(){
let box = document.getElementById("profileBox");
box.style.display = box.style.display === "block" ? "none" : "block";
}

function saveProfile(){

let name = document.getElementById("newName").value;
let phone = document.getElementById("newPhone").value;
let email = document.getElementById("newEmail").value;

if(name) localStorage.setItem("username", name);
if(phone) localStorage.setItem("userphone", phone);
if(email) localStorage.setItem("useremail", email);

loadProfile();
alert("Saved!");
}

function setAvatar(src){
localStorage.setItem("avatar", src);
document.getElementById("profileImg").src = src;
}

function loadProfile(){

document.getElementById("pname").innerText = localStorage.getItem("username") || "Not set";
document.getElementById("pphone").innerText = localStorage.getItem("userphone") || "Not set";
document.getElementById("pemail").innerText = localStorage.getItem("useremail") || "Not set";

let avatar = localStorage.getItem("avatar");
document.getElementById("profileImg").src = avatar || "https://api.dicebear.com/7.x/adventurer/svg?seed=default";

}

// 🌙 DARK MODE FUNCTION
function toggleDarkMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("mode","dark");
}else{
localStorage.setItem("mode","light");
}

}

// ✅ FIXED WINDOW ONLOAD (MERGED BOTH)
window.onload = function(){

// load profile
loadProfile();

// load dark mode
if(localStorage.getItem("mode") === "dark"){
document.body.classList.add("dark");
}

};
