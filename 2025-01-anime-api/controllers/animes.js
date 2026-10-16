const express = require("express")
const anime = express.Router();//express.Router allows us to have almost a mini-app for one resourse in one place
// const animeArr = require("../data/anime");
// const { response } = require("../app");
const {
    getAllAnimes,
    getOneAnime,
    createOneAnime,
    updateOneAnime,
    deleteOneAnime
} = require("../queries/animes");

anime.get("/", async (req, res) => {
    try {
        const anime = await getAllAnimes();
        console.log(anime);
        res.status(200).json({payload: anime});

    }catch (error){
        res.status(404).json({ error: error.message });
    }
});

anime.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const anime = await getOneAnime(id);
        res.status(200).json({payload: anime});
    } catch (error){
        res.status(404).json({ error: error.message });
    } 
});


anime.post("/", async (req, res) =>{
    try{
        const anime = req.body;
        const newAnime = await createOneAnime(anime);
        res.status(201).json({payload: newAnime});
    } catch(error){
        res.status(404).json({ error: error.message });
    }
});

anime.put("/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const anime = req.body;
        const updatedAnime = await updateOneAnime(id, anime);
        res.status(200).json({ payload: updatedAnime});
    } catch (error){
        res.status(404).json({ error: error.message });    }
});

anime.delete("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const deletedAnime = await deleteOneAnime(id);
        res.status(200).json({payload: deletedAnime})
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})













// //get All Anime : "/anime"
// anime.get("/", (request, response)=>{
//     //  console.log(animieArr)
//     response.status(200).json(animeArr)
// });

// // get one anime: "/animes/:id"
// // :id is a parameter in out path
// anime.get("/:id",(request, response)=>{
//     try{
//     // use request.params to access path parameter
//     // whatever you name your path parameters, that is going to be the key in yur request.params object
//     console.log(request.params)
//     // const id = request.params.id
//     const {id} = request.params // since request.params is an obj, we can destructure the id
//     const anime = animeArr.find(anime => anime.id === Number(id)); // using .find to find the element that matches the id from our req
//     if(anime){
//         response.status(200).json(anime);
//     }else{
//         throw "anime could not be found";
//     }
//     } catch (error) {
//         response.status(404).json({error: error})
//     }
//  });

//  // Create one anime: "/ anime"
//  anime.post("/", (request, response)=>{
//     try{
//     const anime = request.body;
//     anime.id = animeArr.length + 1;
//     if(anime.name &&  anime.description){
//    //if data exist add to animes arr and send back successful response
//     animeArr.push(anime);
//     response.status(201).json(animeArr[animeArr.length - 1]);
//     }else{
//         //otherwise trigger a error
//         throw "could not create animie. Please provide data.";
//     }
// } catch (error) {
//     response.status(400).json({error: error});
// }
//  });

//  // delete One anime: "/animes/:id"
//  anime.delete("/:id", (request, response)=>{
//     try {
//         const {id} = request.params;
//         const index = animeArr.findIndex((anime)=> anime.id === Number(id)) // findIndex will return the index or -1
//         if(index !== -1){
//             // if the index is found
//             animeArr.splice(index, 1); // removing the anime
//             response.status(200).json(animeArr); // responding with the updated array
//         }else {
//         //otherwise trigger an error
//         throw " could not find anime";
//     }
// }catch (error) {
//     response.status(404).json({error: error });
// }
// });

// // update one Anime: "/anime/:id"

// anime.put("/:id", (request,response)=>{
//     try {
//         const {id} = request.params // destrcucturing id for the anime we're deleting
//         const anime = request.body; // req.body provides the anime with the updates
//         const index = animeArr.findIndex((anime)=> Number(id) === anime.id ) // we're using the id
//         if(index !== -1){
//             animeArr.splice(index, 1, anime); // replace the anime with the updated anime object
//             response.status(201).json(animeArr);
//         }else {
//             throw "could not update anime" // triggering an error
//         }
//     }catch (error){
//       Response.status(400).json({ error});
//     }
// });


module.exports = anime;