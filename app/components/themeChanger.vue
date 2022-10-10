<template>
	<div class="theme-changer">
		<night @click="$colorMode.preference='light'" v-if="$colorMode.value === 'dark'" />
		<light @click="$colorMode.preference='dark'" v-else />
	</div>
</template>
<script>
import night from '@/static/assets/icons/moon.svg?inline';
import light from '@/static/assets/icons/sun.svg?inline';
export default {
	components: {
		night,
		light
	}
}
</script>
<style scoped>
	svg{
		width: 30px;
	}
	.theme-changer{
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
		fill: white;
	}
</style>