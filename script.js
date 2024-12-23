window.onload = function() {
    const greeting = document.createElement('h3');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = "Good Morning! Welcome to Hannuel Technology International.";
    } else if (hours < 18) {
        greeting.textContent = "Good Afternoon! We're happy to see you.";
    } else {
        greeting.textContent = "Good Evening! Explore our offerings.";
    }
    document.body.prepend(greeting);
};
