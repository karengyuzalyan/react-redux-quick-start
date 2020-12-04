import types from '@store/types/template.type';

const { SHOW_TEMPLATE_TYPE_SUCCESS } = types;

export const showTempate = () => ({
  type: SHOW_TEMPLATE_TYPE_SUCCESS,
  payload: 'Here is a template Text!',
});
