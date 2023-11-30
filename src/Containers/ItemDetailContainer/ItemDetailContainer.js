import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../../Components/ItemsDetail/ItemDetail'
import ClockLoader from "react-spinners/ClockLoader";
import { useParams } from 'react-router-dom';
import {db} from "../../Components/Firebase/firebase"
import { getDoc, collection, doc } from "firebase/firestore"


export const ItemDetailContainer = ({ greeting }) => {

  const [producto, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();
  
  useEffect(() => {
    const productCollection = collection(db, 'productos');
    const refDoc = doc(productCollection, id);

    const getItem = async () => {
        try{
            const answer = await getDoc(refDoc);
            const dataDoc = {
                id: answer.id,
                ...answer.data()
            };
            setProduct(dataDoc);
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    getItem();
}, [ id ]);



const propiedades = {
  display: "block",
  margin: "0 auto",
  
};

    return (
      <>
        <h1>{greeting}</h1>
        {
          <>
            {loading ? <ClockLoader color="#1a7764"  cssOverride={propiedades} loading size={100} speedMultiplier={1} /> : <ItemDetail producto={producto} />}</>}
        
      </>
    );
  };


