  const text = document.getElementById('text');
  const c = document.getElementById('char-count');
  const bound= 100;
  text.addEventListener('input', () => {
    const length = text.value.length;
    c.textContent =length+"/"+bound;
    if (length > bound) {
      c.style.color = 'red';
    
    } 
    else {
      c.style.color = 'black';
    }
    
  }
);