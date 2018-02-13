//Enumerate Object Properties

module.exports = {
  countProperties: (object) => {
    counter = 0;
  	for(const property in object) {
  	  counter += 1;
    }
    return counter;
  },
  findProperty: (object) => {
  	prop = "Not found";
    for(const property in object) {
  	  prop = object[property];
  	}
  	return prop;
  },
  findPropertyName: (object, eventName) => {
  	propertyName = "Not found";
    for(const property in object) {
  	  if(property === eventName) {
  	    propertyName = object[property];
  	  }
  	}
  	return propertyName;
  }
}
