/**
 
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.title - The title for the feature list section.
 * @param {Array<Object>} props.features - Array of feature objects to display.
 * @param {string} props.features[].feature_title - The title of the feature.
 * @param {string} props.features[].feature_desc - The HTML description of the feature.
 * @returns {JSX.Element} Rendered feature list with tooltips.
 */
import Card from "../../../components/ui/Card/Card";
import Tooltip from "../../../components/ui/Tooltip";
import { parseHTML } from "../../../utils/parse-html";

const FeatureList = ({ title, features, activePlan }) => (
  <>
    <Card.FeatureTitle>{title}</Card.FeatureTitle>
    <Card.Feature>{activePlan}</Card.Feature>
    {features.map((f, i) => (
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
  </>
);
FeatureList.displayName = "FeatureList";
export default FeatureList;
