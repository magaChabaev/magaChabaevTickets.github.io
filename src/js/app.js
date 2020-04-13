import "./plugins";
import "../css/style.css";
import locations from "./store/locations";
import formUi from "./views/form";
import ticketsUi from "./views/tickets";
import currencyUi from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
  initApp();

  const form = formUi.form;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  async function initApp() {
    await locations.init();
    formUi.setAutocomplete(locations.shortCitiesList);
  }
  async function onFormSubmit() {
    const origin = locations.getCityCodeByKey(formUi.originValue);
    const destination = locations.getCityCodeByKey(formUi.destinationValue);
    const depart_date = formUi.departValue;
    const return_date = formUi.returnValue;
    const currency = currencyUi.currencyValue;
    console.log(origin, destination, depart_date, return_date);
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    ticketsUi.renderTickets(locations.lastSearch);
  }
});
