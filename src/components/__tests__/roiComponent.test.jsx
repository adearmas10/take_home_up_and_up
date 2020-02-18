import React from 'react';
import { shallow } from 'enzyme';
import ROIComponent from '../ROIComponent';

test('renders component', () => {
  shallow(<ROIComponent />);
});

test('renders correct initial values', () => {
  const wrapper = shallow(<ROIComponent />);
  expect(wrapper.find('#component-header').text()).toEqual('It pays to rent with up&up');
  expect(wrapper.find('#monthly-payment-title').text()).toEqual('Monthly Payment');
  expect(wrapper.find('#initial-investment-title').text()).toEqual('Initial Investment');
  expect(wrapper.find('#monthly-investment-title').text()).toEqual('Monthly Investment');
  expect(wrapper.find('#year-title').text()).toEqual('Years with up&up');
  expect(wrapper.find('#ownership-title').text()).toEqual('Ownership Value');

  expect(wrapper.find('#monthly-payment-rent').text()).toEqual('$1,200 rent + ');
  expect(wrapper.find('#monthly-investment').text()).toEqual('$0 investment');

  expect(wrapper.find('#initial-investment-value').text()).toEqual('$2,400');
  expect(wrapper.find('#monthly-investment-value').text()).toEqual('$0');
  expect(wrapper.find('#years').text()).toEqual('5');
  expect(wrapper.find('#ownership-value').text()).toEqual('$3,600');
});

test('renders correct values when initial investment slider is changed', () => {
  const wrapper = shallow(<ROIComponent />);
  const slider = wrapper.find('#ii-slider');
  slider.props().onChange({}, 3500);
  expect(wrapper.find('#initial-investment-value').text()).toEqual('$3,500');
  expect(wrapper.find('#ownership-value').text()).toEqual('$4,700');
});

test('renders correct values when monthly investment slider is changed', () => {
  const wrapper = shallow(<ROIComponent />);
  const slider = wrapper.find('#mi-slider');
  slider.props().onChange({}, 300);
  expect(wrapper.find('#monthly-investment-value').text()).toEqual('$300');
  expect(wrapper.find('#ownership-value').text()).toEqual('$21,600');
});

test('renders correct values when year length slider is changed', () => {
  const wrapper = shallow(<ROIComponent />);
  const slider = wrapper.find('#year-slider');
  slider.props().onChange({}, 8);
  expect(wrapper.find('#years').text()).toEqual('8');
  expect(wrapper.find('#ownership-value').text()).toEqual('$3,600');
});

test('renders correct values when all slider values are changed', () => {
  const wrapper = shallow(<ROIComponent />);
  const iiSlider = wrapper.find('#ii-slider');
  const miSlider = wrapper.find('#mi-slider');
  const yearSlider = wrapper.find('#year-slider');
  iiSlider.props().onChange({}, 4450);
  miSlider.props().onChange({}, 380);
  yearSlider.props().onChange({}, 2);
  expect(wrapper.find('#initial-investment-value').text()).toEqual('$4,450');
  expect(wrapper.find('#monthly-investment-value').text()).toEqual('$380');
  expect(wrapper.find('#years').text()).toEqual('2');
  expect(wrapper.find('#ownership-value').text()).toEqual('$14,770');
});
