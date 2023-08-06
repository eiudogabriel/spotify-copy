"use client";

import { ScaleLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <ScaleLoader color="#22c55e" height={40} width={5} />
    </Box>
  );
}
 
export default Loading;
