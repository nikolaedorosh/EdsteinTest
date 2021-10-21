import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  useEffect(() => {}, [history]);
  return <>Entered</>;
}

export default Profile;
