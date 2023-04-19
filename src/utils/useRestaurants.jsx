import { swiggyRestMenu} from "../constant"
import React,{useEffect} from "react"
import { useParams } from "react-router-dom"

const useRestaurant=(resId)=>{

    const [rMenu,setRMenu]=React.useState([])
    const [filteredMenu,setfilteredMenu]=React.useState([])
    const [rDetails,setRDetails]=React.useState([])
    const param=useParams()

    useEffect(()=>{
        fetchMenu()
        // NOW EACH TIME THE URL'S ID CHANGES IT WILL FETCH MENU 
    },[param.id])

    const fetchMenu=async ()=>{
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url=proxyUrl+swiggyRestMenu+resId
        const data=await fetch(url)
        const json=await data.json()
        // console.log("FM NOW")
        setRMenu(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setfilteredMenu(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setRDetails(json.data.cards[0].card.card.info)

    }
    return [rMenu,rDetails,filteredMenu,setfilteredMenu]

}

export default useRestaurant