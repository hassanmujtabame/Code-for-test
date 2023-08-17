import BaseApi from "../base-service";
class ExamsApi extends BaseApi {
	//Get all Exams
	getItem(id) {
		return window.axios.get(`academy/instructor/course-exams/${id}`);
	}
	getQuestions(exam_id) {
		return window.axios.get(
			`academy/instructor/courses/exams/${exam_id}/questions`
		);
	}
	deleteQuestion(id) {
		return window.axios.delete(
			`academy/instructor/courses/exams/questions/${id}`
		);
	}
	addQuestion(exam_id, data) {
		return window.axios.post(
			`academy/instructor/courses/exams/${exam_id}/questions`,
			data
		);
	}
	updateQuestion(question_id, data) {
		return window.axios.post(
			`academy/instructor/courses/exams/questions/${question_id}`,
			data
		);
	}
	addExam(course_id, data) {
		return window.axios.post(
			`academy/instructor/courses/${course_id}/exams`,
			data
		);
	}
	deleteExam(id) {
		return window.axios.delete(`academy/instructor/courses/exam/${id}`);
	}
	getExam(id) {
		return window.axios.get(`academy/instructor/courses/exam/${id}`);
	}
	updateExam(id, data) {
		data.append("_method", "PUT");
		return window.axios.post(`academy/instructor/course-exams/${id}`, data);
	}
	loadSettings() {
		return window.axios.get(`academy/instructor/exam-settings`);
	}
	saveSettings(data) {
		return window.axios.post(`academy/instructor/exam-settings`, data);
	}
	studentsPassExam() {
		return window.axios.get(`academy/instructor/students-pass-exam`);
	}
	studentsNotPassExam() {
		return window.axios.get(`academy/instructor/students-notpass-exam`);
	}
}

export default new ExamsApi();