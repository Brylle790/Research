const toggleBTN = document.getElementById("toggle-btn");
const sidebars = document.getElementsByClassName("sidebar");

function toggleSideBar() {
  for (let sidebar of sidebars) {
    sidebar.classList.toggle("close");
  }

  

  Array.from(sidebars[0].getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');

   
    if (ul.previousElementSibling) {
      ul.previousElementSibling.classList.remove("rotate");
    }
  });
}
function toggleSubClass(button) {
  
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  
  Array.from(sidebars).forEach((sidebar) => {
    if (sidebar && sidebar.classList.contains("close")) {
      sidebar.classList.remove("close"); 
      toggleBTN.classList.remove("rotate"); 
    }
  });
}
