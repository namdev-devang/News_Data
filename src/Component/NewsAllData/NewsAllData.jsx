import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function NewsAllData({ data }) {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle } =data;
  return (
    <Card className="mt-6 w-96">
      <CardHeader floated={false}>
        <img
          src={newsPreviewImage}
          alt="img-blur-shadow"
          layout="fill"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         {newsTitle.slice(0,50)}
        </Typography>
        <Typography>
         {newsDescription.slice(0,100)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography className="capitalize" variant="small"><span className="font-semibold">Category:</span> {newsCategory}</Typography>
      </CardFooter>
    </Card>
  );
}
export default NewsAllData;
