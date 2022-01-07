import { shallowMount } from '@vue/test-utils';
import DefaultLayout from './default.vue';

describe('NuxtLogo', () => {
	test('is a Vue instance', () => {
		const wrapper = shallowMount(DefaultLayout);
		expect(wrapper.vm).toBeTruthy();
	});
});
