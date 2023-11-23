function valor(){
    var valores = [true, 5, false, "hola", "adios", 2];
    var sb = '';
    var rs = '';
    var sn = '';
    for (v of valores){
        for (b of valores){
            if (v != b) {
                if (typeof v == 'boolean' && typeof b == 'boolean'){
                    var rb_1 = v && b; 
                    var rb_2 = v || b;
                    if (sb == ''){
                        sb = 'El resultado de: ' + v + ' and ' + b + ' es ' + rb_1 + ' y el resultado de ' + v + ' or ' + b + ' es ' + rb_2 + '<br>'
                        document.write(sb);
                    }
                }
                if (typeof v == 'string' && typeof b == 'string'){
                    var long_b = v.length;
                    var long_v = b.length;
                    var maximo = Math.max(long_v, long_b);
                    if (rs == ''){
                        rs = (long_v == maximo) ? 'La cadena mas larga entre ' + v + ' y ' + b + ' es ' + v + ' con ' + maximo + ' caracteres':
                        'La cadena mas larga entre ' + v + ' y ' + b + ' es ' + v + ' con ' + maximo + ' caracteres';
                        document.write(rs + '<br>');
                    }
                }
                if (typeof v == 'number' && typeof b == 'number'){
                    var rn_1 = v + b;
                    var rn_2 = v - b;
                    if (sn == ''){
                        sn = 'El resultado de: ' + v + ' + ' + b + ' = ' + rn_1 + ' y el resultado de ' + v + ' - ' + b + ' = ' + rn_2  + '<br>';
                        document.write(sn);
                    }
                }
            }
        }
    }
}