/**
 * Loads plan data on mount and provides handlers for billing cycle and plan variant changes.
 *
 * @returns {Object} An object containing:
 *   @property {Array} plansInfo - Information about all available plans.
 *   @property {Array} plans - List of plan objects.
 *   @property {string} selectedCycle - Currently selected billing cycle.
 *   @property {Array} features - List of plan features.
 *   @property {Array} activePlans - Currently active plan variations.
 *   @property {Function} onCycleChange - Handler to change the billing cycle.
 *   @property {Function} onVariantChange - Handler to change the active plan variant.
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActivePlanVariation,
  loadPlanData,
  setBillingCycle,
} from "../../store/actions/pricing-action";
import planData from "./plans.data.json";

const usePricing = () => {
  const dispatch = useDispatch();
  const { plans, plansInfo, features, selectedCycle, activePlans } =
    useSelector((state) => state.plan);

  useEffect(() => {
    dispatch(loadPlanData(planData));
  }, [dispatch]);

  const handleCycleChange = (cycle) => dispatch(setBillingCycle(cycle));
  const handleVariantChange = (val) => {
    dispatch(changeActivePlanVariation(val));
  };

  return {
    plansInfo,
    plans,
    selectedCycle,
    features,
    activePlans,
    onCycleChange: handleCycleChange,
    onVariantChange: handleVariantChange,
  };
};

export default usePricing;
