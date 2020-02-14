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
      $("#search-inputs").hide();
      if (nameResponse === false) {
        $("#output").append(`<h3>There was an error. <a href='index.html'>Click here</a> to try again.</h3>`);
      } else if (nameResponse.data.length === 0) {
        $("#output").append(`<h3>Unfortunately, there are no Portland, OR area doctors matching your search criteria. <a href='index.html'>Click here</a> to try another search.</h3>`);
      } else if (nameResponse.data.length > 0) {
        nameResponse.data.forEach(function(doctor) {
          let acceptingNewPatients;
          if (doctor.practices[0].accepts_new_patients === true) {
            acceptingNewPatients = "Accepting new patients";
          } else {
            acceptingNewPatients = "Not accepting new patients";
          }
          let secondLineAddress;
          if (doctor.practices[0].visit_address.street2) {
            secondLineAddress = doctor.practices[0].visit_address.street2;
          } else {
            secondLineAddress = "";
          }
          $("ol#name-results").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}<ul><li>Clinic address: ${doctor.practices[0].visit_address.street} ${secondLineAddress} ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</li><li>${acceptingNewPatients}</li><li>Phone Number: ${doctor.practices[0].phones[0].number}</li><li>Website: </li></ul></li>`);
        });
        $("#output").append("<a href='index.html'>Click here to search again</a>");
        $("ol#name-results").show();
      }
    };
  });

  // $("form#issue-search").submit(function(event) {
  //   event.preventDefault();
  //   const inputIssue = $("input#issue").val();

  //   (async () => {
  //     let doctorIssueService = new DoctorService();
  //     const issueResponse = await doctorIssueService.getDoctorsByIssue(inputIssue);
  //     getElementsByIssue(issueResponse);
  //   })();

  //   const getElementsByIssue = function(issueResponse) {
  //     // add logic for function here.
  //   };
  // });
});