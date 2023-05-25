import React, { useState, useEffect } from "react";   //useEffect- PAGE EKTA YADDI DATA TIKA DATA BASE EKN FETCH WELA PNNANE MEKN
import axios from "axios";





export default function AllCards() {                       //GETS DATA

  const [cards, setCards] = useState([]);      //data gannakota ganne [] array ekk widihta
  const [searchs, setSearch] = useState([]);

  useEffect(() => {
    function getCards() {            //create function any name,code segement where data can find and how,code that here
      axios.get("http://localhost:8070/card/").then((res) => {       //final connection between FE & BE, BE host,object now data hold in FE
        setCards(res.data);                                           //get response from backend and data
        //console.log(res.data);                           
      }).catch((err) => {
        alert(err.message);
      })
    }
    getCards();
  }, [])

                                       //SEARCH FUNCTION
  const handleSearchArea = (e) => {
    //console.log(e.currentTarget.value);              //shows all searching data in consol
    const searchKey = e.currentTarget.value;           //assingn theses values into searchkey varibale

    axios.get("http://localhost:8070/card/").then((res) => {

      const resultt = res.data
      const result = resultt.filter((posts) =>

        posts.cardname.includes(searchKey)   //search by card name
      )

      setCards(result)
    })


  }
  //DELETE, delete by id by axios
  const onDelete = (id) => {
     alert("Card Deleted Successfully")
     axios.delete(`http://localhost:8070/card/delete/${id}`).then((res) => {
     //alert("Card Deleted Successfully")
    });
  };



  return (
    <div className="container">

      <h1 className="cards"><b><u>Added Cards</u></b></h1>
      <form className="my-search">
      <input className="form-control mr-sm-2" type="search" placeholder="Search By Card Name" name="searchQuery"
        onChange={handleSearchArea} ></input></form>

        
      {
        cards.map(posts => (
          <ul>
            <li >Card Type ={posts.cardtype}</li>
            <li >Name On Card ={posts.cardname}</li>
            <li >Card Number ={posts.cardnumber}</li>
            <li >EXP ={posts.cardexp}</li>
            <li >CVV ={posts.cardcvv}</li>


            <br />
            <button type="submit" class="btn btn-success btn-sm "
              onClick={() => { window.location.href = "/scc" }}
            >
              PAY
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <button type="submit" className="btn btn-primary btn-sm"

              onClick={() => { window.location.href = `/update/${posts._id}/${posts.cardtype}/${posts.cardname}/${posts.cardnumber}/${posts.cardexp}/${posts.cardcvv}` }}
            >
              UPDATE
            </button>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <button type="submit" className="btn btn-danger btn-sm"
             onClick={() => onDelete(posts._id)(window.location.reload(true))} /*delete by post,after refesh,after shows alert,merge by + */

            >
              DELETE

            </button>
          </ul>
        ))}

    </div>

  )
}
