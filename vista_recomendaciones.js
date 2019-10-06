//Here we create a connection with the database
connection = new mongo();
db = connection.getDB("test_01");

var busqueda = "YPF";

db.inversiones.aggregate([
    //Find the document with the name we want to look for
    { $match: { nombre: busqueda } },
    //Unwind the array with nested objects
    { $unwind: "$recomendaciones" }, 
    //Create a group using the autor name as id and counting 1 each occurence
    { $group: { _id: "$recomendaciones.autor", total: {$sum: 1}} },
    { $sort: { total: -1 } }, //Sort it
    { $project: { _id1:1, total: 1 } }, //Shows the resultss
    { $limit: 1 } //Limit the result
]);

//alert("xd");
    