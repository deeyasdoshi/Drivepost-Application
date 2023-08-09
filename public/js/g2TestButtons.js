window.document.addEventListener("DOMContentLoaded",()=>{
    // Add event listeners to handle the active state of the buttons
    const timeSlotButtons = document.querySelectorAll('input.time-slot-btn');
    timeSlotButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activeButton = document.querySelector('input.time-slot-btn.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            button.classList.add('active');
        });
    });
})