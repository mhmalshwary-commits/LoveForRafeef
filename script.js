// إنشاء الورود المتساقطة
for (let i = 0; i < 40; i++) {
    let rose = document.createElement("div");

    rose.className = "rose";
    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = (5 + Math.random() * 5) + "s";
    rose.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(rose);
}

// قلوب عند لمس الشاشة
document.addEventListener("click", function(e){

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "30px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 2s ease";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-150px) scale(2)";
        heart.style.opacity="0";
    },50);

    setTimeout(()=>{
        heart.remove();
    },2000);

});
