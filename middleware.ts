import { NextResponse } from "next/server";

const middleware = () => {
  return NextResponse.next();

  // return nothing will cause the issue too.
  // return;
};

export default middleware;
