import React from "react"

import { Request } from "../../components/Request/Request"
import { requests } from "../../mockups/request"

export const Main = () => (
  <>
    {requests?.map(req => (
      <Request key={req.id} req = {req}/>
    ))}
  </>
)