var hints = [{id: "add11a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: [], title: "Seeing if the Signs Are Different", text: "Are the signs of the two terms different?", choices: ["Yes", "No"]}, {id: "add11a-h2", type: "hint", dependencies: ["add11a-h1"], title: "First Step to Find the Value of the Expression", text: "Since 2 and 5 have the same sign, we add 2 to 5."}, {id: "add11a-h3", type: "hint", dependencies: ["add11a-h2"], title: "Sign of the Answer", text: "The answer will be positive because there are only positives."}, {id: "add11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["add11a-h3"], title: "Calculating the Value of the Expression", text: "What is 2+5?"}, ]; export {hints};