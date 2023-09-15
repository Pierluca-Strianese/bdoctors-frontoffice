import { createApp } from "vue";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import { router } from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons'

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faSquareFacebook, faSquareTwitter, faSquareInstagram, faSquareYoutube, faCaretRight, faAngleDown, faMagnifyingGlass, faSquareWhatsapp, faCcVisa, faCcMastercard, faCcPaypal, faCcApplePay, faEnvelopeCircleCheck, faMapLocationDot, faPhone, faUserDoctor, faHouse, faHospitalUser, faPenToSquare, faUser)


/* add icons to the library */
library.add()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount("#app");

