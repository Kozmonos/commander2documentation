export const state = () => ({
	nav: false
})
export const getters = {
	getActiveNav: state =>  state.nav
}

export const mutations = {
	collapseNav(state){
		state.nav = !state.nav
	}
}


export const actions = {

}