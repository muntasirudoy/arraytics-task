import { useEffect, useState } from "react";
import Card from "../../components/ui/Card/Card";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import { Grid, TabContainer, PricingContainer } from "./Pricing.styles";
import Tabs from "../../components/ui/Tabs";
import Badge from "../../components/ui/Badge";
import cardThemes from "../../utils/card-theme";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPlanData,
  setBillingCycle,
  setSelectedGrowthPlan,
} from "../../store/actions/pricing-action";
import planData from "./plans.data.json";
import { parseHTML } from "../../utils/parseHTML";
import cardColors from "../../utils/card-color";
import Tooltip from "../../components/ui/Tooltip";
const groupPlansByName = (plans) => {
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
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const { plans, plansInfo, features, selectedCycle, selectedGrowthPlan } =
    useSelector((state) => state.plan);
  console.log(plans, selectedCycle, selectedGrowthPlan);

  useEffect(() => {
    dispatch(loadPlanData(planData));
  }, [dispatch]);
  const handleCycleChange = (cycle) => {
    dispatch(setBillingCycle(cycle));
  };

  const handleGrowthSelect = (value) => {
    dispatch(setSelectedGrowthPlan(value));
  };
  console.log(selectedCycle);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const groupedPlans = groupPlansByName(plans);
  return (
    <PricingContainer>
      <TabContainer>
        <Tabs
          onTabChange={handleCycleChange}
          defaultIndex={selectedCycle === "1_year" ? 1 : 0}
        >
          {Object.entries(plansInfo).map(([planKey, planData], i) => (
            <Tabs.Tab key={i} value={planKey}>
              {planData.title}
            </Tabs.Tab>
          ))}
        </Tabs>
        <Badge
          bgColor={cardThemes["purple"].primary}
          opacity={0.15}
          rounded={true}
          color={"#49687E"}
          style={{
            fontSize: "16px",
          }}
        >
          Save 20% 😍
        </Badge>
      </TabContainer>
      <Grid>
        {Object.entries(groupedPlans).map(([planName, variants], i) => {
          const currentVariant = variants[selectedVariantIndex] || variants[0];
          return (
            <Card variant={cardColors[i]} key={planName}>
              <Card.Header
                title={currentVariant.name}
                price={
                  selectedCycle === "1_year"
                    ? currentVariant.details["1_year"].price
                    : currentVariant.details["2_year"].price
                }
                badge={planName === "Pro" ? "Most Popular" : ""}
                variant={cardColors[i]}
                suffix={currentVariant.details["1_year"].price_postfix}
                del={
                  selectedCycle === "2_year"
                    ? currentVariant.details["1_year"].price
                    : ""
                }
              />

              {variants.length > 1 ? (
                <Dropdown
                  value={selectedVariantIndex}
                  onChange={(val) => setSelectedVariantIndex(val)}
                  variant={cardColors[i]}
                >
                  <Dropdown.Trigger>Choose Plan</Dropdown.Trigger>
                  <Dropdown.Menu>
                    {variants.map((variant, idx) => (
                      <Dropdown.Item value={idx} key={idx}>
                        <div
                          dangerouslySetInnerHTML={parseHTML(variant.title)}
                        />
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Card.Subtitle variant={cardColors[i]} icon>
                  {currentVariant.title}
                </Card.Subtitle>
              )}
              <Card.Features>
                <Card.FeatureTitle>
                  {planName === "Free"
                    ? "Free includes:"
                    : "Everything in free plus:"}
                </Card.FeatureTitle>
                {features
                  .filter((f) =>
                    planName === "Free" ? f.is_pro === "0" : f.is_pro === "1"
                  )
                  .map((f, i) => (
                    <>
                      <Tooltip position="top">
                        <Tooltip.Trigger>
                          <span>
                            <Card.Feature key={i}>
                              {f.feature_title}
                            </Card.Feature>
                          </span>
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                          <div
                            className="tooltip-content"
                            dangerouslySetInnerHTML={parseHTML(f.feature_desc)}
                          />
                        </Tooltip.Content>
                      </Tooltip>
                    </>
                  ))}
              </Card.Features>

              <Card.Action
                label={currentVariant.details["1_year"].btn_text}
                onClick={() => {
                  console.log(
                    "Plan selected:",
                    currentVariant.name,
                    currentVariant.details["1_year"].price_id
                  );
                }}
                variant={cardColors[i]}
              />
            </Card>
          );
        })}
      </Grid>
    </PricingContainer>
  );
};

export default Pricing;
