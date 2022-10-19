import React, { useState } from "react";
import Background from "../../atoms/background/Background";
import Header from "../../atoms/header/Header";
import { Sidebar } from "../../atoms/sidebar/Sidebar";
import Page from "../../atoms/page/Page";
import { useParams, useSearchParams } from "react-router-dom";
import { stringify } from "postcss";

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
        <div>
            <Background isCircle={false} isgradient={true} />
            <Header />
            <Sidebar />
            <Page />
        </div>
    );
};

export default EditableDashboard;
