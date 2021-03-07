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
  let input, filter, ul, li, a, i, txtValue;
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

function login(event) {
  event.preventDefault();
  let accounts = [
    {
      "username": "user",
      "password": "password"
    },
    {
      "username": "Christa",
      "password": "banana"
    }
  ]

  let loggedIn = false;

  for (let account of accounts) {
    console.log(account)
    if (document.getElementsByName("username")[0].value === account["username"] && document.getElementsByName("password")[0].value === account["password"]) {
      window.open("profile.html", "_self");
      loggedIn = true;
      break;
    }
  }

  if (loggedIn === false) {
    document.getElementsByName("username")[0].value = "";
    document.getElementsByName("password")[0].value = "";
    document.querySelector(".incorrect-credentials").style.display = "block";
  }
  console.log(document.getElementsByName("username")[0].value);
}