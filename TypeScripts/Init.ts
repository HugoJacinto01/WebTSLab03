(() => {
    let a: string = "Hugo Daniel";
    let b: string = `Hola: ${a}`;
    console.log(b[15]?.toUpperCase() || 'No existe');
})();
