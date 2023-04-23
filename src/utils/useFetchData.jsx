import { swiggyUrl } from "../constant"
import React,{useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { setLocation } from "./cartSlice"
const useFetchData=()=>{

    const [filteredRestaurants,setFilteredRestaurants]=React.useState([])
    const [allRestaurants,setAllRestaurants]=React.useState([])
    const dispatch=useDispatch()
    useEffect(()=>{


        getData()

    },[])

     function getData(){

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          };
          
          async function success(pos) {

            //if user allows to track location 
            const coordinates = {'latitude':pos.coords.latitude,'longitude':pos.coords.longitude};  

            dispatch(setLocation(coordinates))      
            //console.log(`Latitude : ${crd.latitude}`);
            //console.log(`Longitude: ${crd.longitude}`);
            // const proxyUrl=(`http://localhost:8080/`)

            const options = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(coordinates)
            };
            const data= await fetch(`/api/rlist1`, options)
            const json=await data.json()
            const length=json.data.success.cards.length



            setFilteredRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)
            setAllRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)

            //here batch state update occurs and component will get updated once not twice
          }
          async function error(err) {

            //if user denies to track location then default lat and long is set(Bangalore Nagawara) 

            //console.warn(`ERROR(${err.code}): ${err.message} setting default lat and long `);
            const coordinates = {'latitude':18.5204,'longitude':73.8567};  
            dispatch(setLocation(coordinates)) 

            const data= await fetch(`/api/rlist2`)
            const json=await data.json()

            const length=json.data.success.cards.length
            setFilteredRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)
            setAllRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)
          }
          
        navigator.geolocation.getCurrentPosition(success, error, options);

    }

    return [filteredRestaurants,setFilteredRestaurants,allRestaurants,setAllRestaurants]

}

export default useFetchData