import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';





const BookDetail = () => {
  const history = useNavigate()
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  //send update Db via server
const sendRequest = async() =>{
  await axios.put(`http://localhost:5000/books/${id}`,{
       name: String(inputs.name),
       author: String(inputs.author),
       description: String(inputs.description),
       price: Number(inputs.price),
       image: String(inputs.image),
       available:Boolean(checked)
   }).then(res => res.data);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=> history("/books"))
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  // console.log(inputs);
  return (
    <div>
      <h1>Update</h1>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={600}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={0}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              size="small"
              fullWidth
              variant="outlined"
              name="name"
            ></TextField>

            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              size="small"
              fullWidth
              variant="outlined"
              name="author"
            ></TextField>

            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              size="small"
              fullWidth
              variant="outlined"
              name="description"
            ></TextField>

            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              size="small"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            ></TextField>

            <FormLabel>Image Url</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              size="small"
              fullWidth
              variant="outlined"
              name="image"
            ></TextField>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
