import { useState, useEffect, Component } from "react";

class Main extends Component {


  componentDidMount() {
    const getSongsData = async () => {
      const apiUrl = "https://cms.samespace.com/items/songs";
      const response = await fetch(apiUrl);
      console.log(response);
      if (response.ok == true) {
        const dataSongs = response.json();
        console.log(dataSongs);
        const updateData=dataSongs.data.map(item=>({
            id:item.id,
            status:item.status,
            sort:item.sort,
            user_created:item.userCreated,
        })),
      } else {
        console.log("Error");
      }
    };

    getSongsData();
  }

  render() {
    return (
      <div>
        <h1>Music Playlist Manager</h1>
      </div>
    );
  }
}

export default Main;
