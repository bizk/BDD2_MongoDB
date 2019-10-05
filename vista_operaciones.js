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

db.inversiones.aggregate([
    //Creates a cuantification out of the arrays lenght
    {"$project": {
        nombre:1,
        cantidadOperaciones: {"$size":"$operaciones"}
    }},
    //Sorts the created array
    {$sort:{cantidadOperaciones: -1}},
    //Project again 
    {$project: {
        nombre:1,
        cantidadOperaciones:1,
    }}
])
