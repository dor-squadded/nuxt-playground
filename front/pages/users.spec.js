// Import the `mount()` method from Vue Test Utils
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { actions as storeActions } from '../store/index';
import users from './users.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

test('displays message', () => {
	let store;
	store = new Vuex.Store({
		storeActions,
	});
	// mount() returns a wrapped Vue component we can interact with
	const wrapper = mount(users, {
		propsData: {
			msg: 'Hello world',
		},
		store,
		localVue,
	});

	// Assert the rendered text of the component
	expect(wrapper.text()).toContain('click to get data');
});
