const button = document.getElementById('movingButton');

button.addEventListener('mouseenter', () => {
  const containerWidth = document.body.clientWidth;
  const containerHeight = document.body.clientHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  
  const randomX = Math.random() * (containerWidth - buttonWidth);
  const randomY = Math.random() * (containerHeight - buttonHeight);

  button.style.top = `${randomY}px`;
  button.style.left = `${randomX}px`;
});
