<template>
	<div>
		<p>
			{{ product.title }}
		</p>
		<p>
			{{ product.description }}
		</p>
		<p>{{ product.price }}</p>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
	const uri = `https://fakestoreapi.com/products/${id}`;

	// fetch the product
	const { data: product } = await useFetch(uri, { key: id });

	definePageMeta({
		title: 'Products',
		description: 'This is the products page',
		layout: 'products',
	});
</script>

<style scoped></style>
