import { swiggyUrl } from "../constant"
import React,{useEffect} from "react"
const useFetchData=()=>{

    const [filteredRestaurants,setFilteredRestaurants]=React.useState([])
    const [allRestaurants,setAllRestaurants]=React.useState([])
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
            const crd = pos.coords;
          
            //console.log(`Latitude : ${crd.latitude}`);
            //console.log(`Longitude: ${crd.longitude}`);

            const data= await fetch(swiggyUrl.slice(0,50)+crd.latitude+swiggyUrl.slice(57,62)+crd.longitude)

            
            const json=await data.json()

            const length=json.data.success.cards.length
            setFilteredRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)
            setAllRestaurants(json.data.success.cards[length-1].gridWidget.gridElements.infoWithStyle.restaurants)

            //here batch state update occurs and component will get updated once not twice
          }
          
          async function error(err) {

            //if user denies to track location then default lat and long is set(Bangalore Nagawara) 

            //console.warn(`ERROR(${err.code}): ${err.message} setting default lat and long `);
            const data= await fetch(swiggyUrl)
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