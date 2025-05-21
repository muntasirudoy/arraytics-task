export const groupPlansByName = (plans) => {
  const grouped = {};
  plans.forEach((plan) => {
    if (!grouped[plan.name]) {
      grouped[plan.name] = [plan];
    } else {
      grouped[plan.name].push(plan);
    }
  });
  return grouped;
};
