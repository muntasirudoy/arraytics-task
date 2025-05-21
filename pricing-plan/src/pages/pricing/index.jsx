import Container from "../../components/layout/container";
import { PricingModule } from "../../modules/pricing/pricing-module";

const PricingPage = () => {
  return (
    <Container>
      <PricingModule />
    </Container>
  );
};

PricingPage.displayName = "PricingPage";
export default PricingPage;
