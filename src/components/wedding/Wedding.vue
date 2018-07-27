<template>
    <v-container>
        <p>Under Construction</p>
        <img class="self" src="../../assets/wedding/Anna.jpg">
        <img class="self" src="../../assets/wedding/Harrison.jpg">
    </v-container>
</template>


<script>
export default {
    data () {
        return {
            images: [
            {
                id: 'wedding-outside',
                path: require("../../assets/wedding/wedding-couple-outside.jpg")
            }
            ]
        }
    }
}
</script>

<style>



.self{
    max-height: 400px;
    min-height: 100px;
    padding: 1%;
}

</style>

