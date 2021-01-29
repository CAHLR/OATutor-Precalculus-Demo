var hints = [{id: "VarCon29a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon29a-h2", type: "hint", dependencies: ["VarCon29a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon29a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y+11=8"], dependencies: ["VarCon29a-h2"], title: "Subtraction", text: "Subtract $$\\frac{1}{6} y$$ from each side."}, {id: "VarCon29a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-3"], dependencies: ["VarCon29a-h3"], title: "Subtraction", text: "Subtract 11 from each side."}, {id: "VarCon29a-h5", type: "hint", dependencies: ["VarCon29a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon29a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["VarCon29a-h5"], title: "Verification", text: "Check whether $$\\frac{7}{6} -\\left(3\\right)+\\left(11\\right)$$ equals $$\\frac{1}{6} -\\left(3\\right)+\\left(8\\right)$$", choices: ["TRUE", "FALSE"]}, ]; export {hints};