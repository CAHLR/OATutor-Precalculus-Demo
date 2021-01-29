var hints = [{id: "GenStr24a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr24a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6m-18=30m+6"], dependencies: ["GenStr24a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr24a-h3", type: "hint", dependencies: ["GenStr24a-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation."}, {id: "GenStr24a-h4", type: "hint", dependencies: ["GenStr24a-h3"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "GenStr24a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-18=24m+6"], dependencies: ["GenStr24a-h4"], title: "Subtraction", text: "Subtract 6m from each side."}, {id: "GenStr24a-h6", type: "hint", dependencies: ["GenStr24a-h5"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr24a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-24=24m"], dependencies: ["GenStr24a-h6"], title: "Subtraction", text: "Subtract 6 from each side."}, {id: "GenStr24a-h8", type: "hint", dependencies: ["GenStr24a-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr24a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m=-1"], dependencies: ["GenStr24a-h8"], title: "Division", text: "Divide 24 from each side."}, {id: "GenStr24a-h10", type: "hint", dependencies: ["GenStr24a-h9"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr24a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["GenStr24a-h10"], title: "Verification", text: "Check whether $$\\left(0.15\\right) \\left(\\left(40\\right) -\\left(1\\right)-\\left(120\\right)\\right)$$ equals 0.5*(60*(-1)+12).", choices: ["TRUE", "FALSE"]}, ]; export {hints};