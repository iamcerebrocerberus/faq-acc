const faqButtons = document.querySelectorAll('.js-details');

faqButtons.forEach(function(eventDetail) {
    eventDetail.addEventListener('click', function() {
        faqButtons.forEach(function(detail) {
            if (detail != eventDetail) detail.removeAttribute('open');
        })
    })
})