<template>
	<div class="card">
		<h3 class="text-xl font-bold text-gray-100 m-4 truncate">
			{{ product.title.substring(0, 30) + '...' }}
		</h3>
		<img :src="product.image" :alt="product.title" class="max-h-40" />
		<p>{{ product.description.substring(0, 100) + '...' }}</p>
		<p>$ {{ product.price }}</p>
		<NuxtLink :to="`/products/${product.id}`">
			<button class="btn">View Details</button>
		</NuxtLink>
	</div>
</template>

<script setup>
	const { product } = defineProps(['product']);
</script>

<style scoped></style>
