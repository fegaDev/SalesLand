CREATE TABLE tus_datos (
    id varchar(50) NOT NULL,
    codigo_proveedor VARCHAR(5) NOT NULL,
    campana INT NOT NULL,
    fecha_captacion DATETIME NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    ape1 VARCHAR(50),
    ape2 VARCHAR(50),
    nif VARCHAR(50),
    telefono INT(9)NOT NULL,
    email VARCHAR(150),
    direccion VARCHAR(50),
    codigo_postal CHAR(5),
    poblacion VARCHAR(50),
    provincia VARCHAR(50),
    acepta1 ENUM('SI', 'NO') NOT NULL,
    acepta2 ENUM('SI', 'NO'),
    acepta3 ENUM('SI', 'NO'),
    num1 INT,
    num2 INT,
    num3 INT,
    dual1 ENUM('SI', 'NO'),
    dual2 ENUM('SI', 'NO'),
    dual3 ENUM('SI', 'NO'),
    variable1 VARCHAR(50),
    variable2 VARCHAR(50),
    variable3 VARCHAR(50),
    memo TEXT,
    fecha DATE,
    horaHorahhmm TIME,
    foto1 VARCHAR(500),
    foto2 VARCHAR(500),
    comercial VARCHAR(50) NOT NULL,
    centro VARCHAR(50) NOT NULL
);