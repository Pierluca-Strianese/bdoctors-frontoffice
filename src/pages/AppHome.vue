
<script>
import { store } from '../store.js';
// import UsersList from "../components/UsersList.vue";
import DoctorsList from "../components/DoctorsList.vue"

export default {
  name: 'AppHome',
  data() {
    return {
      store,
      doctor: null,

    }
  },
  components: {
    // UsersList,
    DoctorsList,
  },

};

</script>

<template>
  <div class="d-flex justify-content-around align-items-center flex-wrap jumbo px-5">
    <div class="d-flex flex-column justify-content-center first-col">
      <div class=" waviy">
        <h1>Benvenuto in <span class="fw-semibold">B-Doctor</span></h1>
        <!-- <span style="--i:1">B</span>
            <span style="--i:2">e</span>
            <span style="--i:3">n</span>
            <span style="--i:4">v</span>
            <span style="--i:5">e</span>
            <span style="--i:6">n</span>
            <span style="--i:7">u</span>
            <span style="--i:8">t</span>
            <span style="--i:9">o</span>
            <span style="--i">&#160;</span>
            <span style="--i:11">i</span>
            <span style="--i:12">n</span>
            <span style="--i">&#160;</span>
            <span style="--i:14">B</span>
            <span style="--i">-</span>
            <span style="--i:16">D</span>
            <span style="--i:17">o</span>
            <span style="--i:18">c</span>
            <span style="--i:19">t</span>
            <span style="--i:20">o</span>
            <span style="--i:21">r</span>
            <span style="--i">!</span> -->
      </div>

      <div>
        <p class="mb-4 "> Cerca qui il medico che fa per te tra centinaia di Specialisti e
          Medici di Medicina Generale
        </p>
      </div>
      <div>
        <button class="text-center show-doc">
          <router-link :to="{ name: 'user.index' }" class="nav-link active">
            <span class="">Mostra tutti i Dottori</span>
          </router-link>
        </button>
      </div>
    </div>
    <!-- <div class="col-5 jumbotron"> </div> -->
    <section class="pt-5">
      <div class="container p-3 mx-auto">
        <div class="row justify-content-center">
          <div
            class="info-card col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column justify-content-center">
              <font-awesome-icon :icon="['fas', 'user-doctor']" class="icon_doctor" />
              <h5 class="mb-4">
                Trova il dottore adatto a te!
              </h5>
            </div>
            <p>
              Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
              scopri la vasta scelta di dottori offerti dal nostro sito.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <font-awesome-icon :icon="['fas', 'hospital-user']" class="icon_doctor" />
              <h5 class="mb-4">
                Prenota la tua visita!
              </h5>
            </div>
            <p>
              Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio ad uno dei nostri dottori
              per avere informazioni e prenotare un appuntamento.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <font-awesome-icon :icon="['fas', 'pen-to-square']" class="icon_doctor" />
              <h5 class="mb-4">
                Lascia la tua recensione!
              </h5>
            </div>
            <p>
              Oltre a poter leggere le recensioni di altri pazienti, avrai la possibilità
              di inserire la tua personale recensione per farci sapere la tua opinione sulla visita effettuate.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="main-home border-top">

  </div>


  <div class="section_two">
    <h2 class="pt-4 text-center "> Medici in evidenza </h2>
    <div class="doctor_list">
      <!-- <UsersList /> -->
      <DoctorsList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/partials/_variables.scss';
@import '../style/general.scss';

.jumbo {
  color: $main-color;
  padding-top: 7vh;
  min-height: 100vh;
  background-image: url(../assets/img/background.jpg);
  background-size: cover;
}

.jumbotron {
  background-image: url(../assets/img/doc3jumbonobg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  height: 100%;
}

.first-col {
  height: 40vh;
  width: 100vw;

  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}

.container {
  height: 100%;
}

.doctor_list {
  margin-inline: auto;
  width: 80vw;
}

.row {
  height: 100%;
}

.show-doc {
  outline: none;
  width: fit-content;
  height: fit-content;
  padding: .7rem 1.5rem;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid $main-color;
  transition: all 0.1s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
}

button:hover {
  box-shadow: 0 1px 1px 1px #FCFCFC, 0 1px 1px #00bdcd, 0 -1px 1px #CECFD1, 0 -1px 1px #00bdcd, inset 0 0 1px 1px #CECFD1;
}

button:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

// button:focus {
//   box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
// }

.icon_doctor {
  font-size: 2.5rem;
  margin: .8rem;
}


.waviy {
  position: relative;
}

.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  animation: flip 1s;
  animation-delay: calc(.2s * var(--i))
}

@keyframes flip {

  0%,
  80% {
    transform: rotateY(360deg)
  }
}

@media (max-width: 1010px) {

  .doctor_list {
    margin-inline: auto;
    width: 90vw;
  }

  .jumbo {
    background-image: url(../assets/img/background_2.jpeg);
    background-size: contain;

  }

  h1 {
    margin-bottom: 3rem;
  }

  .jumbotron {
    display: none;
  }

  .first-col {
    height: 90vh;

    div {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  .show-doc {
    padding: .2rem 1rem;
  }
}
</style>
