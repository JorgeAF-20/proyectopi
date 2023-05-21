

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };

const mysql = require("mysql");

const db = mysql.createPool({
  timeout: 10000,
  connectionLimit: 1000,
  connectTimeout: 10000,
  acquireTimeout: 10000,
  host: "database-pi.chiohqhzyajm.eu-west-3.rds.amazonaws.com",
  user: "Jorge_Datos",
  password: "Usuario_121",
  port: "3307",
  database: "academiajorge",
});

db.getConnection(function(err) {
  err!=null ?  console.log('error: ' + err) : console.log('BBDD conectada');
})
const sqlAsignaturas = "SELECT * FROM asignaturas";


exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.query(sqlAsignaturas, (err, result) => {
    if (err) {
      throw err
    }
    callback(null, result)
  })
};
