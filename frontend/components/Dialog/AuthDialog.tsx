import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Style } from '@material-ui/icons';
import Link from 'next/link';
import React, { FC } from 'react';
// import Link from 'next';
import style from './AuthDialog.module.scss';

interface AuthDialogProps {
    authVisible: boolean
    fn: () => {}
}

export default function AuthDialog ({authVisible, fn}: AuthDialogProps) {
        

return (
    <>
    <Dialog fullWidth={true} maxWidth={"xs"} open={authVisible} onClose={fn}>
        
        <DialogTitle>Регистрация</DialogTitle>
        
        <DialogContent>
            <div>
                <Button variant="outlined" className={style.btnItem} fullWidth>
                    Почта</Button>
                <Button variant="outlined" className={style.btnItem} fullWidth>ВКонтакте</Button>
                <Button variant="outlined" className={style.btnItem} fullWidth>Google</Button>
            </div>
            
            <div>Есть аккаунт? <Link>Войти</Link></div>
        </DialogContent>
        <DialogActions>
            <Button onClick={fn}>Close</Button>
        </DialogActions>
    </Dialog>
    </>
    );
}
