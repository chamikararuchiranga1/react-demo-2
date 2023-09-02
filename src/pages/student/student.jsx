import axios from "axios";
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StudentCard from "../../component/studentCard/studentCard.jsx";

function Student() {

    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [marks, setMarks] = useState('');

    useEffect(()=> {
        getData();
        // postData();
    },[])

    const getData = () => {
        axios.get('http://192.168.1.83:3000/get')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const postData = () => {
        axios.post('http://192.168.1.83:3000/save', {
            sid: id,
            name: name,
            age: age,
            mark: marks
        })
            .then(function (response) {
                console.log(response);
                getData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Student</h1>
            <Box sx={{ minWidth: 275, maxWidth: 500 }}>
                <Card variant="outlined" sx={{padding: 2}}>
                    <TextField
                        onChange={(val)=> {setId(val.target.value)}}
                        sx={{marginY: 1, width: '100%'}}
                        id="outlined-basic"
                        label="Student Id"
                        variant="outlined" />
                    <TextField
                        onChange={(val)=> {setName(val.target.value)}}
                        sx={{marginY: 1, width: '100%'}}
                        id="outlined-basic"
                        label="Student Name"
                        variant="outlined" />
                    <TextField
                        onChange={(val)=> {setAge(val.target.value)}}
                        sx={{marginY: 1, width: '100%'}}
                        id="outlined-basic"
                        label="Student Age"
                        variant="outlined" />
                    <TextField
                        onChange={(val)=> {setMarks(val.target.value)}}
                        sx={{marginY: 1, width: '100%'}}
                        id="outlined-basic"
                        label="Student Marks" variant="outlined" />
                    <Button onClick={()=> postData()} variant="contained">Save Student</Button>
                </Card>
            </Box>
            <Box sx={{ minWidth: 275, marginTop: 5 }}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                    {
                        data.map((val, index)=> (
                            <StudentCard key={index} name={val.name} age={val.age} marks={val.marks} sid={val.sid}/>
                        ))
                    }
                </Stack>
            </Box>
        </div>
    )
}

export default Student
