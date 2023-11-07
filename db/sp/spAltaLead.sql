DELIMITER $$

CREATE PROCEDURE sp_AltaLead(
    IN json_data TEXT, 
    IN campana INT,
	
)
BEGIN
    DECLARE error_message TEXT;
    DECLARE server_encryption_key TEXT;
    SELECT spcarga_ws_salesland_leads INTO @carga_procedure
    FROM AUX_CAMPANAS
    WHERE IdCampana = campana;
    SET @sql = CONCAT('CALL ', @carga_procedure, '(', json_data, ');');
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

    CALL sp_Disociar(server_encryption_key);

END$$

