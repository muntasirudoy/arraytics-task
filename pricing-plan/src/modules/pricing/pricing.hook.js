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
