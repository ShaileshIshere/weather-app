import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const HUMIDITY = "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjBjaXR5fGVufDB8fDB8fHww";

    const HOT = "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D";

    const COLD = "https://images.unsplash.com/photo-1610142198738-e4ac0ba060e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGxhbmR8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="InfoBox">
            <h2>weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 60 ? HUMIDITY : info.temp > 25 ? HOT : COLD}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 60 
                            ? <ThunderstormIcon /> 
                            : info.temp > 25 
                            ? <WbSunnyRoundedIcon /> 
                            : <AcUnitRoundedIcon />
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p>country : {info.country}</p>
                        <p>humidity : {info.humidity}%</p>
                        <p>temperature : {info.temp}&deg;C</p>
                        <p>maximum temperature : {info.maxTemp}&deg;C</p>
                        <p>weather : {info.weather}</p>
                        <p>wind speed : {info.windSpeed}km/h</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}