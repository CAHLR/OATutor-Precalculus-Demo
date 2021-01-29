var hints = [{id: "MoApp5a-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "The known quantities are 1, 3 and 113."}, {id: "MoApp5a-h2", type: "hint", dependencies: ["MoApp5a-h1"], title: "Determine unknown quantities", text: "The number of marbles Don has and Mark has are two unknown quantities that we need to find."}, {id: "MoApp5a-h3", type: "hint", dependencies: ["MoApp5a-h2"], title: "Assign a variable", text: "Because there are more than 1 unknown quantities, we should choose one of them, for example, the number of marbles Mark has, as x."}, {id: "MoApp5a-h4", type: "hint", dependencies: ["MoApp5a-h3"], title: "Write the other quantity", text: "After choosing x, we should write the number of marbles Don has in terms of x."}, {id: "MoApp5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x+1"], dependencies: ["MoApp5a-h4"], title: "Write the other quantity", text: "When given Don has 1 more than 3 times the number of marbles Mark has, how many does Don have to sell?"}, {id: "MoApp5a-h6", type: "hint", dependencies: ["MoApp5a-h5"], title: "Write an equation", text: "Then write an equation interpreting the words as mathematical operations."}, {id: "MoApp5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+3x+1=113"], dependencies: ["MoApp5a-h6"], title: "Translation to Math Operations", text: "What is the mathematical form of \"the total number of marbles is 113\"?"}, {id: "MoApp5a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["28"], dependencies: ["MoApp5a-h7"], title: "Simplify and Solve", text: "Solve the equation we write. What is x?"}, {id: "MoApp5a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["85"], dependencies: ["MoApp5a-h8"], title: "Calculate another quantity", text: "What is $$\\left(3\\right) x+\\left(1\\right)$$ when x=28?"}, {id: "MoApp5a-h10", type: "hint", dependencies: ["MoApp5a-h9"], title: "Explain the solution", text: "Don has to sell 85 marbles and Mark has to sell 28 marbles."}, ]; export {hints};