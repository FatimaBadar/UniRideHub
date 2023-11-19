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
    const [source, setSource]=useState('');
    const [destination, setDestination] = useState('');
    const [middleRoutes, setMiddleRoutes] = useState([]);
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [availableSeats, setAvailableSeats] = useState(1);
    const [fare, setFare] = useState(0);

    const addMiddleRoute = (newRoute) => {
        if (middleRoutes.length < 5) {
            setMiddleRoutes([...middleRoutes, newRoute]);
        } else {
            alert('You can only add up to 5 middle routes');
        }
     };

     const updateMiddleRoute = (index, value) => {
        const updatedRoutes = [...middleRoutes];
        updatedRoutes[index] = value;
        setMiddleRoutes(updatedRoutes);
      };
    
      const removeMiddleRoute = (index) => {
        const updatedRoutes = [...middleRoutes];
        updatedRoutes.splice(index, 1);
        setMiddleRoutes(updatedRoutes);
      };
     
 
    function handleSubmit(event) {
        event.preventDefault();
        const middleRoutesString = middleRoutes.join('-');
        <Map source={source} />

        console.log(source, destination,middleRoutesString, time, date,availableSeats,fare) 
        setSource('');
        setDestination('');
        setMiddleRoutes([]);
        setTime('');
        setDate('');
        setAvailableSeats(1);
        setFare(0);

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
                        onChange={e => setSource(e.target.value)}
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
                {middleRoutes.map((route, index) => (
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <React.Fragment key={index}>
                    <TextField
                    type="text"
                    variant="outlined"
                    color="warning"
                    label={`Middle Route ${index + 1}`}
                    onChange={(e) => updateMiddleRoute(index, e.target.value)}
                    placeholder='Add middle route'
                    value={route.someProperty}
                    fullWidth
                    focused
                    />
                    <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => removeMiddleRoute(index)}
                    sx={{marginBottom:4,background:'#023047' ,color:'#FB8500',}}
                    >
                    Remove
                    </Button>
                    </React.Fragment>
                    </Stack>
                    ))}

                    <Button v
                    ariant="outlined" 
                    color="warning" 
                    onClick={addMiddleRoute} 
                    sx={{marginBottom:4,background:'#FB8500' ,color:'#023047'}}>
                    Add Middle Route
                    </Button>

                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
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
                <Button variant="outlined" color="warning" sx={{background:'#023047' ,color:'#FB8500'}} type="">Cancel</Button>
                </Stack>
                
            </form>
            </div>
        </React.Fragment>

    )
}