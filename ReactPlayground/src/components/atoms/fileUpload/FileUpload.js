import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useState, useRef } from 'react';

const useStyles = makeStyles({
  uploader: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '100%;',
    borderRadius: '5px',
    border: '2px dotted black',
    '& input[type="file"]': {
      display: 'none',
    },
  },
  uploadButton: {
    width: '33%',
    margin: 'auto',
  },
});

const FileUpload = (props) => {
  const classes = useStyles();
  const [videoFile, setVideo] = useState(undefined);
  const videoInput = useRef(null);
  const handleClick = () => videoInput.current.click();
  return (
    <Container style={{ ...props.style }}>
      <Box component="form" className={classes.uploader}>
        <input
          ref={videoInput}
          id="videoInput"
          type="file"
          accept="video/*"
          onChange={(event) => setVideo(event.target.value)}
        />
        <Button onClick={handleClick} className={classes.uploadButton}>
          Choose a video
        </Button>
      </Box>
    </Container>
  );
};
export default FileUpload;
