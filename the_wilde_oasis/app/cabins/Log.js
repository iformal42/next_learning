'use client'

import { useState } from "react";


function Log({ users }) {
    console.log(users);
const [l,setl] =useState(0)

    return (
        <div>
            {users.length}

            <button onClick={()=>setl(l+1)}>
                {l}
            </button>
        </div>
    )
}

export default Log
