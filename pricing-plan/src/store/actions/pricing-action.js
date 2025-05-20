import {
  LOAD_PLAN_DATA,
  SET_BILLING_CYCLE,
  SET_SELECTED_GROWTH_PLAN,
} from "./pricing-action.types";

export const setBillingCycle = (cycle) => ({
  type: SET_BILLING_CYCLE,
  payload: cycle,
});

export const setSelectedGrowthPlan = (planId) => ({
  type: SET_SELECTED_GROWTH_PLAN,
  payload: planId,
});
export const loadPlanData = (planData) => ({
  type: LOAD_PLAN_DATA,
  payload: planData,
});
