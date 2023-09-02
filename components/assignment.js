import AssignmentIcon from "@mui/icons-material/Assignment";
import Item from "./item"

export default function Assignment({data}) {
    return (
    <Item data={data} icon={<AssignmentIcon
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
        title={data.title} body={data.description}/>
    )
}