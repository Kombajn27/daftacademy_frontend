export default function() {
  let date = new Date().getFullYear();
  const textCnt = document.querySelector('.footer__rights');

  textCnt.innerText = `©${date} Zonex All rights reserved`;
}
