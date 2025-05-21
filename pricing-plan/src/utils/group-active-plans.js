export const groupeActivePlans = (groupedPlans) => {
  const activePlans = {};

  for (const planName in groupedPlans) {
    const variants = groupedPlans[planName];

    if (variants && variants instanceof Array && variants.length > 1) {
      activePlans[planName] = variants[0];
    }
  }

  return activePlans;
};
