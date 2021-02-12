--
-- Database: `payesh_db`
--

CREATE DATABASE IF NOT EXISTS `payesh_db`;
USE `payesh_db`;


-- ENTITIES

--
-- Struttura della tabella `exam`
--

CREATE TABLE IF NOT EXISTS `exam` (
	`title` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
	`Name` varchar(130)  NOT NULL,
	`part` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`Family` varchar(130)  NOT NULL,
	`Name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation m:m _exam course - Exam
CREATE TABLE IF NOT EXISTS `course__exam` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_course` int(11)  NOT NULL REFERENCES course(_id),
    `id_Exam` int(11)  NOT NULL REFERENCES exam(_id)
);

-- relation m:m _course student - course
CREATE TABLE IF NOT EXISTS `student__course` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_student` int(11)  NOT NULL REFERENCES student(_id),
    `id_course` int(11)  NOT NULL REFERENCES course(_id)
);


