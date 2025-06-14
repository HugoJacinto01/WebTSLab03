(() => {
    let a: string = "Hugo Daniel";
    let b: string = `Hola: ${a}`;
    let multiArray: (string | number)[] = ['Hugo', 1, 'Daniel', 2, 'Gonzalez', 3];
    let multiTupla: [string, number, string, number, string, number] = ['Hugo', 1, 'Daniel', 2, 'Gonzalez', 3];
    enum Color { Red, Green, Blue };
    let VarNull: undefined = undefined;
    console.log(b[15]?.toUpperCase() || 'No existe');
    console.log(multiArray[2]);
    console.log(multiTupla[3]);
    console.log(Color.Green);
    console.log(VarNull);
})();
