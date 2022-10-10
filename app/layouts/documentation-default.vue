<template>
	<div>
		<layout-default-header/>
		<div class="wrapper">
			<layout-default-wrapper class="theme-background"/>
			<div class="content">
				<Nuxt/>
			</div>
		</div>
		<layout-default-footer/>
	</div>
</template>
<style scoped>

.content{
	padding: 2rem;
	margin-left: 300px;
}
.wrapper{
	position: relative;
	padding-top: 69px;
}
@media only screen and (max-width:768px){
	.content{
		margin-left: 0px;
	}
}
</style>
<style lang="scss" scoped>
	@import '/static/assets/style/scss/variables.scss';
	
	.wrapper {
	}
	</style>
