var hints = [{id: "GenStr9a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr9a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7n-29=-15"], dependencies: ["GenStr9a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr9a-h3", type: "hint", dependencies: ["GenStr9a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation."}, {id: "GenStr9a-h4", type: "hint", dependencies: ["GenStr9a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr9a-h5", type: "hint", dependencies: ["GenStr9a-h4"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7n=14"], dependencies: ["GenStr9a-h5"], title: "Addition", text: "Add 29 to each side of the equation."}, {id: "GenStr9a-h7", type: "hint", dependencies: ["GenStr9a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr9a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["n=2"], dependencies: ["GenStr9a-h7"], title: "Division", text: "Divide 7 from each side."}, {id: "GenStr9a-h9", type: "hint", dependencies: ["GenStr9a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr9a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["GenStr9a-h9"], title: "Verification", text: "Check whether $$\\left(7\\right) \\left(\\left(2\\right)-\\left(3\\right)\\right)-\\left(8\\right)$$ equals -15.", choices: ["TRUE", "FALSE"]}, ]; export {hints};