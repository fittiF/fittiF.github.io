var x;
$(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 400, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {
        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {
        }, // This option accepts a callback function. The function will be called after the page moves.
        loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: 1000, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
    if(x){
        $(".main").moveTo(x);
    }

    lightbox.option({
       'resizeDuration': 200
    });
});
document.getElementById("btnWorkout").disable = true;
document.getElementById("btnWorkout").style.display = "none";
document.getElementById("btnPlan").disable = true;
document.getElementById("btnPlan").style.display = "none";
document.getElementById("btnTutorialZu").disable = true;
document.getElementById("btnTutorialZu").style.display = "none";
document.getElementById("btnVerb").disable = true;
document.getElementById("btnVerb").style.display = "none";
document.getElementById("btnVerbZu").disable = true;
document.getElementById("btnVerbZu").style.display = "none";
document.getElementById("btnFeed").disable = true;
document.getElementById("btnFeed").style.display = "none";
document.getElementById("btnWorkNav").disable = true;
document.getElementById("btnWorkNav").style.display = "none";
document.getElementById("btnFeedVid").disable = true;
document.getElementById("btnFeedVid").style.display = "none";
document.getElementById("btnFeedVidZu").disable = true;
document.getElementById("btnFeedVidZu").style.display = "none";






function changeStart() {
    document.getElementById("imgClick").src = "img/Home.png";
    document.getElementById("btnStarten").disable = true;
    document.getElementById("btnWorkout").disable = false;
    document.getElementById("btnWorkout").style.display = "flex";
    document.getElementById("btnStarten").style.display = "none";
    document.getElementById("btnVerb").disable = false;
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnFeed").disable = false;
    document.getElementById("btnFeed").style.display = "flex";
}

function Workout() {
    
    document.getElementById("imgClick").src = "img/TrainingStart.png";
    document.getElementById("btnWorkout").disable = true;
    document.getElementById("btnWorkout").style.display = "none";
    document.getElementById("btnPlan").disable = false;
    document.getElementById("btnPlan").style.display = "flex";
    document.getElementById("btnVerbZu").disable = true;
    document.getElementById("btnVerbZu").style.display = "none";
    document.getElementById("btnFeed").disable = false;
    document.getElementById("btnFeed").style.display = "flex";
    document.getElementById("btnVerb").disable = false;
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnFeedVid").disable = true;
    document.getElementById("btnFeedVid").style.display = "none"
     
}
function Tutorial() {
    document.getElementById("imgClick").src = "img/Tutorial.png";
    document.getElementById("btnPlan").disable = true;
    document.getElementById("btnPlan").style.display = "none";
    document.getElementById("btnTutorialZu").disable = false;
    document.getElementById("btnTutorialZu").style.display = "flex";
    document.getElementById("btnVerb").disable = true;
    document.getElementById("btnVerb").style.display = "none"; 
    document.getElementById("btnFeed").disable = true;
    document.getElementById("btnFeed").style.display = "none";
    document.getElementById("btnWorkNav").disable = true;
    document.getElementById("btnWorkNav").style.display = "none";
    document.getElementById("btnFeedVid").disable = true;
    document.getElementById("btnFeedVid").style.display = "none" 
}
function TutorialZu() {
    document.getElementById("imgClick").src = "img/TrainingStart.png";
    document.getElementById("btnTutorialZu").disable = true;
    document.getElementById("btnTutorialZu").style.display = "none";
    document.getElementById("btnPlan").disable = false;
    document.getElementById("btnPlan").style.display = "flex";
    document.getElementById("btnVerb").disable = false;
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnFeed").disable = false;
    document.getElementById("btnFeed").style.display = "flex";
}

function verbinden() {
    document.getElementById("imgClick").src = "img/Verbinden.png";
    document.getElementById("btnPlan").disable = true;
    document.getElementById("btnPlan").style.display = "none";
    document.getElementById("btnVerb").disable = true;
    document.getElementById("btnVerb").style.display = "none";
    document.getElementById("btnVerbZu").disable = false;
    document.getElementById("btnVerbZu").style.display = "flex";
    document.getElementById("btnWorkout").disable = true;
    document.getElementById("btnWorkout").style.display = "none";
    document.getElementById("btnWorkNav").disable = false;
    document.getElementById("btnWorkNav").style.display = "flex";
    document.getElementById("btnFeed").disable = false;
    document.getElementById("btnFeed").style.display = "flex";
    document.getElementById("btnFeedVid").disable = true;
    document.getElementById("btnFeedVid").style.display = "none"
       
    
}

function verbindenZu() {
    document.getElementById("imgClick").src = "img/TrainingStart.png";
    document.getElementById("btnVerbZu").disable = true;
    document.getElementById("btnVerbZu").style.display = "none";
    document.getElementById("btnVerb").disable = false;
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnWorkNav").disable = true;
    document.getElementById("btnWorkNav").style.display = "none";
    document.getElementById("btnPlan").disable = false;
    document.getElementById("btnPlan").style.display = "flex";
    
}

function Feedback() {
    document.getElementById("imgClick").src = "img/FeedbackMenue.png";
    document.getElementById("btnPlan").disable = true;
    document.getElementById("btnPlan").style.display = "none";
    document.getElementById("btnVerb").disable = true;
    document.getElementById("btnVerb").style.display = "none";
    document.getElementById("btnWorkout").disable = true;
    document.getElementById("btnWorkout").style.display = "none";
    document.getElementById("btnFeed").disable = true;
    document.getElementById("btnFeed").style.display = "none";
    document.getElementById("btnVerb").disable = false;
    document.getElementById("btnVerb").style.display = "flex";
    document.getElementById("btnWorkNav").disable = false;
    document.getElementById("btnWorkNav").style.display = "flex"; 
    document.getElementById("btnFeedVid").disable = false;
    document.getElementById("btnFeedVid").style.display = "flex";
    document.getElementById("btnTutorialZu").disable = true;
    document.getElementById("btnTutorialZu").style.display = "none";

    
}

function FeedbackVideo() {
    document.getElementById("imgClick").src = "img/FeedbackAppScreens.png";
    document.getElementById("btnFeedVid").disable = true;
    document.getElementById("btnFeedVid").style.display = "none"
    document.getElementById("btnPlan").disable = true;
    document.getElementById("btnPlan").style.display = "none";
    document.getElementById("btnTutorialZu").disable = true;
    document.getElementById("btnTutorialZu").style.display = "none";
    document.getElementById("btnVerb").disable = true;
    document.getElementById("btnVerb").style.display = "none"; 
    document.getElementById("btnFeed").disable = true;
    document.getElementById("btnFeed").style.display = "none";
    document.getElementById("btnWorkNav").disable = true;
    document.getElementById("btnWorkNav").style.display = "none"; 
    document.getElementById("btnFeedVidZu").disable = false;
    document.getElementById("btnFeedVidZu").style.display = "flex";
}

function FeedbackVideoZu() {
    document.getElementById("btnFeedVidZu").disable = true;
    document.getElementById("btnFeedVidZu").style.display = "none";
    Feedback();
}
var n = 0;
function SpiegelWeiter() {
    n += 1;
    console.log(n);
    if(n == 1){
        document.getElementById("weiterSpiegel").src = "img/Spiegel2.png";
    }
    else if(n == 2){
        document.getElementById("weiterSpiegel").src = "img/Spiegel3.png";
    }
    else if(n == 3){
        document.getElementById("weiterSpiegel").src = "img/Spiegel4.png";
    }
    else if(n == 4){
        document.getElementById("weiterSpiegel").src = "img/Spiegel1.png";
        n = 0;
    }
    
    
}

