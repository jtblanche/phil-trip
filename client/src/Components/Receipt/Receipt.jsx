import React from 'react';
import Button from '@material-ui/core/Button';
import './Receipt.css';
import ReactS3Uploader from 'react-s3-uploader';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class ImageUploader extends React.Component {
    timer = null;

    state = {
        downloading: false,
        completed: 0,
        downloaded: false,
        image: ''
    };

    onUploadStart = (file, next) => {
        this.setState({ downloading: true });
        next(file);
    }

    onFinish = (result) => {
        const image = '/api/img/' + result.filename;
        if (this.props.onComplete) {
            this.props.onComplete(image);
        }
        this.setState({ downloading: false, image, downloaded: true });
    }

    onError = () => {
        this.setState({ downloading: false });
    }

    onProgress = percent => {
        this.setState({ completed: percent });
    }

    render() {
        const { classes } = this.props;
        const hidden = {
            display: "none"
        };
        return (
            <div className={classes.root}>
                <ReactS3Uploader
                    signingUrl="/api/sign"
                    signingUrlMethod="GET"
                    accept="image/*"
                    preprocess={this.onUploadStart}
                    onError={this.onError}
                    onFinish={this.onFinish}
                    onProgress={this.onProgress}
                    signingUrlWithCredentials={true}      // in case when need to pass authentication credentials via CORS
                    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                    contentDisposition="auto"
                    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                    inputRef={cmp => this.uploadInput = cmp}
                    autoUpload={true}
                    style={hidden}
                    id={this.props.id}
                />
                {this.state.downloaded &&
                    <img src={this.state.image} style={{ width: this.props.width || 100 }} />
                }
                <label htmlFor={this.props.id}>
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <LinearProgress variant="determinate" value={this.state.completed} style={this.state.downloading ? {} : hidden} />
            </div>
        );
    }
}

ImageUploader.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

export default withStyles(styles)(ImageUploader);