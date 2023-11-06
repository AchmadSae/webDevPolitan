<script>

</script>

<template>
    <div class="container">
        <div class="filter" id="cartInfo">
            <input class="form-control" type="number" placeholder="Default input" aria-label="default input example"
                v-model="maximum">
        </div>
        <div class="carts">
            <span>Filter your products by Price</span>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" v-for="item in products" :key="item.id">
                <div class="card" v-if="item.price <= Number(maximum)">
                    <!-- Konten card -->
                    <img :src="item.image" class=" card-img-top" alt="...">
                    <div class="card-body">
                        <div class="title">
                            <div class="name">
                                <h1>{{ item.price | currencyFormat }}</h1>
                                <span>{{ item.name }}</span>

                            </div>
                            <div class="addCart">
                                <button type="button" class="btn btn-warning" v-on:click="addItem()">
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

.filter {
    display: flex;
    justify-content: space-between;
}

.filter input {
    width: 5em;
    font-weight: bold;
}


.card {
    width: 20em;
}
</style>