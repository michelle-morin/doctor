import { DoctorService } from './doctor-service';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
  $("form#name-search").submit(function(event) {
    event.preventDefault();
    const inputName = $("input#name").val();

    (async () => {
      let doctorNameService = new DoctorService();
      const nameResponse = await doctorNameService.getDoctorsByName(inputName);
      getElementsByName(nameResponse);
    })();

    const getElementsByName = function(nameResponse) {
      // add logic for function here.
    };
  });

  $("form#issue-search").submit(function(event) {
    event.preventDefault();
    const inputIssue = $("input#issue").val();

    (async () => {
      let doctorIssueService = new DoctorService();
      const issueResponse = await doctorIssueService.getDoctorsByIssue(inputIssue);
      getElementsByIssue(issueResponse);
    })();

    const getElementsByIssue = function(issueResponse) {
      // add logic for function here.
    };
  });
});