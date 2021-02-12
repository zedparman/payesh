--
-- Database: payesh_db
--

CREATE DATABASE payesh_db;

-- ENTITIES

--
-- Schema entity exam
--

CREATE TABLE IF NOT EXISTS "exam" (
	title varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity course
--

CREATE TABLE IF NOT EXISTS "course" (
	Name varchar(130)  NOT NULL,
	part varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity student
--

CREATE TABLE IF NOT EXISTS "student" (
	Family varchar(130)  NOT NULL,
	Name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);




-- relation m:m _exam course - Exam
CREATE TABLE IF NOT EXISTS "course__exam" (
    _id SERIAL PRIMARY KEY,
    id_course INTEGER  NOT NULL REFERENCES "course"(_id),
    id_Exam INTEGER  NOT NULL REFERENCES "exam"(_id)
);

-- relation m:m _course student - course
CREATE TABLE IF NOT EXISTS "student__course" (
    _id SERIAL PRIMARY KEY,
    id_student INTEGER  NOT NULL REFERENCES "student"(_id),
    id_course INTEGER  NOT NULL REFERENCES "course"(_id)
);
