import Sequelize from 'sequelize';
import { UserModel } from '../db/models/User';
import { RoleModel } from '../db/models/Role';
import { BarModel } from '../db/models/Bares';
import { InventarioModel } from '../db/models/Inventario';
import { MenuModel } from '../db/models/Menus';
import { PersonaModel } from '../db/models/Persona';
import { ProductoModel } from '../db/models/Productos';
import { InventarioProductosModel } from '../db/models/InventarioProductos';
import { PersonaProductosModel } from '../db/models/PersonaProductos';
import { ComandaModel } from '../db/models/Comandas';

export interface BarServicesDB {
    [key: string]: any;
    sequelize: Sequelize.Sequelize;
    User: UserModel;
    Role: RoleModel;
    Bar: BarModel;
    Inventario: InventarioModel;
    Menu: MenuModel;
    Persona: PersonaModel;
    Producto: ProductoModel;
    InventarioProducto: InventarioProductosModel;
    PersonaProducto: PersonaProductosModel;
    Comanda: ComandaModel;
}