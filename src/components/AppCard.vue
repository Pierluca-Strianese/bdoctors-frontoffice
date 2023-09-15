<script>
import { store } from '../store';

export default {
    props: ['objUser'],

    data() {
        return {
            store,
            averageRating: 0,
        }
    },

    methods: {
        getImageUrl(image) {
            return image
                ? this.store.baseUrl + 'storage/' + image : this.store.baseUrl + 'storage/default.jpg'
        },
        calculateAverageRating(reviews) {
        if (reviews.length === 0) {
            return 0; // Nessuna recensione, media zero.
        }

        const totalRating = reviews.reduce((sum, review) => sum + review.valutation, 0);
        const averageRating = totalRating / reviews.length;
        
        // Limita la media a una cifra decimale dopo la virgola.
        return parseFloat(averageRating.toFixed(1));
}
    },
    computed: {
        // Usa una computed property per calcolare automaticamente la media quando le recensioni cambiano.
        averageRatingComputed() {
            return this.calculateAverageRating(this.objUser.doctor.reviews);
        }
    }
}

</script>

<template>
    <div class="container d-flex justify-content-center prova">
        <div class="card effect p-3 ">
            <div class="card__avatar px-3 pb-3 pt-2">
                <!-- FOTO DOC -->
                <img class="img-fluid shadow" :src="getImageUrl(objUser.doctor.image)" alt="">
            </div>

            <!-- NOME DOC -->
            <div class="mb-2">

                <span class="card__title lastname fw-semibold"> {{ 'Dr. ' +
                    objUser.lastname }} </span>
                <span class="card__title name fw-light"> {{ ' ' + objUser.name }} </span>
            </div>

            <!-- SPECIALIZZAZIONI DOC -->
            <div class="specialization_list mt-3">
                <div v-for="specialization in objUser.specializations" :key="specialization.id" class="btn_specialization">
                    {{ specialization.name
                    }}</div>
            </div>

            <!-- Media dei voti -->
            <div class="average-rating">
                <p>Media dei voti: <span class="fw-semibold">{{ averageRatingComputed }}</span></p>
            </div>


            <!-- BARRA SPAZIO -->
            <div class="card__wrapper border-top border-light-subtle">

                <!-- BOTTONE MOSTRA + -->
                <router-link :to="{ name: 'doctor.show', params: { slug: objUser.slug } }"
                    class="card__btn card_2 fw-semibold effect">
                    Mostra di più
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 28rem;
    width: 20rem;
    // background-color: black;
    // cursor: pointer;
}

.specialization_list {
    .btn_specialization {
        max-width: 7rem;
    }
}

.average-rating {
    font-size: .8rem;
}

.effect {
    border-radius: 30px;
    // background-image: url(../assets/img/background_card.avif);
    // background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 50px #d0d0d0;


    .card__title {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 18px;
    }

    .card__subtitle {
        margin-top: 10px;
        font-weight: 400;
        font-size: 15px;
    }

    .card__wrapper {

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 1rem;

        .card__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8rem;
            height: 2.5rem;
            border: 2px solid $main-color;
            text-decoration: none;
            border-radius: 1rem;
            font-size: .7rem;
            color: $main-color;
            background: $bg-color;
            text-transform: uppercase;
            transition: all .5s ease;

            &:hover {
                background: $main-color;
                color: $bg-color;
            }
        }

        .card_2 {
            background: $main-color;
            color: $bg-color;

            &:hover {
                background: $bg-color;
                color: $main-color;
            }
        }
    }
}

.card__avatar {
    display: flex;
    justify-content: center;
    align-items: center;

    .img-fluid {
        border-radius: 100%;
        width: 160px;
        height: 160px;
        object-fit: cover;
        object-position: center;
    }
}

.show-spec {
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    width: 150px;
    height: 50px;
    background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
    border-radius: 30px;
    border: 1px solid #8F9092;
    transition: all 0.1s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-shadow: 0 1px #fff;
}

.show-spec:hover {
    box-shadow: 0 1px 1px 1px #FCFCFC, 0 1px 1px #00bdcd, 0 -1px 1px #CECFD1, 0 -1px 1px #00bdcd, inset 0 0 1px 1px #CECFD1;
}

.show-spec:active {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}
</style>
