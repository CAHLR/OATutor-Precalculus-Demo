var hints = [{id: "LinEqua12a-h1", type: "hint", dependencies: [], title: "Excluded values", text: "The excluded values are those making a denominator equal to zero."}, {id: "LinEqua12a-h2", type: "hint", dependencies: ["LinEqua12a-h1"], title: "Denominator", text: "The denominators are $$\\left(2\\right) x+\\left(1\\right)$$ and $$\\left(3\\right) x+\\left(1\\right)$$"}, {id: "LinEqua12a-h3", type: "hint", dependencies: ["LinEqua12a-h2"], title: "Excluded values", text: "The excluded values are $$\\frac{-\\left(1\\right)}{2}$$ and $$\\frac{-\\left(1\\right)}{3}$$"}, {id: "LinEqua12a-h4", type: "hint", dependencies: ["LinEqua12a-h3"], title: "Factoring the denominator", text: "The two denominators in factored form are $$\\left(2\\right) x+\\left(1\\right)$$ and $$\\left(3\\right) x+\\left(1\\right)$$"}, {id: "LinEqua12a-h5", type: "hint", dependencies: ["LinEqua12a-h4"], title: "Find LCD", text: "The LCD is the smallest expression that is divisible by each one of the denominators."}, {id: "LinEqua12a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(2x+1)(3x+1)"], dependencies: ["LinEqua12a-h5"], title: "LCD", text: "What is the LCD of this equation?"}, {id: "LinEqua12a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9x-3=8x+4"], dependencies: ["LinEqua12a-h6"], title: "Eliminating", text: "Simplify (2x+1)(3x+1)(-3/(2x+1))=(2x+1)(3x+1)(4/(3x+1))."}, {id: "LinEqua12a-h8", type: "hint", dependencies: ["LinEqua12a-h7"], title: "Solve equation", text: "Then we should solve the linear equation obtained."}, {id: "LinEqua12a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7/17"], dependencies: ["LinEqua12a-h8"], title: "Linear equation", text: "Solve the equation $$-\\left(9\\right) x-\\left(3\\right)=\\left(8\\right) x+\\left(4\\right)$$ What is x?"}, ]; export {hints};