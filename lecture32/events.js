// Syntax
// <event-target>.addEventListener(<event-type>, <function => Action>)

// What are Events?
// => Events are occurrences that happen in the browser environment triggered by user actions.
// => An event is a signal that something has happened.
// => It could be a user clicking a button, hovering over an element, pressing a key.

// Types of Events
// => JavaScript supports a wide range of events, categorized into different types such as
// Mouse Events, Keyboard Events, Form Events, Document/Window Events, and Custom Events.

// 1. Mouse Events
// => click: The event occurs when the user clicks on an element.
// => mouseover: The event occurs when the mouse pointer is moved onto an element.
// => mouseout: The event occurs when the mouse pointer is moved out of an element.
// => mousemove: The event occurs when the mouse pointer is moving while it is over an element.

// 2. Keyboard Events
// => keydown: The event occurs when the user is pressing a key down.
// => keyup: The event occurs when the user releases a key.
// => keypress: The event occurs when a key is pressed down and then released.

// 3. Form Events
// => submit: The event occurs when a form is submitted.
// => change: The event occurs when the value of an element changes (for input, textarea, and select elements).
// => input: The event occurs when an input element gets user input.

// 4. Window Events
// => load: The event occurs when the browser has finished loading all the resources of the document.
// => resize: The event occurs when the browser window changes size.
// => scroll: The event occurs when the document view is scrolled.

// 5. Media Events
// => play: The event occurs when the audio/video has been started or is no longer paused.
// => pause: The event occurs when the audio/video has been paused.

// 6. Drag and Drop Events
// => dragstart: The event occurs when the user starts to drag an element.
// => dragend: The event occurs when the user has finished dragging the element.

// What are 'Event Listeners'
// => In JavaScript, an event listener is a function that waits for a specific event to occur and then executes a callback function in response.
// => Event listeners are commonly used to respond to user interactions such as clicks, mouse movements, keyboard inputs, or changes in the state of an HTML element.
// => When the specified event occurs, the associated event listener is triggered, allowing developers to execute a callback function to perform certain actions in response to that event.

// 1. addEventListener()
// 2. removeEventListener()

let fpara = document.getElementById("fpara");

function changeText() {
  fpara.textContent = "Hello, My name is Harshil";
}

fpara.addEventListener("click", changeText);
// fpara.removeEventListener("click", changeText);

// Phases of Events in JavaScript
// 1. Capturing Phase
// => In this phase the event goes through the HTML DOM and searches for the target element.

// 2. Target Phase
// => This is the phase where the event reaches the target element—the element on which the event was originally triggered.

// 3. Bubbling Phase
// => Following the target phase, the event bubbles up from the target element through its ancestors, propagating outward.

// Event Object
// event.preventDefault(): Prevents the default action of the event
