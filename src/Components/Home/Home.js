import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "./Card";
import "./home.css";
import data from "../../data";

const Home = () => {
  const [singleEconomyRooms, setSingleEconomyRooms] = useState([]);
  const [doubleEconomyRooms, setDoubleEconomyRooms] = useState([]);

  useEffect(() => {
    const economyRoomsSingle = data.filter(
      (room) => room.fields.type === "single"
    );

    setSingleEconomyRooms(economyRoomsSingle);
    const economyRoomsDouble = data.filter(
      (room) => room.fields.type === "double"
    );

    setDoubleEconomyRooms(economyRoomsDouble);
  }, []);

  console.log(data);
  return (
    <div>
      <Banner />
      <div className="home_section">
        <h2>Single basic rooms</h2>
        <div className="economy_rooms">
          {singleEconomyRooms.map((room) => (
            <Card key={room.sys.id} room={room} />
          ))}
        </div>
        <h2>Double basic rooms</h2>
        <div className="economy_rooms">
          {doubleEconomyRooms.map((room) => (
            <Card key={room.sys.id} room={room} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
