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
},4000); // every 4 seconds