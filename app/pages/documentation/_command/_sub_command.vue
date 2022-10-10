<template>
	<div>
		<template v-if="getItemContent">
			<h1>
				{{command}} {{sub_command}}
			</h1>
			<p>{{getItemContent._description}}</p>

			<documentation-ui-code>{{bin}} {{command}} {{sub_command}} &lt;sub-command> [options]</documentation-ui-code>

			<documentation-ui-table
					v-for="key in ['_args','options']"
					:data="getItemContent[key]"
					:columns="columns[key]"
				/>
			<documentation 
			:items="getItemContent"
			:columns="columns"
			:command="`${bin} ${command} ${sub_command}`"
			/>

		</template>


	</div>
</template>
<script>
import navDataMixin from '@/mixins/nav';
import {mapGetters,mapMutations} from 'vuex';
// import { component as VueCodeHighlight } from 'vue-code-highlight';
export default {
  mixins: [navDataMixin],
	layout:"documentation-default",
	data() {
		return {
			command:this.$route.params.command,
			sub_command:this.$route.params.sub_command,
			columns:{
				_args:[
				{
          label: 'Argument',
          field: '_name',
        },
        {
          label: 'Description',
          field: 'description'
        }
      ],
			options:[
			{
          label: 'Option',
          field: 'flags',
        },
        {
          label: 'Description',
          field: 'description'
        },
				{
					label: 'Default',
					field: 'defaultValue'
				}
			]
			}
		}
	},
	mounted() {
		console.log(this.$store)
		console.log(this.nav)
		
		const current=this.nav
		.find(item => item._name === this.command)
		.commands
		.find(item => item._name === this.sub_command)

		this.setItemContent(current)
	},
	computed:{
		...mapGetters({
      getItemContent: 'page/getItemContent'
    })
	},
	methods:{
		...mapMutations({
      setItemContent: 'page/setItemContent'
    })
	},
}
</script>
<style scoped>
h1 {
    width: fit-content;
}
h1 hr{
	width: 25%;
	margin: 0;
	margin-top: 10px;
}
</style>
<style lang="scss" scoped>
@use "sass:map";
@import '/static/assets/style/scss/variables.scss';

h1{
	color:$base-color;
}
h1 hr{
	border: 1px solid $base-color;
}
hr{
	border-width: 1px;
	border-style: solid;
	margin: 0;
	width: 50%;
}
</style>