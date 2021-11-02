import { Input } from '@material-ui/core';
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import WriteForm from '../components/WritePage/WriteForm';
import { MainLayout } from '../layouts/MainLayout';
import { CallReceived } from '@material-ui/icons';

// const Editor = dynamic(() => import('@editorjs/editorjs'), {srr: false})

interface WritePostForm {
    title?: string,
    text?: string
}

const WritePage: FC<WritePostForm> = () => {
    return (
        <MainLayout hideComments hideMenu>
        <div>
            <Input placeholder="Заголовок"/>
            <WriteForm />
            <div>

            </div>
        </div>
        </MainLayout>
    )
}

export default WritePage;