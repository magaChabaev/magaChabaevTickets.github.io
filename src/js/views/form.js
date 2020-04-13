import {
  getAutocompleteInstance,
  getDatePickerInstance,
} from "../plugins/materialize";

class FormUI {
  constructor(autocompleteInstance, datePickerInstance) {
    this._form = document.forms["locationControls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    this.originAutocomplete = autocompleteInstance(this.origin);
    this.destinationAutocomplete = autocompleteInstance(this.destination);
    this.departDatePicker = datePickerInstance(this.depart);
    this.returnDatePicker = datePickerInstance(this.return);
  }
  get form() {
    return this._form;
  }
  get originValue() {
    return this.origin.value;
  }
  get destinationValue() {
    return this.destination.value;
  }
  get departValue() {
    return this.departDatePicker.toString();
  }
  get returnValue() {
    return this.returnDatePicker.toString();
  }

  setAutocomplete(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUi = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUi;
