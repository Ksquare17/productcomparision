import React, { useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { fetchProducts, Product } from '../../store/slices/productSlice';
import { RootState } from '../../store/store';
import { Table, Spin, Alert, Button, message } from "antd";
import { addProductToCompare } from '../../store/slices/compareSlice';
import { useNavigate } from 'react-router';
import ExpandableText from './ExpandableText';
type ViewProps = {
    navigation?: boolean
}
const View: React.FC<ViewProps> = ({ navigation = true }) => {
    const dispatch = useAppDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const { products, loading, error, data } = useAppSelector((state: RootState) => state.products);
    const { comparedProducts, text, type } = useAppSelector((state: RootState) => state.compare);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    const handleCompare = (product: Product) => {
        dispatch(addProductToCompare(product));
        messageApi.open({
            type: type,
            content: text
        });
        if (navigation) navigate("/compare");
    };
    useEffect(() => {
        if (data) {
            messageApi.open({ type: 'success', content: data });
        }
        if (error) {
            messageApi.open({ type: 'error', content: error });
        }
    }, [data, error]);


    const columns = [
        {
            title: "Title", dataIndex: "title", key: "title",

        },
        { title: "Description", dataIndex: "description", key: "description" ,

            render: (text: string) => <ExpandableText text={text} />,
        },
        { title: "Price", dataIndex: "price", key: "price", sorter: (a: Product, b: Product) => a.price - b.price },
        {
            title: "Discount", dataIndex: "discountPercentage", key: "discountPercentage", render: (value: number) => `${value}%`,
            sorter: (a: Product, b: Product) => a.discountPercentage - b.discountPercentage
        },
        { title: "Brand", dataIndex: "brand", key: "brand" },
        { title: "Category", dataIndex: "category", key: "category" },
        {
            title: "Image",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (src: string) => <img src={src} alt="Product" style={{ width: 50 }} />,
        },
        {
            title: "Actions",
            key: "actions",
            render: (product: Product) => {
                const isCompared = comparedProducts.some((p) => p.id === product.id);
                return (
                    <Button type="primary" onClick={() => handleCompare(product)} disabled={isCompared}>
                        {isCompared ? "Added" : "Compare"}
                    </Button>
                );
            },
        },
    ];

    return (
        <div>
            {contextHolder}
            <h2>Product List</h2>

            {loading && (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh", // Full viewport height
                    width: "100%",   // Full width
                }}>
                    <Spin size="large" />
                </div>
            )}

            {error && <Alert message={error} type="error" showIcon />}

            {!loading && !error && <Table dataSource={products} columns={columns} rowKey="id" scroll={navigation ? { x: 'auto' } : { x: 'auto', y: 250 }} showSorterTooltip={{ target: 'sorter-icon' }} />}
        </div>
    );
}

export default View