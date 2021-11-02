import {MainLayout} from '../../layouts/MainLayout';
import {FullPost} from '../../components/FullPost';
import React from 'react';
import {Comment} from "../../components/Comment";
import data from "../../data";
import {Divider, Input, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import AddCommentForm from '../../components/AddCommentForm';


export default function Post() {
    const [activeTab, setActiveTab] = React.useState(0);
    const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost/>
            <Paper elevation={0} className="mt-40 p-30">
                <div className="container">
                    <Typography variant="h6" className="mb-20">
                        42 комментария
                    </Typography>
                    <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab}
                        indicatorColor="primary" textColor="primary">
                        <Tab label="Популярные"/>
                        <Tab label="По порядку"/>
                    </Tabs>
                    <Divider/>
                    <AddCommentForm />
                    
                    <div className="mb-20"/>
                    {
                        comments.map(obj => <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt}/>)
                    }
                </div>
            </Paper>
        </MainLayout>
    );
}
