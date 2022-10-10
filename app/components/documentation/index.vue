<template>
	<div>
		<template :ref="item._name" v-for="item in items.commands">
			<documentation-ui-title :name="item._name"/>
			<indent>

				<p>{{item._description}}</p>
				<documentation-ui-code>{{command}} {{item._name}} {{
						item.options
						.map(option => option.flags.split(",")[1]).join(" ")
					}}
				</documentation-ui-code>


				<documentation-ui-table
					v-for="key in ['_args','options']"
					:key="item._name+key"
					:data="item[key]"
					:columns="columns[key]"
				/>

				<documentation 
					v-if="item && item.hasOwnProperty('commands')" 
					:items="item.commands"
					:command="`${command} ${item._name}`"
					:columns="columns"
				/>

			</indent>
		</template>
	</div>
</template>
<script>
import Anchor from '/static/assets/icons/anchor.svg?inline';
export default {
	components:{
		Anchor
	},
	props:{
		command:{
			type:String,
			required:true
		},
		items:{
			required:true
		},
		columns:{
			type:Object,
			required:true
		}
	},

}
</script>
