import { HashLink } from "react-router-hash-link";

export default function Directions() {
  return (
    <>
      <h1>Directions</h1>
      <p>Take the 305 S exit to Webville - go 0.4 mi</p>
      <p>Continue on 305 - go 12 mi</p>
      <p>Turn right at Structure Ave N - go 0.6 mi</p>
      <p>Turn right and head toward Structure Ave N - go 0.0 mi</p>
      <p>Turn right at Structure Ave N - go 0.7 mi</p>
      <p>Continue on Stucture Ave S - go 0.2 mi</p>
      <p>Turn right at SW Presentation Way - go 0.0 mi</p>
      <p>
        <HashLink to="../">Back to the Lounge</HashLink>
      </p>
    </>
  );
}
