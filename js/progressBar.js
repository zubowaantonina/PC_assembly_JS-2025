const progressBar = () => {

  const updateProgressBar = (percentage) => {
    const myBar = document.querySelector(".progress");
    const number = document.querySelector('.course__progress .course__number')

    myBar.style.width = percentage + "%";
    number.textContent = sum;
  }
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
newSum=Math.round(getRandomIntInclusive(350000, 600000)/10000);
// console.log(newSum);

  let sum = 0;
  let progress = 0;
  const interval = setInterval(() => {
    
    if (progress >= newSum) {
      clearInterval(interval);
    } else {
      progress += 1;
      sum = progress * 10000;
      updateProgressBar(progress);
    }
  }, 10);
}
progressBar()