export const state = () => ({
	posts: [],
	users: [],
	loading: false,
});

export const DataMutations = {
	setPosts: 'setPosts',
	setUsers: 'setUsers',
	setLoading: 'setLoading',
};

export const mutations = {
	setPosts(state, data) {
		state.posts = [...data, ...state.posts];
	},
	setUsers(state, data) {
		state.users = [...data];
	},
	setLoading(state, { isLoading }) {
		state.loading = isLoading;
	},
};

export const actions = {
	async fetchUsers({ commit, rootState }, { userSearchString, getNextUsers, getPrevUsers }) {
		try {
			commit(DataMutations.setLoading, { isLoading: true });
			const { users } = rootState;
			const lastUserName = users.length && getNextUsers && users[users.length - 1].name;
			const data = await this.$axios.$post('http://127.0.0.1:8080/users', {
				lastUserName,
				userSearchString,
			});
			if (!data) {
				return;
			}
			commit(DataMutations.setUsers, data);
			commit(DataMutations.setLoading, { isLoading: false });
		} catch (error) {
			commit(DataMutations.setLoading, { isLoading: false });
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
	async fetchPosts({ commit }, creationTs) {
		try {
			commit(DataMutations.setLoading, { isLoading: true });
			const data = await this.$axios.$post('http://127.0.0.1:8080/posts', {
				creationTs,
			});
			if (!data) {
				return;
			}
			commit(DataMutations.setPosts, data);
			commit(DataMutations.setLoading, { isLoading: false });
		} catch (error) {
			commit(DataMutations.setLoading, { isLoading: false });
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};
