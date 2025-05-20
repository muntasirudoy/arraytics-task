import Container from "../../components/layout/container";
import Card from "../../components/ui/Card/Card";

const PricingPage = () => {
  return (
    <Container>
      <h1>Pricing</h1>
      <p>Pricing page content goes here.</p>
      <div>
        <Card variant="green">
          <Card.Header
            title="Free"
            price="$39"
            subtitle="Up to 50,000 visitors/month"
            badge="Most Popular"
            variant="green"
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
      </div>
    </Container>
  );
};

PricingPage.displayName = "PricingPage";
export default PricingPage;
