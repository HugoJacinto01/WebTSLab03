"use strict";
(() => {
    var _a;
    let a = "Hugo Daniel";
    let b = `Hola: ${a}`;
    let multiArray = ['Hugo', 1, 'Daniel', 2, 'Gonzalez', 3];
    let multiTupla = ['Hugo', 1, 'Daniel', 2, 'Gonzalez', 3];
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    let VarNull = undefined;
    console.log(((_a = b[15]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
    console.log(multiArray[2]);
    console.log(multiTupla[3]);
    console.log(Color.Green);
    console.log(VarNull);
})();
