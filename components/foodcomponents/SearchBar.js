import React,{useEffect,useState} from 'react'
import { StyleSheet,Text,TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RestaurantItems, { localRestaurants } from './RestaurantItems';


const SearchBar = () => {
    // const [restaurantDataFiltered,setRestaurantDataFiltered] = useState([])
    // const [foods,setFood] = useState([])
    // const [foodFiltered,setFoodFiltered] = useState([])
    // const [foodCtg,setFoodCtg] = useState([])
    // const [query, setQuery] = useState('');
    // const [focus, setFocus] = useState();
    
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_ENDPOINT = RestaurantItems;
    
  
    useEffect(() => {
        setIsLoading(true);
      
        fetch(API_ENDPOINT)
          .then(response => response.json())
          .then(response => {
            setData(response.results);
      
            // ADD THIS
            setFullData(response.results);
      
            setIsLoading(false);
          })
          .catch(err => {
           setIsLoading(false);
            setError(err);
          });
      }, []);

      const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, user => {
          return contains(user, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
      };
      
      const contains = ({ rest }, query) => {
        const { first, last } = name;
      
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
          return true;
        }
      
        return false;
      };
   
    return (
        <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
          backgroundColor:"#eee",marginVertical:10,marginTop:15, flexDirection:"row"
        }}        
      >
       <View style={{ marginLeft:3}}>
            <Ionicons name='location-sharp' size={24}/>
             </View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#eee', paddingHorizontal: 20 }}
        />
           <View  style={{flexDirection:"row",backgroundColor:"white",padding:9,alignItems:"center",borderRadius:30,marginLeft:170}}>
                <AntDesign name='clockcircle' size={11} style={{marginRight:6}}/>
                  <Text>Search</Text>
               </View>
      </View>       
    )
}

export default SearchBar

const styles = StyleSheet.create({})