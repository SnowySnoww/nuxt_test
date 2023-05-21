<template>
	<div class="h-screen bg-gray-800 p-4 text-white">
		<header>
			<nav class="flex flex-row gap-4">
				<NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
			</nav>
		</header>

		<!-- Output the page content -->
		<div class="container mx-auto">
			<slot />
		</div>

		<footer>
			<ul class="flex flex-row gap-4">
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/products">Products</NuxtLink></li>
			</ul>
		</footer>
	</div>
</template>

<script script></script>

<style scoped>
	.router-link-exact-active {
		color: #12b488;
	}
</style>
