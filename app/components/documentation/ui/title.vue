<template>
	<h2 class="documentation-title"> 
		<nuxt-link :to="'#'+name" class="porto-button" @click="scrollMeTo(name)">
			<Anchor/>
		</nuxt-link>
		{{name}}
	</h2>
</template>
<script>
export default {
	methods: {
			scrollMeTo(refName) {
			var element = this.$refs[refName];
			var top = element.offsetTop;

			window.scrollTo(0, top);
		}
	},
	props:{
		name:{
			type:String,
			required:true
		},
	}
}
</script>