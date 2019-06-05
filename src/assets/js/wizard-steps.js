
// Wizard tabs with icons setup
$(document).ready( function(){
    $(".icons-tab-steps").steps({
        headerTag: "h6",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        titleTemplate: '<span class="step">#index#</span> #title#',
        labels: {
            finish: 'Submit'
        },
        onFinished: function (event, currentIndex) {
            alert("Thank you Jane, enjoy your flight!!");
        }
    });
 });