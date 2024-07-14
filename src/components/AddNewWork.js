
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridCell: {
    width: 'calc(50% - 16px)',
    margin: '8px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(2),
  },
  imageUploader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    border: '1px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));

const AddNewWorkPage = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [isMature, setIsMature] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleMatureChange = (event) => {
    setIsMature(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can submit the form data to your API or database here
    console.log('Form submitted:', { title, description, tags, image, isMature });
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <GridCell className={classes.gridCell}>
          <Typography variant="h5">Add New Work</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <GridCell xs={12}>
                <TextField
                  label="Title"
                  value={title}
                  onChange={handleTitleChange}
                  fullWidth
                />
              </GridCell>
              <GridCell xs={12}>
                <TextField
                  label="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              </GridCell>
              <GridCell xs={12}>
                <TextField
                  label="Tags"
                  value={tags}
                  onChange={handleTagsChange}
                  fullWidth
                />
              </GridCell>
              <GridCell xs={12}>
                <div className={classes.imageUploader}>
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="Image preview" className={classes.imagePreview} />
                  ) : (
                    <Typography variant="body1">Upload an image</Typography>
                  )}
                  <input type="file" onChange={handleImageChange} />
                </div>
              </GridCell>
              <GridCell xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isMature}
                      onChange={handleMatureChange}
                      color="primary"
                    />
                  }
                  label="Mature content"
                />
              </GridCell>
              <GridCell xs={12}>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                  Add New Work
                </Button>
              </GridCell>
            </Grid>
          </form>
        </GridCell>
      </Grid>
    </div>
  );
};

export default AddNewWorkPage;