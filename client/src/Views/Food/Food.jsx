import React from 'react';
import './Food.css';
import ImageUploader from '../../Components/ImageUploader';
const images = [];
const title = "this is a title ";
const description = "this is a description ";
function imageUploaded(file) {
    const num = images.length + 1;
    images.push({
        image: file,
        title: title + num,
        description: description + num
    });
}
export default props => {
    console.log(props);
    function openLightBox() {
        props.openLightBox(images,images.length - 1);
    }
    return (
        <div>
            <ImageUploader id="flbljl" onComplete={imageUploaded} onClickImage={openLightBox} />
        </div>
    )
};