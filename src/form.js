import { showResultsByName, showResultsByIssue } from './doctor-interface.js';
import $ from 'jquery';

export function initializePage() {
  $("form#name-search").submit(function(event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    if (parseFloat(inputName)) {
      $("#search-inputs").hide();
      $("h3").html("Please enter a name.");
      $("#output").show();
    } else {
      showResultsByName(inputName);
    }
  });
  $("form#issue-search").submit(function(event) {
    event.preventDefault();
    const inputIssue = $("input#issue").val();
    if (parseFloat(inputIssue)) {
      $("#search-inputs").hide();
      $("h3").html("Please enter a word containing only alphabetical characters, or multiple words each separated by a comma.");
      $("#output").show();
    } else {
      showResultsByIssue(inputIssue);
    }
  });
}
