import React from "react";

import "./css/header.css";
import {Button} from "react-bootstrap";

const StepsEditingForm = () => {
    return (
        <div>
            <div className="lines"><h5>1.</h5> <textarea> </textarea></div>
            <div className="lines"><h5>2.</h5> <textarea> </textarea></div>
            <div className="lines"><h5>3.</h5> <textarea> </textarea></div>
            <div className="lines"><h5>4.</h5> <textarea> </textarea></div>

            <Button variant="primary" type="submit" className="save">
                Сохранить
            </Button>

        </div>
    )
}


export default StepsEditingForm;