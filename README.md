1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--> getElementById: Selects only one element with the matching unique id
    getElementsByClassName: Selects all elements with the same class name
   querySelector: can select any element/tag within another element/tag with the first matching name

2. How do you create and insert a new element into the DOM?
--> createElement + appendChild

3. What is Event Bubbling and how does it work?
--> When an event is triggered on an element, the browser first detects the event on that element. After handling the event on the target element, the event propagates to the parent node, then its parent, and continues until it reaches the top of the DOM tree

4. What is Event Delegation in JavaScript? Why is it useful?
--> Event delegation means attaching a single event listener to a parent element instead of multiple child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
--> preventDefault prevents a submit button from reloading a page and stopPropagation stops event propagation of a child element up to its parent element
