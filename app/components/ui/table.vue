<template>
	<vue-good-table
		:columns="columns"
		:rows="rows"
		:sort-options="{
    enabled: false
		}"
	/>
</template>
<script>
export default {
	props: {
		columns: {
			type: Array,
			required: true
		},
		rows: {
			type: Array,
			required: true
		}
	}
}
</script>
<style >
.vgt-table.bordered tr th:first-child{
		border-top-left-radius: 10px;
	}
	
thead tr th:last-child{
	border-top-right-radius: 10px;
}
.vgt-table.bordered td{
	padding: 20px 15px;
}
</style>
<style lang="scss">
@import '/static/assets/style/scss/variables.scss';


.light-mode table tr:nth-child(odd ) td span,.light-mode .vgt-table thead th,.light-mode table tr span{
	color: $dark !important;
}

.dark-mode  .vgt-table thead th,.dark-mode table tr span{
		color: #fff !important;
	}


	table{
		border:0 !important;
		background-color: unset !important;
	}

	table tr:nth-child(2n) td span{
		color:$base-color !important;
	}

	.vgt-table.bordered td, .vgt-table.bordered th{
		border:0px !important;
	}
	.vgt-wrap {
    // box-shadow: 4px 6px 17px #57575730 !important;
    border-radius: 10px !important;
		overflow: hidden;
}
</style>