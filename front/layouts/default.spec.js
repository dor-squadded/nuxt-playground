import { shallowMount } from '@vue/test-utils';
import DefaultLayout from './default.vue';

describe('NuxtLogo', () => {
	const $route = {
		name: 'wat',
	};
	test('is a Vue instance', () => {
		const wrapper = shallowMount(DefaultLayout, {
			mocks: {
				$route,
			},
		});
		expect(wrapper.vm).toBeTruthy();
	});
});
