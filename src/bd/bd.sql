-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gd
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd` DEFAULT CHARACTER SET utf8 ;
USE `bd` ;


CREATE TABLE `bd`.`empleados` (
  `Id_empleado` INT NOT NULL AUTO_INCREMENT,
  `Doc_identidad` VARCHAR(45) NULL,
  `Nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_empleado`));



CREATE TABLE `bd`.`cuadrillas` (
  `Id_cuadrillas` INT NOT NULL AUTO_INCREMENT,
  `Doc_identidad` INT NULL,
  `Evento` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_cuadrillas`),
  INDEX `Doc_identidad_cuadrillas_fk_idx` (`Doc_identidad` ASC) ,
  CONSTRAINT `Doc_identidad_cuadrillas_fk`
    FOREIGN KEY (`Doc_identidad`)
    REFERENCES `bd`.`empleados` (`Id_empleado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `bd`.`cuadrillas`
ADD COLUMN `Descripcion` VARCHAR(45) NULL AFTER `Id_Evento`,
CHANGE COLUMN `Evento` `Id_Evento` INT NULL DEFAULT NULL ;


CREATE TABLE `bd`.`eventos` (
  `Id_eventos` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`Id_eventos`));

ALTER TABLE `bd`.`cuadrillas` 
ADD INDEX `Id_eventos_cuadrillas_fk_idx` (`Id_eventos` ASC) ;
;
ALTER TABLE `bd`.`cuadrillas` 
ADD CONSTRAINT `Id_eventos_cuadrillas_fk`
  FOREIGN KEY (`Id_eventos`)
  REFERENCES `bd`.`eventos` (`Id_eventos`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

