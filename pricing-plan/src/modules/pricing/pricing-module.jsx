import Badge from "../../components/ui/Badge";
import Tabs from "../../components/ui/Tabs";
import cardColors from "../../utils/card-color";
import cardThemes from "../../utils/card-theme";
import FeatureList from "./components/feature-list";
import PlanCard from "./components/plan-card";
import PlanDropdown from "./components/plan-dropdown";
import usePricing from "./pricing.hook";
import { Grid, PricingContainer, TabContainer } from "./Pricing.styles";

/**
 * PricingModule component displays the pricing plans with selectable billing cycles and plan variants.
 *
 * - Renders tabs for different billing cycles (e.g., monthly, yearly).
 * - Shows a badge for promotional offers
 * - Displays a grid of plan cards, each representing a pricing plan (Free, Pro, etc.).
 * - Each plan card can show a dropdown for selecting plan variants, pricing details, and a feature list.
 * - Integrates with the usePricing hook to manage state and actions for plans, cycles, and variants.
 *
 * @component
 * @example
 * return (
 *   <PricingModule />
 * )
 */
export const PricingModule = () => {
  const {
    plansInfo,
    plans,
    selectedCycle,
    features,
    activePlans,
    onCycleChange,
    onVariantChange,
  } = usePricing();
  const renderPricingPlans = () => {
    return Object.entries(plansInfo).map(([planKey, planData], i) => (
      <Tabs.Tab key={i} value={planKey}>
        {planData.title}
      </Tabs.Tab>
    ));
  };
  return (
    <PricingContainer>
      <TabContainer>
        <Tabs
          onTabChange={onCycleChange}
          defaultIndex={selectedCycle === "1_year" ? 1 : 0}
        >
          {renderPricingPlans()}
        </Tabs>
        <Badge
          bgColor={cardThemes.purple.primary}
          opacity={0.15}
          rounded
          color={"#49687E"}
          style={{ fontSize: "16px" }}
        >
          Save 20% 😍
        </Badge>
      </TabContainer>

      <Grid>
        {Object.entries(plans).map(([planName, variants], i) => {
          const activeVariant = activePlans[planName];
          const currentVariant =
            variants.find(
              (variant) =>
                variant.name === activeVariant?.id &&
                variant.title === activeVariant?.title
            ) ?? variants[0];

          const currentDetails = currentVariant.details[selectedCycle];
          const baseDetails = currentVariant.details["1_year"];
          const showDelPrice = selectedCycle === "2_year";
          const isFreePlan = planName === "Free";

          const filteredFeatures = features.filter((f) =>
            isFreePlan ? f.is_pro === "0" : f.is_pro === "1"
          );

          const featureTitle = isFreePlan
            ? "Free includes:"
            : "Everything in free plus:";

          return (
            <PlanCard
              key={planName}
              color={cardColors[i]}
              title={currentVariant.name}
              price={currentDetails.price}
              badge={planName === "Pro" ? "Most Popular" : ""}
              suffix={currentDetails.price_postfix}
              delPrice={showDelPrice ? baseDetails.price : ""}
              actionLabel={currentDetails.btn_text}
              subtitle={variants.length === 1 ? currentVariant.title : null}
              dropdown={
                variants.length > 1 ? (
                  <PlanDropdown
                    variants={variants}
                    active={activePlans[planName]}
                    onChange={onVariantChange}
                    theme={cardColors[i]}
                  />
                ) : null
              }
              features={
                <FeatureList
                  title={featureTitle}
                  activePlan={currentVariant}
                  features={filteredFeatures}
                />
              }
            />
          );
        })}
      </Grid>
    </PricingContainer>
  );
};
