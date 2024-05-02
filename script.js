document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });

    var eventTypeSelector = document.getElementById('eventType');
    eventTypeSelector.addEventListener('change', function() {
        var prices = { 'wedding': 10000, 'birthday': 3000, 'corporate': 7000 };
        var eventPrice = prices[this.value];
        document.getElementById('price').textContent = "Estimated Cost: $" + eventPrice;
    });
});
