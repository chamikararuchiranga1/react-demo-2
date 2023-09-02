import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function StudentCard ({sid, name, age, marks}) {
    return(
        <Card variant="outlined" sx={{padding: 2, width: 300, margin: 1}}>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Student Id : {sid}
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Student Name : {name}
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Student Age : {age}
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                Student Marks : {marks}
            </Typography>
        </Card>
    )
}

export default StudentCard;
