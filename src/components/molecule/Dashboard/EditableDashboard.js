import React from "react";
import Background from "../../atoms/background/Background";
import Header from "../../atoms/header/Header";
import { Sidebar } from "../../atoms/sidebar/Sidebar";
import Page from "../../atoms/page/Page";
import { useParams } from "react-router-dom";
import Video from "../../atoms/video/Video";
import Settings from "../../atoms/settings/Settings";

const EditableDashboard = ({ users }) => {
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
            <Settings />
            <Video />
        </div>
    );
};

export default EditableDashboard;
