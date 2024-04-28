const formUsuario = document.getElementById('formCrearUsuario')

formUsuario.addEventListener('submit', e =>{
    e.preventDefault();
    const dataFormulario = new FormData(formUsuario)
    fetch('http://localhost:8000/api/usuarios', {method: 'POST', body: dataFormulario})
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
});


