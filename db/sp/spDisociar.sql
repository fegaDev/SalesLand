DELIMITER $$

CREATE PROCEDURE sp_disociar(encryption_key VARCHAR(50))
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE field_name VARCHAR(50);
    DECLARE data_to_encrypt TEXT;
    DECLARE cur CURSOR FOR
        SELECT campo, tipo
        FROM AUX_DISOCIAR
        UNION
        SELECT acd.campo, acd.tipo
        FROM AUX_CAMPANA_DISOCIAR acd
        INNER JOIN AUX_CAMPANAS ac ON acd.campana = ac.IDENT;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO field_name, data_to_encrypt;
        IF done = 1 THEN
            LEAVE read_loop;
        END IF;
    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;