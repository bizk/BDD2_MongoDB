// Connection String
// connection = new mongo();
// db = connection.getDB("test_01");

//The date we might want to change
//var fechaLimite = new Date(2019,8,1,0,0);

//We need this in order to filter later
var cantInversiones = db.inversiones.count();
db.inversiones.aggregate([
    { $unwind: "$valorHistorico" }, //Unwind the embeeded documents
    //Match dates equal or greater than the used as input
    { $match: { 
             "valorHistorico.fecha": {$gte:  fechaLimite},
        }
    },
    //Sort starting with th closest to the input date
    { $sort: { "valorHistorico.fecha": 1 }},
    //What we will return out of this view
    { $project: {
            nombre: 1,    
            tipo: 1,
            "Valor de fecha": 1,
            "Fecha": "$valorHistorico.fecha",
            "Valor actal": "$precioActual",
            valorHistorico: "$valorHistorico.precio",
            //Calculate the difference betwen buying price and actual price
            ganancia: {$subtract: ["$precioActual", '$valorHistorico.precio']}
        }
    },
    //Limit depending on how many docuents we have
    { $limit: cantInversiones },
    //Sort thos document but getting the highest ganancias
    { $sort: { ganancia: -1}},
    //Limit to get the bigest one
    { $limit: 1}
]).pretty();
