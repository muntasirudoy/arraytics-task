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
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const { plans, plansInfo, features, selectedCycle, selectedGrowthPlan } =
    useSelector((state) => state.plan);
  console.log(selectedCycle, selectedGrowthPlan);

  useEffect(() => {
    dispatch(loadPlanData(planData));
  }, [dispatch]);
  const handleCycleChange = (cycle) => {
    dispatch(setBillingCycle(cycle));
  };

  const handleGrowthSelect = (value) => {
    dispatch(setSelectedGrowthPlan(value));
  };
  return (
    <PricingContainer>
      <TabContainer>
        <Tabs defaultIndex={selectedCycle === "1_year" ? 1 : 0}>
          <Tabs.Tab onClick={() => handleCycleChange("1_month")}>
            Billed monthly
          </Tabs.Tab>
          <Tabs.Tab onClick={() => handleCycleChange("1_year")}>
            Billed yearly
          </Tabs.Tab>
          <Tabs.Panel>
            <p>This is the Monthly content.</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>This is the Yearly content.</p>
          </Tabs.Panel>
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
        <Card variant="green">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to <strong>50,000</strong> visitors/mont"
            variant="green"
            icon
          />
          <Dropdown
            value={selectedPlan}
            onChange={(val) => setSelectedPlan(val)}
            variant="green"
          >
            <Dropdown.Trigger>Choose Plan</Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item value="monthly">Monthly</Dropdown.Item>
              <Dropdown.Item value="yearly">Yearly</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Card.Features>
            <Card.Feature>Unlimited widgets</Card.Feature>
            <Card.Feature>Traffic source targeting</Card.Feature>
            <Card.Feature>Dynamic chat pop-up</Card.Feature>
            <Card.Feature>Multiple agents</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
          </Card.Features>
          <Card.Action label="Select Plan" onClick={() => {}} variant="green" />
        </Card>
        <Card variant="yellow">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to <strong>50,000</strong> visitors/mont"
            variant="yellow"
            icon
          />
          <Card.Features>
            <Card.Feature>Unlimited widgets</Card.Feature>
            <Card.Feature>Traffic source targeting</Card.Feature>
            <Card.Feature>Dynamic chat pop-up</Card.Feature>
            <Card.Feature>Multiple agents</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
          </Card.Features>
          <Card.Action
            label="Select Plan"
            onClick={() => {}}
            variant="yellow"
          />
        </Card>
        <Card variant="blue">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to <strong>50,000</strong> visitors/mont"
            badge="Most Popular"
            variant="blue"
            icon
          />

          <Card.Features>
            <Card.Feature>Unlimited widgets</Card.Feature>
            <Card.Feature>Traffic source targeting</Card.Feature>
            <Card.Feature>Dynamic chat pop-up</Card.Feature>
            <Card.Feature>Multiple agents</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
          </Card.Features>
          <Card.Action label="Select Plan" onClick={() => {}} variant="blue" />
        </Card>
        <Card variant="purple">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to <strong>50,000</strong> visitors/mont"
            variant="purple"
            icon
          />
          <Card.Features>
            <Card.Feature>Unlimited widgets</Card.Feature>
            <Card.Feature>Traffic source targeting</Card.Feature>
            <Card.Feature>Dynamic chat pop-up</Card.Feature>
            <Card.Feature>Multiple agents</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
            <Card.Feature>Get leads to email</Card.Feature>
          </Card.Features>
          <Card.Action
            label="Select Plan"
            onClick={() => {}}
            variant="purple"
          />
        </Card>
      </Grid>
    </PricingContainer>
  );
};

export default Pricing;
