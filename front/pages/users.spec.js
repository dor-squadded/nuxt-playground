import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import Vuetify from 'vuetify';
import { actions as storeActions } from '../store/index';
import users from './users.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

test('displays message', () => {
	const store = new Store({
		storeActions,
	});
	const wrapper = shallowMount(users, {
		propsData: {
			msg: 'Hello world',
		},
		store,
		localVue,
	});

	// Assert the rendered text of the component
	expect(wrapper.text()).toContain('click to get data');
});
