// Define the tour!
var tour = {
    id: "demo-tour",
    showPrevButton: true,
    steps: [       
        {
            title: "Side-Bar Toggle",
            content: "Click the toggle button and the left sidebar will shrink.",
            target: "sidebarToggle",
            placement: "right"
        },
        {
            title: "User Settings",
            content: "This is where you can set your preferences also log-out of the application.",
            target: "btnUserSettings",
            placement: "left"
        },
        {
            title: "Features",
            content: "This is where you navigate to all the features.",
            target: "navigation",
            placement: "right"
        }       
    ]
};

$('#btnStartTour').on('click',function(e){
    hopscotch.startTour(tour);
});

// Start the tour!
