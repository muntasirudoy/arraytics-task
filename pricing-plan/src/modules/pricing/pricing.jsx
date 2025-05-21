import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card/Card";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import Tabs from "../../components/ui/Tabs";
import Tooltip from "../../components/ui/Tooltip";
import cardColors from "../../utils/card-color";
import cardThemes from "../../utils/card-theme";
import { parseHTML } from "../../utils/parse-html";
import usePricing from "./pricing.hook";
import { Grid, PricingContainer, TabContainer } from "./Pricing.styles";

const Pricing = () => {
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
          let currentVariant;
          if (activeVariant) {
            currentVariant =
              variants.find(
                (variant) =>
                  variant.name === activeVariant.id &&
                  variant.title === activeVariant.title
              ) ?? variants[0];
          } else {
            currentVariant = variants[0];
          }

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
            <Card variant={cardColors[i]} key={planName}>
              <Card.Header
                title={currentVariant.name}
                price={currentDetails.price}
                badge={planName === "Pro" ? "Most Popular" : ""}
                variant={cardColors[i]}
                suffix={currentDetails.price_postfix}
                del={showDelPrice ? baseDetails.price : ""}
              />

              {variants.length > 1 ? (
                <Dropdown
                  value={activePlans[planName]}
                  onChange={onVariantChange}
                  variant={cardColors[i]}
                >
                  <Dropdown.Trigger>Choose Plan</Dropdown.Trigger>
                  <Dropdown.Menu>
                    {variants.map((variant, idx) => (
                      <Dropdown.Item
                        value={{
                          title: variant.title,
                          id: variant.name,
                        }}
                        key={idx}
                      >
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
                <Card.FeatureTitle>{featureTitle}</Card.FeatureTitle>

                {filteredFeatures.map((f, i) => (
                  <Tooltip key={i} position="top">
                    <Tooltip.Trigger>
                      <span>
                        <Card.Feature>{f.feature_title}</Card.Feature>
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Content>
                      <div
                        className="tooltip-content"
                        dangerouslySetInnerHTML={parseHTML(f.feature_desc)}
                      />
                    </Tooltip.Content>
                  </Tooltip>
                ))}
              </Card.Features>
              <Card.Action
                label={currentDetails.btn_text}
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
