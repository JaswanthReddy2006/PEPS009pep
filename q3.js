function once(func){
  let check = true;

  return function(){
    if(check){
      check = false;
      return func();
    }
  };
}
function greet() {
      console.log("Hello");
};
const greetOnce = once(greet);
greetOnce(); // Hello
greetOnce(); // no output
greetOnce(); 

