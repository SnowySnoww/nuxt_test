<template>
	<div>
		<p>Product details for {{ id }}</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusamus
			quia doloribus numquam eius. Excepturi voluptates quisquam sunt natus non
			alias maxime neque a. Cumque cupiditate amet recusandae ab aspernatur?
		</p>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;

	definePageMeta({
		title: 'Products',
		description: 'This is the products page',
		layout: 'products',
	});
</script>

<style scoped></style>
