// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Payesh_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Exam
      * ------------------------------------
      */
    class Exam extends Sequelize.Model{}
    Exam.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      title: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      _exam: {
        type: Sequelize.INTEGER,
        references: {
          model: course,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "exam", timestamps: false }
    );



    /**
      * ------------------------------------
      * course
      * ------------------------------------
      */
    class course extends Sequelize.Model{}
    course.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      part: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "course", timestamps: false }
    );



    /**
      * ------------------------------------
      * student
      * ------------------------------------
      */
    class student extends Sequelize.Model{}
    student.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Family: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "student", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    course.belongsToMany(Exam, {
        through: "course__exam",
        as: "_exam",
        foreignKey: "id_course",
        otherKey: "id_Exam",
        timestamps: false
    });

    
    student.belongsToMany(course, {
        through: "student__course",
        as: "_course",
        foreignKey: "id_student",
        otherKey: "id_course",
        timestamps: false
    });

  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
