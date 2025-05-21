import {
  CHANGE_ACTIVE_PLAN_VARIATION,
  LOAD_PLAN_DATA,
  SET_BILLING_CYCLE,
  SET_SELECTED_GROWTH_PLAN,
} from "../actions/pricing-action.types";

const initialState = {
  plans: [],
  plansInfo: [],
  features: [],
  selectedCycle: "1_year",
  selectedGrowthPlan: null,
};

const pricingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PLAN_DATA:
      return {
        ...state,
        plans: action.payload.plans,
        plansInfo: action.payload.plansInfo,
        features: action.payload.features,
        activePlans: action.payload.activePlans,
      };
    case SET_BILLING_CYCLE:
      return { ...state, selectedCycle: action.payload };
    case SET_SELECTED_GROWTH_PLAN:
      return { ...state, selectedGrowthPlan: action.payload };

    case CHANGE_ACTIVE_PLAN_VARIATION:
      return {
        ...state,
        activePlans: {
          ...state.activePlans,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default pricingReducer;
