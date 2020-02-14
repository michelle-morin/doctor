export class DoctorService {
  async getDoctorsByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=25&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      } else {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
  async getDoctorsByIssue(issue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=50&user_key=${process.env.API_KEY}`);
      if (response.status != 200 || response.ok != true) {
        return false;
      } else {
        let jsonifiedResponse = response.json();
        return jsonifiedResponse;
      }
    } catch(error) {
      return false;
    }
  }
}