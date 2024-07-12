const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};


// BUGGY CODE
// .................................................................

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);

// .................................................................

// Debugging: Discovering the Nature of the Lost Context Bug

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   console.log("Debug Before forEach: " + this);
//   this.signatories.forEach(function (signatory) {
//     console.log("Debug Inside: " + this);
//     // const message = `${this.closing[signatory]}, ${signatory}`
//     // console.log(message)
//   });
// };

// printCard.call(messageConfig);

// .......................................................................
// Solution 1: Use a thisArg to avoid the lost context bug


// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   }, this);
// };

// printCard.call(messageConfig);

// ........................................................................
// Solution 2: Use a Closure to Regain Access to the Lost Context

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContext = this;

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);

// ....................................................................
// Solution 3: Use an Arrow Function Expression to Create a Function Without Its Own Context

const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
    // Wow! Elegant! And notice the arrow function's `this` is the same `this`
    // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard.call(messageConfig);