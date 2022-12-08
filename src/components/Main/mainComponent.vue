<template>
    <div>
        <mainPage />
        <services-component/>
        <reviews-component />
        <our-client-component />
    </div>
</template>

<script>
import  mainPage from '@/components/Main/mainPage'
import ServicesComponent from '../Services/servicesComponent.vue';
import ReviewsComponent from '../Reviews/reviewsComponent.vue';
import OurClientComponent from '../ourClient/ourClientComponent.vue';
export default {
    components: {
        mainPage,
        ServicesComponent,
        ReviewsComponent,
        OurClientComponent
    }
};
</script>

<style>
</style>