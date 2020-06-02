

const Banner = (name)=>{

    try{

        var cache = {

        }
        

        cache[`${name}`] = true



        let doodles = document.querySelectorAll('css-doodle');

        doodles.forEach(dood=>{
            dood.update()
        })
        

    }catch(err){
        window.alert('an error ocurs')
    }

    console.log('banner called')

}

export default Banner
