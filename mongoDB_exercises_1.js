// -------------------------------- // --------------------------------
// ACTIVITY:
// CREAR "TABLA":
db.createCollection("users");
// INSERTAR DATOS EN LA TABLA:
db.users.insertMany([
    {
        nombres: "machado",
        apellidos: "mr.smart",
        correo: "machado@example.com",
        ciudad : "Madrid",
        país : "España",
        salario : 1000,
        edad : 24,
        altura : 1.70,
        peso : 125,
    },
    {
        nombres: "Sofía",
        apellidos: "Rojas",
        correo: "sofia@example.com",
        ciudad: "New York",
        país: "Estados Unidos",
        salario: 1900,
        edad: 28,
        altura: 1.69,
        peso: 145
    },
    {
        nombres: "David",
        apellidos: "Santana",
        correo: "david@example.com",
        ciudad: "Londres",
        país: "Inglaterra",
        salario: 2200,
        edad: 30,
        altura: 1.77,
        peso: 160
    },
    {
        nombres: "Carlos",
        apellidos: "Sánchez",
        correo: "carlos@example.com",
        ciudad: "Londres",
        país: "Inglaterra",
        salario: 1500,
        edad: 30,
        altura: 1.75,
        peso: 150
    }, 
    {
        nombres: "María",
        apellidos: "López",
        correo: "maria@example.com",
        ciudad: "Perth",
        país: "Australia",
        salario: 2000,
        edad: 28,
        altura: 1.65,
        peso: 145
    },
    {
        nombres: "Juan",
        apellidos: "Martínez",
        correo: "juan@example.com",
        ciudad: "Toronto",
        país: "Canadá",
        salario: 1800,
        edad: 35,
        altura: 1.80,
        peso: 160
    }, 
    {
        nombres: "Laura",
        apellidos: "Gómez",
        correo: "laura@example.com",
        ciudad: "Otawwa",
        país: "Canadá",
        salario: 1200,
        edad: 26,
        altura: 1.68,
        peso: 185
    },
    {
        nombres: "Andrés",
        apellidos: "Hernández",
        correo: "andres@example.com",
        ciudad: "Cartagena",
        país: "Colombia",
        salario: 2200,
        edad: 32,
        altura: 1.76,
        peso: 155
    },    
    {
        nombres: "Ana",
        apellidos: "Ramírez",
        correo: "ana@example.com",
        ciudad: "Roma",
        país: "Italia",
        salario: 1700,
        edad: 29,
        altura: 1.63,
        peso: 135
    },
    {
        nombres: "Diego",
        apellidos: "Pérez",
        correo: "diego@example.com",
        ciudad: "París",
        país: "Francia",
        salario: 1900,
        edad: 28,
        altura: 1.82,
        peso: 170
    },
    {
        nombres: "Paola",
        apellidos: "Martínez",
        correo: "paola@example.com",
        ciudad: "Río de Janeiro",
        país: "Brasil",
        salario: 1600,
        edad: 27,
        altura: 1.70,
        peso: 119
    },
    {
        nombres: "Santiago",
        apellidos: "García",
        correo: "santiago@example.com",
        ciudad: "Buenos Aires",
        país: "Argentina",
        salario: 2100,
        edad: 24,
        altura: 1.79,
        peso: 155
    },  
    {
        nombres: "Diana",
        apellidos: "Suárez",
        correo: "diana@example.com",
        ciudad: "Berlín",
        país: "Alemania",
        salario: 1300,
        edad: 25,
        altura: 1.65,
        peso: 120
    },
    {
        nombres: "Camilo",
        apellidos: "Morales",
        correo: "camilo@example.com",
        ciudad: "Pasto",
        país: "Colombia",
        salario: 1400,
        edad: 27,
        altura: 1.69,
        peso: 140
    },   
    {
        nombres: "Valentina",
        apellidos: "Díaz",
        correo: "valentina@example.com",
        ciudad: "Mumbai",
        país: "India",
        edad: 30,
        altura: 1.68,
        peso: 135
    },
    {
        nombres: "Andrea",
        apellidos: "Ortiz",
        correo: "andrea@example.com",
        ciudad: "Villavicencio",
        país: "Colombia",
        salario: 2500,
        edad: 28,
        altura: 1.72,
        peso: 150
    },
    {
        nombres: "Felipe",
        apellidos: "Giraldo",
        correo: "felipe@example.com",
        ciudad: "Cúcuta",
        país: "Colombia",
        salario: 2300,
        edad: 14,
        altura: 1.78,
        peso: 125
    },
    {
        nombres: "Natalia",
        apellidos: "Vargas",
        correo: "natalia@example.com",
        ciudad: "Oxford",
        país: "Inglaterra",
        salario: 2000,
        edad: 29,
        altura: 1.67,
        peso: 140
    },
    {
        nombres: "Sebastián",
        apellidos: "Muñoz",
        correo: "sebastian@example.com",
        ciudad: "Brasília",
        país: "Brasil",
        salario: 1700,
        edad: 26,
        altura: 1.75,
        peso: 155
    },
    {
        nombres: "Carolina",
        apellidos: "Restrepo",
        correo: "carolina@example.com",
        ciudad: "Tunja",
        país: "Colombia",
        salario: 1500,
        edad: 31,
        altura: 1.68,
        peso: 135
    },
    {
        nombres: "Mateo",
        apellidos: "Castro",
        ciudad: "Montería",
        país: "Colombia",
        salario: 2100,
        edad: 33,
        altura: 1.80,
        peso: 170
    }
]
);
// 1. Obtener todos los usuarios que sean mayores de 18 años:
// MAYOR QUE: {$gt: 20}
db.users.find({edad: {$gt: 18}});
// 2. Obtener todos los usuarios que sean de Londres o de París:
db.users.find({ciudad: {$in: ["Londres", "París"]}});
// 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años:
db.users.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });
// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes:
db.users.find({ país: "España", salario: { $gt: 3000 } });
// 5. Obtener todos los usuarios que tengan entre 18 y 25 años:
db.users.find(
    {$and:
        [
            {edad: {$gte: 18}},
            {edad: {$lte: 25}}
        ]
    }
);
// 6. Obtener a todos los usuarios que no sean de Estados Unidos:
db.users.find({ciudad: {$nin: ["Estados Unidos"]}});
// 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años:
db.users.find(
    {$or:
        [
            {ciudad: "Londres", salario: {$gt: 2500}},
            {edad: {$gt: 30}}
        ]
    }
);
// 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras:
db.users.find(
    {$and:
        [
            {país: "Australia"},
            {peso: {$gt: 140}}
        ]
    }
);
// 9. Obtener a todos los usuarios que no sean de Londres ni de París:
db.users.find(
    {$and:
        [
            {ciudad: {$nin: ["París", "Londres"]}}
        ]
    }
);
// 2nd - Opción:
db.users.find(ciudad: {$nin: ["París", "Londres"]});
// 10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find(
    {$or: 
        [
            {salario: {$lt: 2000}},
            {edad: {$gt: 40}}
        ]
    }
);
// 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find(
    {$or:
        [
            {país: "Canadá", salario: {$gt: 4000}},
            {altura: {$gt: 1.80}}
        ]
    }
);
// 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find(
    {$and:
        [
            {país: "Italia"},
            {edad: {$gt: 20}},
            {edad: {$lt: 30}}
        ]
    }
);
// 13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({correo: {$exists: false}});
// 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find(
    {$and:
        [
            {país: "Francia"},
            {salario: {$gt: 3000}},
            {salario: {$lt: 5000}}
        ]
    }
);
// 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find(
    {$or:
        [
            {país: "Brasil", peso: {$lt: 120}},
            {país: "Brasil", peso: {$gt: 140}},
        ]
    }
);
// 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find(
    {$and:
        [
            {país: {$in: ["Argentina", "Chile"]}},
            {edad: {$lt: 25}}
        ]
    }
);
// 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find(
    {$and:
        [
            {país: {$nin: ["España", "México"]}},
            {salario: {$lt: 3000}}
        ]
    }
);
// 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find(
    {$or:
        [
            {país: "Alemania", salario: {$lt: 4000}},
            {país: "Alemania", edad: {$gt: 35}},
        ]
    }
);
// 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find(
    {$and: 
        [
            {país: {$nin: ["Colombia"]}, altura: {$lt: 170}},
        ]
    }
);
// 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find(
    {$and: 
        [
            {país: {$in: ["India"]}},
            {salario: {$exists: false}}
        ]
    }
);
