import Item from './item.js'
export default function ItemList ({array}) {
    array.map((item) => {
        <Item data={item} />
    })
}