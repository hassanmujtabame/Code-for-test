<template>
    <div style="margin-top: 85px " class="consult">
        <div class="bg-body-page">
            <StudentExam v-if="userAcademyRole=='student'" />
            <InstructorExam v-if="userAcademyRole=='instructor'" />
                  <SendToAllParticipants/>

            </div>
            </div>
    </template>
    
    <script>
    import InstructorExam from './instructor/index';
    import StudentExam from './student/index';
import SendToAllParticipants from '../dialogs/message-participants/index'

    export default {
     name:'my-exams-page',
     components:{
        InstructorExam,
        StudentExam,
    SendToAllParticipants

     }
    }
    </script>
    
    <style>
    
    </style>