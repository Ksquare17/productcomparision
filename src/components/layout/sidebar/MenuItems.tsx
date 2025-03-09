import {
    DesktopOutlined,

    PieChartOutlined,

} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const Menuitems: MenuItem[] = [
    getItem('Product Details', '/', <DesktopOutlined />),
    getItem('Compare Products Page', '/compare', <PieChartOutlined />),

];
export default Menuitems;