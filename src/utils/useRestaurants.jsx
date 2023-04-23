import { swiggyRestMenu} from "../constant"
import React,{useEffect} from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
const useRestaurant=(resId)=>{

    const [rMenu,setRMenu]=React.useState([])
    const [filteredMenu,setfilteredMenu]=React.useState([])
    const [rDetails,setRDetails]=React.useState([])
    const coordinates=useSelector((store)=>{
        return store.cart.location
      })
    const param=useParams()

    useEffect(()=>{
        fetchMenu()
        // NOW EACH TIME THE URL'S ID CHANGES IT WILL FETCH MENU 
    },[param.id])

    const fetchMenu=async ()=>{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([coordinates,resId])
          };
        
        const data= await fetch(`/api/menu`, options)
        const json=await data.json()
        const length=json.data.cards.length-1
        // console.log("FM NOW")
        setRMenu(json.data.cards[length].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setfilteredMenu(json.data.cards[length].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setRDetails(json.data.cards[0].card.card.info)

    }
    return [rMenu,rDetails,filteredMenu,setfilteredMenu]

}

export default useRestaurant