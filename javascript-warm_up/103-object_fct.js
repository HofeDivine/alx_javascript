
const myObject = {
    type: 'object',
    value: 12,
    incr: function() {
      this.value++;
    }
  };
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  console.log(myObject); 
  
  