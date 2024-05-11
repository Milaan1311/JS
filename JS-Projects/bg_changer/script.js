const getcolor = () => {
  // use hex codes
  const randomNumber = Math.floor(Math.random() * 1677215);
  //   console.log(randomNumber);
  const randomCode = "#" + randomNumber.toString(16).padStart(6, "0");
  document.body.style.backgroundColor = randomCode;

  document.getElementById("color-code").innerText = randomCode;
};

document.getElementById("btn").addEventListener("click", getcolor);
getcolor();
