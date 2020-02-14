import { showResultsByName, showResultsByIssue } from './doctor-interface.js';
import $ from 'jquery';

export function initializePage() {
  $("form#name-search").submit(function(event) {
    event.preventDefault();
    const inputName = $("input#name").val();
    showResultsByName(inputName);
  });
  $("form#issue-search").submit(function(event) {
    event.preventDefault();
    const inputIssue = $("input#issue").val();
    showResultsByIssue(inputIssue);
  });
}
