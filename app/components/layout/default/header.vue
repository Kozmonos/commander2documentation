<template>
	<header :class="{'active-nav':getActiveNav}">
		<button @click="collapseNav()" class="mobile-wrapper">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<div class="header-logo-wrapper">
			<a href="">
				<img src="/assets/media/image/logo.svg" alt="">
			</a>
		</div>

		<div class="header-color-changer">
			<theme-changer/>
		</div>

			<hr class="doc"/>

	</header>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex';
export default {
	name: 'LayoutDefaultHeader',
	methods: {
		...mapMutations({
			collapseNav: 'collapseNav'
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
	header{
		min-height: 4.5rem;
    padding: 0.5rem 0;

		position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
		display: flex;
		backdrop-filter: blur(12px);

		display: flex;
    justify-content: space-between;
    padding: 20px;

		transition: all .3s;
	}



	hr{
		position: absolute;
		bottom: 0;
		width: 50%;
		height: .5px;
		margin: 0;

		border-width: 1px;
		border-style: solid;
		margin: 0;
	}
	hr.doc{
		width: 600px;
	}

	img{
		height: 40px;
	}

	@media only screen and (min-width: 768px) {
	button.mobile-wrapper{
		display: none;
	}
	}

	@media only screen and (max-width: 768px) {
		button.mobile-wrapper{
			display: block;
			background: transparent;
			border: none;
			outline: none;
			padding: 0;
			margin: 0;
			cursor: pointer;
			z-index: 1031;
		}

		button.mobile-wrapper span{
			display: block;
			width: 20px;
			height: 2px;
			margin: 3px 0;
		}
		button.mobile-wrapper span:last-child{
			width: 50%;
		}

		hr.doc{
		left: 25%;
		width:50%;
	}

	}

</style>
<style lang="scss" scoped>
@import '/static/assets/style/scss/colors.scss';
hr{
	border-color: $base-color;
}
</style>