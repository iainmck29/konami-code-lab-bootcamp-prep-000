const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];





function init() {
  let index = 0;

  const body = document.getElementById('body')
   
  body.addEventListener(codes, function(event) {
    alert('I was clicked!')
    })
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert('congrats');
      
      index = 0;
    }
  } else {
    index = 0;
  }
}
