# BDD2_MongoDB

**vista_operaciones.js**

-1 from the shell run the command `mongo < vista_operaciones.js`

**vista_recomendaciones.js** 
1. get into mongo terminal by typing in the shell `mongo`
2, set the database `use test_01`
3. set the input `var busqueda = "[anything]"`
4. copy the text from vista_recomendaciones.js file and press enter
`db.inversiones.aggregate([
    { $match: { nombre: busqueda } },
    { $unwind: "$recomendaciones" }, 
    { $group: { _id: "$recomendaciones.autor", total: {$sum: 1}} },
    { $sort: { total: -1 } },
    { $project: { _id1:1, total: 1 } }, 
    { $limit: 1 }
])`

**vista_inversiones.js** 
1. get into mongo terminal by typing in the shell `mongo`
2, set the database `use test_01`
3. set this command and press enter `var cantInversiones = db.inversiones.count();`
4. set the input (any date) `var fechaLimite = new Date(xxxx,x,x,0,0);` replace with the date yyyy/mm/dd
5. copy the text from vista_inversiones.js file and press enter
`db.inversiones.aggregate([
    { $unwind: "$valorHistorico" },
    { $match: {
             "valorHistorico.fecha": {$gte:  fechaLimite},
        }
    },
    { $sort: { "valorHistorico.fecha": 1 }},
    { $project: {
            nombre: 1,    
            tipo: 1,
            "Valor de fecha": 1,
            "Fecha": "$valorHistorico.fecha",
            "Valor actal": "$precioActual",
            valorHistorico: "$valorHistorico.precio",
            ganancia: {$subtract: ["$precioActual", '$valorHistorico.precio']}
        }
    },
    { $limit: cantInversiones },
    { $sort: { ganancia: -1}},
    { $limit: 1}
]).pretty();
`
