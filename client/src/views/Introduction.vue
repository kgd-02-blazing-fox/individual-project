<template>
    <div class="container border border-white mt-5">
        <div class="jumbotron text-center mt-5 border">
            <h1 class="display-4">Welcome to the Arnold's Shopping Spree!</h1>
            <p class="lead">Anything you bought here will be paid by Mr.Arnold himself!</p>
            <img src="https://i.ibb.co/VQKDCjQ/Arnold.jpg" alt="Mr.Arnold" class="rounded-circle" style="height: 10em;">
            <p>The man himself, Mr. Arnold</p>
            <p class="lead">
                <router-link to="/shop">Go in!</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style>

</style>
