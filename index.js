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

function calculoMatriz(muestrasServidores) {
  for (let i = 0; i < muestrasServidores.length; i++) {
    let fila = muestrasServidores[i];
    let nombreServidor = fila[0];
    let maximo = -Infinity;
    let minimo = Infinity;
    let media = 0;
    let cantidadValidos = 0;
    for (let j = 1; j < fila.length; j++) {
      let valor = muestrasServidores[i][j];
      if (
        valor != null &&
        valor != undefined &&
        typeof valor === "number" &&
        valor >= 0
      ) {
        if (valor > maximo) {
          maximo = valor;
        }
        if (valor < minimo) {
          minimo = valor;
        }
        media += valor;
        cantidadValidos++;
      }
    }
    if (cantidadValidos == 0) {
      console.log("Sin datos válidos");
    } else {
      media = media / cantidadValidos;
      console.log(
        "Del servidor " +
          muestrasServidores[i][0] +
          " su media es: " +
          media +
          "ms su máximo es : " +
          maximo +
          "ms y su mínimo es: " +
          minimo +
          "ms",
      );
    }
  }
}
calculoMatriz(muestrasServidores);

function analizarIPs(ipsVisitantesRaw) {
  const ipsUnicas = new Set(ipsVisitantesRaw);
  const totalEntradas = ipsVisitantesRaw.length;
  const cantidadesUnicas = ipsUnicas.size;
  const entradasDuplicadas = totalEntradas - cantidadesUnicas;
  console.log("Total de entradas: " + totalEntradas);
  console.log("Direcciones IP únicas: " + cantidadesUnicas);
  console.log("Entradas duplicadas: " + entradasDuplicadas);
}

analizarIPs(ipsVisitantesRaw);
