<template>
		<div class="additional" v-if="data.length">
				<ui-table
					:columns="columns"
					:rows="data"
				/>
		</div>
</template>
<script>
export default {
	props:{
		data:{
			required:true
		},
		columns:{
			type:Array,
			required:true
		}
	}
}
</script>
<style scoped>
	.additional {
		margin: 30px 0;
	}
	.additional span{
		font-weight: bold;
	}
</style>