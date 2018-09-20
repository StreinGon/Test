//react-redux
import React, { Component } from "react";
//material-ui
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//styles
import "../styles/photoList.css";
import photoList_styles from "../styles/photoList_styles";
//photos
import ArrayOfPhotos from "../photos/photos";

class photoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ArrayOfPhotos
    };
    this.AddPhoto = this.AddPhoto.bind(this);
    this.DeletePhoto = this.DeletePhoto.bind(this);
  }
  DeletePhoto(ttl) {
    this.setState({
      photos: this.state.photos.filter(photo => photo.title !== ttl)
    });
  }
  AddPhoto() {
    const img1 = {
      title: prompt("Введите название"),
      Photo: prompt("Введите url"),
      content: prompt("Введите краткое описание")
    };
    if (
      img1.content !== null &&
      img1.content !== "" &&
      img1.title !== "" &&
      img1.Photo !== "" &&
      img1.title !== null &&
      img1.Photo !== null
    ) {
      this.setState({ photos: this.state.photos.concat(img1) });
    } else {
      alert("Одно из значений введенно не корректно");
    }
  }
  render() {
    const { classes } = this.props;
    const del = this.DeletePhoto;
    const add = this.AddPhoto;
    const check = this.state.photos;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <div key={index}>
          <Card>
            <img src={item.Photo} alt="Error" />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {item.title}
              </Typography>
              <Typography component="p">{item.content}</Typography>
            </CardContent>

            <CardActions>
              <IconButton
                variant="fab"
                color="primary"
                onClick={() => del(item.title)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      );
    });
    return (
      <div className={this.props.className}>
        <Button className={classes.photoAddButton} onClick={add}>
          Add New Image
        </Button>
        <div className="photoList">{fixedPhotos}</div>
      </div>
    );
  }
}

export default withStyles(photoList_styles)(photoList);
