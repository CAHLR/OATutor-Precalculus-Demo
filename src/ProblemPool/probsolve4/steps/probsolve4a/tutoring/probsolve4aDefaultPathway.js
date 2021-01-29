var hints = [{id: "probsolve4a-h1", type: "hint", dependencies: [], title: "Set of the math equation", text: "The first step is to express the question as a mathematical expression."}, {id: "probsolve4a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["n,n+1,n+2"], dependencies: ["probsolve4a-h1"], title: "Consecutive numbers", text: "The problem states that the integers are consecutive. How can we express that condition?", choices: ["$$nn+\\\\left(1\\\\right) n+\\\\left(2\\\\right)$$", "$$nn+\\\\left(3\\\\right) n+\\\\left(5\\\\right)$$", "$$nn+\\\\left(2\\\\right) n+\\\\left(4\\\\right)$$"]}, {id: "probsolve4a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-96"], dependencies: ["probsolve4a-h2"], title: "Total sum", text: "What should the numbers add up to?"}, {id: "probsolve4a-h4", type: "hint", dependencies: ["probsolve4a-h3"], title: "The next step is to solve the math equation", text: "nan"}, ]; export {hints};