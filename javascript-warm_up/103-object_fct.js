
const myObject = {
    type: 'object',
    value: 12
  };
  
  console.log(myObject);
  
  const incr = () => {
    this.value++;
  };
  
  myObject.incr = incr;
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  myObject.incr();
  console.log(myObject);
  
  
  