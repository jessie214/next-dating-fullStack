import { Button } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello</h1>
      <Button color='primary' variant="bordered" startContent={<FaRegSmile size={20} />}>click</Button>
    </div>
  );
}
