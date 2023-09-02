import BookIcon from '@mui/icons-material/Book';
import Item from "./item"
export default function Material({data}) {
    return (
    <Item data={data} icon={<BookIcon 
        style={{
          color: "maroon",
          marginRight: "16px",
          fontSize: "3em",
          backgroundColor: "#e0e0e0",
          borderRadius: "50%",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}/>}
        title={data.title}/>
      )
}