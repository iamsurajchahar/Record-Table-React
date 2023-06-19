import {React,useState,useEffect} from 'react'
import Axios from 'axios'
import DataTable from 'react-data-table-component'

function Table() {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
      {
        name: "First Name",
        selector: (row)=>row.firstName,
        sortable : true,
      },
      {
        name: "Last Name",
        selector: (row)=>row.lastName
      },
      {
        name: "Age",
        selector: (row)=>row.age
      },
      {
        name: "Gender",
        selector: (row)=>row.gender
      },
      {
        name: "Email",
        selector: (row)=>row.email
      },
      {
        name: "Phone",
        selector: (row)=>row.phone
      },
      {
        name: "Username",
        selector: (row)=>row.username
      },
      {
        name: "D.O.B.",
        selector: (row)=>row.birthDate
      },
      {
        name: "Height",
        selector: (row)=>row.height
      },
      {
        name: "Weight",
        selector: (row)=>row.weight
      },
      {
        name: "Image",
        selector: (row)=> <img width={50} height={50} src = {row.image} alt={row.firstName}/>
      },
      {
        name: "City",
        selector: (row)=>row.address.city
      },
      {
        name: "Latitude",
        selector: (row)=>row.address.coordinates.lat
      },
      {
        name: "Longitude",
        selector: (row)=>row.address.coordinates.lng
      },
      {
        name: "Card Expire",
        selector: (row)=>row.bank.cardExpire
      },
      {
        name: "Card Expire",
        selector: (row)=>row.bank.cardExpire
      },
      {
        name: "Company",
        selector: (row)=>row.company.name
      },
      
    ]


  useEffect(()=>{
    fetchTableData();
  },[]);


  const fetchTableData = async()=>{
    try{
      setLoading(true);
      const URL = "https://dummyjson.com/users";
      const response = await Axios.get(URL);
      const usersArray = Object.values(response.data);
      setData(usersArray[0]);
      
      setLoading(false);
    }catch(err){
      console.log(err);
    }
  };
  const customStyles = {
    rows: {
      style: {
        backgroundColor: 'grey', 
      },
    },
    headCells: {
      style: {
        backgroundColor: 'black',
        color:'white', 
      },
    },
  };
  return (
      <div className = "container mt-5">
        <DataTable
          columns = {columns}
          data = {data}
          progressPending = {loading}
          pagination
          responsive
          fixedHeader
          highlightOnHover
          customStyles={customStyles}
        />
    </div>
  )
}

export default Table