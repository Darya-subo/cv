$("#files").change(function () {
    filename = this.files[0].name
    console.log(filename);
});

var textarea = document.getElementById('home');

textarea.addEventListener('keyup', function () {
    if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
    }
});

// var textarea = document.getElementById('about-me');

// textarea.addEventListener('keyup', function() {
//     if (this.scrollTop > 0) {
//         this.style.height = this.scrollHeight + "px";
//     }
// });
function auto_grow(element) {
    element.style.height = "20px";
    element.style.height = (element.scrollHeight) + "px";
}



var btn = document.querySelector("button");
btn.onclick = () => {
    window.print();
};

function addDiv() {
    var workdiv = document.getElementById('welcomeDiv');
    var clone = workdiv.cloneNode(true);
    workdiv.parentNode.appendChild(clone);

}

function addDiv2() {
    var workdiv = document.getElementById('educationDiv');
    var clone = workdiv.cloneNode(true);
    workdiv.parentNode.appendChild(clone);
}




// function scaleCv() {
//     document.body.classList.add('scale-cv')
// }

// function removeScale() {
//     document.body.classList.remove('scale-cv')
// }

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
            console.log(e.target.result);

            var widthImg = $('#blah').width();
            console.log("widthImg = " + widthImg);
            var widthContent = 342;
            console.log("widthContent = " + widthContent);

            
            if (+widthImg > +widthContent) {
                var koef = +widthImg / +widthContent;

                $("#koef").val(Math.round(koef * 1000));
                $('#blah').attr('src', e.target.result).css('width', '100%');
            } else {

            }

        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#files").change(function () {
    $('#blah').attr('src', "img/stepDefault-dIIv.svg");
    readURL(this);

    //$('input[type="file"]').hide();
    //$('.buttonSubmitImg').show();
    //CropResult.isUpload = true;
});

var skillList = "";
var i = 0;

function addSkill() {
    var skills = document.getElementById("addSkill").value;
    if (skills != "") {
        skillList += "<li><span name='skillItem' id='skillItem" + i + "'>" + skills + "</span> " +
            "<input type='button' name='addskill' class='dd-div' id='add-div' value='remove' onclick='removeSkill()' style='width: 80px;''>" + "<br><br>";
        i++;
        document.getElementById("skill").innerHTML = skillList;
        document.getElementById("addSkill").value = "";
    }
}

function removeSkill() {
    skillList = "";
    var items = document.querySelectorAll("#skill li"),
        index, tab = [];
    for (var j = 0; j < items.length; j++) {
        tab.push(items[j].innerHTML);
    }
    for (var j = 0; j < items.length; j++) {
        items[j].onclick = function () {

            index = tab.indexOf(this.innerHTML);
            items[index].parentNode.removeChild(items[index]);
            tab.pop(j, 1);
        };
    }


}


var interestsList = "";
var i = 0;

function addInterest() {
    var interests = document.getElementById("addInterest").value;
    if (interests != "") {
        interestList += "<li><span name='interestItem' id='interestItem" + i + "'>" + interests + "</span> " +
            "<input type='button' name='addskill' class='dd-div' id='add-div' value='remove' onclick='removeSkill()' style='width: 80px;''>" + "<br><br>";
        i++;
        document.getElementById("interests").innerHTML = skillList;
        document.getElementById("addInterest").value = "";
    }
}

function removeInterests() {
    interestList = "";
    var items_interest = document.querySelectorAll("#interests li"),
        index, tab = [];
    for (var j = 0; j < items_interest.length; j++) {
        tab.push(items_interest[j].innerHTML);
    }
    for (var j = 0; j < items_interest.length; j++) {
        items_interest[j].onclick = function () {

            index = tab.indexOf(this.innerHTML);
            items_interest[index].parentNode.removeChild(items_interest[index]);
            tab.pop(j, 1);
        };
    }


}
