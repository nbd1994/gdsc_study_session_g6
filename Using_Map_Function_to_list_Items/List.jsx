
const list=[
 {
    id:1,
    name: "Natnael"
 },
 {
    id:2,
    name: "Necho"
 },
 {
    id:3,
    name:"Nebyou"
 },
 {
    id:4,
    name: "Rekik"
 },
 {
    id:5,
    name: "Ayalew"
 },
 {
    id:6,
    name:"Aman"
 },
 {
    id:7,
    name: "Pump"
 },
 {
    id:8,
    name: "Ante"
 },
 {
    id:9,
    name:"Malon"
 },
 {
    id:10,
    name:"Betru"
 }
];
const  Llist=()=>(
    <ul>
        {
            list.map(item=>(
                <li key={item.id}>
                    <div>{item.name}</div>
                </li>
            ))
        }
    </ul>
)
export default Llist;