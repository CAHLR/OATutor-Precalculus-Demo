var hints = [{id: "domain31a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A rational function is undefined when the denominator is equal to zero. So, let's start by setting the denominator equal to zero. Then we know every value other than that is a solution."}, {id: "domain31a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["x=-2,3"], dependencies: ["domain31a-h1"], title: "Solving For the Domain", text: "What is x for x**2-x-6=0?", choices: ["$$x=13$$", "$$x=-\\\\left(23\\\\right)$$", "$$x=-\\\\left(32\\\\right)$$", "$$x=-\\\\left(1\\\\right)-\\\\left(3\\\\right)$$"], subHints: [{id: "domain31a-h2-s1", type: "hint", dependencies: [], title: "Solving For the Domain", text: "For $$x^2-x-\\left(6\\right)=0$$ factor the equation to get (x-3)(x+2). Set these two expressions equal to zero to get that $$x=3$$ or $$x=-\\left(2\\right)$$"}]}, {id: "domain31a-h3", type: "hint", dependencies: ["domain31a-h2"], title: "Answer", text: "So, the function is defined for every value other than -2 and 3.The domain of the function is $$-\\infty-\\left(2\\right) \\cup (-2,3) \\cup \\left(3\\right) \\infty$$ with the circle brackets denoting the fact that -2 and 3 are not valid solutions, and the U showing that values within the intervals are solutions."}, ]; export {hints};