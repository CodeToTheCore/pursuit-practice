const animes = require("../data/anime");
const db = require("../data/db/dbConfig")

const getAllAnimes = async () =>{
    try{
        const anime =  await db.any("SELECT * FROM anime"); // .any returns an array of objects (rows of data)
        return anime; 
    }catch(error){
         throw error;

    }
};

const getOneAnime = async (animeId) => {
    try {
        // "SELECT * FROM anime WHERE: id=2"
        const animes = await db.one("SELECT * FROM anime WHERE id=$1", animeId);
        // .one() only returns an object 
        // if none or more rows are returned them promise is rejected 
        return animes;
    } catch (error){
        throw error;

    }
};

const createOneAnime = async ({name, description})=>{ // anime
    // const {name, description} = anime
    // anime.name
    // anime.description
    try{
        // INSERT INTO anime (name, description) Values ($1, $2)
        const newAnime = await db.one("INSERT INTO anime (name, description) Values ($1, $2) RETURNING *", [name, description])
    return newAnime;
    } catch(error){
        throw error;
    }
}


const updateOneAnime = async( id, anime)=>{
    const {name, description} = anime;
    try{
        // UPDATE anime SET name=$1, description=$2 WHERE id=$3 RETURNING *
        const updateAnime = await db.one("UPDATE anime SET name=$1, description=$2 Where id=$3 RETURNING *", [name, description, id]);
        return updateAnime;
     } catch (error){
         throw error;
        }
    }

    const deleteOneAnime = async (animeId) =>{
        try{
            const deletedAnime = await db.one("DELETE FROM anime WHERE id=$1 RETURNING *", animeId);
            return deletedAnime;
        }catch(error){
            throw error;
        }
    }

module.exports = {
    getAllAnimes,
    getOneAnime,
    createOneAnime,
    updateOneAnime,
    deleteOneAnime

}