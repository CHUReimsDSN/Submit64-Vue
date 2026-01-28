import IndexPage from '../../src/pages/IndexPage.vue';
import { flushPromises, mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

describe('IndexPage', () => {
  it('render', async () => {
    const wrapper = mount(IndexPage);
    await flushPromises();
    await wrapper.vm.$nextTick();
    await flushPromises();
    await wrapper.vm.$nextTick();
    const inputArticle = wrapper.find('textarea');
    expect(wrapper.exists()).toBe(true);
    expect(inputArticle.element.value).toBe('My article');
  });
});
