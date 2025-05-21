import { groupeActivePlans } from "../../utils/group-active-plans";
import { groupPlansByName } from "../../utils/group-plan";
import {
  CHANGE_ACTIVE_PLAN_VARIATION,
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
export const loadPlanData = (planData) => {
  const plans = planData?.plans ?? [];
  const groupedPlans = groupPlansByName(plans);
  const activePlans = groupeActivePlans(groupedPlans);

  return {
    type: LOAD_PLAN_DATA,
    payload: {
      ...planData,
      plans: groupedPlans,
      activePlans,
    },
  };
};

export const changeActivePlanVariation = (activePlanData) => {
  return {
    type: CHANGE_ACTIVE_PLAN_VARIATION,
    payload: activePlanData,
  };
};
