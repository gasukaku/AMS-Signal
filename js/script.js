// header
fetch('../js/header.html')
  .then(response => response.text())
  .then(data => {
    const headerElement = document.getElementById('commonheader');
    headerElement.innerHTML = data;
  });

  