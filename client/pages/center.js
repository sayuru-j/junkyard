import Layout from "../components/Layout";
import Others from "./others";
import { useState, useEffect } from "react";
import Head from "next/head"
import axios from "axios"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ListItem } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const imgs = ["/static/images/wwdt1.png","/static/images/wwdt2.png","/static/images/wwdt3.png", "/static/images/about-us.png"]

const CenterPage = () => {
    const RandomPhoto = () =>{
            const [data, setData] = useState(imgs);
            const [randomItem, setRandomItem] = useState(null);

            useEffect(() => {
              const intervalId = setInterval(() => {
                const item = data[Math.floor(Math.random() * data.length)];
                setRandomItem(item);
              }, 2500);

              return () => clearInterval(intervalId);
            }, [data]);

            if (!randomItem) {
              return <div>
                      <img className="carousel-img text-os" src={data[0]}/>
                    </div>
            }

            return (
              <div>
                <img className="carousel-img text-os" src={randomItem}/>
              </div>
            )
    }
  


    const intro = () => (
        <div className="container text-os">
          <h5 className="text-center">Why we do this?</h5>
          <div className="row justify-content-center">
            <div className="col-">
            
            {RandomPhoto()}
            
            </div>
          
          <div className="col- card-pad2">
            <p className="descriptive-text">
            •	We believe that recycling is essential for protecting the planet and ensuring a sustainable future.
            </p>
            <p className="descriptive-text">
            •	By promoting recycling, we can reduce the amount of waste that ends up in landfills and minimize the environmental impact of human activities.
            </p>
            <p className="descriptive-text">
            •	Recycling helps to conserve natural resources, reduce energy consumption, and decrease greenhouse gas emissions.
            </p>
            <p className="descriptive-text">
            •	Recycling can create new jobs and stimulate economic growth by creating markets for recycled materials.
            </p>
            <p className="descriptive-text">
            •	Through this initiative, we aim to educate and empower individuals, communities, and businesses to adopt sustainable practices and take action towards a more circular economy.
            </p>
            <p className="descriptive-text">
            •	By working together, we can make a significant difference in preserving our planet and creating a more sustainable future for all.
            </p>
          </div>
          </div>
        </div>
    )

    const ourCenters = () => (
        <div className="container">
          <h5 className="text-os text-center">Our Centers</h5>
            <div className="row justify-content-center">
                <div className="col- card-pad">
                <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt=""
                  height="140"
                  image="https://picsum.photos/200/300"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300?grayscale"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>



                <div className="col- card-pad">
                    <Card sx={{ maxWidth: 220, minHeight: 350}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://picsum.photos/200/300?grayscale"
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
                <div className="card-btn">
                <Button color="warning">Visit</Button>
                </div>
              </Card>
                </div>
            </div>
        </div>
    )


    const statistics = () => {
        return <div className="container ">
            <h5 className="text-os text-center">Stats</h5>
        <div className="row justify-content-center">
            <div className="col- card-size">
                <Pie data={data}/>
            </div>
            <div className="col- card-size">
                <Pie data={data}/>
            </div>
      </div>
      </div>
    }
        
        
    
    
    return <Layout>{<Others/>}
        {ourCenters()}
        {intro()}
        {statistics()}
    </Layout>
}

export default CenterPage;