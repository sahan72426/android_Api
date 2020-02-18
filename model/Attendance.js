const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const AttendanceSchema = new mongoose.Schema({

   date: {
       type:String
   },

    rnumber: { // column name
        type: String   //data type String
    },

        stdimage: { // column name
            type: String   //data type String
        },
        
        rclass: { // column name
            type: String   //data type String
        },

        name: { // column name
            type: String   //data type String
        },
        present: { // column name
            type: Boolean  //data type boolean
        },
        absent: { // column name
            type: Boolean   //data type boolean
        },

        studentid : {
            type : Schema.Types.ObjectId,
            ref : "Student"
        }
       
    })

   
  

            
        
        const Attendance= mongoose.model('Attendance',AttendanceSchema)
    

    module.exports = Attendance 
 