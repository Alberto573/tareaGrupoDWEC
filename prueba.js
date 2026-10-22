// ==========================================
// DATOS DE PRUEBA INICIALES
// ==========================================
const muestrasServidores = [
    ["Servidor-Europa", 120, 140, 110, 135],
    ["Servidor-America", 220, 250, 210, 240],
    ["Servidor-Asia", 310, 350, 300, 330],
    ["Servidor-Pruebas", 100, null, -5, "sin dato"]
];

const ipsVisitantesRaw = [
    "192.168.1.10",
    "10.0.0.5",
    "192.168.1.10",
    "172.16.0.1",
    "10.0.0.5",
    "192.168.1.25"
];

const muestrasRutas = [
    ["/home", 100],
    ["/home", 120],
    ["/home", 125],
    ["/api/v1/checkout", 270],
    ["/api/v1/checkout", 300],
    ["/api/v1/checkout", null],
    ["/productos", 80],
    ["/productos", 100]
];

// ==========================================
// A. MÉTRICAS POR SERVIDOR (Matriz 2D)
// ==========================================

// Función auxiliar para validar si una medición es correcta (número >= 0)
function esMedicionValida(valor) {
    return typeof valor === "number" && !Number.isNaN(valor) && valor >= 0;
}

function analizarServidores(matrizServidores) {
    console.log("1. MÉTRICAS POR SERVIDOR");
    
    for (let i = 0; i < matrizServidores.length; i++) {
        let fila = matrizServidores[i];
        let nombreServidor = fila[0];
        let medicionesValidas = [];

        // Filtrar mediciones válidas sin modificar la matriz original
        for (let j = 1; j < fila.length; j++) {
            if (esMedicionValida(fila[j])) {
                medicionesValidas.push(fila[j]);
            }
        }

        if (medicionesValidas.length === 0) {
            console.log(`${nombreServidor} | Sin datos válidos`);
        } else {
            let suma = 0;
            let minimo = medicionesValidas[0];
            let maximo = medicionesValidas[0];

            for (let k = 0; k < medicionesValidas.length; k++) {
                let val = medicionesValidas[k];
                suma += val;
                if (val < minimo) minimo = val;
                if (val > maximo) maximo = val;
            }

            let media = suma / medicionesValidas.length;
            console.log(`${nombreServidor} | Media: ${media.toFixed(2)} ms | Mín: ${minimo} ms | Máx: ${maximo} ms`);
        }
    }
    console.log("");
}

// ==========================================
// B. DIRECCIONES IP ÚNICAS (Set)
// ==========================================
function analizarIPs(listaIps) {
    let setIpsUnicas = new Set();

    for (let i = 0; i < listaIps.length; i++) {
        setIpsUnicas.add(listaIps[i]);
    }

    let totalEntradas = listaIps.length;
    let ipsUnicasCount = setIpsUnicas.size;
    let duplicadas = totalEntradas - ipsUnicasCount;

    console.log("2. DIRECCIONES IP ÚNICAS");
    console.log(`Total de entradas: ${totalEntradas}`);
    console.log(`Direcciones IP únicas: ${ipsUnicasCount}`);
    console.log(`Entradas duplicadas: ${duplicadas}\n`);
}

// ==========================================
// C. LATENCIA MEDIA POR RUTA (Map)
// ==========================================
function analizarRutas(muestrasRutas) {
    let mapaRutas = new Map();

    // Agrupar tiempos válidos por ruta en un Map donde el valor es un Array de tiempos
    for (let i = 0; i < muestrasRutas.length; i++) {
        let ruta = muestrasRutas[i][0];
        let tiempo = muestrasRutas[i][1];

        if (esMedicionValida(tiempo)) {
            if (!mapaRutas.has(ruta)) {
                mapaRutas.set(ruta, []);
            }
            mapaRutas.get(ruta).push(tiempo);
        }
    }

    console.log("3. LATENCIA MEDIA POR RUTA");
    
    // Recorrer el Map para calcular la media de cada ruta
    for (let [ruta, tiempos] of mapaRutas) {
        if (tiempos.length === 0) {
            console.log(`${ruta} | Sin datos válidos`);
        } else {
            let suma = 0;
            for (let j = 0; j < tiempos.length; j++) {
                suma += tiempos[j];
            }
            let media = suma / tiempos.length;
            console.log(`${ruta} | Latencia media: ${media.toFixed(2)} ms`);
        }
    }
    console.log("");
}

// ==========================================
// D. INFORME CONSOLIDADO (EJECUCIÓN PRINCIPAL)
// ==========================================
function generarInformeConsolidado() {
    console.log("INFORME ANALITICO DE RENDIMIENTO WEB");
    console.log("=====================================");
    analizarServidores(muestrasServidores);
    analizarIPs(ipsVisitantesRaw);
    analizarRutas(muestrasRutas);
}

// Ejecutar el programa completo
generarInformeConsolidado();
