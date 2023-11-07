#BBDD

CREATE TABLE AUX_CAMPANAS (
    IDENT INT NOT NULL,
    servidor VARCHAR(50) NOT NULL,
    bbdd_report VARCHAR(50),
    IdCampana INT NOT NULL,
    sistema VARCHAR(50) NOT NULL,
    Nombre VARCHAR(50),
    activo SMALLINT,
    spcarga_ws_salesland_leads VARCHAR(50),
    admite_duplicado SMALLINT
);

CREATE TABLE AUX_DISOCIAR (
    campo VARCHAR(50) NOT NULL
);

INSERT INTO AUX_DISOCIAR (campo) VALUES
('ape1'),
('direccion'),
('email'),
('nif'),
('nombre'),
('telefono');


CREATE TABLE AUX_CAMPANA_DISOCIAR (
    campana INT NOT NULL,
    campo VARCHAR(50) NOT NULL,
    tipo VARCHAR(50)
);

CREATE TABLE AUX_PROVEEDORES (
    IDENT INT AUTO_INCREMENT PRIMARY KEY,
    cod_proveedor VARCHAR(5),
    proveedor VARCHAR(50)
);
