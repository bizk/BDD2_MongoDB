connection = new mongo();
db = connection.getDB("test_01");

var inversiones_data = [{
        nombre: "YPF",
        tipo: "Accion",
        fdc: new Date(2018, 4, 20, 0, 0),
        precioActual: 42151.13,
        precioCompra: 2162.14,
        valorHistorico: [
            {
                fecha: new Date(2019, 10, 1, 0, 0),
                precio: 4124.0,
            },
            {
                fecha: new Date(2019, 9, 1, 0, 0),
                precio: 324.0,
            },
            {
                fecha: new Date(2019, 8, 1, 0, 0),
                precio: 1000.50,
            },
            {
                fecha: new Date(2019, 7, 1, 0, 0),
                precio: 5124.0,
            },
            {
                fecha: new Date(2019, 6, 1, 0, 0),
                precio: 4125.0,
            },
            {
                fecha: new Date(2019, 5, 1, 0, 0),
                precio: 524.0,
            },
            {
                fecha: new Date(2019, 4, 1, 0, 0),
                precio: 124.0,
            },
        ],
        operaciones: [
            {
                importe: 421.123,
                asesor: "Escala, Federico",
                operador: "Parodi, Ignacio",
                fecha: new Date(2019, 4, 15, 0, 0),
                tipo: "Compra",
            },
            {
                importe: 534.32,
                asesor: "Pomerantz, lucio",
                operador: "Parodi, Ignacio",
                fecha: new Date(2019, 7, 12, 0, 0),
                tipo: "Venta",
            },
        ],
        recomendaciones: [{
                autor: "Roitman, Axel",
                fecha: new Date(2019, 06, 10, 0, 0),
                situacionActual: "La situacion actual es compleja deberiamos vender",
                factoresExternos: "Las otras petroleras estn en bajada.",
                futuro: "puede que la accion pierda valor.",
                recomendacion: "Vender"
            },
            {
                autor: "Pomerantz, lucio",
                fecha: new Date(2019, 06, 08, 0, 0),
                situacionActual: "La situacion actual es compleja deberiamos vender",
                factoresExternos: "Las otras petroleras estn en bajada.",
                futuro: "puede que la accion pierda valor.",
                recomendacion: "Vender"
            },
            {
                autor: "Roitman, Axel",
                fecha: new Date(2019, 06, 02, 0, 0),
                situacionActual: "La situacion actual es complicada",
                factoresExternos: "Las otras petroleras estn raras.",
                futuro: "puede que la accion pierda valor o que no ganemos mucho!.",
                recomendacion: "Transferir",
            },
        ]
    },

    {
        nombre: "GOOGLE",
        tipo: "Bono",
        fdc: new Date(2008, 3, 14, 0, 0),
        precioActual: 1090897.24,
        precioCompra: 300.00,
        valorHistorico: [{
                fecha: new Date(2019, 10, 1, 0, 0),
                precio: NumberDecimal("4423254.0"),
            },
            {
                fecha: new Date(2019, 9, 1, 0, 0),
                precio: 241314.0,
            },
            {
                fecha: new Date(2019, 8, 1, 0, 0),
                precio:10024150.50,
            },
            {
                fecha: new Date(2019, 7, 1, 0, 0),
                precio: 51235354.0,
            },
            {
                fecha: new Date(2019, 6, 1, 0, 0),
                precio: 244125.0,
            },
            {
                fecha: new Date(2019, 5, 1, 0, 0),
                precio: 5224244.0,
            },
            {
                fecha: new Date(2019, 4, 1, 0, 0),
                precio: 12243224.0,
            },
        ],
        operaciones: [{
            importe: 645.70,
            asesor: "Pomerantz, lucio",
            operador: "Parodi, Ignacio",
            fecha: new Date(2017, 3, 25, 0, 0),
            tipo: "Compra",
        }],
        recomendaciones: [{
                autor: "Pomerantz, luciom",
                fecha: new Date(2017, 3, 25, 0, 0),
                situacionActual: "La situacion es predecible, compremos!",
                factoresExternos: "Los bonos de este tipo estan en alza!.",
                futuro: "EL valor de dicho bono va a subir.",
                recomendacion: "Comprar"
            },
            {
                autor: "Roitman, Axel",
                fecha: new Date(2019, 06, 08, 0, 0),
                situacionActual: "La situacion actual es compleja deberiamos vender",
                factoresExternos: "Las otras petroleras estn en bajada.",
                futuro: "puede que la accion pierda valor.",
                recomendacion: "Vender"
            },
                        {
                autor: "Roitman, Axel",
                fecha: new Date(2019, 06, 08, 0, 0),
                situacionActual: "La situacion actual es compleja deberiamos vender",
                factoresExternos: "Las otras petroleras estn en bajada.",
                futuro: "puede que la accion pierda valor.",
                recomendacion: "Vender"
            },
        ]
    }
]

db.inversiones.insert(inversiones_data);