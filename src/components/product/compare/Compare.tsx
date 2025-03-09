import { useEffect, useState } from "react";
import { Button, Card, Empty, message } from "antd";

import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { fetchProducts } from "../../store/slices/productSlice";
import CompareTable from "./CompareTable";
import { RootState } from '../../store/store';
import AddMoreModal from "./AddMoreModal";
import { removeProductFromCompare } from "../../store/slices/compareSlice";

const CompareProducts = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useAppDispatch();
    const { comparedProducts, text, type } = useAppSelector((state: RootState) => state.compare);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div style={{ padding: 20 }}>
            {contextHolder}
            <h2>Compare Products</h2>
            {comparedProducts.length === 0 ? (
                <Card style={{ margin: "20px auto", maxWidth: 500, padding: 20 }}>
                    <Empty
                        description={<span style={{ fontSize: "14px", color: "#555" }}>No items selected for comparison</span>}
                    />
                </Card>
            ) : (
                <CompareTable
                    products={comparedProducts}
                    onRemove={(id) => {
                        dispatch(removeProductFromCompare(id));
                        messageApi.open({
                            type: type,
                            content: text
                        });
                    }}
                />
            )}

            <Button type="primary" onClick={() => setIsModalVisible(true)}>
                Add Products

            </Button>

            <AddMoreModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />

        </div>
    );
};

export default CompareProducts;
