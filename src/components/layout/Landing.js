import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="x-large">Take Home Assignment</h1>
        <div>
          <Card raised={true} style={{ width: 530 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Technology Stack
              </Typography>
              <div style={{marginTop: 10}}>
              <img alt="mern" src="/images/mern.jpg" height="300px" />
              <Typography variant="body1" color="textSecondary" component="p">
                The technologies I use to complete this task are: Client side
                of the application using React, The Server side was developed
                with Nodejs with the Express framework. For the database use
                Cloud based MongoDB by Atlas. To add security features to this
                system. I chose to apply JsonWebToken feature for API
                security and validating user sessions. Finally, For documentation,
                I have used Swagger UI which also has features to test
                the APIs
              </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Landing;
