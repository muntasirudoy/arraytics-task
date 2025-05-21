import Card from "../../../components/ui/Card/Card";

/**
 *
 * @component
 * @param {Object} props - Component props.
 * @param {'primary'|'secondary'|'tertiary'|string} props.color - Variant color for the card.
 * @param {string} props.title - Title of the plan.
 * @param {string|number} props.price - Price of the plan.
 * @param {string} [props.badge] - Optional badge text to display.
 * @param {string} [props.suffix] - Optional suffix to display after the price.
 * @param {string|number} [props.delPrice] - Optional price to show as deleted/strikethrough.
 * @param {string} [props.subtitle] - Subtitle or description for the plan.
 * @param {React.ReactNode} [props.dropdown] - Optional dropdown element to display instead of subtitle.
 * @param {React.ReactNode} props.features - List or description of plan features.
 * @param {string} props.actionLabel - Label for the action button.
 * @returns {JSX.Element} The rendered PlanCard component.
 */
const PlanCard = ({
  color,
  title,
  price,
  badge,
  suffix,
  delPrice,
  subtitle,
  dropdown,
  features,
  actionLabel,
}) => (
  <Card variant={color}>
    <Card.Header
      title={title}
      price={price}
      badge={badge}
      variant={color}
      suffix={suffix}
      del={delPrice}
    />
    {dropdown || (
      <Card.Subtitle variant={color} icon>
        {subtitle}
      </Card.Subtitle>
    )}
    <Card.Features>{features}</Card.Features>
    <Card.Action label={actionLabel} variant={color} />
  </Card>
);

PlanCard.displayName = "PlanCard";
export default PlanCard;
