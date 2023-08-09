window.addEventListener("DOMContentLoaded",()=>{
    

    document.getElementById('selectedDate').addEventListener("change",()=>{    
        
        const selectedDate = document.getElementById('selectedDate').value
        console.log(selectedDate)
        const divElement = document.createElement("div");
        divElement.classList.add("time-slots");

        fetch("/g2_test/data")
            .then(response => response.json())
            .then(data => {
                // Do something with the fetched data
                const realdata = data
                for(i=0;i<realdata.length;i++){

                    if(realdata[i].selectedDate!=selectedDate){ 
                    
                        const elementsToRemove = document.querySelectorAll('.time-slot-btn');
                        elementsToRemove.forEach((element) => element.remove());
    
                    }
                    else{


                        const elementsToRemove = document.querySelectorAll('.time-slot-btn');
                        elementsToRemove.forEach((element) => element.remove());    

                        for(i=0;i<realdata.length;i++){
                            console.log(realdata[i].selectedDate===selectedDate)
                            if(realdata[i].selectedDate===selectedDate){
                                if(realdata[i].isTimeSlotAvailable){
                                    const inputElement = document.createElement("input");
                                    inputElement.type = "button";
                                    inputElement.classList.add("time-slot-btn");
                                    inputElement.name = "selectedTime";
                                    inputElement.id = "selectedTime";
                                    inputElement.value = realdata[i].selectedTime
                                    
                                    divElement.appendChild(inputElement);
                                    document.getElementById('selectedDateDiv').appendChild(divElement);
                                    console.log(realdata[i].selectedTime)
                                }
                                
                            }
                            else{
                                console.log('no slots')
                            }
                        }
                    }
                }
                

                
            })

            setTimeout(()=>{
                // Add event listeners to handle the active state of the buttons
            const timeSlotButtons = document.querySelectorAll('input.time-slot-btn');
            console.log(timeSlotButtons)
            timeSlotButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const activeButton = document.querySelector('input.time-slot-btn.active');
                    if (activeButton) {
                        activeButton.classList.remove('active');
                    }
                    button.classList.add('active');
                });
            });
            },1000)

        
    })

    document.getElementById('g2_test_appointment_form').addEventListener('submit', function (event) {
        let userConfirmed = confirm(`are you sure? \nyour appointment timing are 
        \ndate: ${document.getElementById("selectedDate").value} 
        \ntime: ${document.querySelector("input.time-slot-btn.active").value}`)
        if(!userConfirmed){
            event.preventDefault()
        }
        else{
            submitForm()
        }
      });

      function submitForm() {
        // Get the selected time slot value
        const activeButton = document.querySelector('input.time-slot-btn.active');
        if (activeButton) {
            document.getElementById('selected-timeslot').value = activeButton.value;
        } else {
            alert('Please select a time slot before booking.');
        }
    }
    
})