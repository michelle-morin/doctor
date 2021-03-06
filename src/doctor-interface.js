import { DoctorService } from './doctor-service';
import $ from 'jquery';

export function showResultsByName(inputName) {
  $("ol#results").empty();
  (async () => {
    let doctorNameService = new DoctorService();
    const nameResponse = await doctorNameService.getDoctorsByName(inputName);
    getElementsByName(nameResponse);
  })();
  const getElementsByName = function(nameResponse) {
    $("#search-inputs").hide();
    if (nameResponse === false) {
      $("h3").html("There was an error retrieving search results. Please try again.");
    } else if (nameResponse.data.length === 0) {
      $("h3").html("Unfortunately, there are no Portland, OR area doctors matching your search criteria.");
    } else if (nameResponse.data.length > 0) {
      $("h3").html("The following matched your search query:");
      nameResponse.data.forEach(function(doctor) {
        let portlandPractice = {};
        if (doctor.practices.length === 1) {
          portlandPractice = doctor.practices[0];
        } else {
          for (let i=0; i<doctor.practices.length; i++) {
            if (doctor.practices[i].location_slug === "or-portland") {
              portlandPractice = doctor.practices[i];
            }
          }
        }
        let acceptingNewPatients;
        if (portlandPractice.accepts_new_patients === true) {
          acceptingNewPatients = "Accepting new patients";
        } else {
          acceptingNewPatients = "Not accepting new patients";
        }
        let secondLineAddress;
        if (portlandPractice.visit_address.street2) {
          secondLineAddress = portlandPractice.visit_address.street2;
        } else {
          secondLineAddress = "";
        }
        let resultWebsite;
        if (portlandPractice.website) {
          resultWebsite = portlandPractice.website;
        } else {
          resultWebsite = "not available";
        }
        let specialties = [];
        let specialty;
        if (doctor.specialties.length > 0) {
          for (let i=0; i<doctor.specialties.length; i++) {
            specialties.push(doctor.specialties[i].name);
          }
          specialty = specialties.join(", ");
        } else {
          specialty = "not available";
        }
        $("ol#results").append(`<li><strong>${doctor.profile.first_name} ${doctor.profile.last_name}</strong><ul><li>Clinic address: ${portlandPractice.visit_address.street} ${secondLineAddress} ${portlandPractice.visit_address.city}, ${portlandPractice.visit_address.state} ${portlandPractice.visit_address.zip}</li><li>Phone Number: ${portlandPractice.phones[0].number}</li><li>${acceptingNewPatients}</li><li>Specializes in: ${specialty}</li><li>Website: ${resultWebsite}</li></ul></li>`);
      });
    }
    $("#outputs").show();
  };
}

export function showResultsByIssue(inputIssue) {
  $("ol#results").empty();
  (async () => {
    let doctorIssueService = new DoctorService();
    const issueResponse = await doctorIssueService.getDoctorsByIssue(inputIssue);
    getElementsByIssue(issueResponse);
  })();
  const getElementsByIssue = function(issueResponse) {
    $("#search-inputs").hide();
    if (issueResponse === false) {
      $("h3").html("There was an error retrieving search results. Please try again.");
    } else if (issueResponse.data.length === 0) {
      $("h3").html("Unfortunately, there are no Portland, OR area doctors matching your search criteria.");
    } else if (issueResponse.data.length > 0) {
      $("h3").html("The following matched your search query:");
      issueResponse.data.forEach(function(doctor) {
        let portlandPractice = {};
        if (doctor.practices.length === 1) {
          portlandPractice = doctor.practices[0];
        } else {
          for (let i=0; i<doctor.practices.length; i++) {
            if (doctor.practices[i].location_slug === "or-portland") {
              portlandPractice = doctor.practices[i];
            }
          }
        }
        let acceptingNewPatients;
        if (portlandPractice.accepts_new_patients === true) {
          acceptingNewPatients = "Accepting new patients";
        } else {
          acceptingNewPatients = "Not accepting new patients";
        }
        let secondLineAddress;
        if (portlandPractice.visit_address.street2) {
          secondLineAddress = portlandPractice.visit_address.street2;
        } else {
          secondLineAddress = "";
        }
        let resultWebsite;
        if (portlandPractice.website) {
          resultWebsite = portlandPractice.website;
        } else {
          resultWebsite = "not available";
        }
        let specialties = [];
        let specialty;
        if (doctor.specialties.length > 0) {
          for (let i=0; i<doctor.specialties.length; i++) {
            specialties.push(doctor.specialties[i].name);
          }
          specialty = specialties.join(", ");
        } else {
          specialty = "not available";
        }
        $("ol#results").append(`<li><strong>${doctor.profile.first_name} ${doctor.profile.last_name}</strong><ul><li>Clinic address: ${portlandPractice.visit_address.street} ${secondLineAddress} ${portlandPractice.visit_address.city}, ${portlandPractice.visit_address.state} ${portlandPractice.visit_address.zip}</li><li>Phone Number: ${portlandPractice.phones[0].number}</li><li>${acceptingNewPatients}</li><li>Specializes in: ${specialty}</li><li>Website: ${resultWebsite}</li></ul></li>`);
      });
    }
    $("#outputs").show();
  };
}