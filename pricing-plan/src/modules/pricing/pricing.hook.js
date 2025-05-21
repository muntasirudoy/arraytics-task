import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import planData from "./plans.data.json";
import {
  loadPlanData,
  setBillingCycle,
} from "../../store/actions/pricing-action";
import { groupPlansByName } from "../../utils/group-plan";

const usePricing = () => {
  const dispatch = useDispatch();
  const { plans, plansInfo, features, selectedCycle } = useSelector(
    (state) => state.plan
  );

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  useEffect(() => {
    dispatch(loadPlanData(planData));
  }, [dispatch]);

  const handleCycleChange = (cycle) => dispatch(setBillingCycle(cycle));
  const handleVariantChange = (val) => setSelectedVariantIndex(val);

  const groupedPlans = groupPlansByName(plans);

  return {
    plansInfo,
    groupedPlans,
    selectedCycle,
    features,
    selectedVariantIndex,
    onCycleChange: handleCycleChange,
    onVariantChange: handleVariantChange,
  };
};

export default usePricing;
