var hints = [{id: "DivMul4a-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality."}, {id: "DivMul4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y/(-7)*(-7)=(-14)*(-7)"], dependencies: ["DivMul4a-h1"], title: "Multiplication", text: "Multiple -7 from each side."}, {id: "DivMul4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["98"], dependencies: ["DivMul4a-h2"], title: "Simplification", text: "What do we get for y after simplifying the equation?"}, {id: "DivMul4a-h4", type: "hint", dependencies: ["DivMul4a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul4a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["DivMul4a-h4"], title: "Verification", text: "Check whether $$\\frac{98}{-\\left(7\\right)}$$ equals -2.", choices: ["TRUE", "FALSE"]}, ]; export {hints};