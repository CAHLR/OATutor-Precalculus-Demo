var hints = [{id: "sys3b-h1", type: "hint", dependencies: [], title: "Substitute", text: "We substitue $$x=1$$ and $$y=-2$$ into both equations.", variabilization: {}}, {id: "sys3b-h2", type: "hint", dependencies: ["sys3b-h1"], title: "Substitute into First Equation", text: "$$\\left(7\\right) x-\\left(4\\right) y=-1$$ \\n $$\\left(7\\right) \\left(1\\right)-\\left(4\\right) -\\left(2\\right)=-1$$ \\n $$15=-1$$", variabilization: {}}, {id: "sys3b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["FALSE"], dependencies: ["sys3b-h2"], title: "Substitute into First Equation", text: "Is the equation above true?", choices: ["True", "False"], variabilization: {}}, {id: "sys3b-h4", type: "hint", dependencies: ["sys3b-h3"], title: "Solution to First Equation", text: "Therefore, (1,-2) does not satisfies the first equation.", variabilization: {}}, {id: "sys3b-h5", type: "hint", dependencies: ["sys3b-h4"], title: "Solutions of a System of Equations", text: "(1,-2) does not make both equations true. (1,-2) is not a solution.", variabilization: {}}, ]; export {hints};