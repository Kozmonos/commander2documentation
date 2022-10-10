export const state = () => ({
	content: null
})
export const getters = {
	getItemContent: state =>  state.content
}

export const mutations = {
	setItemContent(state, content){
		console.log({content})
		state.content = content
	}
}


export const actions = {

}