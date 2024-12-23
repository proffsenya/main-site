// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    const modal_container = document.getElementById('.needs-validation')
    const close_x = document.getElementById('.close-button')


    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => { 
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    else if (form.checkValidity() == true) {
        alert("BYE BITCHHHHHHHHHHHHH");
        modal_container.classList.remove('show');
        document.getElementById(".needs-validation").reset();
    }
    form.classList.add('was-validated')


    }, false)   
    })

    close_x.addEventListener('click', () => {
        modal_container.classList.remove('show');
        document.getElementById(".needs-validation").reset();
    })

})()

