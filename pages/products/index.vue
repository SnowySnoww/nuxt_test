<template>
	<div>
		<h2 class="mb-5 text-4xl">Products</h2>

		<div class="grid grid-cols-4 gap-5">
			<div v-for="(product, i) in products" :key="i">
				<NuxtLink
					:to="`/products/${product.id}`"
					class="flex flex-col items-center bg-slate-600 rounded-3xl p-4"
				>
					<h3 class="text-xl">
						{{ product.title.substring(0, 30) + '...' }}
					</h3>
					<img :src="product.image" :alt="product.title" class="max-h-40" />
					<p>{{ product.description.substring(0, 100) + '...' }}</p>
					<p>$ {{ product.price }}</p>
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
