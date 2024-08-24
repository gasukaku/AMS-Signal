// header
fetch('../js/header.html')
  .then(response => response.text())
  .then(data => {
    const headerElement = document.getElementById('header');
    headerElement.innerHTML = data;
  });

  