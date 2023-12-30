<script>
    
</script>

<template>
    <div class="container">
        <div class="row">
        <div class="filter col-sm-4" id="cartInfo" >
            <label for="" class="font-weight-bold mr-2">Price Set</label>
            <input class="form-control" type="number" placeholder="Default input" aria-label="default input example"
                v-model="maximum">
        </div>
        <div class="slider col-sm-8">
            <input type="range"  class="custome-range mr-auto" min="0" max="200" v-model="maximum">
        </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" v-for="item in products" :key="item.id">
                <div class="card" v-if="item.price <= Number(maximum)">
                    <!-- Konten card -->
                    <img :src="item.image" class=" card-img-top" alt="...">
                    <div class="card-body">
                        <div class="title">
                            <div class="name">
                                <h1>{{ currencyFormat(item.price) }}</h1>
                                <span>{{ item.name }}</span>

                            </div>
                            <div class="addCart">
                                <button type="button" class="btn btn-warning" @click="addToCart(item)">
                                    <Icon icon="icon-park-solid:shopping-cart-add" width="25" />
                                </button>
                            </div>
                        </div>
                        <p class="card-text">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-body .title {
    display: flex;
    justify-content: space-between;
}

.card-body .title span {
    font-family: sans-serif;
    font-weight: 500;

}

.card-body .title .addCart button {
    color: white;
}

.filter label {
    font-weight: bold;
    margin-bottom: 0.5em;
}

.filter input {
    text-align: center;
    width: 5em;
    font-weight: bold;
}
.slider input{
    width: 100%;
    padding: 2em;
}

.card {
    width: 20em;
}
</style>