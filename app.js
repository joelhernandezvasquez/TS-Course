"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroesPower;
    (function (HeroesPower) {
        HeroesPower[HeroesPower["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        HeroesPower[HeroesPower["fuerzaBatman"] = 1] = "fuerzaBatman";
        HeroesPower[HeroesPower["fuerzaFlash"] = 5] = "fuerzaFlash";
        HeroesPower[HeroesPower["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(HeroesPower || (HeroesPower = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
