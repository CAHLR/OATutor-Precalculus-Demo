var hints = [{id: "Multiply27a-h1", type: "hint", dependencies: [], title: "Parentheses", text: "We first need to subtract in parentheses."}, {id: "Multiply27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["Multiply27a-h1"], title: "Subtract", text: "What do we get for 8-11?"}, {id: "Multiply27a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["Multiply27a-h2"], title: "Subtract", text: "What do we get for 9-12?"}, {id: "Multiply27a-h4", type: "hint", dependencies: ["Multiply27a-h3"], title: "Multiply", text: "We then need to multiply the two differences."}, {id: "Multiply27a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["Multiply27a-h4"], title: "Multiply", text: "What do we get for -3*(-3)?"}, ]; export {hints};