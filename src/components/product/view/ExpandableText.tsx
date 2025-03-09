import React, { useState } from "react";
import { Typography, Button } from "antd";

const { Paragraph } = Typography;

const ExpandableText: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Paragraph
        ellipsis={!expanded ? { rows: 2, expandable: false } : false}
        style={{ marginBottom: 0 }}
      >
        {text}
      </Paragraph>
      {text.length > 150 && (
        <Button type="link" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </div>
  );
};

export default ExpandableText;
