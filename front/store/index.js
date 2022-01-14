export const state = () => ({
	list: [],
});

export const DataMutations = {
	setData: 'setData',
};

export const mutations = {
	setData(state, data) {
		state.list = data;
	},
};

export const actions = {
	async fetchData({ commit }) {
		const response = await fetch('http://127.0.0.1:8080/', {
			method: 'POST',
		});
		const data = await response.json();
		commit(DataMutations.setData, data);
	},
};
