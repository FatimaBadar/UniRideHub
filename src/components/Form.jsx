import React, {useState} from 'react';
import { TextField, Button, Container, Stack, Slider,Box,Typography } from '@mui/material';
import { Link } from "react-router-dom"


import './css/form.css'
 
const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
      },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
export default function Form()  {
    const [source, setsource] = useState('')
    const [destination, setDestination] = useState('')

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [availableSeats, setAvailableSeats] = useState(20);
    const [fare, setFare] = useState(0);
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(source, destination, time, date,availableSeats) 
    }
   
    function handleCancel(event) {
        event.preventDefault();
    }
 
    return (
        <React.Fragment>
            <div class="main">
            <h2 class="main-heading" >Create Ride</h2>
            <form onSubmit={handleSubmit} action={<Link to="/ride" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Source"
                        onChange={e => setsource(e.target.value)}
                        value={source}
                        fullWidth
                        required
                        focused
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Destination"
                        onChange={e => setDestination(e.target.value)}
                        value={destination}
                        fullWidth
                        required
                        focused
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                        type="text"
                        variant='outlined'
                        color='warning'
                        label="Middle Routes"
                        onChange={e => setDestination(e.target.value)}
                        value={destination}
                        fullWidth
                        required
                        focused
                    />
                </Stack>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="time"
                    variant='outlined'
                    color='warning'
                    label="Time"
                    onChange={e => setTime(e.target.value)}
                    value={time}
                    fullWidth
                    required
                    focused
                    sx={{mb: 4}}
                    />
                <TextField
                    type="date"
                    variant='outlined'
                    color='warning'
                    label="Date"
                    onChange={e => setDate(e.target.value)}
                    value={date}
                    fullWidth
                    required
                    focused
                    sx={{mb: 4}}
                    />
                </Stack >
                <Box sx={{ width: 300 ,marginBottom:'20px' , justifyContent:'center'}}>
                <Typography id="input-slider" gutterBottom sx={{color:'#FB8500'}}>
                    Available Seats
                </Typography>
                <Slider
                    aria-label="Custom marks"
                    value={availableSeats}
                    onChange={e => setAvailableSeats(e.target.value)}
                    getAriaValueText={valuetext}
                    min={1}
                    max={5}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    color="warning"
                    required
                    />
                </Box>

                <TextField
                id="outlined-number"
                label="Fare (Rs)"
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
                min={0}
                value={fare}
                onChange={e => setFare(e.target.value)}
                
                    required
                    focused
                    sx={{mb: 4}}
                    color="warning"
                />
                <Stack>
                <TextField
                id="outlined-number"
                label="Set Map"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                min={0}
                value={fare}
                onChange={e => setFare(e.target.value)}
                required
                // focused
                sx={{mb: 4}}
                color="warning"
                />
                </Stack>


                
                <Stack spacing={2} direction="row" sx={{marginBottom: 4, justifyContent:'center'}}>
                <Button variant="outlined" color="warning" type="submit" sx={{background:'#FB8500' ,color:'#023047'}}>Create</Button>
                <Button variant="outlined" color="warning" sx={{background:'#219EBC' ,color:'#023047'}} type="">Cancel</Button>
                </Stack>
                
            </form>
            </div>
        </React.Fragment>

    )
}