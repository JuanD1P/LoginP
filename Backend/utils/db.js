import mysql from 'mysql';

const con = mysql.createConnection({
    host: "birmhtjrkgcxakmg6uqc-mysql.services.clever-cloud.com", // Host de Clever Cloud
    user: "ulfompkq2wfmaagj", // Usuario de Clever Cloud
    password: "QfIRfXyh9vIsZOHy0aoh", // Contraseña de Clever Cloud
    database: "birmhtjrkgcxakmg6uqc", // Base de datos de Clever Cloud
    port: 3306, // Puerto de MySQL
});

con.connect((err) => {
    if (err) {
        console.log("❌ Conexión errónea:", err);
    } else {
        console.log("✅ Conexión exitosa a la base de datos");
    }
});

export default con;
