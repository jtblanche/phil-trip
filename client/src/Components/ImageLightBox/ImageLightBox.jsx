import React from 'react';
import Lightbox from "react-image-lightbox";
import './ImageLightBox.css';

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
                        nextSrc={images[(photoIndex + 1) % images.length].image}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
                        onCloseRequest={close}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })}
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })}
                        imageTitle={images[photoIndex].title}
                        imageCaption={images[photoIndex].description}
                    />
                )}
            </div>
        );
    }
}