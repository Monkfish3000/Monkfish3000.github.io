const header = document.getElementsByTagName("HEADER")[0];

      document.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          header.style.borderBottom = '1px solid #2ab7ca'; 
        } else {
          header.style.borderBottom = ''; 
        }
      }); 

const avatar = document.querySelector('.avatar');
//console.log(avatar);

let load = 0;

let int = setInterval(blurring, 8);

function blurring() {
  load++

  if (load > 100) {
    clearInterval(int)
  }

  avatar.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}; 
