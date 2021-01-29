var hints = [{id: "quad35a-h1", type: "hint", dependencies: [], title: "Factor", text: "Factor out the common factor in both"}, {id: "quad35a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["quad35a-h1"], title: "Common Factor", text: "What is the common factor of the two terms?"}, {id: "quad35a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["x(7x+3)=0"], dependencies: ["quad35a-h2"], title: "Factor", text: "What do we get after the factoring?", choices: ["$$x \\\\left(\\\\left(7\\\\right) x^2+\\\\left(3\\\\right)\\\\right)=0$$", "$$x \\\\left(\\\\left(7\\\\right) x-\\\\left(3\\\\right)\\\\right)=0$$", "$$x \\\\left(\\\\left(7\\\\right) x+\\\\left(3\\\\right)\\\\right)=0$$"]}, {id: "quad35a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0, -3/7"], dependencies: ["quad35a-h3"], title: "Factors", text: "Which factors will make the left side zero (x=0 & 7x - 3=0)?"}, ]; export {hints};