//el reto 3 es el punto 4, a partir de ahí los requisitos están en el 4.3
/*
Direcciones IP únicas: 4
Entradas duplicadas: 2
3. LATENCIA MEDIA POR RUTA
--------------------------------------------------
- /home | Latencia media: 115.00 ms
- /api/v1/checkout | Latencia media: 285.00 ms
- /productos | Latencia media: 90.00 ms
==================================================
*/

const muestrasServidores = [
  ["Servidor-Europa", 120, 140, 110, 135],
  ["Servidor-America", 220, 250, 210, 240],
  ["Servidor-Asia", 310, 350, 300, 330],
  ["Servidor-Pruebas", 100, null, -5, "sin dato"],
];

const ipsVisitantesRaw = [
  "192.168.1.10",
  "10.0.0.5",
  "192.168.1.10",
  "172.16.0.1",
  "10.0.0.5",
  "192.168.1.25",
];

const muestrasRutas = [
  ["/home", 100],
  ["/home", 120],
  ["/home", 125],
  ["/api/v1/checkout", 270],
  ["/api/v1/checkout", 300],
  ["/api/v1/checkout", null],
  ["/productos", 80],
  ["/productos", 100],
];

function esMedicionValida(valor) {
  return typeof valor === "number" && !Number.isNaN(valor) && valor >= 0;
}

let maximo = 1;
let minimo = 100000000000;
let media = 0;
function calculoMatriz(muestrasServidores) {
  for (i = 0; i < muestrasServidores.length[i]; i++) {
    let fila = muestrasServidores[i];
    let nombreServidor = fila[0];
    let medicionesValidas = [];
    for (j = 0; j < fila.length[i][j]; i++) {
      if(muestrasServidores[i][j] != null && muestrasServidores[i][j] != undefined && muestrasServidores[i][j] == ){
        if (muestrasServidores[i][j] > maximo) {
        maximo = muestrasServidores[i][j];
        }
        if (muestrasServidores[i][j] < minimo) {
            minimo = muestrasServidores[i][j];
        }
        media += muestrasServidores[i][j];
      }
        
    }
    media = media / j;
    console.log(
      "Del servidor " +
        muestrasServidores[i][0] +
        " su media es: " +
        media +
        " su máximo es : " +
        maximo +
        " y su mínimo es: " +
        minimo,
    );
  }
}
