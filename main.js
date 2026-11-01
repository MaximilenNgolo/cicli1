 let temperatura = Number(prompt(`inserisci la temperatura `))


/* 
if (temperatura <= -10) {

    console.log(`copriti, perche fa mplto freddo`);
    
    
}else if (temperatura <= 0) {

    console.log(`oggi non fa freddo`);
    
    
} else if (temperatura < 20) {

    console.log(`non ci sono piu le mezze stagioni`);
    
    
} else if (temperatura < 30) {

    console.log(`mi dia qualcosa da bere`);
    
    
} else {

    console.log(`lu sole lu mare lu ientu`);
    
    
}  */ 



    let description;


    switch (true) {
        case temperatura <= -10:
            description = `copriti, fa molto freddo`
             break;


        case temperatura <= 0:
            description = `oggi non fa molto freddo`
            break;

        case temperatura < 20:
            description = `non ci stanno le mezze stagione`
            break;

        case temperatura < 30:
            description = `mi dia da bere`
            break;


        
    
    
    
        default:
              description = `lu mare , lu sole, lu ientu`


        
    }


    console.log(description);
    