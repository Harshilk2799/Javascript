// Window Height & Width Methods:
// 1. innerHeight
// 2. innerWidth
// 3. outerHeight
// 4. outerWidth

// console.log("Inner Height: ", window.innerHeight);
// console.log("Outer Height: ", window.outerHeight);

// console.log("Inner Width: ", window.innerWidth);
// console.log("Outer Width: ", window.outerWidth);

// open() and close() method

// window.open(url, name, specs)

let myWindow;

function openWindow() {
  myWindow = window.open(
    "https://claude.ai/chat/7f881de2-358c-4c8d-95bc-170a7657ad4d",
    "Claude",
    "width=500px, height=500px, left=300px, top=100px"
  );
}

function closeWindow() {
  myWindow.close();
}
