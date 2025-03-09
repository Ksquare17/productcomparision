import React from "react";
import { Card, Button, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Product } from "../../store/slices/productSlice";

const { Title, Paragraph } = Typography;

interface CompareCardProps {
  product: Product;
  onRemove: (id: number) => void;
}

const CompareCard: React.FC<CompareCardProps> = ({ product, onRemove }) => {
  return (
    <Card
      hoverable
      style={{ textAlign: "center", width: "100%" }}
      cover={<img alt={product.title} src={product.thumbnail} style={{ maxHeight: 150, objectFit: "contain" }} />}
      actions={[
        <Button type="text" danger icon={<CloseOutlined />} onClick={() => onRemove(product.id)}>
          Remove
        </Button>,
      ]}
    >
      <Title level={5}>{product.title}</Title>
      <Paragraph>{product.description}</Paragraph>
      <p>${product.price}</p>
      <p>{product.discountPercentage}%</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
    </Card>
  );
};

export default CompareCard;
