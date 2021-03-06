import "./imported/accordion"
import "./imported/action-plans"
import "./imported/add-empty"
import "./imported/alerts"
// import "./imported/application"
import "./imported/boc-notes"
import "./imported/clickable-row"
import "./imported/clients-needing-appointment"
import "./imported/eligibility"
import "./imported/featured-vacancies"
import "./imported/filterrific-browser-history"
// import "./imported/form-helper"
// import "./imported/hub-maps.js.erb"
import "./imported/mobile-nav"
import "./imported/parralax"
import "./imported/print-page"
import "./imported/public"
import "./imported/remove-advisors"
import "./imported/show-achievement"
import "./imported/show-others"
// import "./imported/slider"
import "./imported/upload"
import "./imported/validate"
import "./imported/warn-unsaved"

import { initMaps } from "./_maps"
import { initSliders } from "./_sliders"

window.addEventListener("DOMContentLoaded", () => {
    initMaps()
    initSliders()
})