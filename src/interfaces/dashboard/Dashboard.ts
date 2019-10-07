import { StockChart } from "./StockChart";
import { SalesChart } from "./SalesChart";
import { TablesChart } from "./TablesChart";
import { ProductsChart } from "./ProductsChart";

export interface Dashboard {
    stock: StockChart[];
    sales: SalesChart[];
    tables: TablesChart[];
    products: ProductsChart[];
} 