import React, { useState } from 'react';
import style from "./AddCommentForm.module.scss"
import {Input, Button} from "@material-ui/core";
interface AddCommentFormProps {

}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {

    const [visible, setVisible] = useState(false);
    const [comment, setComment] = useState("");
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className={style.rootWrap}>
            <Input 
                onFocus={() => setVisible(true)} 
                className={style.rootInput} 
                minRows={visible ? 5 : 1} 
                fullWidth 
                placeholder="Написать комментрарий..." 
                multiline
                onChange={handleCommentChange}
            />
            {
                visible &&
                <div className={style.buttonWrap}>
                    <Button 
                    variant="contained" 
                    color="primary"
                    disabled={!comment}
                    onClick = {() => {console.log("dispatch action", comment)}}
                    >
                        Отправить
                    </Button>
                    
                </div>
            }          
            
        </div>
    )
}

export default AddCommentForm;
