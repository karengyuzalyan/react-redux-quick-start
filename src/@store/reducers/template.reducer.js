import types from '@store/types/template.type';

const { SHOW_TEMPLATE_TYPE_SUCCESS } = types;
const initialState = Object.freeze({});

const template = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SHOW_TEMPLATE_TYPE_SUCCESS: {
      return {
        ...state,
        text: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default template;
