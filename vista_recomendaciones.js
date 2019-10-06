db.inversiones.aggregate([
    { $match: { nombre: busqueda } },
    { $unwind: "$recomendaciones" }, 
    { $group: { _id: "$recomendaciones.autor", total: {$sum: 1}} },
    { $sort: { total: -1 } },
    { $project: { _id1:1, total: 1 } }, 
    { $limit: 1 }
])