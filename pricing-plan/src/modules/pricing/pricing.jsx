import Card from "../../components/ui/Card/Card";
import Dropdown from "../../components/ui/Dropdown/Dropdown";
import { Grid } from "./Pricing.styles";

const Pricing = () => {
  return (
    <>
      <Grid>
        <Card variant="green">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to <strong>50,000</strong> visitors/mont"
            variant="green"
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
          <Dropdown>
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
    </>
  );
};

export default Pricing;
