import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

import Types from "../../components/Types";
import TypesList from "../../components/TypesList";

export default function Pokemon() {

  
  return (
    <div>
      <TypesList/>
    </div>
  );
}
