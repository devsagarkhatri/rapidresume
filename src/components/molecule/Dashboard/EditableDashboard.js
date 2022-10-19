import React from "react";
import Background from "../../atoms/background/Background";
import Header from "../../atoms/header/Header";
import { Sidebar } from "../../atoms/sidebar/Sidebar";
import Page from "../../atoms/page/Page";
import { useParams } from "react-router-dom";
import Video from "../../atoms/video/Video";

const EditableDashboard = ({ users }) => {
    // let [searchParams, setSearchParams] = useSearchParams();
    // let [query, setQuery] = searchParams("");
    let { id } = useParams();
    let user;
    for (let u = 0; u < users.length; u++) {
        if (users[u].id === id) {
            user = users[u];
        }
    }
    return (
        <div className="relative">
            <Background isCircle={false} isgradient={true} />
            <Header />
            <Sidebar />
            <Page />
            {/* <Video /> */}
        </div>
    );
};

export default EditableDashboard;
