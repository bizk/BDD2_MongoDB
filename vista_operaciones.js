connection + new Mongo();
db = connection.getDB("test_01");

//db.inversiones.find().forEach(printjson);
var cantidad = db.inversiones.aggregate([
    {
        $project: {
            nombre: 1,
            numberOfColors: { $cond: { 
                if: { $isArray: "$operaciones" },
                then: { $size: "$operaciones" }, else: "NA"} }
        },
    }
]);

//db.inversiones.find();
//db.inversiones.find().sort({precioActual:1}).forEach(printjson);
db.inversiones.find(null,{nombre:1}).sort({precioActuak:-1});
// db.getCollecion("inversiones").aggregate([
//     {
//         $group: {
//             _id: null,
//             maxQuantity: {$max: "$operaciones"}
//         },
//     }
// ]);