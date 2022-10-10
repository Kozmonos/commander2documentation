<template>
		<pre class="code">
			<code  :class="lang"><slot/></code>
	</pre>
</template>
<script>
	export default {
		props:{
			lang:{
				type:String,
				default:"bash"
			}
		}
	}
</script>
<style>
pre{
	padding: 1rem;
	overflow-x: scroll;
	white-space: pre-wrap; 
}
code{
	display: block;
	border-radius: 10px;
}
pre::-webkit-scrollbar {
	height: 1px;
}

</style>