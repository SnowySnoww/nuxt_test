<template>
	<div class="">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div class="p-7 card">
				<img
					:src="product.image"
					:alt="product.title"
					class="max-w-full lg:max-w-[400px] mx-auto my-7"
				/>
			</div>
			<div class="px-7 lg:p-7">
				<h2 class="text-4xl my-7">
					{{ product.title }}
				</h2>
				<p class="text-xl my-7">Price - ${{ product.price }}</p>
				<h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
				<p class="my-7">
					{{ product.description }}
				</p>
				<button class="btn flex items-center">
					<i class="material-icons mr-2">add_shopping_cart</i>
					<span>Add to Cart</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { product } = defineProps(['product']);

	useHead({
		title: product.title,
		meta: [
			{
				name: 'description',
				content: product.description,
			},
		],
	});
</script>

<style scoped></style>
