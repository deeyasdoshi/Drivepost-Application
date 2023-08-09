window.addEventListener("DOMContentLoaded",()=>{
    console.log('hello')
    function submitForm() {
        // Get the selected time slot value
        const activeButton = document.querySelector('input.time-slot-btn.active');
        if (activeButton) {
            
            document.getElementById('selected-timeslot').value = activeButton.value;
            console.log(document.getElementById('selected-timeslot').value)
        } else {
            alert('Please select a time slot before booking.');
        }
    }

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

    document.getElementById("appointmentForm").addEventListener('submit',(event)=>{
        let userConfirmed = confirm(`are you sure? \nyour appointment timing are 
        \ndate: ${document.getElementById("selectedDate").value} 
        \ntime: ${document.querySelector("input.time-slot-btn.active").value}`)
        if(!userConfirmed){
            event.preventDefault()
        }
        else{
            submitForm()
        }
    })

})