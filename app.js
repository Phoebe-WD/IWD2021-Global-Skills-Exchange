/* Pop up modal mentor */

let modal = document.getElementById('pop-up');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Filter Feature

function myFunction() {
  // Declare variables
  let input, filter, cards, card, course, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  cards = document.getElementById("myTeachers");
  card = cards.getElementsByClassName("card");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < card.length; i++) {
    course = card[i].getElementsByClassName("course-teaching")[0];
    txtValue = course.textContent || course.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}