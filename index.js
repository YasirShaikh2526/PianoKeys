// ---------------- AUDIO FILES ----------------
let aud = {
    A: new Audio("./one.mp3"),
    B: new Audio("./two.mp3"),
    C: new Audio("./three.mp3"),
    D: new Audio("./four.mp3"),
    E: new Audio("./five.mp3"),
    F: new Audio("./six.mp3"),
    G: new Audio("./seven.mp3"),
    H: new Audio("./eight.mp3"),
    I: new Audio("./nine.mp3"),
    J: new Audio("./ten.mp3"),

    K: new Audio("./eleven.mp3"),
    L: new Audio("./twelve.mp3"),
    M: new Audio("./thirteen.mp3"),
    N: new Audio("./fourteen.mp3"),
    O: new Audio("./fifteen.mp3"),
    P: new Audio("./sixteen.mp3"),
    Q: new Audio("./seventeen.mp3"),
    R: new Audio("./eighteen.mp3"),
    S: new Audio("./nineteen.mp3"),
    T: new Audio("./twenty.mp3"),

    U: new Audio("./twentyone.mp3"),
    V: new Audio("./twentytwo.mp3"),
    W: new Audio("./twentythree.mp3"),
    X: new Audio("./twentyfour.mp3"),
    Y: new Audio("./twentyfive.mp3"),
    Z: new Audio("./twentysix.mp3"),
};

// ---------------- MAP BUTTONS ----------------
let keys = {
    A: document.querySelector("#one"),
    B: document.querySelector("#two"),
    C: document.querySelector("#three"),
    D: document.querySelector("#four"),
    E: document.querySelector("#five"),
    F: document.querySelector("#six"),
    G: document.querySelector("#seven"),
    H: document.querySelector("#eight"),
    I: document.querySelector("#nine"),
    J: document.querySelector("#ten"),

    K: document.querySelector("#eleven"),
    L: document.querySelector("#twelve"),
    M: document.querySelector("#thirteen"),
    N: document.querySelector("#fourteen"),
    O: document.querySelector("#fifteen"),
    P: document.querySelector("#sixteen"),
    Q: document.querySelector("#seventeen"),
    R: document.querySelector("#eighteen"),
    S: document.querySelector("#nineteen"),
    T: document.querySelector("#twenty"),

    U: document.querySelector("#twentyone"),
    V: document.querySelector("#twentytwo"),
    W: document.querySelector("#twentythree"),
    X: document.querySelector("#twentyfour"),
    Y: document.querySelector("#twentyfive"),
    Z: document.querySelector("#twentysix"),
};

// ---------------- PLAY FUNCTION ----------------
function playSound(letter) {
    aud[letter].currentTime = 0;
    aud[letter].play();

    let btn = keys[letter];
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 150);
}

// ---------------- CLICK EVENTS ----------------
Object.keys(keys).forEach(letter => {
    keys[letter].addEventListener("click", function () {
        playSound(letter);
    });
});

// ---------------- KEYDOWN EVENTS ----------------
document.addEventListener("keydown", function (e) {
    let key = e.code.replace("Key", ""); // KeyA → A
    if (aud[key]) {
        playSound(key);
    }
});
