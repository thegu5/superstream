import Item from './item.js'
export default function ItemList ({array}) {
    return (
        array.map((item) => {
        <Item data={item} />
    }))
}