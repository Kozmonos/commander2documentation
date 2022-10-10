<template>
	<nav :class="{active:getActiveNav}">
		<ul v-for="(item, index) in nav" :key="index">
			<li class="nav-item">
				<h5>{{item._name}}</h5>
			</li>

			<li 
				class="sub-item"
				v-for="(subItem, subIndex) in item.commands" :key="subIndex"
			 >
			 <nuxt-link
				:to="`/documentation/${item._name}/${subItem._name}`"
				class="nav-link"
			 >
				 <a @click="setItemContent(subItem)">{{subItem._name}}</a>
			 </nuxt-link>
			</li>

		</ul>
	</nav>
</template>
<script>
import navDataMixin from '@/mixins/nav';
import {mapMutations, mapGetters} from 'vuex';
export default {
	mixins: [navDataMixin],
	methods:{
		...mapMutations({
      setItemContent: 'page/setItemContent'
    })
	},
	computed:{
		...mapGetters({
			getActiveNav: 'getActiveNav'
		})
	}
}
</script>
<style scoped>
nav {
		width: 300px;
    position: fixed;
    z-index: 10;
    top: 69px;
    height: calc(100% - 99px);
    overflow-y: auto;
    padding: 5px;
		display: block;
		border-right: 1px solid;
		transition: all .3s;
		padding-top:20px;
}
	ul:not(.sub-items){
		padding: 0;
	}
	.sub-item{
		padding-left: 20px;
	}
	li{
		list-style-type: none;
	}
	.nav-item{
		font-size: var(--bs-nav-link-font-size);
	}
	.nav-link{
    text-decoration: none;
    line-height: 30px;
	}
	h5{
		font-weight: 600;
    line-height: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
		cursor: pointer;
    padding: 8px 10px;
		margin: 0;
	}

	.nav-link{
		color:var(--grey);
	}

	@media only screen and (max-width:768px){
		nav{
			border:0;
			width:100%;
			top: -100vh;
			height: calc(100vh - 69px);
		}
		nav.active{
    top: 69px;
		}
	}

</style>
<style lang="scss" scoped>
@import '/static/assets/style/scss/colors.scss';

.nuxt-link-active{
	color: $base-color;
	background-color: rgba($base-color,.2);
	border-radius: 10px;

	padding-top: 0.25rem 0.5rem;
}
</style>