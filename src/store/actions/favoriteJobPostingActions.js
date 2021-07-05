export const ADD_TO_FAVORİTE ="ADD_TO_FAVORİTE"
export const RMOVE_FROM_FAVORİTE ="RMOVE_FROM_FAVORİTE"
export function addToFavoriteJobPosting(jobAdversiment) {
    return{
        type : ADD_TO_FAVORİTE,
        payload: jobAdversiment
    }
    
}
export function removeFromFavoriteJobPosting(jobAdversiment) {
    return{
        type : RMOVE_FROM_FAVORİTE,
        payload: jobAdversiment
    }
    
}