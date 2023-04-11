import { json } from "react-router-dom"
import { swiggyRestMenu} from "../constant"
import React,{useEffect} from "react"
const useRestaurant=(resId)=>{

    const [rMenu,setRMenu]=React.useState([])
    const [filteredMenu,setfilteredMenu]=React.useState([])
    const [rDetails,setRDetails]=React.useState([])
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async ()=>{
        const data=await fetch(swiggyRestMenu+resId)
        const json=await data.json()

        setRMenu(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setfilteredMenu(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setRDetails(json.data.cards[0].card.card.info)

    }
    return [rMenu,rDetails,filteredMenu,setfilteredMenu]

}

export default useRestaurant