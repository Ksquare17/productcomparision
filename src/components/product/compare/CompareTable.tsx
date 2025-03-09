import React from "react";
import { Row, Col, Image, Button, Typography, } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Product } from "../../store/slices/productSlice";

const { Text } = Typography;

interface CompareTableProps {
    products: Product[];
    onRemove: (id: number) => void;
}

const CompareTable: React.FC<CompareTableProps> = ({ products, onRemove }) => {
    const minPrice = Math.min(...products.map((p) => p.price));
    const minDiscount = Math.min(...products.map((p) => p.discountPercentage));

    const attributes = [
        { label: "Description", key: "description", render: (p: Product) => p.description },
        {
            label: "Price",
            key: "price",
            render: (p: Product) => (
                <Text strong={p.price === minPrice} style={p.price === minPrice ? { color: "green" } : {}}>
                    ${p.price}
                </Text>
            )
        },
        {
            label: "Discount", 
            key: "discountPercentage", 
            render: (p: Product) => (
                <Text strong={p.discountPercentage === minDiscount} style={p.discountPercentage === minDiscount ? { color: "red" } : {}}>
                    {p.discountPercentage}%
                </Text>
            )
        },
        { label: "Brand", key: "brand", render: (p: Product) => p.brand },
        { label: "Category", key: "category", render: (p: Product) => p.category },
    ];

    return (
        <div style={{ overflowX: "auto", padding: "20px" }}>
            <div style={{ minWidth: "600px" }}>
                <Row gutter={16} style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 0",
                    display: "flex",
                    flexWrap: "nowrap",
                }}>
                    <Col span={4}>
                        <Text strong>Product</Text>
                    </Col>
                    {products.map((product) => (
                        <Col span={5} key={product.id} style={{ textAlign: "center" }}>
                            <div style={{ textAlign: 'right' }}>
                                <Button
                                    type="text"
                                    danger
                                    icon={<CloseOutlined />}
                                    onClick={() => onRemove(product.id)}
                                />
                            </div>

                            <Image src={product.thumbnail} width={100} />
                            <br />
                            <Text strong>{product.title}</Text>


                        </Col>
                    ))}
                </Row>

                {attributes.map(({ label, key, render }) => (
                    <Row gutter={16} key={key} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                        <Col span={4}>
                            <Text strong>{label}</Text>
                        </Col>
                        {products.map((product) => (
                            <Col span={5} key={product.id}>
                                {render(product)}
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>
        </div>
    );
};

export default CompareTable;
