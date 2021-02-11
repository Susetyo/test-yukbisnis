import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import axios from "axios";

function App() {
    const [listData, setListData] = useState(null);

    useEffect(() => {
        // call api
        const callApi = async () => {
            const getList = await axios.get("https://randomuser.me/api/");
            const res = getList.data?.results;
            setListData(res);
            return res;
        };

        callApi();
    }, []);

    return (
        <div className="App">
            {listData && listData.map((data) => <Card list={data} />)}
        </div>
    );
}

export default App;
