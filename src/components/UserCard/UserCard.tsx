import { FC } from "react";
import { Card,Image,Name } from "./styles";

interface Props {
  image: string;
  firstName: string;
  lastName: string;
}

export const UserCard:FC<Props> = ({ image, firstName, lastName }) => {
  return (
    <Card>
      <Image src={image} alt={`${firstName} ${lastName}`} />
      <Name>{firstName} {lastName}</Name>
    </Card>
  );
};