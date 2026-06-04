document.getElementById("inviteBtn").addEventListener("click", () => {
    alert(
        "Thank you for confirming your attendance. We look forward to welcoming you at IIT Jammu!"
    );
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
