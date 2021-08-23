var hints = [{id: "quad6a-h1", type: "hint", dependencies: [], title: "Discriminant", text: "To find the discriminant, of a quadratic equation, we calculate $$b^2-\\left(4\\right) ac$$. If that value is greater than 0 it has 2 real solutions, if it is smaller than 0 it has no real solutions, and if it is equal to 0 it has 1 real solution.", variabilization: {}}, {id: "quad6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["17"], dependencies: ["quad6a-h1"], title: "Discriminant", text: "In this case, what is our discriminant?", variabilization: {}}, {id: "quad6a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{\\left(-\\left(1\\right)+\\sqrt{17}\\right)}{2}$$, $$\\frac{\\left(-\\left(1\\right)-\\sqrt{17}\\right)}{2}$$"], dependencies: ["quad6a-h2"], title: "Discriminant", text: "Since this value is greater than 0, this equation has 2 solutions. Using the rest of the formula (-b+sqrt(discriminant)/2a and -b-sqrt(discriminant)/2a) what are our two solutions?", choices: ["$$\\frac{\\left(-\\left(1\\right)+\\sqrt{17}\\right)}{2}$$, $$\\frac{\\left(-\\left(1\\right)-\\sqrt{17}\\right)}{2}$$", "$$\\frac{\\left(-\\left(1\\right)+\\sqrt{17}\\right)}{2}$$, $$\\frac{\\left(-\\left(1\\right)+\\sqrt{17}\\right)}{2}$$", "$$\\frac{\\left(-\\left(1\\right)-\\sqrt{17}\\right)}{2}$$, $$\\frac{\\left(-\\left(1\\right)-\\sqrt{17}\\right)}{2}$$"], variabilization: {}}, ]; export {hints};