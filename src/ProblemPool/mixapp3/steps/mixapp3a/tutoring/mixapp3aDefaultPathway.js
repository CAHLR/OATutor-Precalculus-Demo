var hints = [{id: "mixapp3a-h1", type: "hint", dependencies: [], title: "Writing mathematical expressions", text: "The first step is to express the value of the total number of each type of coin in a mathematical expression."}, {id: "mixapp3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3*x-4"], dependencies: ["mixapp3a-h1"], title: "Assigning variables", text: "Let $$x=number$$ of 20-cent stamps. How can we write a mathematical expression for the number of 41-cent stamps in terms of x?"}, {id: "mixapp3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.2"], dependencies: ["mixapp3a-h2"], title: "Finding the Value of each coin", text: "What is 20 cents in dollars?"}, {id: "mixapp3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.41"], dependencies: ["mixapp3a-h3"], title: "Finding the Value of each coin", text: "What is 41 cents in dollars?"}, {id: "mixapp3a-h5", type: "hint", dependencies: ["mixapp3a-h4"], title: "Writing the mathematical equation", text: "The next step is to write the mathematical equation to solve for x"}, {id: "mixapp3a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.2*x"], dependencies: ["mixapp3a-h5"], title: "Expressing the total value of 20-cent coins", text: "What is the total value of x number of 21-cent coins? Express as a mathematical expression"}, {id: "mixapp3a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.41*(3*x-4)"], dependencies: ["mixapp3a-h6"], title: "Expressing the total value of 41-cent coins", text: "What is the total value of all the 41-cent coins? Express as a mathematical expression"}, {id: "mixapp3a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12.66"], dependencies: ["mixapp3a-h7"], title: "Total value", text: "What should the numbers in the previous two clues add up to?"}, ]; export {hints};