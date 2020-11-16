
export function numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode!=46 &&charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
export function letterOnly(event): boolean {

  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode < 47 || (charCode > 1487 && charCode < 1515) || (charCode < 123 && charCode > 57)) {
    return true
  }
  return false
}
export function validation():boolean {
  debugger
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    form.classList.add('was-validated');
      return form.checkValidity();
    
  });
  
  return validation
};


export function futureDay(event):boolean
{
  var DateChoose = event.target.value;
    var ToDate = new Date();

    if (new Date(DateChoose).getTime() <= ToDate.getTime()) {
          alert("התאריך עתידי חייב להיות גדול מהיום");
          event.target.value=null;
     }
    return true;
}