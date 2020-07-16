import React from 'react'

export const pageDirection = (type, dir) => {

    console.log(type, dir)

    switch(type){
        case "portfolio":
            if(dir === "/"){
                return "leftLoad"
            }else if(dir === "/contact"){
                return "rightLoad"
            }
            return "homeLoad"
        case "contact":
            if(dir==="/portfolio"){
                return "leftLoad"
            }
            return "homeLoad"
    }
}


