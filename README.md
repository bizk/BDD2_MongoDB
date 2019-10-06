# BDD2_MongoDB

**vista_operaciones:**

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
