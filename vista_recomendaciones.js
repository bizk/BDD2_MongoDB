db.inversiones.aggregate([
    //Match that specific action
    { $match: { nombre: busqueda } },
    { $unwind: "$recomendaciones" }, 
    //Count instances of documents in the collection
    { $group: { _id: "$recomendaciones.autor",  total: {$sum: 1}} },
    //Sort to get the highgest
    { $sort: { total: -1 } },
    //project the cuantity 
    { $project: { _id1:1, total: 1 } }, 
    //show the biggest
    { $limit: 1 }
])