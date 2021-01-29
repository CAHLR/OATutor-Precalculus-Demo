var hints = [{id: "uni4a-h1", type: "hint", dependencies: [], title: "Visualize", text: "Draw a diagram representing the situation.\n##figure1.gif##"}, {id: "uni4a-h2", type: "hint", dependencies: ["uni4a-h1"], title: "Identify", text: "Identify what you are solving for."}, {id: "uni4a-h3", type: "hint", dependencies: ["uni4a-h2"], title: "What Are You Solving For", text: "You are solving for the parents' driving speed."}, {id: "uni4a-h4", type: "hint", dependencies: ["uni4a-h3"], title: "Make a Variable", text: "Create a variable to represent the speed of Christopher's parents. Let's call the this speed x. Since Christopher's average speed is 10 mph faster than his parents' average speed, Christopher's average speed is $$x+\\left(10\\right)$$"}, {id: "uni4a-h5", type: "hint", dependencies: ["uni4a-h4"], title: "Translate to Equation", text: "Translate the situation into an equation using the variable. Remember the distance Christopher travelled plus the distance his parents travel must add up to 115 miles, and distance equals the product of speed and time."}, {id: "uni4a-h6", type: "hint", dependencies: ["uni4a-h5"], title: "The Equation", text: "The translated equation is $$\\left(1.5\\right) \\left(x+\\left(10\\right)\\right)+\\left(1\\right) x=115$$"}, {id: "uni4a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40"], dependencies: ["uni4a-h6"], title: "Solving the Equation", text: "After solving the equation, what do you get for x?", subHints: [{id: "uni4a-h7-s1", type: "hint", dependencies: [], title: "Solving the Equation", text: "To solve the equation $$\\left(1.5\\right) \\left(x+\\left(10\\right)\\right)+\\left(1\\right) x=115$$ we follow these steps: 4x=5x-60-->60=5x-4x-->x=60."}]}, ]; export {hints};