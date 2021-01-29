var hints = [{id: "inverse16a-h1", type: "hint", dependencies: [], title: "Finding g(f(x))", text: "The first step is to find g(f(x))."}, {id: "inverse16a-h2", type: "hint", dependencies: ["inverse16a-h1"], title: "Calculating g(f(x))", text: "$$g f{\\left(x\\right)}=\\frac{1}{\\frac{1}{x+\\left(2\\right)}}-\\left(2\\right)$$"}, {id: "inverse16a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["inverse16a-h2"], title: "Verifying the Value of g(f(x))", text: "Does g(f(x))=x?", choices: ["Yes", "No"]}, {id: "inverse16a-h4", type: "hint", dependencies: ["inverse16a-h3"], title: "Interpreting the Meaning of g(f(x))", text: "If $$g f{\\left(x\\right)}=x$$ then $$g x=f^{-\\left(1\\right)} x$$ and f(x)=g**(-1)(x). If g(f(x)) is not equal to x, then these statements are false."}, ]; export {hints};