

const useBanner = ()=>{
    try{

        let doodles = document.querySelectorAll('css-doodle');

        doodles.forEach(dood=>{
            dood.update()
        })

    }catch(err){

    }
}

export default useBanner
