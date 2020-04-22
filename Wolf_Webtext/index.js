

// Modal from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// Get the modal
var fn = function() {

    var targets = ['pb1', 'pb2', 'pb3'];
    var targetMap = {};
    var btnMap = {};

    targets.forEach(function (t) {
        var modalName = t + 'Modal';
        var btnName = t + 'Btn';
        // targetMap[t] = document.getElementById(btnMap);
        // btnMap[t] = document.getElementById(btnName);
        var targetBtn =  document.getElementById(btnName);
        if (targetBtn) {
            targetBtn.onclick = function () {
                var target = document.getElementById(modalName);
                if (target) {
                    target.style.display = 'block';
                }
            };
        }
    });

    var pb1Modal = document.getElementById("pb1Modal");

// Get the button that opens the modal
    var pb1Btn = document.getElementById("pb1Btn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
    pb1Btn.onclick = function () {
        pb1Modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        span.onclick = function () {
            targets.forEach(function (t) {
                var target = document.getElementById(t + 'Modal');
                if (target) {
                    target.style.display = 'none';
                }
            });
        };
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        targets.forEach(function (t) {
            var target = document.getElementById(t + 'Modal');
            if (event.target == target) {
                target.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', fn, false);