(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function (event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });

            //Gold Challenge: Adding Achievements
            var zilla = {
                caramel: {
                    title: 'Caramel Unlocked',
                    body: 'Wanna put some Boba in your drink?'
                },
                almond: {
                    title: 'Almond Unlocked',
                    body: 'Wanna put some Jelly in your drink?'
                },
                mocha: {
                    title: 'Mocha Unlocked',
                    body: 'Wanna put some Grass Jelly in your drink?'
                },
                banana: {
                    title: 'Banana Unlocked',
                    body: 'Wanna put some Banana in your drink?'
                }
            };

            var $modalTitle = $('#myModal .modal-title');
            var $modalBody = $('#myModal .modal-body');

            if (data.size == 'coffee-zilla' && data.strengthLevel == 100) {
                var copy = zilla[data.flavor];
                $modalTitle.text(copy.title);
                $modalBody.text(copy.body);
            }
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();

        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);

//Silver Challenge: Showing the Value as the Slider Changes
// update strengthOutput when slider changes and add color
var slider = document.getElementById("strengthLevel");
var sliderOutput = document.getElementById("strengthOutput");
var sliderLabel = document.getElementById('strengthLabel');
// set initial color
sliderOutput.style.color = "green";
sliderLabel.style.color = "green";

slider.addEventListener("input", function() {
    sliderOutput.value = slider.value
    // change the color of the label and number based on intensity
    var intensityColor;
    if (slider.value < 35) {
        intensityColor = "green";
    }
    else if (slider.value < 70) {
        intensityColor = "#aaaa00";
    }
    else {
        intensityColor = "red";
    }
    sliderOutput.style.color = intensityColor;
    sliderLabel.style.color = intensityColor;
});
