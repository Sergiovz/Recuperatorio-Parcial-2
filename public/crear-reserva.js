const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const nombrePelicula = document.querySelector('#nombrePelicula').value;
    const fechaIngreso = document.querySelector('#fechaIngreso').value;
    const fechaSalida = document.querySelector('#fechaSalida').value;
    const sala = document.querySelector('#sala').value;
    const precio = document.querySelector('#precio').value;
    const haciento = document.querySelector('#haciento').value;

    const reserva = {     
        nombre,
        apellido,
        nombrePelicula,
        fechaIngreso,
        fechaSalida,
        sala,
        haciento,
        precio
    }

    const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    })
    
    const data = await response.json();

    alert(data.message)
    window.location.href = "/"
})