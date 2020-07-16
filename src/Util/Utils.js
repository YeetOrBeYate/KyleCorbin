
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
            }else if(dir === "/"){
                return "leftLoad"
            }
            return "homeLoad"
    }
}

export const updateDoodle=()=>{
    let doodles = document.querySelectorAll('css-doodle');

    doodles.forEach((doodle)=>{
      doodle.update()
    })
  }


