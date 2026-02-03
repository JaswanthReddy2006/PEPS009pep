  const btn = document.getElementById('btn');
  const ds= document.getElementById('count');
  btn.addEventListener('click',counter());
  function counter() {
    let numb = 0;
    let lock = true;

    return dedlock
    function dedlock(){
      if (lock) {
        numb++;
        ds.textContent = numb;
        lock=false;

        setTimeout(() => {
          lock = true;
        }, 1000);
      }
    };
  }

