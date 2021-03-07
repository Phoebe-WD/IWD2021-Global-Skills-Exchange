function openContent(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

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