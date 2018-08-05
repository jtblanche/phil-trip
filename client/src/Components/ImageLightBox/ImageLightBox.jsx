import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import './ImageLightBox.css';
import 'react-image-lightbox/style.css';

export default class ImageLightBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: props.photoIndex
        };
    }

    render() {
        const { photoIndex } = this.state;
        const { images, isOpen, close } = this.props;

        return (
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].image}
                        nextSrc={images[photoIndex + 1] && images[photoIndex + 1].image}
                        prevSrc={images[photoIndex - 1] && images[photoIndex - 1].image}
                        onCloseRequest={close}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: photoIndex - 1
                            })}
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: photoIndex + 1
                            })}
                        imageTitle={images[photoIndex].title}
                        imageCaption={images[photoIndex].description}
                    />
                )}
            </div>
        );
    }
}