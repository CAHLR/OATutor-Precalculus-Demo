var hints = [{id: "probsolve26a-h1", type: "hint", dependencies: [], title: "Define variables", text: "Give the first unknown number a variable (like x) and set the second number interms of x"}, {id: "probsolve26a-h2", type: "hint", dependencies: ["probsolve26a-h1"], title: "Setting an equation", text: "Based on the question if x is the first number then $$\\left(2\\right) x+\\left(8\\right)$$ would be the second number. Now create an equation representing the sum of the two numbers which equals -4"}, {id: "probsolve26a-h3", type: "hint", dependencies: ["probsolve26a-h2"], title: "Seperating constants", text: "The equation equals $$x+\\left(2\\right) x+\\left(8\\right)=-\\left(4\\right)$$ Now we will seperate the constant numbers to one side. Remeber if you subtract from one side you are also subtracting from the other side"}, {id: "probsolve26a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12"], dependencies: ["probsolve26a-h3"], title: "Seperating constants", text: "what is -4-8"}, {id: "probsolve26a-h5", type: "hint", dependencies: ["probsolve26a-h4"], title: "Seperating variable", text: "The equation equals $$x+\\left(2\\right) x+\\left(8\\right)=-\\left(4\\right)$$ Now we will seperate the variable to one side. Remeber if you subtract from one side you are also subtracting from the other side"}, {id: "probsolve26a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x"], dependencies: ["probsolve26a-h5"], title: "Seperating variable", text: "what is $$\\left(2\\right) x+\\left(1\\right) x$$"}, {id: "probsolve26a-h7", type: "hint", dependencies: ["probsolve26a-h6"], title: "Find x", text: "Now that we have seperated x and constants your equations should be $$\\left(3\\right) x=-\\left(12\\right)$$ Now find what is the value of x by dividing both sides by 3"}, {id: "probsolve26a-h8", type: "hint", dependencies: ["probsolve26a-h7"], title: "Number 2", text: "Now that you have found the first number which is x, plug that number back into the equation for the second number to get the value for the second number"}, ]; export {hints};