import { Fab } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Link from 'next/link';


const HomeComponents = () => {
    const homeBanner = () => (
        <div className='welcome-container vh'>
          <div className='welcome-text'>
          <h2>Zero Waste</h2>
          <h5>Sustainable living starts with Zero Waste. Let's keep Sri Lanka clean and green.</h5>
          </div>
        </div>
    )

      const functionCards = () => (
        <div className='our-serv-container vh'>
        <div className='our-services-container'>
          <h2 className="text-os">Our Services</h2>
        <div className='our-services-container-card container'>
          <div className='row justify-content-center'>



                  <div className='co card-pad'>
                    <Link href='/collect'>
                  <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="waste collection"
                  height="140"
                  image="/static/images/waste-collection.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Waste Collection
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We offer waste collection services throughout Sri Lanka, keeping the environment clean and healthy for 20M+ people.
                  </Typography>
                </CardContent>
                </div>
              </Card>
              </Link>

                </div>

               <div className='col- card-pad'>
               <Link href='/center'>
              <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="centers"
                  height="140"
                  image="/static/images/recycling-centers.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Recycling Centers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Our goal is to establish recycling centers, creating jobs and promoting a cleaner world by conserving resources.
                  </Typography>
                </CardContent>
                </div>
              </Card>
              </Link>
              </div>
              


              <div className='col- card-pad'>
              <Link href='/product'>
              <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="product"
                  height="140"
                  image="/static/images/recycled-products.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Recycled Products
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Recycling is a growing trend that conserves resources and helps us stay on this earth longer.
                  </Typography>
                </CardContent>
                </div>
              </Card>
              </Link>


              </div>


              <div className='col- card-pad'>
              <Link href='/fleet'>
              <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="fleet"
                  height="140"
                  image="/static/images/waste-vehicles.jpg"
                />
                <div className="card-content">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Garbage Trucks
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We provide customized waste collection vehicles for efficient and effective garbage collection.
                  </Typography>
                </CardContent>
                </div>
              </Card>
              </Link>
                </div>
              </div>

              </div>
              </div>
    
              </div>

              
      )


        
      

      return <div className='container-home'>
        {homeBanner()}
        {functionCards()}
      </div>
}

export default HomeComponents;