function Assert(subject, message, testName, result) {
  this.subject = subject;
  this.message = message;
  this.testName = testName;
  this.result = result;
}

Assert.prototype.isTrue = function () {
  if (this.subject !== true) {
    throw new Error(this.testName + " failed! " + this.message);
  } else {
    console.log(this.testName + " passed!");
  }
};

Assert.prototype.isEqual = function () {
  if (this.subject !== this.result) {
    throw new Error(this.testName + " failed! " + this.message);
  } else {
    console.log(this.testName + " passed!");
  }
};

Assert.prototype.isDefined = function () {
  if (typeof this.subject === undefined) {
    throw new Error(this.testName + " failed! " + this.message);
  } else {
    console.log(this.testName + " passed!");
  }
};


Assert.prototype.isTypeOf = function (object) {
  if (!(this.subject instanceof object)) {
    throw new Error(this.testName + " failed! " + this.message);
  } else {
    console.log(this.testName + " passed!");
  }
};
