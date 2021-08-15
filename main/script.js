var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 30);
    });
}
function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


var text = '{"dishes":[' +
'{"SHOPName":"DOMINOS","lastName":"PIZZA" },' +
'{"SHOPName":"CAFE","lastName":"GRILLS" },' +
'{"SHOPName":"GARAM","lastName":"DHARAM" },' +
'{"SHOPName":"NIK","lastName":"BAKERS" },' +
'{"SHOPName":"PUNJABI","lastName":"TADKA" },' +
'{"SHOPName":"LC","lastName":"BRANCH" },' +
'{"SHOPName":"Pizza ","lastName":"Galary" },' +
'{"SHOPName":"New","lastName":"cafe" },' +
'{"SHOPName":"MADRAS","lastName":"CAFE" },' +
'{"SHOPName":"ROLL","lastName":"HUT" },' +
'{"SHOPName":"Vashno","lastName":"Dhaba" },' +
'{"SHOPName":"BAKERS","lastName":"DEN" }]}';

obj = JSON.parse(text);
document.getElementById("S1").innerHTML =
obj.dishes[0].SHOPName + " " + obj.dishes[0].lastName;
document.getElementById("S2").innerHTML =
obj.dishes[1].SHOPName + " " + obj.dishes[1].lastName;
document.getElementById("S3").innerHTML =
obj.dishes[2].SHOPName + " " + obj.dishes[2].lastName;
document.getElementById("S4").innerHTML =
obj.dishes[3].SHOPName + " " + obj.dishes[3].lastName;
document.getElementById("S5").innerHTML =
obj.dishes[4].SHOPName + " " + obj.dishes[4].lastName;
document.getElementById("S6").innerHTML =
obj.dishes[5].SHOPName + " " + obj.dishes[5].lastName;
document.getElementById("S7").innerHTML =
obj.dishes[6].SHOPName + " " + obj.dishes[6].lastName;
document.getElementById("S8").innerHTML =
obj.dishes[7].SHOPName + " " + obj.dishes[7].lastName;
document.getElementById("S9").innerHTML =
obj.dishes[8].SHOPName + " " + obj.dishes[8].lastName;
document.getElementById("S10").innerHTML =
obj.dishes[9].SHOPName + " " + obj.dishes[9].lastName;
document.getElementById("S11").innerHTML =
obj.dishes[10].SHOPName + " " + obj.dishes[10].lastName;
document.getElementById("S12").innerHTML =
obj.dishes[11].SHOPName + " " + obj.dishes[11].lastName;
