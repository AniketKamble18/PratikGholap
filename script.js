const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const lightbox=document.querySelector(".lightbox");
const lightboxImg=lightbox.querySelector("img");
document.querySelectorAll(".gallery-item").forEach(item=>{
  item.addEventListener("click",()=>{
    lightboxImg.src=item.dataset.img;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});

document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
