DELIMITER $$

CREATE PROCEDURE sp_vDisociados(encryption_key VARCHAR(50))
BEGIN
    SET @sql = CONCAT('SELECT * FROM vWS_LEADS_DISOCIADOS WITH (DECRYPTION_KEY = ''', encryption_key, ''');');
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END$$

DELIMITER ;