let numGattitotali = 44;

let numGattiInfila = 6

let numFile = Math.floor(numGattitotali / numGattiInfila)

console.log(numFile);

let numRimastiFuori = numGattitotali % numGattiInfila;

console.log(numRimastiFuori);


let numMancanti = numGattiInfila - numRimastiFuori;

console.log(numMancanti);

console.log(`Ci sono ${numFile} file di gatti e ne mancano ${numMancanti} per una nuova fila con un avanzo di ${numRimastiFuori}`);



