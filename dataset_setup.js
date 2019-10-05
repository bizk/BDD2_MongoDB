connection = new mongo();
db = connection.getDB("test_01");

var inversiones_data = [
    {
        nombre: "YPF",
        tipo: "Accion",
        fdc: new Date(2018,4,20,0,0),
        precioActuak: NumberDecimal("42151.13"),
        precioCompra: NumberDecimal("2162.14"),
        valorHistorico: [
            {
                fecha: new Date(2019,10,1,0,0),
                precio: NumberDecimal("4124.0"),
            },
            {
                fecha: new Date(2019,9,1,0,0),
                precio: NumberDecimal("324.0"),
            },
            {
                fecha: new Date(2019,8,1,0,0),
                precio: NumberDecimal("1000.50"),
            },
            {
                fecha: new Date(2019,7,1,0,0),
                precio: NumberDecimal("5124.0"),
            },
            {
                fecha: new Date(2019,6,1,0,0),
                precio: NumberDecimal("4125.0"),
            },
            {
                fecha: new Date(2019,5,1,0,0),
                precio: NumberDecimal("524.0"),
            },
            {
                fecha: new Date(2019,4,1,0,0),
                precio: NumberDecimal("124.0"),
            },
        ],
        operaciones: [
            {
                fecha: new Date(2019,4,15,0,0),
                tipo: "Compra",
            },
            {
                fecha: new Date(2019,7,12,0,0),
                tipo: "Venta",
            },
        ]
    },
    {
        nombre: "GOOGLE",
        tipo: "Bono",
        fdc: new Date(2008,3,14,0,0),
        precioActuak: NumberDecimal("1090897.24"),
        precioCompra: NumberDecimal("300.00"),
        valorHistorico: [
            {
                fecha: new Date(2019,10,1,0,0),
                precio: NumberDecimal("4423254.0"),
            },
            {
                fecha: new Date(2019,9,1,0,0),
                precio: NumberDecimal("241314.0"),
            },
            {
                fecha: new Date(2019,8,1,0,0),
                precio: NumberDecimal("10024150.50"),
            },
            {
                fecha: new Date(2019,7,1,0,0),
                precio: NumberDecimal("51235354.0"),
            },
            {
                fecha: new Date(2019,6,1,0,0),
                precio: NumberDecimal("244125.0"),
            },
            {
                fecha: new Date(2019,5,1,0,0),
                precio: NumberDecimal("5224244.0"),
            },
            {
                fecha: new Date(2019,4,1,0,0),
                precio: NumberDecimal("12243224.0"),
            },
        ],
        operaciones: [
            {
                fecha: new Date(2017,3,25,0,0),
                tipo: "Compra",
            }
        ]
    }
]

db.inversiones.insert(inversiones_data);