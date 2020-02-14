import { showResultsByName, showResultsByIssue } from './doctor-interface.js/index.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#name-search").submit(function(event) {
    event.preventDefault();
    showResultsByName();
  });
  $("form#issue-search").submit(function(event) {
    event.preventDefault();
    showResultsByIssue();
  });
});