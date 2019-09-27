function greeting() {
    const msg1 = "Hi, this is me.";
    const msg2 = "I'm glad you are here.";
    const greetingMessageElement = document.getElementById("greeting-message");
    let counter = 0;
    let msg = msg1;
    setInterval(() => {
        if (msg === msg1 && counter === msg1.length + 1) {
            counter = 0;
            msg = msg2;
        } else if (msg === msg2 && counter === msg2.length + 1) {
            counter = 0;
            msg = msg1;
        }
        greetingMessageElement.innerHTML = msg.substr(0, counter++);
    }, 150);
}
