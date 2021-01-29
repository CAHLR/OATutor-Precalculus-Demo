var hints = [{id: "quad27a-h1", type: "hint", dependencies: [], title: "Factoring", text: "Look for two numbers whose product equals 15 and whose sum equals 15."}, {id: "quad27a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2020-03-05 00:00:00"], dependencies: ["quad27a-h1"], title: "Factoring", text: "Look at the possible factors of 15. Which pair of factors is equal 8?"}, {id: "quad27a-h3", type: "hint", dependencies: ["quad27a-h2"], title: "Factoring", text: "The factors will be $$\\left(x+\\left(5\\right)\\right) \\left(x+\\left(3\\right)\\right)=0$$ Solve the equation."}, {id: "quad27a-h4", type: "hint", dependencies: ["quad27a-h3"], title: "Zero-Product Property", text: "Use the zero-product property. Set each factor equal to zero and solve."}, {id: "quad27a-h5", type: "hint", dependencies: ["quad27a-h4"], title: "Zero-Product Property", text: "Solve $$x+\\left(5\\right)=0$$"}, {id: "quad27a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["quad27a-h5"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad27a-h7", type: "hint", dependencies: ["quad27a-h4"], title: "Zero-Product Property", text: "Solve $$x+\\left(3\\right)=0$$"}, {id: "quad27a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["quad27a-h7"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad27a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3, -5"], dependencies: ["quad27a-h6", "quad27a-h8"], title: "X-Intercepts", text: "What are the solutions?"}, ]; export {hints};