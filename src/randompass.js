document.addEventListener("click", function(e) {
  //if (!e.target.classList.contains("page-choice")) {
  //  return;
  //}

  var pwfield = document.querySelector("#pw1");
  pwfield.select()
  document.execCommand("Copy");

});

function getHttpRandomOrg(doc)
{
    var theURL="https://www.random.org/strings/?num=1&len=16&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new";
    var rpw="";
    fetch(theURL).then(function(response) {
        //console.log(response.status);
	response.text().then(function(text){doc.getElementById("pw1").value=text;});
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM fully loaded and parsed");
    if ( document.getElementById("pw1").value == "changeme" ) {
        getHttpRandomOrg(document);
    }
});

