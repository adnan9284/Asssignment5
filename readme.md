1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
the differences are given below:
    getElementById():
        1.Select an element with an id.
        2.Returns an array like single element object.
        3.It can not go through loop.
        
    getElementsByClassName():
        1.Select elements which contains same class name.
        2.Returns an array like object HTML Collection;
        3.It can go through loop.
    
    querySelector():
        1.It selects the first element which contains the CSS selector.
        2.It needs CSS selector to select.
        3.Returns a single element object.
        4.It can not go through loop.

    querySelectorAll:
        1.Selects all elements which have same class name.
        2.CSS selector is used.
        3.Returns a Nodelist.
        4.It can go through loop.

2. How do you **create and insert a new element into the DOM**?
        element is created by createElement().And inserted by appendChild() method.
        Ex.  div.appendChild(document.createElement('p'));

3. What is **Event Bubbling** and how does it work?
        Event bubbling is a mechanism in the DOM event where an event starts at the deepest target element and then bubbles up to its ancestors.When an event is fired on the child it bubbles up to it's parent then again it bubbles up to it's parent(grandparent) then it will be bubbled to document and then to window.

4. What is **Event Delegation** in JavaScript? Why is it useful?
        Event delegation is a technique to add an event listener to the parent element instead of adding to child element.
        It is useful for:
        1.Increase the performance.
        2.Reduce the complexity.
        3.Saves memory.
        4.Easier to manage.
        
5. What is the difference between **preventDefault() and stopPropagation()** methods?
        event.preventDefault():
        1.Prevents the browser's default action for that event.
        2.It does NOT stop the event from bubbling.
        event.stopPropagation():
        1.Stops the event from bubbling any further in the DOM tree.
        2.It does not stop the default browser behavior.
