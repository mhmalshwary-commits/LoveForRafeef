const envelope = document.getElementById("envelope");
const message = document.getElementById("message");

const text = `حا نكون دائماً سند لك
مثل الأب والأخ والزوج ❤️

سأضل بجانبك دائماً،
وسأستمر في حبك حتى مماتي. 🌹`;

let opened = false;

envelope.addEventListener("click", () => {

    if(opened) return;
    opened = true;

    envelope.classList.add("open");

    let i = 0;

    function type() {
        if(i < text.length){
            message.innerHTML += text.charAt(i);
            i++;
            setTimeout(type,40);
        }
    }

    type();

});
