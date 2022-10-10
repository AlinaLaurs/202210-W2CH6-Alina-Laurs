export function getName(name) {
    const name = prompt('Por favor, introduzca su nombre.');
    if (name === '') {
        return getName();
    }
    alert('¡' + name + ', le damos la bienvenida!');
}
