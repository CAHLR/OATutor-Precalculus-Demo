var hints = [{id: "Visualize11a-h1", type: "hint", dependencies: [], title: "Fraction Division", text: "To divide fractions, we multiply the first fraction by the reciprocal of the second."}, {id: "Visualize11a-h2", type: "hint", dependencies: ["Visualize11a-h1"], title: "Reciprocal", text: "The reciprocal of $$\\frac{a}{b}$$ is b/a."}, {id: "Visualize11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-27/14"], dependencies: ["Visualize11a-h2"], title: "Reciprocal of the Second Fraction", text: "What is the reciprocal of -14/27?"}, {id: "Visualize11a-h4", type: "hint", dependencies: ["Visualize11a-h3"], title: "Multiplying Fractions", text: "The next step is to multiply the first fraction by the reciprocal of the second."}, {id: "Visualize11a-h5", type: "hint", dependencies: ["Visualize11a-h4"], title: "Determining the Sign", text: "Since the signs are the same, the product is positive."}, {id: "Visualize11a-h6", type: "hint", dependencies: ["Visualize11a-h5"], title: "Multiplying Fractions", text: "To multiply fractions, we multiply the numerators and the denominators. So the numerator is $$\\left(7\\right) \\left(27\\right)$$ and the denominator is $$\\left(18\\right) \\left(14\\right)$$ The next step is to simplify the fraction if possible."}, {id: "Visualize11a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["Visualize11a-h6"], title: "Checking for Common Factors", text: "Do $$\\left(7\\right) \\left(27\\right)$$ and $$\\left(18\\right) \\left(14\\right)$$ have any common factors?", choices: ["Yes", "No"]}, {id: "Visualize11a-h8", type: "hint", dependencies: ["Visualize11a-h7"], title: "Common Factors", text: "We will rewrite $$\\left(7\\right) \\left(27\\right)$$ and $$\\left(18\\right) \\left(14\\right)$$ as the product of primes and divide out the common factors from there."}, {id: "Visualize11a-h9", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["3*3*3*7"], dependencies: ["Visualize11a-h8"], title: "Rewriting the Numerator", text: "What is $$\\left(7\\right) \\left(27\\right)$$ written as the product of primes?", choices: ["$$\\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right)$$", "$$\\\\left(7\\\\right) \\\\left(27\\\\right)$$", "$$\\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right)$$", "$$\\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right) \\\\left(7\\\\right)$$"]}, {id: "Visualize11a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["2*2*3*3*7"], dependencies: ["Visualize11a-h8"], title: "Rewriting the Denominator", text: "What is $$\\left(18\\right) \\left(14\\right)$$ written as the product of primes?", choices: ["$$\\\\left(2\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right)$$", "$$\\\\left(2\\\\right) \\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right)$$", "$$\\\\left(2\\\\right) \\\\left(2\\\\right) \\\\left(3\\\\right) \\\\left(3\\\\right) \\\\left(7\\\\right)$$", "$$\\\\left(2\\\\right) \\\\left(5\\\\right) \\\\left(5\\\\right) \\\\left(7\\\\right) \\\\left(7\\\\right)$$"]}, {id: "Visualize11a-h11", type: "hint", dependencies: ["Visualize11a-h9", "Visualize11a-h10"], title: "Dividing Common Factors", text: "We can now divide out the common factor $$\\left(3\\right) \\left(3\\right) \\left(7\\right)$$ from both the top and the bottom, which gives us the fraction $$\\frac{3}{2} \\left(2\\right)=\\frac{3}{4}$$"}, ]; export {hints};