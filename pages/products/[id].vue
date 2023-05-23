<template>
	<div>
		<ProductDetails :product="product" />
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
	const uri = `https://fakestoreapi.com/products/${id}`;

	// fetch the product
	const { data: product } = await useFetch(uri, { key: id });

	if (!product.value) {
		throw createError({
			statusCode: 404,
			statusMessage: `Product not found: ${id}`,
			fatal: true,
		});
	}

	definePageMeta({
		title: 'Products',
		description: 'This is the products page',
		layout: 'products',
	});
</script>

<style scoped></style>
