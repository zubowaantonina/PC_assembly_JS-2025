const progressBar = () => {

  const updateProgressBar = (percentage) => {
    const myBar = document.querySelector(".progress");
    const number = document.querySelector('.course__progress .course__number')

    myBar.style.width = percentage + "%";
    number.textContent = sum;


  }

  let sum = 0;
  let progress = 0;
  const interval = setInterval(() => {
    
    if (progress >= 40) {
      clearInterval(interval);
    } else {
      progress += 1;
      sum = progress * 10000;
      updateProgressBar(progress);
    }
  }, 10);
}
progressBar()