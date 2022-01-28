export const state = () => ({
	users: [],
});

export const DataMutations = {
	setData: 'setData',
};

export const mutations = {
	setData(state, data) {
		state.users = data;
	},
};

export const actions = {
	async fetchData({ commit }, wat) {
		try {
			const data = await this.$axios.$post(`http://127.0.0.1:8080/users?userSeachString=${wat}`);
			if (!data) {
				return;
			}
			commit(DataMutations.setData, data);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};
