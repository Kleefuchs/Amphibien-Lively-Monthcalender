
const date = new Date();

const cMonth = date.getMonth();

var imageURL = "assets/" + cMonth + ".jpg";

var body = document.body;

body.style.backgroundSize = "100% 100%";
body.style.backgroundImage = "url('" + imageURL + "')";