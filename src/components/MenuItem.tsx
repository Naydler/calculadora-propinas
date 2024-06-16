import { menuItem} from "../types";

type MenuItemProps = {
    item: menuItem;
    addItem: (item: menuItem) => void;
};

export const MenuComponentItem: React.FC<MenuItemProps> = ({ item, addItem }) => {
    return (
        <button
            className="border-2  border-teal-400 hover:bg-teal-200  w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};