<template>
	<div>
		<h2 class="mb-5 text-4xl">Products</h2>

		<div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
			<div v-for="(product, i) in products" :key="i">
				<NuxtLink :to="`/products/${product.id}`">
					<ProductCard :product="product" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'products',
	});

	useHead({
		title: 'Products',
		meta: [
			{
				name: 'description',
				content: 'This is the products page',
			},
		],
	});

	// fetch the products
	const { data: products } = await useFetch(
		'https://fakestoreapi.com/products'
	);
</script>

<style scoped></style>
]
