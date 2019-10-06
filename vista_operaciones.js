//Here we create a connection with the database
connection + new Mongo();
db = connection.getDB("test_01");

//We use the agregate function to create a pipeline to run the different filters.
var resultado = db.inversiones.aggregate([
    //Creates a cuantification out of the arrays lenght
    {
        "$project": {
            nombre: 1,
            cantidadOperaciones: {
                "$size": "$operaciones"
            }
        }
    },
    //Sorts the created array
    {
        $sort: {
            cantidadOperaciones: -1
        }
    },
    //Project the result
    {
        $project: {
            _id: 0, //This wont show the id
            nombre: 1,
            cantidadOperaciones: 1,
        }
    },
    //We limit to one (THe one wuith the most operations)
    {
        $limit: 1
    }
]).pretty();
printjson(resultado);
//.pretty() returns json like strings.