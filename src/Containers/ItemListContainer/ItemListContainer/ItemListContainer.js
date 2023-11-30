import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { db } from "../../../Components/Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const q = id
      ? query(productCollection, where("category", "==", id))
      : productCollection;

    const getItem = async () => {
      try {
        const answer = await getDocs(q);
        const dataDocs = answer.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });
        setProductos(dataDocs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getItem();
  }, [id]);

  const propiedades = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <h1 className="mensaje">{greeting}</h1>
      <div className="container">
        {
          <>
            {loading ? (
              <ClockLoader
                color="#1a7764"
                cssOverride={propiedades}
                loading
                size={100}
                speedMultiplier={1}
              />
            ) : (
              <ItemList productos={productos} />
            )}
          </>
        }
      </div>
    </>
  );
};
