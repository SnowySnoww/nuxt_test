<template>
	<div class="h-screen p-4 text-white">
		<header class="shadow-sm">
			<nav class="container mx-auto flex justify-between gap-4">
				<NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
				<ul class="flex gap-4">
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>

		<!-- Output the page content -->
		<div class="container mx-auto">
			<slot />
		</div>
	</div>
</template>

<script script></script>

<style scoped>
	.router-link-exact-active {
		color: #12b488;
	}
</style>
