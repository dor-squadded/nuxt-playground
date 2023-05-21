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

const handleUsersData = ({ commit }, data) => {
	if (!data) {
		commit(DataMutations.setLoading, { isLoading: false });
		return;
	}
	commit(DataMutations.setUsers, data);
	commit(DataMutations.setLoading, { isLoading: false });
};

export const actions = {
	async fetchUsers({ commit }, { userSearchString }) {
		try {
			commit(DataMutations.setLoading, { isLoading: true });

			const data = await this.$axios.$post('http://127.0.0.1:8080/users', {
				userSearchString,
			});
			handleUsersData({ commit }, data);
		} catch (error) {
			commit(DataMutations.setLoading, { isLoading: false });
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
	async fetchNextUsers({ commit, rootState }, { userSearchString }) {
		try {
			commit(DataMutations.setLoading, { isLoading: true });
			const { users } = rootState;
			const usernameForNextPage = users[users.length - 1].name;
			const data = await this.$axios.$post('http://127.0.0.1:8080/users/next-page', {
				usernameForNextPage,
				userSearchString,
			});
			handleUsersData({ commit }, data);
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
				commit(DataMutations.setLoading, { isLoading: false });
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
