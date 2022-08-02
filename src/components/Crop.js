import React from "react";
import "../styles/Crop.css";
import { Picture } from "../helpers/infoObjects";

const Control = props => {
    const {picture, showCrop, cropIncrementSize, setState} = props;

    let display = "block";
    if(!showCrop) display= "none";

    const changePicture = change => {
        switch(change) {
            case "up":
                setState({picture: Picture(picture.src, picture.marginLeft, picture.marginRight, picture.marginTop, picture.marginBottom + cropIncrementSize, picture.scale)});
                break;
            case "down":
                setState({picture: Picture(picture.src, picture.marginLeft, picture.marginRight, picture.marginTop + cropIncrementSize, picture.marginBottom, picture.scale)});
                break;
            case "left":
                setState({picture: Picture(picture.src, picture.marginLeft, picture.marginRight + cropIncrementSize, picture.marginTop, picture.marginBottom, picture.scale)});
                break;
            case "right":
                setState({picture: Picture(picture.src, picture.marginLeft + cropIncrementSize, picture.marginRight, picture.marginTop, picture.marginBottom, picture.scale)});
                break;
            case "enlarge":
                setState({picture: Picture(picture.src, picture.marginLeft, picture.marginRight, picture.marginTop, picture.marginBottom, picture.scale + 0.1)});
                break;
            case "shrink":
                setState({picture: Picture(picture.src, picture.marginLeft, picture.marginRight, picture.marginTop, picture.marginBottom, picture.scale - 0.1)});
                break;
            case "reset":
                setState({picture: Picture(picture.src, 0, 0, 0, 0, 1)});
                break;
            default:
        }
    }

    const applyIncrementBtnClass = () => {
        [...document.getElementsByClassName("crop-increment-btn")].forEach(b => {
            if(parseInt(b.value) === cropIncrementSize) b.classList.add("chosen-increment");
            else b.classList.remove("chosen-increment");
        });
    }

    return (
        <div id="crop-container" style={{display: display}}>
            <button type="button" id="crop-exit-btn" onClick={e => setState({showCrop: false})}>X</button>
            <div id="crop-header">
                <h2>Crop Image</h2>
                <p>Click arrows to move, + to enlarge, - to shrink.</p>
            </div>
            <div id="crop-main">
                <div>
                    <div><figure className="profile-picture-figure" id="crop-preview-figure"><img src={picture.src} alt="" style={{marginLeft: picture.marginLeft + "%", marginRight: picture.marginRight + "%", marginTop: picture.marginTop + "%", marginBottom: picture.marginBottom + "%", transform: "scale(" + picture.scale + ")"}}/></figure></div>
                    <button type="button" className="crop-move-btn" onClick={e => changePicture("up")}><i className="fa-solid fa-arrow-up"></i></button>
                    <button type="button" className="crop-move-btn" onClick={e => changePicture("down")}><i className="fa-solid fa-arrow-down"></i></button>
                    <button type="button" className="crop-move-btn" onClick={e => changePicture("left")}><i className="fa-solid fa-arrow-left"></i></button>
                    <button type="button" className="crop-move-btn" onClick={e => changePicture("right")}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div id="crop-additional-controls">
                <div id="crop-scale-btns">
                    <button type="button" onClick={e => changePicture("enlarge")}>+</button>
                    <button type="button" onClick={e => changePicture("shrink")}>-</button>
                </div>
                <div id="crop-increment">
                    <p>Increment Size</p>
                    <div>
                        <button type="button" className="crop-increment-btn" value="1" onClick={e => setState({cropIncrementSize: 1})}>1%</button>
                        <button type="button" className="crop-increment-btn" value="10" onClick={e => setState({cropIncrementSize: 10})}>10%</button>
                        <button type="button" className="crop-increment-btn" value="50" onClick={e => setState({cropIncrementSize: 50})}>50%</button>
                        {applyIncrementBtnClass()}
                    </div>
                </div>
                <button type="button" onClick={e => changePicture("reset")}>Reset</button>
            </div>
        </div>
    );
}

export default Control;